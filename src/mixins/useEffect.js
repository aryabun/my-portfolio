import { ref, computed, onMounted, onUnmounted } from "vue";

export function moveUp() {
    const scrollY = ref(0);
    const onScroll = () => {
        scrollY.value = window.scrollY
    }
    onMounted(() => window.addEventListener('scroll', onScroll))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    return computed(() => {
        const moveAmount = scrollY.value * 0.02
        return {
            transform: `translate3d(0, ${-30 + moveAmount}%, 0)`
        }

    });
}
export function fadeIn() {
    const scrollY = ref(0);
    const onScroll = () => {
        scrollY.value = window.scrollY
    }
    onMounted(() => window.addEventListener('scroll', onScroll))
    onMounted(() => window.removeEventListener('scroll', onScroll))

    return computed(() => {
        const moveAmount = scrollY.value * 0.02
        console.log(moveAmount);
        return {
            transform: `translate3d(0, ${-30 + moveAmount}%, 0)`
        }

    });
}