<!-- included this page in portfolio.vue -->
<template>
  <div class="w-full max-w-5xl mx-auto">
    <!-- Tabs Header -->
    <div
      class="flex bg-white rounded-xl shadow-md p-1 border border-gray-200 sm:max-w-xs md:max-w-none ml-5 mr-5 item-center justify-center gap-4"
    >
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="tabsStore.setTab(tab.id)"
        class="flex-1 flex flex flex-col md:flex-row items-center sm:text-xs md:text-md lg:text-lg justify-center gap-2 sm:py-1 md:py-3 rounded-lg font-semibold transition-all"
        :class="
          tabsStore.activeTab === tab.id
            ? 'bg-orange-100 text-orange-400'
            : 'text-gray-600 hover:bg-gray-100'
        "
      >
        <span class="sm:text-lg text-xl">{{ tab.icon }}</span>
        {{ tab.label }}
      </button>
    </div>

    <!-- Tabs Content -->
    <div class="mt-10">
      <Projects v-if="tabsStore.activeTab === 'projects'" />
      <Certificates v-if="tabsStore.activeTab === 'certificates'" />
      <TechStack v-if="tabsStore.activeTab === 'tech'" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import Projects from "../Page/Projects.vue"
import Certificates from "../Page/Certificates.vue"
import TechStack from "../Page/TechStack.vue"
import { usePortfolioTabsStore } from '../../stores/portfolioTabs'

const tabsStore = usePortfolioTabsStore()

const tabs = [
  { id: "projects", label: "Projects", icon: "📁" },
  { id: "certificates", label: "Certificates", icon: "🎓" },
  { id: "tech", label: "Tech Stack", icon: "⚙️" },
]
</script>
