<template>
    <section id="education">
        <main :id="id" class="container">
            <div class="animate-row d-flex flex-lg-row flex-column my-4">
                <HeaderComponent id="education-header" label="Education" />
                <div class="education-timeline timeline">
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
                start: "top 80%",
                toggleActions: 'play none none none',
                once: true
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