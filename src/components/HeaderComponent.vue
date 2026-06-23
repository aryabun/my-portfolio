<template>
    <div class="d-flex flex-row header w-100">
        <h1 class="element title-md"><span>
                {{ props.label }}
            </span></h1>
    </div>
</template>
<script setup>
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import { onMounted, onUnmounted } from 'vue';
gsap.registerPlugin(SplitText)
const props = defineProps({
    label: {
        type: String,
        required: true
    }
});
let ctx;
onMounted(() => {
    // Use gsap.context to wrap all animations
    ctx = gsap.context(() => {
        const targets = gsap.utils.toArray(".element");
        targets.forEach((target) => {
            let SplitClient = new SplitText(target, { type: "words,chars" });
            let chars = SplitClient.chars; //an array of all the divs that wrap each character
            gsap.from(chars, {
                duration: 0.3,
                opacity: 0,
                y: 5,
                ease: "none",
                stagger: 0.08,
                scrollTrigger: {
                    trigger: target,
                    start: "top 80%", // Starts when element is near bottom of viewport
                    once: true        // kills the trigger after it plays once
                }
            });
        });
        
    });
});
onUnmounted(() => {
    ctx.revert(); // This kills ALL ScrollTriggers and resets ALL inline styles
});
</script>