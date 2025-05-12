import { AccountData, BotMode, BotSettings, BotStatus } from "../types/bot";

/**
 * This is a simulated API service that would connect to the actual C# backend.
 * In a real implementation, these methods would make fetch calls to the backend API.
 */
export class ApiService {
  // Simulated data
  private static accounts: AccountData[] = [
    {
      id: '1',
      username: '@TwitterBot1',
      profileId: 'profile123',
      status: BotStatus.Running,
      mode: BotMode.Feed,
      settings: {
        mode: BotMode.Feed,
        auto_like: true,
        auto_retweet: false,
        auto_follow_verified: true,
        auto_greetings: true,
        reply_interval: 60,
        post_interval: 300,
        greeting_interval: 3600,
        trending_post_limit: 5,
        skip_replies: true,
        skip_japanese: false,
        japanese_only: false,
        download_media: true,
        min_views: 0,
        max_replies: 50,
        time_limit_hours: 24,
        time_limit_minutes: 0,
        minimize_window: false,
        keywords: "AI,Machine Learning,Technology",
        morning_greetings: "Good Morning",
        afternoon_greetings: "Good Afternoon",
        evening_greetings: "Good Evening",
        night_greetings: "Good Night",
        chatgpt_key: "",
        gemini_key: "",
        use_gemini: true
      },
      stats: {
        tweets: 152,
        replies: 87,
        likes: 243,
        follows: 56
      }
    }
  ];

  static async getAccounts(): Promise<AccountData[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.accounts]);
      }, 500);
    });
  }

  static async getAccount(id: string): Promise<AccountData | null> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const account = this.accounts.find(a => a.id === id) || null;
        resolve(account ? {...account} : null);
      }, 300);
    });
  }

  static async updateAccountStatus(id: string, status: BotStatus): Promise<boolean> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const accountIndex = this.accounts.findIndex(a => a.id === id);
        if (accountIndex >= 0) {
          this.accounts[accountIndex].status = status;
          resolve(true);
        } else {
          resolve(false);
        }
      }, 300);
    });
  }

  static async updateAccountMode(id: string, mode: BotMode): Promise<boolean> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const accountIndex = this.accounts.findIndex(a => a.id === id);
        if (accountIndex >= 0) {
          this.accounts[accountIndex].mode = mode;
          this.accounts[accountIndex].settings.mode = mode;
          resolve(true);
        } else {
          resolve(false);
        }
      }, 300);
    });
  }

  static async updateAccountSettings(id: string, settings: Partial<BotSettings>): Promise<boolean> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const accountIndex = this.accounts.findIndex(a => a.id === id);
        if (accountIndex >= 0) {
          this.accounts[accountIndex].settings = {
            ...this.accounts[accountIndex].settings,
            ...settings
          };
          resolve(true);
        } else {
          resolve(false);
        }
      }, 300);
    });
  }

  static async startBot(id: string): Promise<boolean> {
    return this.updateAccountStatus(id, BotStatus.Running);
  }

  static async pauseBot(id: string): Promise<boolean> {
    return this.updateAccountStatus(id, BotStatus.Paused);
  }

  static async stopBot(id: string): Promise<boolean> {
    return this.updateAccountStatus(id, BotStatus.Stopped);
  }
}