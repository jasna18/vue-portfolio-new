<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-2">
    <div
      v-for="i in 25"
      :key="i"
      class="rounded-2xl border border-purple-400 p-4 bg-gradient-to-b from-purple-50 to-white"
    >
      <div class="rounded-xl border border-yellow-400 p-2 mb-4">
        <img
          src="https://via.placeholder.com/200x140"
          alt="certificate"
          class="rounded-lg"
        />
      </div>

      <h3 class="font-semibold text-gray-800">
        IBM Professional Certificate
      </h3>
      <p class="text-sm text-purple-600 mt-1">by IBM</p>

      <div class="flex justify-between mt-4 text-sm text-purple-600">
        <span class="flex items-center gap-1">👁 Preview</span>
        <span class="flex items-center gap-1">🔗 Link</span>
      </div>
    </div>
  </div>
</template>
