<template>
    <nav class="nav">
        <div class="container">
            <div class="d-flex flex-column justify-content-center align-items-center h-100">
                <div class="d-flex flex-row w-100">
                    <div class="d-flex flex-row justify-content-md-start align-items-end w-100 justify-content-center">
                        <img src="@/assets/img/A-drawn.png" class="logo" alt="logo">
                    </div>
                    <div
                        class="nav-element  d-none d-lg-flex d-flex flex-row align-items-center w-100 gap-4 justify-content-md-end">
                        <div><a href="#home">Home</a></div>
                        <div><a href="#profile">Profile</a></div>
                        <div><a href="#education">Education</a></div>
                        <div><a href="#experiences">Experiences</a></div>
                        <div><a href="#skill">Skills</a></div>
                        <div><a href="#contact">Contact</a></div>
                    </div>
                    <div class="plus-element d-flex flex-row d-lg-none justify-content-center align-items-center ">
                        <i class='bx bx-plus' style="font-size: 40px;"></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
let ctx;
onMounted(() => {

    // reset scroll on reload
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    ctx = gsap.context(() => {
        const showAnim = gsap
            .from(".nav", {
                yPercent: -100,
                paused: true,
                duration: 0.2
            })
            .progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            }
        });
        // Add this
        // ScrollTrigger.create({
        //     start: "700px top",
        //     end: 99999,
        //     onEnter: () => document.querySelector(".nav").classList.add("scrolled"),
        //     onLeaveBack: () => document.querySelector(".nav").classList.remove("scrolled"),
        // });
        let links = gsap.utils.toArray("nav a");

        links.forEach((a) => {

            let element = document.querySelector(
                a.getAttribute("href")
            );

            ScrollTrigger.create({
                trigger: element,
                start: "top center",
                end: "bottom center",

                onToggle: (self) => {
                    if (self.isActive) {
                        links.forEach((el) =>
                            el.classList.remove("active")
                        );

                        a.classList.add("active");
                    }
                }
            });
        });

    });
});

onUnmounted(() => {
    ctx?.revert();
});
</script>
<style lang="css" scoped>
.logo {
    height: 4rem;
    margin: 10px 0;
}
</style>