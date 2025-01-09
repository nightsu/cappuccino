import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: { value: '#6A67CE' }, // 主色
          secondary: { value: '#FCF8E8' }, // 次要背景
          accent: { value: '#FF5678' }, // 强调色
          muted: { value: '#9D9D9D' }, // 辅助文本
          success: { value: '#4CAF50' }, // 成功状态
          error: { value: '#FF3B30' }, // 错误状态
        },
        background: {
          light: { value: '#FCF8E8' }, // 浅色背景
          dark: { value: '#121212' }, // 深色背景
        },
        text: {
          light: { value: '#121212' }, // 浅色文本
          dark: { value: '#FCF8E8' }, // 深色文本
        },
      },
    },
  },
})
