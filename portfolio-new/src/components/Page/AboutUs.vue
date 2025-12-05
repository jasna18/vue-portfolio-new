<template>
<section id="about" class="min-h-screen">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 w-full py-16 md:py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <div class="text-center mb-16">
        <h2 class="text-xl md:text-3xl font-extrabold text-[#F68537] mb-2">
          About Me
        </h2>
        <p class="text-md lg:text-md md:text-md text-gray-600 dark:text-gray-300">
          <span class="font-medium">✨</span> Develop and innovate with passion and precision.<span class="font-medium"> ✨</span>
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-16 mb-20 ">
        
        <div class="w-full md:w-2/3 space-y-6 lg:pr-12  lg:w-1/2  md:order-2 lg:order-1">
          <h3 class="text-3xl md:text-4xl font-bold leading-tight text-center lg:text-left">
            Hello World<br class="md:hidden lg:block "/>
          </h3>
          <p class="text-base lg:text-lg text-gray-700 dark:text-gray-300 md:w-2/3 lg:pr-12 text-center lg:text-left">
            I am a Experienced Software Developer with a 
            proven track record of crafting dynamic web 
            applications. With a strong focus on backend 
            development utilizing PHP frameworks such as 
            CodeIgniter and Laravel,I have successfully
             contributed to projects that demand efficiency 
             and scalability.
          </p>
          <a 
            href="#projects" 
            class="inline-block mt-6 px-8 py-3 bg-[#F68537]  text-white font-semibold rounded-lg shadow-md hover:bg-[#F68537]  transition duration-300"
          >
            View Projects
          </a>
        </div>

        <div class="w-full md:w-1/3 lg:1/2 justify-center flex  md:justify-end md:order-1 lg:order-2 ">
          <img 
            src="https://via.placeholder.com/280x280/8B5CF6/FFFFFF?text=Jason" 
            alt="Jason Emmanuel Profile" 
            class="rounded-full shadow-lg ring-4 ring-[#F68537]-300  object-cover w-64 h-64 md:w-72 md:h-72"
          >
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <AboutComponent 
          count="26" 
          title="Total Projects" 
          description="Innovative technology solutions crafted" />
        <AboutComponent 
          count="109"
          title="Certificates"
          description="Professional certifications earned" />
        <AboutComponent 
          count="3" 
          title="Years of Experience"
          description="Continuous learning journey" />
        <AboutComponent 
          count="5+"  
          title="Projects with AI"
          description="Leveraging machine learning" />

      </div>

      <hr class="border-t-2 border-gray-200 dark:border-gray-700 mb-16 max-w-2xl mx-auto" />

      <div class="text-center">
        <h2 class="text-md md:text-2xl font-bold mb-2">
          Education
        </h2>
      </div>

    </div>
    </section>
</template>

<script setup>
import AboutComponent from '../composobles/AboutComponent.vue';
</script>

<style scoped>
/* Add any custom styles here if needed, but Tailwind should cover most */
</style>