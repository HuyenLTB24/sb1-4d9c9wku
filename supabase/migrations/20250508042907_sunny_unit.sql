/*
  # Initial Schema Setup for Twitter Bot Manager

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `username` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `bot_accounts`
      - `id` (uuid, primary key)
      - `profile_id` (uuid, references profiles)
      - `username` (text)
      - `status` (text)
      - `mode` (text)
      - `last_active` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `bot_stats`
      - `id` (uuid, primary key)
      - `bot_account_id` (uuid, references bot_accounts)
      - `tweets` (integer)
      - `replies` (integer)
      - `likes` (integer)
      - `follows` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `bot_settings`
      - `id` (uuid, primary key)
      - `bot_account_id` (uuid, references bot_accounts)
      - `auto_like` (boolean)
      - `auto_retweet` (boolean)
      - `auto_follow_verified` (boolean)
      - `auto_greetings` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  username text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id),
  UNIQUE(username)
);

-- Create bot_accounts table
CREATE TABLE bot_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles NOT NULL,
  username text NOT NULL,
  status text DEFAULT 'Paused',
  mode text DEFAULT 'Feed Mode',
  last_active timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bot_stats table
CREATE TABLE bot_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bot_account_id uuid REFERENCES bot_accounts NOT NULL,
  tweets integer DEFAULT 0,
  replies integer DEFAULT 0,
  likes integer DEFAULT 0,
  follows integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bot_settings table
CREATE TABLE bot_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bot_account_id uuid REFERENCES bot_accounts NOT NULL,
  auto_like boolean DEFAULT false,
  auto_retweet boolean DEFAULT false,
  auto_follow_verified boolean DEFAULT false,
  auto_greetings boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bot_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE bot_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE bot_settings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own bot accounts" ON bot_accounts
  FOR SELECT USING (
    profile_id IN (
      SELECT id FROM profiles WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can manage own bot accounts" ON bot_accounts
  FOR ALL USING (
    profile_id IN (
      SELECT id FROM profiles WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can view own bot stats" ON bot_stats
  FOR SELECT USING (
    bot_account_id IN (
      SELECT id FROM bot_accounts WHERE profile_id IN (
        SELECT id FROM profiles WHERE user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Users can manage own bot stats" ON bot_stats
  FOR ALL USING (
    bot_account_id IN (
      SELECT id FROM bot_accounts WHERE profile_id IN (
        SELECT id FROM profiles WHERE user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Users can view own bot settings" ON bot_settings
  FOR SELECT USING (
    bot_account_id IN (
      SELECT id FROM bot_accounts WHERE profile_id IN (
        SELECT id FROM profiles WHERE user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Users can manage own bot settings" ON bot_settings
  FOR ALL USING (
    bot_account_id IN (
      SELECT id FROM bot_accounts WHERE profile_id IN (
        SELECT id FROM profiles WHERE user_id = auth.uid()
      )
    )
  );

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (user_id, username)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();