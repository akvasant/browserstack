import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'Chrome @ BrowserStack',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
  ],
  use: {
    trace: 'on',
  },
});
