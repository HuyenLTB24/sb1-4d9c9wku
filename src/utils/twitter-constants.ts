export const TwitterConstants = {
  SELECTOR_TWEET: '[data-testid="tweet"]',
  SELECTOR_TIMESTAMP: "time",
  SELECTOR_TWEET_TEXT: '[data-testid="tweetText"]',
  SELECTOR_USER_NAME: '[data-testid="User-Name"]',
  SELECTOR_TWEET_IMAGES: [
    './/div[@data-testid="tweetPhoto"]/img',
    './/div[contains(@class, "css-1dbjc4n")]/div[contains(@class, "css-1dbjc4n")]/img'
  ],
  SELECTOR_VIDEO_PLAYER: [
    './/div[@data-testid="videoPlayer"]',
    './/div[contains(@class, "css-1dbjc4n")]/div[contains(@class, "css-1dbjc4n")]/video'
  ],
  
  REPLY_PROMPTS: {
    "en": "Reply to this tweet in a friendly, engaging way: \"{0}\"",
    "ja": "このツイートに友好的で魅力的な方法で返信してください: \"{0}\"",
    "default": "Reply to this tweet in a friendly, engaging way: \"{0}\""
  },
  
  REWRITE_PROMPTS: {
    "en": "Create a new tweet based on this content, but make it more engaging and unique: \"{0}\"",
    "ja": "このコンテンツに基づいて新しいツイートを作成してください。より魅力的でユニークなものにしてください: \"{0}\"",
    "default": "Create a new tweet based on this content, but make it more engaging and unique: \"{0}\""
  }
};