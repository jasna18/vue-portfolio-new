import { defineStore } from 'pinia'

export const usePortfolioTabsStore = defineStore('portfolioTabs', {
  state: () => ({
    activeTab: 'certificates'
  }),
  actions: {
    setTab(tab) {
      this.activeTab = tab
    }
  }
})
