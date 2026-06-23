<template>
    <section id="profile">
        <main :id="id" class="container">
            <div class="animate-row d-flex flex-xl-row flex-column my-4">
                <HeaderComponent id="profile-header" label="Profile" />
                <div class="glass-card pfp-card">
                    <div class="d-flex flex-column my-4">
                        <div class="d-flex flex-sm-column mx-auto">
                            <div class="d-flex flex-sm-row pfp-container my-2">
                                <img src="@/assets/img/IMG2797.png" alt="profile_pic">
                            </div>
                        </div>
                        <div class="mx-2 p-4">
                            <div class="mb-4" style="text-align: justify;">
                                <p class="my-2">I am a <span class="fw-bold">web developer</span> with a Bachelor's
                                    degree from
                                    <a href="https://itc.edu.kh/" target="_blank">Institute of Technology of Cambodia <i
                                            class='bx bx-link'></i></a>.
                                    I have a solid background in <span class="fw-bold">frontend development using
                                        VueJs/NuxtJs</span>.
                                    Additionally, my previous experience in a startup environment allowed me to expand my skills into
                                    <span class="fw-bold">backend development with Laravel (PHP)</span> and
                                    <span class="fw-bold">assisting with mobile development team using Flutter.</span>
                                </p>
                                <p class="my-2">This cross-platform experience allows me to collaborate effectively. I'm
                                    currently
                                    searching new
                                    challenges and
                                    opportunities to enhance my skills.</p>
                            </div>
                            <div class="row my-4 d-flex align-items-center justify-content-center">
                                <div class="col-12 col-lg-5 col-md-4 col-xl-3">
                                    <span class="fw-bold uppercase d-flex flex-row align-items-center">
                                        <span class="me-2" style="font-size: 25px;"><i
                                                class='bx bx-terminal'></i></span>
                                        Core Tech Stack :</span>
                                </div>
                                <div class="col">
                                    <span class="fw-bold">JavaScript, TypeScript, VueJs, NuxtJs, Bootstrap, TailwindCSS,
                                        Laravel</span>
                                </div>
                            </div>
                            <div class="row my-3 d-flex align-items-center justify-content-center">
                                <div class="col-12 col-lg-5 col-md-4 col-xl-3">
                                    <span class="fw-bold uppercase d-flex flex-row align-items-center">
                                        <span class="me-2" style="font-size: 25px;"><i
                                                class='bx bxs-map'></i></span>Location :</span>
                                </div>
                                <div class="col">
                                    <span>Phnom Penh, Cambodia</span>
                                </div>
                            </div>
                            <div class="row my-3 d-flex align-items-center justify-content-center">
                                <div class="col-12 col-lg-5 col-md-4 col-xl-3">
                                    <span class="fw-bold uppercase d-flex flex-row align-items-center">
                                        <span class="me-2" style="font-size: 25px;"><i
                                                class='bx bx-palette'></i></span>Hobbies :</span>
                                </div>
                                <div class="col">
                                    <span>Read, Movie, Fitness(gym, running), Music, Travel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="mb-4">
            </div> -->
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
        // Grab all rows you want to animate
        const row = document.querySelector('.animate-row');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: row,           // Trigger is the specific row
                start: "top 70%",       // Starts when the row is 0% down the screen
                toggleActions: 'play none none none',
                once: true
            }
        })
        // Header first
        tl.from('#profile-header', {
            yPercent: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "all"
        });

        // Then profile card
        tl.from('.pfp-card', {
            yPercent: 5,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.1");
    });
});
onUnmounted(() => {
    ctx.revert(); // This kills ALL ScrollTriggers and resets ALL inline styles
});
</script>