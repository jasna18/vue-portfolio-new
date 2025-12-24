<template>
  <section class="w-full py-16 px-4 flex justify-center">
    <!-- Main Container -->
    <div class="w-full max-w-3xl space-y-10">
       <div class="text-center mb-4">
        <h2 class="text-xl md:text-3xl font-extrabold text-[#F68537] mb-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            Contact Me
        </h2>
        <p class="text-sm lg:text-md md:text-md text-gray-600 dark:text-gray-300" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <span class="font-medium">✨</span>Got a question? Send me a message, and I'll get back to you soon.<span class="font-medium"> ✨</span>
        </p>
      </div>
      <!-- Contact Form headingggg -->
      <div class="bg-white rounded-3xl shadow-lg border border-orange-500 p-6 sm:p-8">
        <div class="flex items-start justify-between mb-6">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-orange-600">
              Get in Touch
            </h2>
            <p class="text-gray-600 mt-2">
              Have something to discuss? Send me a message and let's talk.
            </p>
          </div>

          <div class="bg-orange-600 text-white p-3 rounded-xl shadow-md">
            🔗
          </div>
        </div>

        <!-- Form card -->
        <form class="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            class="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            class="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            class="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>

          <button
            type="submit"
            class="w-full mt-4 rounded-xl py-3 text-white font-semibold
                   bg-gradient-to-r from-blue-500 to-orange-600
                   hover:opacity-90 transition"
          >
            ✈️ Send Message
          </button>
        </form>
      </div>

      <!-- Connect With Me -->
             <div class="bg-white rounded-3xl shadow-md p-10 border">

      <div class="bg-white rounded-3xl shadow-md p-6 border">
        <h3 class="text-xl font-semibold mb-6 flex items-center gap-2">
          <span class="w-8 h-1 bg-orange-500 rounded"></span>
          Connect With Me
        </h3>

        <div class="space-y-4">
          <!-- LinkedIn -->
          <a
            href="https://linkedin.com"
            target="_blank"
            class="flex items-center justify-between p-4 rounded-xl
                   bg-blue-100 hover:bg-blue-200 transition"
          >
            <div class="flex items-center gap-3">
              <div class="bg-white p-2 rounded-lg">in</div>
              <div>
                <p class="font-semibold">LinkedIn</p>
                <p class="text-sm text-gray-600">linkedin.com/in/yourname</p>
              </div>
            </div>
            ↗
          </a>

          <!-- WhatsApp -->
          <a
            href="https://wa.me/XXXXXXXXXX"
            target="_blank"
            class="flex items-center justify-between p-4 rounded-xl
                   bg-green-100 hover:bg-green-200 transition"
          >
            <div class="flex items-center gap-3">
              <div class="bg-white p-2 rounded-lg">💬</div>
              <div>
                <p class="font-semibold">WhatsApp</p>
                <p class="text-sm text-gray-600">+971 xxx xxx xxx</p>
              </div>
            </div>
            ↗
          </a>
        </div>
      </div>
     </div>
    </div>
  </section>
</template>
