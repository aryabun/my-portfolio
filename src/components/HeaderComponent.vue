<template>
    <div class="col-12 custom-header">
        <div class="container">
            <div class="d-flex flex-row sticky-header">
                <h1 class="element title-md uppercase me-3"><span>
                        {{ props.label }}
                    </span></h1>
            </div>
            <slot></slot>
        </div>
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
                duration: 0.5,
                opacity: 0,
                y: 10,
                ease: "none",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: target,
                    start: "top 80%", // Starts when element is near bottom of viewport
                    once: true        // This is the magic key: it kills the trigger after it plays once
                }
            });
        });
    });
});
onUnmounted(() => {
    ctx.revert(); // This kills ALL ScrollTriggers and resets ALL inline styles
});
</script>