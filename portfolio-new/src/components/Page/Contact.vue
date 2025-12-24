<template>
  <section class="w-full py-16 px-4 flex justify-center ">
    <div class="w-full max-w-3xl space-y-10">
       <div class="text-center mb-4">
        <h2 class="text-xl md:text-3xl font-extrabold text-orange-500 mb-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
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
      <h2 class="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">
        Get in Touch
      </h2>
      <p class="text-gray-600 mb-6">
        Have something to discuss? Send me a message and let's talk.
      </p>
      </div>
       <div class="bg-orange-500 text-white p-3 rounded-md shadow-md">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>

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
      <span class="absolute inset-y-0 left-3 flex items-center text-orange-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

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
      <span class="absolute inset-y-0 left-3 flex items-center text-orange-400">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>


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
      <span class="absolute top-3 left-3 text-orange-400">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
         </svg>


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
  class="w-full mt-4 rounded-xl py-3
         flex items-center justify-center gap-2
         text-white font-semibold
         bg-orange-400">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-5 h-5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>

  <span>Send Message</span>
</button>


</form>


      <!-- Divider -->
      <div class="my-8 border-t border-gray-200"></div>

      <!-- Connect Section -->
      <h3 class="text-lg font-semibold mb-4">Connect With Me</h3>

      <div class="space-y-4">
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/jasna-m-17374749/ "
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
<script setup>
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon
} from "@heroicons/vue/24/outline";
</script>

