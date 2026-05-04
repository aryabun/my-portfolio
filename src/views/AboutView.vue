<template>
  <section id="about">
    <HeaderComponent :label="`About Me`">
      <div :id="id" class="container">
        <div class="animate-row my-4">
          <div class="title-block d-flex flex-column w-50">
            <h2 class="mb-3 uppercase">Profile</h2>
          </div>
          <div class="glass-card pfp-card">
            <div class="d-flex flex-column flex-lg-row my-4">
              <div class="d-flex flex-sm-column mx-auto">
                <div class="d-flex flex-sm-row pfp-container my-2">
                  <img src="@/assets/img/IMG2797.png" alt="profile_pic">
                </div>
              </div>
              <div class="mx-2">
                <div class="mb-4">
                  <p class="my-2">I am a <span class="fw-bold">frontend-focused</span> developer with a Bachelor degree
                    from
                    <a href="https://itc.edu.kh/" target="_blank">Institute of Technology of
                      Cambodia <i class='bx bx-link'></i></a>.
                    My previous experience in a startup environment has enabled me to explore and expand my skills
                    beyond
                    frontend development. In addition to my frontend skills, I have a working background in <span
                      class="fw-bold">backend
                      development with Laravel (PHP)</span> and
                    have also contributed to the development of <span class="fw-bold">mobile applications with
                      Flutter.</span>
                  </p>
                  <p class="my-2">This cross-platform experience allows me to collaborate effectively. I'm currently
                    searching new
                    challenges and
                    opportunities to enhance my skills.</p>
                </div>
                <div class="row pt-3 my-4">
                  <div class="col-12 col-lg-5 col-md-4 col-xl-3">
                    <p><span class="fw-bold uppercase">Core Tech Stack:</span></p>
                  </div>
                  <div class="col">
                    <span class="fw-bold">TypeScript, VueJs, NuxtJs, Bootstrap, TailwindCss, Laravel</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-5 col-md-4 col-xl-3">
                    <p><span class="fw-bold uppercase">Location:</span>
                    </p>
                  </div>
                  <div class="col">
                    <span>Phnom Penh, Cambodia</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-5 col-md-4 col-xl-3">
                    <p><span class="fw-bold uppercase">Hobbies:</span>
                    </p>
                  </div>
                  <div class="col">
                    <span>Read, Anime, Fitness(gym, running)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="animate-row text-wrapper d-flex flex-lg-row flex-column my-4">
          <div class="title-block d-flex flex-column w-50">
            <h2 class="mb-3 uppercase">Education</h2>
          </div>
          <div class="timeline">
            <div class="content-block">
              <i class='icon bx bxs-graduation'></i>
              <div class="content">
                <div class="date"></div>
                <p>
                  <i class='bx bx-calendar me-2'></i>
                  <i class="me-3 fw-bold">2009-2013</i>
                  <i class='bx bxs-map' style="color: #d63415;"></i>Phnom Penh
                </p>
                <h2 class="uppercase my-2"><a href="https://itc.edu.kh/" target="_blank">Institute of Technology of
                    Cambodia <i class='bx bx-link'></i></a></h2>
                <i>
                  Bachelor of Science in Computer Science
                </i>
              </div>
            </div>
            <div class="content-block">
              <i class='icon bx bxs-graduation'></i>
              <div class="content">
                <p>
                  <i class='bx bx-calendar me-2'></i>
                  <i class="me-3 fw-bold">2012-2018</i>
                  <i class='bx bxs-map' style="color: #d63415;"></i>
                  Phnom Penh
                </p>
                <h2 class="uppercase my-2">Santhormuk Highschool</h2>
                <i>
                  Highschool graduate
                </i>
              </div>
            </div>

          </div>
        </div>
        <div class="animate-row d-flex flex-lg-row flex-column my-4">
          <div class="title-block d-flex flex-column w-50">
            <h2 class="mb-3 uppercase">Experiences
            </h2>
          </div>
          <div class="timeline">
            <div class="content-block">
              <i class='icon bx bx-buildings'></i>
              <div class="content">
                <div class="d-flex flex-row py-2 fw-bold">
                  <i class='bx bx-calendar me-2'></i>
                  <i>Aug/2024 - Dec/2025</i>
                </div>
                <p>
                  <i class='bx bxs-map me-2' style="color: #d63415;"></i>Phnom Penh <span class="mx-3">|</span><span
                    class="badge rounded-pill text-bg-warning">Freelance</span>
                </p>
                <h2 class="uppercase my-2">Frontend web developer, <a href="https://fintech.fsa.gov.kh/?lang=en"
                    target="_blank">FinTech Center<i class='bx bx-link'></i></a></h2>
                <div class="d-flex flex-wrap flex-md-row flex-lg-row flex-sm-column py-2 gap-2">
                  <p>Tech Stack:
                  </p>
                  <span class="px-2 bg-white badge-green text-sm">NuxtJs</span>
                  <span class="px-2 bg-white badge-purple text-sm">Bootstrap</span>
                  <span class="px-2 bg-white badge-blue text-sm">Element+</span>
                  <span class="px-2 bg-white badge-yellow text-sm">Axios</span>
                </div>
                <ul>
                  <li>Study M&E System business flow</li>
                  <li>Implement graph in dashboard for M&E System</li>
                  <li>Design and implement authentication</li>
                  <li>Design, develop and maintain User Management features</li>
                </ul>
              </div>
            </div>
            <div class="content-block">
              <i class='icon bx bx-buildings'></i>
              <div class="content">
                <div class="date"> </div>
                <div class="d-flex flex-row py-2 fw-bold">
                  <i class='bx bx-calendar me-2'></i>
                  <i>Aug/2023 - Sept/2024</i>
                </div>
                <p class="gap-2"> <i class='bx bxs-map me-2' style="color: #d63415;"></i>Phnom Penh <span class="mx-3">|</span><span
                    class="badge rounded-pill text-bg-success">Full-time</span></p>
                <h2 class="my-2">WEB DEVELOPER, <a href="https://www.itsc.ca/" target="_blank">ITSOLUTIONCONSULTING.CA<i
                      class='bx bx-link'></i></a></h2>
                <div class="d-flex flex-wrap flex-md-row flex-lg-row flex-sm-column py-2 gap-2">
                  <p>Tech Stack:
                  </p>
                  <span class="px-2 bg-white badge-red text-sm">Laravel </span>
                  <span class="px-2 bg-white badge-green text-sm">VueJs</span>
                  <span class="px-2 bg-white badge-blue text-sm">MySQL</span>
                  <span class="px-2 bg-white badge-cyan text-sm">Flutter</span>
                  <span class="px-2 bg-white badge-red text-sm">Firebase</span>

                  <ul>
                    <li>Design UI/UX and develop frontend web applications</li>
                    <li>Built features real-time notifications for order management</li>
                    <li>Collaborate and assisting mobile and backend tasks</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="content-block">
              <i class='icon bx bx-buildings'></i>
              <div class="content">
                <div class="d-flex flex-row py-2 fw-bold">
                  <i class='bx bx-calendar me-2'></i>
                  <i>Feb/2023 - Oct/2023</i>
                </div>
                <p> <i class='bx bxs-map me-2' style="color: #d63415;"></i>Phnom Penh <span class="mx-3">|</span><span
                    class="badge rounded-pill text-bg-info">Internship</span></p>
                <h2 class=" my-2">ODOO DEVELOPMENT, <a href="https://rmagroup.com/" target="_blank">RMA
                    CAMBODIA PLC.<i class='bx bx-link'></i></a></h2>
                <div class="d-flex flex-wrap flex-md-row flex-lg-row flex-sm-column py-2 gap-2">
                  <p>Tech Stack:
                  </p>
                  <span class="px-2 bg-white badge-purple text-sm">Odoo</span>
                  <span class="px-2 bg-white badge-orange text-sm">XML</span>
                  <span class="px-2 bg-white badge-blue text-sm">Python</span>
                  <span class="px-2 bg-white badge-blue text-sm">PostgreSQL</span>

                </div>
                <ul>
                  <li>Developed and customized Odoo HR modules</li>
                  <li>Extended existing features using Python and XML </li>
                  <li>Assisted in implementing HR workflows </li>
                </ul>
              </div>
            </div>
            <div class="content-block">
              <i class='icon bx bx-buildings'></i>
              <div class="content">
                <div class="d-flex flex-row py-2 fw-bold">
                  <i class='bx bx-calendar me-2'></i>
                  <i>Jun/2022 - Oct/2022</i>
                </div>
                <p> <i class='bx bxs-map me-2' style="color: #d63415;"></i>Phnom Penh <span class="mx-3">|</span><span
                    class="badge rounded-pill text-bg-info">Internship</span></p>
                <h2 class="my-2">WEB DEVELOPER, <a href="https://kfa.com.kh/" target="_blank">KHMER FOUNDATION
                    APPRAISAL CO, LTD<i class='bx bx-link'></i></a></h2>
                <div class="d-flex flex-wrap flex-md-row flex-lg-row flex-sm-column py-2 gap-2">
                  <p>Tech Stack:
                  </p>
                  <span class="px-2 bg-white badge-red text-sm">Laravel</span>
                  <span class="px-2 bg-white badge-green text-sm">VueJs</span>
                  <span class="px-2 bg-white badge-blue text-sm">MySQL</span>
                  <span class="px-2 bg-white badge-green text-sm">Google Map API</span>

                </div>
                <ul>
                  <li>Developed and maintained a CRM system</li>
                  <li>Built and integrated RESTful APIs to support mobile application</li>
                  <li>Integrated Google Maps API to enable property search and listings for property management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderComponent>
  </section>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from 'vue';
defineProps({
  id: { type: String, required: true }
})

gsap.registerPlugin(ScrollTrigger)
let ctx;
onMounted(() => {
  // Use gsap.context to wrap all animations
  ctx = gsap.context(() => {
    // Grab all rows you want to animate
    const rows = document.querySelectorAll('.animate-row');

    rows.forEach((row) => {
      // Create a unique timeline for THIS specific row
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,           // Trigger is the specific row
          start: "top 80%",       // Starts when the row is 0% down the screen
          toggleActions: 'play none none none',
          once: true
        }
      });
      // Animate the title inside THIS row
      tl.from(row.querySelector('.title-block'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Animate the timeline inside THIS row (Right to Left)
      tl.from(row.querySelector('.timeline'), {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5"); // Starts slightly before title finishes for a smoother feel
      tl.from(row.querySelector('.pfp-card'), { y: 30, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.6");


      // });
    });
    const blocks = document.querySelectorAll('.content');
    blocks.forEach((block) => {
      ScrollTrigger.create({
        trigger: block,
        start: "top 50%",      // Highlight starts when block reaches 60% of viewport
        end: "bottom 50%",    // Highlight ends when block leaves 40% of viewport
        onEnter: () => block.classList.add("active"),
        onLeave: () => block.classList.remove("active"),
        onEnterBack: () => block.classList.add("active"),
        onLeaveBack: () => block.classList.remove("active"),
        // markers: true,     // Uncomment this to see the focus zone
      });
    });
  });
});
onUnmounted(() => {
  ctx.revert(); // This kills ALL ScrollTriggers and resets ALL inline styles
});
</script>