<template>
    <section id="experiences">
        <main :id="id" class="container">
            <div class="exp-row d-flex flex-xl-row flex-column my-4 ms-3 me-1">
                <HeaderComponent id="exp-header" label="Experiences" />
                <div class="exp-timeline timeline">
                    <div class="content-block" v-for="(exp, i) in experiences" :key="i">
                        <i class='icon bx bx-buildings'></i>
                        <div class="exp-content content">
                            <div class="d-flex flex-row">
                                <span class="me-3 badge border border-danger text-danger rounded-pill">
                                    <i class='bx bxs-circle p-1' style="color: red; font-size: 10px;"></i>
                                    <i class=" fw-bold">{{ exp.date }}</i>
                                </span>
                            </div>
                            <p class="d-flex align-items-center gap-2 my-2">
                                <span class="fw-bold badge border border-dark text-dark rounded-pill">
                                    <i class='bx bxs-map pe-1' style="font-size: 10px;"></i>{{ exp.location }}
                                </span>
                                <span class="badge rounded-pill uppercase" :class="exp.type.style">{{ exp.type.name }}</span>
                            </p>
                            <div class=" d-flex flex-wrap uppercase my-4">
                                <h2 class="fw-bold me-2">{{ exp.title }},</h2>
                                <span>
                                    <a class="text-muted" :href="exp.org.link" target="_blank">{{ exp.org.name }}<i
                                            class='bx bx-link'></i></a>
                                </span>
                            </div>
                            <ul v-for="(des, k) in exp.description" :key="k" class="gap-0">
                                <li>{{ des.name }}</li>
                            </ul>
                            <div class="card-footer-socials w-100  border-top">
                                <div class="d-flex pt-3"></div>
                                 <span v-for="(stack, j) in exp.tech" :key="j" class="m-1 badge border rounded-pill"
                                    :class="stack.style">{{
                                        stack.name }}</span>
                            </div>
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
const experiences = [
    {
        date: "Aug 2024 - Dec 2025",
        location: 'Phnom Penh, Cambodia',
        type: { name: 'Freelance', style: 'text-bg-warning' },
        title: 'Freelance Frontend web developer',
        org: { name: 'FinTech Center', link: 'https://fintech.fsa.gov.kh/?lang=en' },
        tech: [
            { name: 'NuxtJs', style: 'border-success text-success ' },
            { name: 'TypeScript', style: 'border-primary text-primary ' },
            { name: 'Bootstrap', style: 'border-dark' },
            { name: 'Element+', style: 'border-primary text-primary ' },
            { name: 'Axios', style: 'border-dark ' },
        ],
        description: [
            { name: 'Analyzed M&E System and business needs.' },
            { name: 'Implemented visual data graph for dashboard.' },
            { name: 'Designed and implemented authentication.' },
            { name: 'Designed, developed and maintained User Management features.' },
        ]
    },
    {
        date: 'Aug 2023 - Sept 2024',
        location: 'Phnom Penh, Cambodia',
        type: { name: 'Full-time', style: 'text-bg-success' },
        title: 'WEB DEVELOPER',
        org: { name: 'ITSOLUTIONCONSULTING.CA', link: 'https://www.itsc.ca/' },
        tech: [
            { name: 'Laravel', style: 'border-danger text-danger ' },
            { name: 'VueJs', style: 'border-success text-success ' },
            { name: 'MySQL', style: 'border-primary text-primary ' },
            { name: 'Flutter', style: 'border-primary text-primary ' },
            { name: 'Firebase', style: 'border-dark' },
        ],
        description: [
            { name: 'Designed UI/UX and developed frontend web applications.' },
            { name: 'Built real-time notifications for order management features.' },
            { name: 'Collaborated and assisted mobile development using flutter.' },
            { name: 'Assisted backend tasks when needed.' },
        ]
    },
    {
        date: 'Feb 2023 - Oct 2023',
        location: 'Phnom Penh, Cambodia',
        type: { name: 'Internship', style: 'text-bg-info' },
        title: 'ODOO DEVELOPer Intern',
        org: { name: 'RMA CAMBODIA PLC.', link: 'https://rmagroup.com/' },
        tech: [
            { name: 'Odoo', style: 'border-primary text-primary ' },
            { name: 'XML', style: 'border-dark ' },
            { name: 'Python', style: 'border-primary text-primary ' },
            { name: 'PostgreSQL', style: 'border-info text-info ' },
        ],
        description: [
            { name: 'Developed and customized Odoo HR modules.' },
            { name: 'Extended existing features using Python and XML.' },
            { name: 'Assisted in implementing HR workflows' },
        ]
    },
    {
        date: 'Jun 2022 - Oct 2022',
        location: 'Phnom Penh, Cambodia',
        type: { name: 'Internship', style: 'text-bg-info' },
        title: 'WEB DEVELOPER intern',
        org: { name: 'Khmer Foundation Appraisal Co, LTD', link: 'https://kfa.com.kh/' },
        tech: [
            { name: 'Laravel', style: 'border-danger text-danger ' },
            { name: 'VueJs', style: 'border-success text-success ' },
            { name: 'MySQL', style: 'border-primary text-primary ' },
            { name: 'Google Map API', style: 'border-success text-success ' },
        ],
        description: [
            { name: 'Designed UI/UX for CRM System using Figma.' },
            { name: 'Developed and maintained a CRM system using VueJs.' },
            { name: 'Built and integrated RESTful APIs to support mobile application using LaravelV.' },
            { name: 'Integrated Google Maps API to enable property search and listings for property management.' },
        ]
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
                start: "top 80%",
                toggleActions: 'play none none none',
                once: true
            }
        })
            .from('#exp-header', {
                duration: 0.6,
                opacity: 0,
                y: 30,
                ease: "power3.out"
            })
            .from('.exp-timeline', {
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
<style scoped></style>