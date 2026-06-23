<template>
  <section id="home">
    <!-- class="home-bg" -->
    <main :id="id" class="home">
      <div class="container min-vh-100 content-overlay d-flex flex-column justify-content-end justify-content-xxl-center pb-4">
        <h1 class=" fw-bold name title-lg ms-0">Bun Arya</h1>
        <div class="d-flex flex-column align-items-justify animate-des">
          <span class="fs-3 d-block my-3 text-secondary">Web Developer</span>
          <p class="col-md-6">Creating beautiful, responsive, and user-friendly web experiences with modern
            technologies
            and creative
            design solutions.</p>
        </div>
      </div>

    </main>
  </section>
</template>
<script setup>
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from 'vue';

defineProps({
  id: { type: String, required: false }
});
gsap.registerPlugin(SplitText, ScrollTrigger)
let ctx;
onMounted(() => {
  // Use gsap.context to wrap all animations
  ctx = gsap.context(() => {
    let split = SplitText.create('.name', { type: "chars, words" });
    let desc = SplitText.create(".animate-des", { type: "words", aria: "hidden" });

    gsap
      .timeline()
      .from(split.chars, {
        duration: 1.2,
        opacity: 0,
        ease: 'power1.inOut',
        stagger: { from: 'center', each: 0.04 }
      })
      .from(split.words, {
        duration: 3,
        y: (i) => i * 100 - 50,
        ease: "expo"
      }, 0);
    gsap.from(desc.words, {
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.1
    });

    // ScrollTrigger for container
    // s
  });
});
onUnmounted(() => {
  ctx.revert(); // This kills ALL ScrollTriggers and resets ALL inline styles
});
</script>
<style scoped>
.pfp-container img {
  object-position: 100% 60%;
}

nav a {
  color: white !important;
}
</style>