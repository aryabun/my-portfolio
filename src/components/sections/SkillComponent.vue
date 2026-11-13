<template>
    <section id="skill">
        <div :id="id" class="container">
            <HeaderComponent label="Skills" />
            <p class="skill-des  m-3">Technologies and Tools that i've been using and learning.</p>
            <div class="d-flex flex-column gap-4  m-3">
                <!-- START LANGUAGE CARD -->
                <div class="d-flex flex-column skill-card">
                    <div class="my-2">
                        <h4>Languages</h4>
                        <div class="divider rounded"></div>
                    </div>
                    <div class="d-flex flex-wrap gap-3 my-2">
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1280px-Typescript.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
                                    alt="" style="height: 30px;">
                                <span class="mx-2">TypeScript</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyC1LazfpPsDecwFwxiBe_L61Wmq8jWBBgL5Y2CI0wTQ&s=10"
                                    alt="" style="height: 30px;">
                                <span class="mx-2">Javacript</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <i class='bx bxl-php' style="font-size: 30px;"></i>
                                <span class="mx-2">Php</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Dart_programming_language_logo_icon.svg"
                                    alt="" style="height: 30px;">
                                <span class="mx-2">Dart</span>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- END LANGUAGE CARD -->
                <div class="d-flex flex-column skill-card">
                    <div class="my-2">
                        <h4>Frameworks & Libraries</h4>
                        <div class="divider rounded"></div>
                    </div>
                    <div class="d-flex flex-wrap gap-3 my-2">
                        <!-- VUEJs -->
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1280px-Vue.js_Logo_2.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                                    alt="" style="height: 30px;">
                                <span class="mx-2">VueJs</span>
                            </div>
                        </div>
                        <!-- NuxtJs -->
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://nuxt.com/assets/design-kit/icon-black.svg" alt="NuxtJs logo"
                                    style="height: 30px;">
                                <span class="mx-2">NuxtJs</span>
                            </div>
                        </div>
                        <!-- laravel -->
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/3840px-Laravel.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                                    alt="Laravel logo" style="height: 30px;">
                                <span class="mx-2">Laravel</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://static.freepnglogo.com/images/all_img/flutter-logo-8a54.png"
                                    alt="Flutter logo" style="height: 30px;">
                                <span class="mx-2">Flutter</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://images.seeklogo.com/logo-png/38/2/bootstrap-5-logo-png_seeklogo-386607.png"
                                    alt="Bootstrap logo" style="height: 30px;">
                                <span class="mx-2">Bootstrap</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png" alt="SCSS logo"
                                    style="height: 30px;">
                                <span class="mx-2">SCSS</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                                    alt="TailwindCSS logo" style="height: 30px;">
                                <span class="mx-2">TailwindCSS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column skill-card">
                    <div class="my-2">
                        <h4>Tools</h4>
                        <div class="divider rounded"></div>
                    </div>
                    <div class="d-flex flex-wrap gap-3 my-2">
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
                                    alt="Postman logo" style="height: 30px;">
                                <span class="mx-2">Postman</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Visual_Studio_Code_1.35_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
                                    alt="VS Code logo" style="height: 30px;">
                                <span class="mx-2">VS Code</span>
                            </div>
                        </div>

                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/3840px-Git_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                                    alt="git logo" style="height: 30px;">
                                <span class="mx-2">Git</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/gitlab-icon.png"
                                    alt="GitLab logo" style="height: 30px;">
                                <span class="mx-2">GitLab</span>
                            </div>

                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/HeidiSQL_logo_image.png"
                                    alt="HeidiSQL logo" style="height: 30px;">
                                <span class="mx-2">HeidiSQL</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1920px-Figma-logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                                    alt="Figma logo" style="height: 30px;">
                                <span class="mx-2">Figma</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/250px-Adobe_Photoshop_CC_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail"
                                    alt="Adobe Photoshop logo" style="height: 30px;">
                                <span class="mx-2">Adobe Photoshop</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/960px-Adobe_Illustrator_CC_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                                    alt="Adobe Illustrator logo" style="height: 30px;">
                                <span class="mx-2">Adobe Illustrator</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Microsoft_Office_logo_%282013%E2%80%932019%29.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
                                    alt="MS Office logo" style="height: 30px;">
                                <span class="mx-2">MS Office</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column skill-card">
                    <div class="my-2">
                        <h4>Databases</h4>
                        <div class="divider rounded"></div>
                    </div>
                    <div class="d-flex flex-wrap gap-3 my-2">
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/3840px-Postgresql_elephant.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                                    alt="PostgreSQL logo" style="height: 30px;">
                                <span class="mx-2">PostgreSQL</span>
                            </div>
                        </div>
                        <!-- <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <i class='bx bxl-mongodb' style="font-size: 30px;"></i>
                                <span class="mx-2">MongoDB</span>
                            </div>
                        </div> -->
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="MySQL logo"
                                    style="height: 30px;">
                                <span class="mx-2">MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column skill-card">
                    <div class="my-2">
                        <h4>Other</h4>
                        <div class="divider rounded"></div>
                    </div>
                    <div class="d-flex flex-wrap gap-3 my-2">
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://www.svgrepo.com/show/361368/terminal-linux.svg" alt="Linux logo"
                                    style="height: 30px;">
                                <span class="mx-2">Linux</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://static.vecteezy.com/system/resources/previews/072/678/006/non_2x/firebase-logo-icon-free-png.png"
                                    alt="firebase logo" style="height: 30px;">
                                <span class="mx-2">Firebase</span>
                            </div>
                        </div>
                        <div class="inline-flex badge border text-dark rounded-pill">
                            <div class="d-flex flex-row align-items-center">
                                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/960px-Android_robot.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                                    alt="Android logo" style="height: 30px;">
                                <span class="mx-2">Android</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from 'vue';
import HeaderComponent from '../HeaderComponent.vue';
defineProps({
    id: { type: String, required: false }
});
gsap.registerPlugin(ScrollTrigger)
let ctx;
onMounted(() => {
    // Use gsap.context to wrap all animations
    ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.skill-des',           // Trigger is the specific row
                start: "top 80%",       // Starts when the row is 80% down the screen
                toggleActions: 'play none none none',
            }
        });
        // 1. Skill description eases in first
        tl.from('.skill-des', {
            xPercent: 5,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
        }, "-=0.3");

        // 2. Glass cards slide in from bottom (y: 50) to top one by one
        tl.from('.skill-card', {
            y: 50,           // Move from 50px below
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,    // This creates the "one by one" effect (0.2s delay between each)
        }, "-=0.4");         // Overlap slightly with the previous animation for smoothness

    });
});
onUnmounted(() => {
    ctx.revert(); // This kills ALL ScrollTriggers and resets ALL inline styles
});
</script>
<style scoped>
.header {
    position: static;
}
</style>