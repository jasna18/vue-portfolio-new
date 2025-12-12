  <template>
        <div class="bg-linear-to-r from-orange-100 to-orange-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-md border border-purple-200 dark:border-gray-700 flex flex-col items-center text-center">
        <div class="flex w-full items-center justify-between gap-4 mb-3">
          <div class="text-4xl">{{ icon }}</div>
          <div class="text-5xl font-bold  mb-2">{{ count  }}</div>
        </div>
          <p class="text-sm uppercase text-gray-600 dark:text-gray-300 font-semibold tracking-wide">{{ title }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ description }}</p>
      </div>
      </template>
      <script setup>
 defineProps({ 
        count: {
      type: String,
      default: "0",
    },
    title: {
      type: String,
      default: "Click Me",
    },
      description: {
      type: String,
      default: "Click Me",
    },
      icon: String

  });
</script>