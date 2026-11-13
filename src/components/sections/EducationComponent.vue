<template>
    <section id="education">
        <main :id="id" class="container">
            <div class="animate-row d-flex flex-column m-3">
                <HeaderComponent id="education-header" label="Education" />
                <div class="d-flex flex-column gap-4 education-timeline py-5">
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <div class="d-flex flex-column">
                            <h4><a href="https://itc.edu.kh/" target="_blank">Institute of Technology of
                                    Cambodia <i class='bx bx-link'></i></a></h4>
                            <p>
                                Bachelor of Science in Computer Science
                            </p>
                        </div>
                        <h4>2018-2023</h4>
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <div class="d-flex flex-column">
                            <h4>Santhormuk Highschool</h4>
                            <p>
                                Highschool graduate
                            </p>
                        </div>
                        <h4>2012-2018</h4>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>
<script setup>
import HeaderComponent from '../HeaderComponent.vue';
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
        gsap.timeline({
            scrollTrigger: {
                trigger: '#education-header',
                start: "top 80%",       // Starts when the row is 80% down the screen
                toggleActions: 'play none none none',
            }
        })
            .from('#education-header', {
                duration: 0.6,
                opacity: 0,
                y: 30,
                ease: "power3.out"
            })
            .from('.education-timeline', {
                duration: 0.4,
                opacity: 0,
                x: 20,
                ease: "power3.out"
            }, "+=0.1");
       
    });
});
onUnmounted(() => {
    ctx.revert(); // This kills ALL ScrollTriggers and resets ALL inline styles
});
</script>