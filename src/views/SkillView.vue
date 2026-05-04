<template>
      <section id="skill">
          <HeaderComponent :label="`Skills`">
              <div :id="id" class="container">
                  <p class="skill-des">Technologies and Tools that i've been using and learning.</p>
                  <div class="row">
                      <!-- START LANGUAGE CARD -->
                      <div class="col-12 col-lg-4 col-md-6 col-sm-6 my-3">
                          <div class="glass-card p-4 skill-card">
                              <div class="my-2">
                                  <h4>Languages</h4>
                                  <div class="bg-gradient-aurora divider rounded"></div>
                              </div>
                              <div class="d-flex flex-wrap gap-3 my-2">
                                  <div class="inline-flex px-3 py-2 badge-cyan">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-typescript' style="font-size: 25px;"></i>
                                          <span class="mx-2">TypeScript</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-yellow">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-javascript' style="font-size: 25px;"></i>
                                          <span class="mx-2">Javacript</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-purple">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-php' style="font-size: 25px;"></i>
                                          <span class="mx-2">Php</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-blue">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-python' style="font-size: 25px;"></i>
                                          <span class="mx-2">Python</span>
                                      </div>
                                  </div>
      
                                  <div class="inline-flex px-3 py-2 badge-yellow">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-java' style="font-size: 25px;"></i>
                                          <span class="mx-2">Java</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-blue">
                                      <div class="d-flex flex-row align-items-center">
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Dart_programming_language_logo_icon.svg"
                                              alt="" style="height: 25px;">
                                          <span class="mx-2">Dart</span>
                                      </div>
                                  </div>
      
                              </div>
                          </div>
                      </div>
                      <!-- END LANGUAGE CARD -->
                      <div class="col-12 col-lg-4 col-md-6 col-sm-6 my-3">
                          <div class="glass-card p-4 skill-card">
                              <div class="my-2">
                                  <h4>Frameworks & Libraries</h4>
                                  <div class="bg-gradient-aurora divider rounded"></div>
                              </div>
                              <div class="d-flex flex-wrap gap-3 my-2">
                                  <!-- VUEJs -->
                                  <div class="inline-flex px-3 py-2 badge-green">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-vuejs' style="font-size: 25px;"></i>
                                          <span class="mx-2">VueJs</span>
                                      </div>
                                  </div>
                                  <!-- NuxtJs -->
                                  <div class="inline-flex px-3 py-2 badge-green">
                                      <div class="d-flex flex-row align-items-center">
                                          <img src="https://nuxt.com/assets/design-kit/icon-black.svg" alt=""
                                              style="height: 25px;">
                                          <span class="mx-2">NuxtJs</span>
                                      </div>
                                  </div>
                                  <!-- NodeJs -->
                                  <div class="inline-flex px-3 py-2 badge-green">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-nodejs' style="font-size: 25px;"></i>
                                          <span class="mx-2">NodeJs</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-red">
                                      <div class="d-flex flex-row align-items-center">
                                          <img src="https://www.svgrepo.com/show/306319/laravel.svg" alt=""
                                              style="height: 25px;">
                                          <span class="mx-2">Laravel</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-cyan">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-flutter' style="height: 25px;"></i>
                                          <span class="mx-2">Flutter</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-purple">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-bootstrap' style="font-size: 25px;"></i>
                                          <span class="mx-2">Bootstrap</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-red">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-sass' style="font-size: 25px;"></i>
                                          <span class="mx-2">SCSS</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-cyan">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-tailwind-css' style="font-size: 25px;"></i>
                                          <span class="mx-2">TailwindCss</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-12 col-lg-4 col-md-6 col-sm-6 my-3">
                          <div class="glass-card p-4 skill-card">
                              <div class="my-2">
                                  <h4>Tools</h4>
                                  <div class="bg-gradient-aurora divider rounded"></div>
                              </div>
                              <div class="d-flex flex-wrap gap-3 my-2">
                                  <div class="inline-flex px-3 py-2 badge-orange">
                                      <div class="d-flex flex-row align-items-center">
                                          <img src="https://www.svgrepo.com/show/306590/postman.svg" alt=""
                                              style="height: 25px;">
                                          <span class="mx-2">Postman</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-blue">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-visual-studio' style="font-size: 25px;"></i>
                                          <span class="mx-2">VS Code</span>
                                      </div>
                                  </div>
      
                                  <div class="inline-flex px-3 py-2 badge-yellow">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-git' style="font-size: 25px;"></i>
                                          <span class="mx-2">Git</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-orange">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-gitlab' style="font-size: 25px;"></i>
                                          <span class="mx-2">GitLab</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-green">
                                      <div class="d-flex flex-row align-items-center">
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/HeidiSQL_logo_image.png"
                                              alt="" style="height: 25px;">
                                          <span class="mx-2">HeidiSQL</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-purple">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-figma' style="font-size: 25px;"></i>
                                          <span class="mx-2">Figma</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-blue">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-microsoft' style="font-size: 25px;"></i>
                                          <span class="mx-2">MS Office</span>
                                      </div>
                                  </div>
      
                              </div>
                          </div>
                      </div>
                      <div class="col-12 col-lg-4 col-md-6 col-sm-6 my-3">
                          <div class="glass-card p-4 skill-card">
                              <div class="my-2">
                                  <h4>Databases</h4>
                                  <div class="bg-gradient-aurora divider rounded"></div>
                              </div>
                              <div class="d-flex flex-wrap gap-3 my-2">
                                  <div class="inline-flex px-3 py-2 badge-blue">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-postgresql' style="font-size: 25px;"></i>
                                          <span class="mx-2">PostgreSQL</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-green">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-mongodb' style="font-size: 25px;"></i>
                                          <span class="mx-2">MongoDB</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-blue">
                                      <div class="d-flex flex-row align-items-center">
                                          <img src="https://images.icon-icons.com/4256/PNG/512/database_sql_mysql_icon_265238.png"
                                              alt="" style="height: 25px;">
                                          <span class="mx-2">MySQL</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-12 col-lg-4 col-md-6 col-sm-6 my-3">
                          <div class="glass-card p-4 skill-card">
                              <div class="my-2">
                                  <h4>Other</h4>
                                  <div class="bg-gradient-aurora divider rounded"></div>
                              </div>
                              <div class="d-flex flex-wrap gap-3 my-2">
                                  <div class="inline-flex px-3 py-2 badge-yellow">
                                      <div class="d-flex flex-row align-items-center">
                                          <img src="https://www.svgrepo.com/show/361368/terminal-linux.svg" alt=""
                                              style="height: 25px;">
                                          <span class="mx-2">Linux</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-red">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-firebase' style="font-size: 25px;"></i>
                                          <span class="mx-2">Firebase</span>
                                      </div>
                                  </div>
                                  <div class="inline-flex px-3 py-2 badge-green">
                                      <div class="d-flex flex-row align-items-center">
                                          <i class='bx bxl-android' style="font-size: 25px;"></i>
                                          <span class="mx-2">Android</span>
                                      </div>
                                  </div>
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
    id: { type: String, required: false }
});
gsap.registerPlugin(ScrollTrigger)
let ctx;
onMounted(() => {
    // Use gsap.context to wrap all animations
    ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.skill-des',           // Trigger is the specific row
                start: "top 80%",       // Starts when the row is 80% down the screen
                toggleActions: 'play none none none',
            }
        });
        // 1. Skill description eases in first
        tl.from('.skill-des', {
            x: 600,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
        }, "-=0.3");

        // 2. Glass cards slide in from bottom (y: 50) to top one by one
        tl.from('.skill-card', {
            y: 50,           // Move from 50px below
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,    // This creates the "one by one" effect (0.2s delay between each)
        }, "-=0.4");         // Overlap slightly with the previous animation for smoothness

    });
});
onUnmounted(() => {
    ctx.revert(); // This kills ALL ScrollTriggers and resets ALL inline styles
});
</script>