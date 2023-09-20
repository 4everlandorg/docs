import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>OP Documentation</span>,
  darkMode: true,
  project: {
    link: 'https://github.com/ethereum-optimism/docs',
  },
  chat: {
    link: 'https://discord.optimism.io',
  },
  docsRepositoryBase: 'https://github.com/ethereum-optimism/docs',
  footer: {
    text: 'OP Documentation',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config
