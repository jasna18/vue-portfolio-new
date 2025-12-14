
<template>
  <div class="w-full max-w-5xl mx-auto">
    <!-- Tabs Header -->
    <div
      class="flex bg-white rounded-xl shadow-md p-2 border border-gray-200"
    >
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all"
        :class="
          activeTab === tab.id
            ? 'bg-orange-100 text-orange-400'
            : 'text-gray-600 hover:bg-gray-100'
        "
      >
        <span class="text-xl">{{ tab.icon }}</span>
        {{ tab.label }}
      </button>
    </div>

    <!-- Tabs Content -->
    <div class="mt-10">
      <Projects v-if="activeTab === 'projects'" />
      <Certificates v-if="activeTab === 'certificates'" />
      <TechStack v-if="activeTab === 'tech'" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import Projects from "../Page/Projects.vue"
import Certificates from "../Page/Certificates.vue"
import TechStack from "../Page/TechStack.vue"

const activeTab = ref("projects")

const tabs = [
  { id: "projects", label: "Projects", icon: "📁" },
  { id: "certificates", label: "Certificates", icon: "🎓" },
  { id: "tech", label: "Tech Stack", icon: "⚙️" },
]
</script>
