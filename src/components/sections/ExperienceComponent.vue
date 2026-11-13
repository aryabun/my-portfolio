<template>
    <section id="experiences">
        <main :id="id" class="container">
            <div class="exp-row d-flex flex-column m-3">
                <HeaderComponent id="exp-header" label="Experiences" />
                <div class="d-flex flex-column gap-4 exp-timeline py-5">

                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <div class="d-flex flex-column">
                            <h4>Freelance Frontend web developer</h4>
                        </div>
                        <h4>Aug 2024 - Dec 2025</h4>
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-center"
                        v-for="(exp, i) in experiences" :key="i">
                        <div class="d-flex flex-column">
                            <h4><a v-if="exp.org" :href="exp.org.link" target="_blank">{{
                                exp.org.name }}<i class='bx bx-link'></i></a></h4>
                            <p>{{ exp.title }}
                            </p>
                        </div>
                        <h4>{{ exp.date }}</h4>
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
const experiences = [
    {
        date: 'Aug 2023 - Sept 2024',
        title: 'Web Developer',
        org: { name: 'ITSOLUTIONCONSULTING.CA', link: 'https://www.itsc.ca/' },
    },
    {
        date: 'Feb 2023 - Oct 2023',
        title: 'ODOO Developer Intern',
        org: { name: 'RMA CAMBODIA PLC.', link: 'https://rmagroup.com/' },
    },
    {
        date: 'Jun 2022 - Oct 2022',
        title: 'Web Developer intern',
        org: { name: 'Khmer Foundation Appraisal Co, LTD', link: 'https://kfa.com.kh/' },
    },
];

gsap.registerPlugin(ScrollTrigger)
let ctx;
onMounted(() => {
    // Use gsap.context to wrap all animations
    ctx = gsap.context(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#exp-header',
                start: "top 80%",       // Starts when the row is 80% down the screen
                toggleActions: 'play none none none',
            }
        })
            .from('#exp-header', {
                xPercent: 5,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            })
            .from('.exp-timeline', {
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
<style scoped></style>