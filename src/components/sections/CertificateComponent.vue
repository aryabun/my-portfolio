<template>
    <section id="certificate">
        <main :id="id" class="container">
            <div class="animate-row d-flex flex-column m-3">
                <HeaderComponent id="certificate-header" label="Certificates" />
                <div class="d-flex flex-column gap-4 certificate-timeline py-5">
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <div class="d-flex flex-column">
                            <h4>Graphic Design Specialist - Short Course</h4>
                            <p><a href="https://maps.app.goo.gl/rwk6nWnQTEXZSSbM7" target="_blank">Future.Bit Academy<i class='bx bx-link'></i></a>
                            </p>
                        </div>
                        <h4>Present</h4>
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <div class="d-flex flex-column">
                            <h4>UI/UX Design - Short Course</h4>
                            <p><a href="https://maps.app.goo.gl/rwk6nWnQTEXZSSbM7" target="_blank">Future.Bit Academy<i class='bx bx-link'></i></a>
                            </p>
                        </div>
                        <h4>Present</h4>
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
                trigger: '#certificate-header',
                start: "top 80%",       // Starts when the row is 80% down the screen
                toggleActions: 'play none none none',
            }
        })
            .from('#certificate-header', {
                duration: 0.6,
                opacity: 0,
                y: 30,
                ease: "power3.out"
            })
            .from('.certificate-timeline', {
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