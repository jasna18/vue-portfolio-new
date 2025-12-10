<template>
<section id="about" class="min-h-screen"
>
<!-- all manin wrapper  -->
<div class="container min-h-screen px-4 lg:px-8 lg:mx-auto w-full py-4 md:py-6 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div class="text-center mb-4">
        <h2 class="text-xl md:text-3xl font-extrabold text-[#F68537] mb-2" data-aos="fade-up" data-aos-delay="100">
          About Me
        </h2>
        <p class="text-sm lg:text-md md:text-md text-gray-600 dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
          <span class="font-medium">✨</span> Develop and innovate with passion and precision.<span class="font-medium"> ✨</span>
        </p>
      </div>
     <!-- content wrapper photo div,animation div-text div,project heading  -->
    <div class="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 px-4 sm:px-6 lg:px-4 xl:px-10 mt-2 md:items-center xl:max-w-6xl xl:mx-auto">
       <!-- photo -->
        <div class=" md:w-1/2 lg:w-1/2 flex flex-col
        lg:justify-end  mt-4 lg:mt-10 items-center " data-aos="fade-up">
          <img
        :src="anime"          
         alt="Jasna Profile" 
            class="rounded-full shadow-lg  object-cover w-54 h-54 md:w-72 md:h-72 lg:w-64 lg:h-64"
          >
        </div>
        <!-- animated heading,text -->
       <div class="md:w-full lg:space-y-2  lg:w-1/2 mt-4 lg:mt-4" >
          <h3 class="text-sm  leading-tight text-center lg:text-start lg:mb-4 px-2 lg:px-6 md:text-center mb-4" >
            <AnimateHeading :headings="['Hello World', 'ഹലോ വേൾഡ്']" fontWeight="1000" class="text-orange-500"/>

            <br class="md:hidden lg:block "/>
          </h3>
          <div class="text-sm lg:text-md px-2 lg:px-6">
          <p class="text-justify text-gray-700 dark:text-gray-300  leading-relaxed wrap-break-word" data-aos="fade-up-left" data-aos-delay="200">
            I am a Experienced Software Developer with a 
            proven track record of crafting dynamic web 
            applications. With a strong focus on backend 
            development utilizing PHP frameworks such as 
            CodeIgniter and Laravel, 
             have successfully
             contributed to projects that demand efficiency 
             and scalability.
            </p>
          <a href="#projects" 
            class=" w-full lg:w-auto lg:inline-flex flex flex-col mt-6 px-4 py-3 bg-[#F68537]  
            text-white text-center lg:text-start  font-semibold rounded-lg 
            shadow-md hover:bg-[#F68537] transition duration-300 mb-2" data-aos="fade-up-right" data-aos-delay="200">
            View Projects
          </a>
          </div>

        </div>
      </div>
<!-- card wrapper -->
 <!-- <div class="w-full flex justify-center"> -->

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-3 mb-10 sm:px-10 mt-12 xl:max-w-6xl xl:mx-auto">
          <AboutComponent 
            count="10" 
            title="Total Projects" 
            description="Innovative technology solutions" data-aos="fade-right" data-aos-delay="200" />
          <AboutComponent 
            count="9"
            title="Certificates"
            description="Professional certifications earned" data-aos="fade-up" data-aos-delay="200" />
          <AboutComponent 
            count="3" 
            title="Years of Experience"
            description="Continuous learning journey" data-aos="fade-left" data-aos-delay="200" />
          <!-- <AboutComponent 
            count="5+"  
            title="Projects with AI"
            description="Leveraging machine learning" /> -->

      </div>
<!-- </div> -->
      <hr class="border-t-2 border-gray-200 dark:border-gray-700 mb-16 max-w-2xl mx-auto" />
<!-- education wrapper  -->
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
import anime from '../../assets/anime.jpeg';
import AnimateHeading from '../composobles/AnimateHeading.vue';
// import aosAnimation from '../../data/aosAnimation.js';
</script>

<style scoped>
/* Add any custom styles here if needed, but Tailwind should cover most */
</style>