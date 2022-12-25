import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://raw.githubusercontent.com/pacexy/canned-laughter/main/public/images/1f604.png',
        namespace: 'npm/vite-plugin-monkey',
        match: ['*://www.bilibili.com/bangumi/play/ep*'],
        description: {
          'en-US': 'Add canned laughter to web',
          'zh-CN': '为网页添加罐头笑声',
        },
      },
    }),
  ],
})
