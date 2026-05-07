<template>
  <section id="about">
    <div :id="id" class="container">
      <div class="animate-row mb-4">
        <div class="title-block d-flex flex-column w-50">
          <h2 class="mb-3 ">Profile</h2>
        </div>
        <div class="glass-card pfp-card">
          <div class="d-flex flex-column flex-lg-row my-4">
            <div class="d-flex flex-sm-column mx-auto">
              <div class="d-flex flex-sm-row pfp-container my-2">
                <img src="@/assets/img/IMG2797.png" alt="profile_pic">
              </div>
            </div>
            <div class="mx-2 p-4">
              <div class="mb-4" style="text-align: justify;">
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
              <div class="row my-4">
                <div class="col-12 col-lg-5 col-md-4 col-xl-3">
                  <span class="fw-bold uppercase">Core Tech Stack:</span>
                </div>
                <div class="col">
                  <span class="fw-bold">JavaScript, TypeScript, VueJs, NuxtJs, Bootstrap, TailwindCss, Laravel</span>
                </div>
              </div>
              <div class="row my-3">
                <div class="col-12 col-lg-5 col-md-4 col-xl-3">
                  <span class="fw-bold uppercase">Location:</span>
                </div>
                <div class="col">
                  <span>Phnom Penh, Cambodia</span>
                </div>
              </div>
              <div class="row my-3">
                <div class="col-12 col-lg-5 col-md-4 col-xl-3">
                  <span class="fw-bold uppercase">Hobbies:</span>
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
          <h2 class="mb-3 ">Education</h2>
        </div>
        <div class="timeline">
          <div class="content-block">
            <i class='icon bx bxs-graduation'></i>
            <div class="content">
              <div class="date"></div>
              <p>
                <span class="mb-1 me-3 badge border border-danger text-danger rounded-pill">
                  <i class='pe-1 bx bxs-circle' style="color: red; font-size: 10px;"></i>
                  <i class=" fw-bold">2009-2013</i></span>
                <span class="fw-bold badge border border-dark text-dark rounded-pill">
                  <i class='bx bxs-map pe-1' style="font-size: 10px;"></i>Phnom Penh, Cambodia
                </span>
              </p>
              <h2 class="my-4"><a href="https://itc.edu.kh/" target="_blank">Institute of Technology of
                  Cambodia <i class='bx bx-link'></i></a></h2>
              <i>
                Bachelor of Science in Computer Science
              </i>
            </div>
          </div>
          <div class="content-block">
            <i class='icon bx bxs-graduation'></i>
            <div class="content">
              <div>
                <span class="mb-1 me-3 badge border border-danger text-danger rounded-pill">
                  <i class='pe-1 bx bxs-circle' style="color: red; font-size: 10px;"></i>
                  <i class=" fw-bold">2012-2018</i>
                </span>
                <span class="fw-bold badge border border-dark text-dark rounded-pill">
                  <i class='bx bxs-map pe-1' style="font-size: 10px;"></i>Phnom Penh, Cambodia
                </span>
              </div>
              <h2 class="my-4">Santhormuk Highschool</h2>
              <i>
                Highschool graduate
              </i>
            </div>
          </div>

        </div>
      </div>
      <div class="animate-row d-flex flex-lg-row flex-column my-4">
        <div class="title-block d-flex flex-column w-50">
          <h2 class="mb-3 ">Experiences
          </h2>
        </div>
        <div class="timeline">
          <div class="content-block" v-for="(exp, i) in experiences" :key="i">
            <i class='icon bx bx-buildings'></i>
            <div class="content">
              <div class="d-flex flex-row">
                <span class="me-3 badge border border-danger text-danger rounded-pill">
                  <i class='bx bxs-circle p-1' style="color: red; font-size: 10px;"></i>
                  <i class=" fw-bold">{{ exp.date }}</i>
                </span>
              </div>
              <p class="d-flex align-items-center gap-2 my-2">
                <span class="fw-bold badge border border-dark text-dark rounded-pill">
                  <i class='bx bxs-map pe-1' style="font-size: 10px;"></i>{{ exp.location }}
                </span>
                <span class="badge rounded-pill" :class="exp.type.style">{{ exp.type.name }}</span>
              </p>
              <div class=" d-flex flex-column flex-md-row flex-sm-column my-4">
                <h2 class="me-2">{{ exp.title }},</h2>
                <span>
                  <a :href="exp.org.link" target="_blank">{{ exp.org.name }}<i class='bx bx-link'></i></a>
                </span>
              </div>
              <div class="d-flex flex-wrap flex-md-row flex-lg-row flex-sm-column py-2 gap-2">
                <p>Tech Stack:
                </p>
                <span v-for="(stack, j) in exp.tech" :key="j" class="badge border rounded-pill"
                  :class="stack.style">{{
                    stack.name }}</span>
              </div>
              <ul v-for="(des, k) in exp.description" :key="k" class="gap-0">
                <li>{{ des.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <HeaderComponent :label="`About`">
    </HeaderComponent> -->
  </section>
</template>
<script setup>
// import HeaderComponent from '@/components/HeaderComponent.vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from 'vue';
defineProps({
  id: { type: String, required: true }
})

const experiences = [
  {
    date: "Aug, 2024 - Dec, 2025",
    location: 'Phnom Penh, Cambodia',
    type: { name: 'Freelance', style: 'text-bg-warning' },
    title: 'Frontend web developer',
    org: { name: 'FinTech Center', link: 'https://fintech.fsa.gov.kh/?lang=en' },
    tech: [
      { name: 'NuxtJs', style: 'border-success text-success ' },
      { name: 'TypeScript', style: 'border-primary text-primary ' },
      { name: 'Bootstrap', style: 'border-dark' },
      { name: 'Element+', style: 'border-primary text-primary ' },
      { name: 'Axios', style: 'border-dark ' },
    ],
    description: [
      { name: 'Study M&E System business flow' },
      { name: 'Implement graph in dashboard for M&E System' },
      { name: 'Design and implement authentication' },
      { name: 'Design, develop and maintain User Management features' },
    ]
  },
  {
    date: 'Aug/2023 - Sept/2024',
    location: 'Phnom Penh, Cambodia',
    type: { name: 'Full-time', style: 'text-bg-success' },
    title: 'WEB DEVELOPER',
    org: { name: 'ITSOLUTIONCONSULTING.CA', link: 'https://www.itsc.ca/' },
    tech: [
      { name: 'Laravel', style: 'border-danger text-danger ' },
      { name: 'VueJs', style: 'border-success text-success ' },
      { name: 'MySQL', style: 'border-primary text-primary ' },
      { name: 'Flutter', style: 'border-primary text-primary ' },
      { name: 'Firebase', style: 'border-dark' },
    ],
    description: [
      { name: 'Design UI/UX and develop frontend web applications' },
      { name: 'Built features real-time notifications for order management' },
      { name: 'Collaborate and assisting mobile and backend tasks' },
    ]
  },
  {
    date: 'Feb/2023 - Oct/2023',
    location: 'Phnom Penh, Cambodia',
    type: { name: 'Internship', style: 'text-bg-info' },
    title: 'ODOO DEVELOPMENT',
    org: { name: 'RMA CAMBODIA PLC.', link: 'https://rmagroup.com/' },
    tech: [
      { name: 'Odoo', style: 'border-primary text-primary ' },
      { name: 'XML', style: 'border-dark ' },
      { name: 'Python', style: 'border-primary text-primary ' },
      { name: 'PostgreSQL', style: 'border-info text-info ' },
    ],
    description: [
      { name: 'Developed and customized Odoo HR modules' },
      { name: 'Extended existing features using Python and XML' },
      { name: 'Assisted in implementing HR workflows' },
    ]
  },
  {
    date: 'Jun, 2022 - Oct, 2022',
    location: 'Phnom Penh, Cambodia',
    type: { name: 'Internship', style: 'text-bg-info' },
    title: 'WEB DEVELOPER',
    org: { name: 'Khmer Foundation Appraisal Co, LTD', link: 'https://kfa.com.kh/' },
    tech: [
      { name: 'Laravel', style: 'border-danger text-danger ' },
      { name: 'VueJs', style: 'border-success text-success ' },
      { name: 'MySQL', style: 'border-primary text-primary ' },
      { name: 'Google Map API', style: 'border-success text-success ' },
    ],
    description: [
      { name: 'Developed and maintained a CRM system' },
      { name: 'Built and integrated RESTful APIs to support mobile application' },
      { name: 'Integrated Google Maps API to enable property search and listings for property management' },
    ]
  },
]

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