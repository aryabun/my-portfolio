<template>
  <section id="contact">
    <!-- <HeaderComponent :label="`Contact`"/> -->
    <div :id="id" class="container">
      <div class="d-flex flex-fill flex-column justify-content-between">
        <div class="js-container d-flex align-items-center justify-content-center flex-shrink-0 over-hidden">
          <div class="js-main-wrapper d-flex">
            <h2 v-for="n in 5" :key="n" class="scrolling-item js-item d-flex align-items-center gap-2">
              <i class='bx bxs-florist'></i>
              <span>stay in touch</span>
            </h2>
          </div>
        </div>
        <div class="d-flex flex-md-row flex-column pt-4 pb-2" style="height: 30rem;">
          <!-- Your specific content goes here -->
          <div class="d-flex flex-md-row flex-column flex-md-fill align-items-md-end align-items-center">
            <div class="d-flex flex-column justify-content-end">
              <h1 class="title-lg m-0">Let's talk
              </h1>
            </div>
            <div class="d-flex flex-column justify-content-end">
              <div class="d-flex flex-row flex-shrink-0">
                <h1 class="title-lg m-0 contact-icon"><i class='bx bx-arrow-back arrow-icon'></i>
                </h1>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-center mx-4 mt-4">
            <div class="d-flex flex-column m-4">
              <a class="download btn btn-light btn-outline-dark" href="">
                Download CV
              </a>
            </div>
            <p class="text-center"></p>
            <div class="d-flex flex-column gap-2">
              <a class="btn btn-dark rounded-pill" :href="`mailto:${email}`">
                Send me an Email
              </a>
              <a class="btn btn-sm-dark btn-dark rounded-pill" :href="`tel:${phoneNumber}`">
                Schedule a Call
              </a>
              <p class="text-center">Or Find me on other platform</p>
            </div>
            <div class="d-flex flex-md-row gap-2">
              <a class="btn btn-dark rounded-pill d-flex align-items-center flex-fill justify-content-center" href=""
                target="_blank">
                <i class='bx bxl-github pe-2' style="font-size: 25px;"></i>
                GitHub
              </a>
              <a class="btn btn-sm-dark btn-dark rounded-pill d-flex align-items-center flex-fill justify-content-center"
                href="" target="_blank">
                <i class='bx bxl-linkedin-square pe-2' style="font-size: 25px;"></i>
                LinkedIn
              </a>
            </div>
            <div class="d-flex flex-md-row flex-column gap-2 mt-2">
              <div class="d-flex flex-column flex-fill">
                <span class="fw-bold badge border border-success text-success rounded-pill">
                  <i class='p-1 bx bxs-circle text-success' style="font-size: 10px;"></i>
                  Available for new projects</span>
              </div>

              <div class="d-flex flex-column flex-fill">
                <span class="fw-bold badge border border-dark text-dark rounded-pill"><i class='bx bxs-map p-1'
                    style="font-size: 10px;"></i>Phnom Penh, Cambodia</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// import HeaderComponent from '@/components/HeaderComponent.vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from 'vue';
import { horizontalLoop } from '@/helpers/gsap-helpers';

defineProps({
  id: { type: String, required: false }
});

const phoneNumber = process.env.VUE_APP_PHONE_NUMBER;
const email = process.env.VUE_APP_MAIL;

gsap.registerPlugin(ScrollTrigger)
let ctx;
onMounted(() => {
  // Use gsap.context to wrap all animations
  ctx = gsap.context(() => {
    // For Arrow Icon
    const tl = gsap.timeline({ repeat: -1 }); // -1 means infinite repeat

    tl.to([".contact-icon", '.download'], {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out"
    })
      .to([".contact-icon", '.download'], {
        scale: 1,
        duration: 0.8,
        ease: "power2.in"
      });
    // Select items for both rows
    const rowItem = gsap.utils.toArray(".js-container .js-item");

    // Create Loop 2 (Moves Left to Right)
    const loop = horizontalLoop(rowItem, {
      repeat: -1,
      speed: 0.5,
      paddingRight: 30,
    });

    // Flip the direction of the second loop immediately
    gsap.set(loop, { timeScale: -1 });

    let speedTween;

    ScrollTrigger.create({
      trigger: ".js-main-wrapper", // A wrapper containing both rows
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const scrollDir = self.direction; // 1 (down) or -1 (up)

        if (speedTween) speedTween.kill();

        // We animate both loops. 
        // Row 1 follows scrollDir, Row 2 stays inverted to scrollDir.
        speedTween = gsap.to(loop, {
          timeScale: () => {
            return scrollDir * -2;
          },
          duration: 0.3,
          ease: "power1.out",
          onComplete: () => {
            // Return to base speeds (1 and -1)
            gsap.to(loop, { timeScale: scrollDir * -1, duration: 1 });
          }
        });
      }
    });
  });
});
onUnmounted(() => {
  ctx.revert(); // This kills ALL ScrollTriggers and resets ALL inline styles
});
</script>
<style scoped>
.scrolling-item {
  white-space: nowrap;
  font-size: 50px;
  font-weight: 900;
  letter-spacing: 1rem;
  /* line-height: em; */
  margin: 0 2rem 0 0;
  color: var(--dark);

  i {
    /* Clip the background to the text */
    -webkit-background-clip: text;
    background-clip: text;

    /*Make the original text color transparent */
    -webkit-text-fill-color: transparent;
    color: transparent;
    /* Give new color as gradient */
    background-image: var(--gradient-aurora);
  }
}
</style>