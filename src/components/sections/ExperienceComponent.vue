<template>
    <section id="experiences">
        <main :id="id" class="container">
            <div class="exp-row d-flex flex-lg-row flex-column my-4">
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
                                <span class="badge rounded-pill" :class="exp.type.style">{{ exp.type.name }}</span>
                            </p>
                            <div class=" d-flex flex-column flex-md-row flex-sm-column my-4">
                                <h2 class="me-2">{{ exp.title }},</h2>
                                <span>
                                    <a :href="exp.org.link" target="_blank">{{ exp.org.name }}<i
                                            class='bx bx-link'></i></a>
                                </span>
                            </div>
                            <div class="d-flex flex-wrap flex-md-row flex-lg-row flex-sm-column py-2 gap-2">
                                <p>Tech Stack:
                                </p>
                                <span v-for="(stack, j) in exp.tech" :key="j" class="badge border rounded-pill"
                                    :class="stack.style">{{
                                        stack.name }}</span>
                            </div>
                            <ul v-for="(des, k) in exp.description" :key="k" class="gap-0">
                                <li>{{ des.name }}</li>
                            </ul>
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
        date: "Aug, 2024 - Dec, 2025",
        location: 'Phnom Penh, Cambodia',
        type: { name: 'Freelance', style: 'text-bg-warning' },
        title: 'Frontend web developer',
        org: { name: 'FinTech Center', link: 'https://fintech.fsa.gov.kh/?lang=en' },
        tech: [
            { name: 'NuxtJs', style: 'border-success text-success ' },
            { name: 'TypeScript', style: 'border-primary text-primary ' },
            { name: 'Bootstrap', style: 'border-dark' },
            { name: 'Element+', style: 'border-primary text-primary ' },
            { name: 'Axios', style: 'border-dark ' },
        ],
        description: [
            { name: 'Study M&E System business flow' },
            { name: 'Implement graph in dashboard for M&E System' },
            { name: 'Design and implement authentication' },
            { name: 'Design, develop and maintain User Management features' },
        ]
    },
    {
        date: 'Aug/2023 - Sept/2024',
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
            { name: 'Design UI/UX and develop frontend web applications' },
            { name: 'Built features real-time notifications for order management' },
            { name: 'Collaborate and assisting mobile and backend tasks' },
        ]
    },
    {
        date: 'Feb/2023 - Oct/2023',
        location: 'Phnom Penh, Cambodia',
        type: { name: 'Internship', style: 'text-bg-info' },
        title: 'ODOO DEVELOPMENT',
        org: { name: 'RMA CAMBODIA PLC.', link: 'https://rmagroup.com/' },
        tech: [
            { name: 'Odoo', style: 'border-primary text-primary ' },
            { name: 'XML', style: 'border-dark ' },
            { name: 'Python', style: 'border-primary text-primary ' },
            { name: 'PostgreSQL', style: 'border-info text-info ' },
        ],
        description: [
            { name: 'Developed and customized Odoo HR modules' },
            { name: 'Extended existing features using Python and XML' },
            { name: 'Assisted in implementing HR workflows' },
        ]
    },
    {
        date: 'Jun, 2022 - Oct, 2022',
        location: 'Phnom Penh, Cambodia',
        type: { name: 'Internship', style: 'text-bg-info' },
        title: 'WEB DEVELOPER',
        org: { name: 'Khmer Foundation Appraisal Co, LTD', link: 'https://kfa.com.kh/' },
        tech: [
            { name: 'Laravel', style: 'border-danger text-danger ' },
            { name: 'VueJs', style: 'border-success text-success ' },
            { name: 'MySQL', style: 'border-primary text-primary ' },
            { name: 'Google Map API', style: 'border-success text-success ' },
        ],
        description: [
            { name: 'Developed and maintained a CRM system' },
            { name: 'Built and integrated RESTful APIs to support mobile application' },
            { name: 'Integrated Google Maps API to enable property search and listings for property management' },
        ]
    },
];

gsap.registerPlugin(ScrollTrigger)
let ctx;
onMounted(() => {
    // Use gsap.context to wrap all animations
    ctx = gsap.context(() => {
        gsap.set('.exp-timeline', {
            opacity: 0,
            xPercent: 2
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.exp-row',
                start: "top 80%",
                toggleActions: 'play none none none',
                once: true
            }
        });

        // Header animation
        tl.from('#exp-header', {
            y: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        // Timeline animation AFTER header finishes
        tl.to('.exp-timeline', {
            xPercent: 2,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        });

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