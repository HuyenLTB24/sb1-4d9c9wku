import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface AuthState {
  isLoggedIn: boolean;
  currentUser: string | null;
  setIsLoggedIn: (value: boolean) => void;
  setCurrentUser: (value: string | null) => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  currentUser: null,
  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
  setCurrentUser: (value) => set({ currentUser: value }),
  login: async (email: string, password: string) => {
    try {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          throw new Error('Email or password is incorrect. Please try again.');
        }
        throw new Error(error.message);
      }

      if (!user) {
        throw new Error('No user data received');
      }

      if (!user.email_confirmed_at && user.confirmation_sent_at) {
        throw new Error('Please check your email and verify your account before logging in. Check your spam folder if you cannot find the verification email.');
      }
      
      set({ isLoggedIn: true, currentUser: user.email });
    } catch (error: any) {
      console.error('Login error:', error);
      throw error;
    }
  },
  signup: async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin
        }
      });
      
      if (error) {
        if (error.message.includes('User already registered')) {
          throw new Error('An account with this email already exists. Please try logging in instead.');
        }
        if (error.message.includes('Database error')) {
          throw new Error('Unable to create account. Please try again later.');
        }
        throw new Error(error.message);
      }

      if (!data.user) {
        throw new Error('No user data received during signup');
      }
      
      // Keep user logged out until email verification
      set({ isLoggedIn: false, currentUser: null });
    } catch (error: any) {
      console.error('Signup error:', error);
      throw error;
    }
  },
  logout: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ isLoggedIn: false, currentUser: null });
    } catch (error: any) {
      console.error('Logout error:', error);
      throw new Error(error.message || 'Error logging out');
    }
  },
}));