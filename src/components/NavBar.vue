<template>
    <nav class="nav">
        <div class="container">
            <div class="d-flex flex-column justify-content-center align-items-center h-100">
                <div class="d-flex flex-row w-100">
                    <div class="d-flex flex-row justify-content-end w-100">
                        <router-link :to="{ path: '/', hash: '#home' }">
                            <img src="@/assets/img/A-drawn.png" class="logo" alt="logo">
                        </router-link>
                    </div>
                    <div class="d-flex flex-row justify-content-end align-items-center w-100">
                        <i class='bx bx-menu' style="font-size: 40px;"></i>
                        <!-- <router-link class="nav-items" :to="{ path: '/', hash: '#about' }">About Me</router-link>
                        <router-link class="nav-items" :to="{ path: '/', hash: '#myWork' }">My Works</router-link>
                        <router-link class="nav-items" :to="{ path: '/', hash: '#contact' }">Contact</router-link> -->
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
</script>
<style lang="css" scoped>
.logo {
    height: 5rem;
    margin: 10px 0;
}
</style>