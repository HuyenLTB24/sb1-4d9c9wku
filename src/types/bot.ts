export enum BotMode {
  Feed = 1,
  Trending = 4
}

export enum BotStatus {
  Running = "Running",
  Paused = "Paused",
  Stopped = "Stopped",
  Error = "Error"
}

export interface BotSettings {
  mode: BotMode;
  auto_like: boolean;
  auto_retweet: boolean;
  auto_follow_verified: boolean;
  auto_greetings: boolean;
  reply_interval: number;
  post_interval: number;
  greeting_interval: number;
  trending_post_limit: number;
  skip_replies: boolean;
  skip_japanese: boolean;
  japanese_only: boolean;
  download_media: boolean;
  min_views: number;
  max_replies: number;
  time_limit_hours: number;
  time_limit_minutes: number;
  minimize_window: boolean;
  keywords: string;
  morning_greetings: string;
  afternoon_greetings: string;
  evening_greetings: string;
  night_greetings: string;
  chatgpt_key: string;
  gemini_key: string;
  use_gemini: boolean;
}

export interface AccountData {
  id: string;
  username: string;
  profileId: string;
  status: BotStatus;
  mode: BotMode;
  settings: BotSettings;
  stats: {
    tweets: number;
    replies: number;
    likes: number;
    follows: number;
  };
}