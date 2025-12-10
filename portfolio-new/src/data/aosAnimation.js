// import { onMounted } from "vue";

// onMounted(() => {
//   const elements = document.querySelectorAll("[data-aos]");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("aos-visible");
//         } else {
//           entry.target.classList.remove("aos-visible");
//         }
//       });
//     },
//     { threshold: 0.2 }
//   );

//   elements.forEach((el) => {
//     el.classList.add("aos-hidden");
//     el.classList.add(el.getAttribute("data-aos"));
//     observer.observe(el);
//   });
// });
