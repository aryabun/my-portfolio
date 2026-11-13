<template>
    <section id="about-me">
        <main :id="id" class="container">
            <div class="animate-row d-flex flex-column my-4">
                <HeaderComponent id="profile-header" label="Profile" />
                <div class="pfp-card mx-3">
                    <div class="d-flex flex-column">
                        <div class="mx-auto avatar-wrapper">
                            <!-- Profile photo, clipped to circle -->
                            <div class="pfp-container">
                                <img src="@/assets/img/IMG4449.png" alt="profile_pic" class="avatar-pic" />
                            </div>
                            <!-- Frame overlays on top, NOT inside pfp-container -->
                            <img src="@/assets/img/frame.png" alt="frame" class="avatar-frame" />
                        </div>

                    </div>
                    <div class="d-flex flex-column gap-2 mx-auto align-items-center">
                        <div class="d-flex flex-wrap align-items-center gap-2">
                            <i class='bx bx-map'></i><span>Phnom Penh, Cambodia</span>
                        </div>
                        <div class="d-flex flex-row gap-3">
                            <a class="p-0 btn btn-link d-flex align-items-center" href="https://github.com/aryabun"
                                target="_blank">
                                <i class='bx bxl-github' style="font-size: 30px;"></i>
                            </a>
                            <a class="p-0 btn btn-link d-flex align-items-center"
                                href="https://www.linkedin.com/in/arya-bun-9464a31a4/" target="_blank">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/3840px-LinkedIn_icon.svg.png"
                                    alt="" style="width: 30px;">
                            </a>
                            <a class="p-0 btn btn-link d-flex align-items-center"
                                href="https://www.instagram.com/apsararya_/" target="_blank">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt=""
                                    style="width: 30px;">
                            </a>
                        </div>
                    </div>
                    <div class="d-flex flex-column mx-2 p-4 ">
                        <div class="d-flex flex-column mb-4 text-center">
                            <p class="my-2">I am a frontend developer, graduated from Institute of Technology of
                                Cambodia . I have a solid background in frontend development using VueJs/NuxtJs.
                            </p>
                            <p class="my-2">
                                Additionally, my previous experience in a startup environment allowed me to expand my
                                skills into backend development with Laravel (PHP) and assisting with mobile development
                                team using Flutter.
                            </p>
                            <p class="my-2">This cross-platform experience allows me to collaborate effectively. I'm currently searching new challenges and opportunities to enhance my skills.
                            </p>
                        </div>
                        <div class="d-flex flex-column align-items-center justify-content-center m-2">
                            <span class="fw-bold uppercase d-flex flex-row align-items-center">
                                <span class="me-2" style="font-size: 25px;"><i class='bx bx-terminal'></i></span>
                                Core Tech Stack :</span>
                            <span class="fw-bold d-flex flex-wrap align-items-center">
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">JavaScript</div>
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">TypeScript</div>
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">Php</div>
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">VueJs</div>
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">NuxtJs</div>
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">Bootstrap</div>
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">TailwindCSS</div>
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">Laravel</div>
                            </span>
                        </div>
                        <div class="d-flex flex-column align-items-center justify-content-center m-2">
                            <span class="fw-bold uppercase d-flex flex-row align-items-center">
                                <span class="me-2" style="font-size: 25px;"><i class='bx bx-palette'></i></span>
                                Hobbies :</span>
                            <span class="fw-bold d-flex flex-wrap align-items-center">
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">Read</div>
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">Movie</div>
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">Fitness</div>
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">Music</div>
                                <div class="m-2 badge border border-secondary text-dark rounded-pill">Travel</div>
                            </span>
                        </div>
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

        // 2. The Heartbeat Effect (Scale up and snap back)
        gsap.to(".avatar-frame", {
            scale: 1.03,       // Grow by 15%
            duration: 0.6,     // Time to expand
            repeat: -1,        // Repeat forever
            yoyo: true,        // Shrink back down smoothly
            ease: "power1.inOut" // Soft easing makes it feel organic like a pulse
        });
    });
});
onUnmounted(() => {
    ctx.revert(); // This kills ALL ScrollTriggers and resets ALL inline styles
});
</script>