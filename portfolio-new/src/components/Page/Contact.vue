<template>
  <section class="w-full py-16 px-4 flex justify-center ">
    <div class="w-full max-w-3xl space-y-10">
       <div class="text-center mb-4">
        <h2 class="text-xl md:text-3xl font-extrabold text-[#F68537] mb-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Contact Me
        </h2>
        <p class="text-sm lg:text-md md:text-md text-gray-600 dark:text-gray-300" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <span class="font-medium">✨</span>Got a question? Send me a message, and I'll get back to you soon.<span class="font-medium"> ✨</span>
        </p>
      </div>
    <!-- Centered Container -->
    <div class="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-6 sm:p-8 border border-orange-400">
                <div class="flex items-start justify-between mb-6">

      <!-- Headercard -->
       <div>
      <h2 class="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">
        Get in Touch
      </h2>
      <p class="text-gray-600 mb-6">
        Have something to discuss? Send me a message and let's talk.
      </p>
      </div>
       <div class="bg-orange-600 text-white p-3 rounded-xl shadow-md">
            🔗
          </div>
    </div>
      <!-- Contact Form card -->
  <!-- Contact Form card -->
<form class="space-y-4">

  <!-- Name -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Name
    </label>
    <div class="relative">
      <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
        👤
      </span>
      <input
        type="text"
        placeholder="Your Name"
        class="w-full rounded-xl border border-gray-300 focus:border-orange-400 px-4 py-3 pl-10
               focus:outline-none focus:ring-2 focus:ring-orange-200"
      />
    </div>
  </div>

  <!-- Email -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <div class="relative">
      <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
        ✉️
      </span>
      <input
        type="email"
        placeholder="you@example.com"
        class="w-full rounded-xl border border-gray-300 focus:border-orange-400 px-4 py-3 pl-10
               focus:outline-none focus:ring-2 focus:ring-orange-200"
      />
    </div>
  </div>

  <!-- Message -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <div class="relative">
      <span class="absolute top-3 left-3 text-gray-400">
        💬
      </span>
      <textarea
        rows="4"
        placeholder="Your Message"
        class="w-full rounded-xl border border-gray-300 focus:border-orange-400 px-4 py-3 pl-10
               focus:outline-none focus:ring-2 focus:ring-orange-200"
      ></textarea>
    </div>
  </div>

  <!-- Button -->
  <button
    type="submit"
    class="w-full mt-4 rounded-xl py-3 text-white font-semibold
           bg-gradient-to-r from-blue-500 to-orange-600
           hover:opacity-90 transition"
  >
    ✈️ Send Message
  </button>

</form>


      <!-- Divider -->
      <div class="my-8 border-t border-gray-200"></div>

      <!-- Connect Section -->
      <h3 class="text-lg font-semibold mb-4">Connect with me</h3>

      <div class="space-y-4">
        <!-- LinkedIn -->
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          class="flex items-center justify-between p-4 rounded-xl
                 bg-blue-100 hover:bg-blue-200 transition"
        >
          <div class="flex items-center gap-3">
            <div class="bg-white p-2 rounded-lg text-blue-600 font-bold">in</div>
            <div>
              <p class="font-semibold">LinkedIn</p>
              <p class="text-sm text-gray-600">linkedin.com/in/yourprofile</p>
            </div>
          </div>
          ↗
        </a>

        <!-- WhatsApp -->
        <a
          href="https://wa.me/971XXXXXXXXX"
          target="_blank"
          class="flex items-center justify-between p-4 rounded-xl
                 bg-green-100 hover:bg-green-200 transition"
        >
          <div class="flex items-center gap-3">
            <div class="bg-white p-2 rounded-lg">💬</div>
            <div>
              <p class="font-semibold">WhatsApp</p>
              <p class="text-sm text-gray-600">+971 XXX XXX XXX</p>
            </div>
          </div>
          ↗
        </a>
      </div>
</div>
    </div>
  </section>
</template>
