<template>
  <section id="home">
     <!-- class="home-bg" -->
    <main :id="id" class="container home">
      <div class="d-flex flex-column img-frame">
        <img src="@/assets/img/sunset.png" alt="">
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex flex-row">
          <h1 class="name title-lg ms-0">Bun Arya
          </h1>
        </div>
        <div class="d-flex flex-column align-items-md-end align-items-justify animate-des">
          <h1>Web Developer</h1>
          <p class="w-lg-25">Creating beautiful, responsive, and user-friendly web experiences with modern technologies and creative
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
main{
  position: relative;
  top: 1.5rem;
}
</style>