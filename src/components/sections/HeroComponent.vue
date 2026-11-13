<template>
  <section id="home">
    <!-- class="home-bg" -->
    <main :id="id" class="home">
      <div class="container content-overlay d-flex flex-column justify-content-end align-items-center">
        <h1 class=" fw-bold name title-lg mb-0">Bun Arya</h1>
        <div class="d-flex flex-column align-items-justify animate-des">
          <span class="d-block m-0 sub-text">Front-end developer, UI/UX designer</span>
        </div>
        <img src="@/assets/img/IMG_4457.png" alt="Your Image" class="img-fluid" width="700" height="700"
          style="margin-top: -40px;">
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

gsap.registerPlugin(SplitText, ScrollTrigger);

let ctx;
let cancelled = false;

const waitForLoad = () =>
  Promise.all([
    document.fonts.ready,
    document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise((res) => window.addEventListener('load', res, { once: true }))
  ]);

onMounted(async () => {
  await waitForLoad();
  if (cancelled) return; // component unmounted while waiting

  ctx = gsap.context(() => {
    // reveal containers now that GSAP is in control
    gsap.set(['.name', '.animate-des'], { visibility: 'visible' });

    const split = SplitText.create('.name', { type: 'chars, words' });
    const desc = SplitText.create('.animate-des', { type: 'words', aria: 'hidden' });

    gsap
      .timeline()
      // 1. name
      .from(split.chars, {
        duration: 1.2,
        opacity: 0,
        ease: 'power1.inOut',
        stagger: { from: 'center', each: 0.04 }
      })
      .from(split.words, {
        duration: 2,
        y: (i) => i * 100 - 50,
        ease: 'expo'
      }, 0)
    gsap.from(desc.words, {
      opacity: 0,
      duration: 1.5,
      ease: 'sine.out',
      stagger: 0.2,
      delay: 1 // seconds from now
    });
  });
});
onUnmounted(() => {
  ctx.revert(); // This kills ALL ScrollTriggers and resets ALL inline styles
});
</script>