<template>
    <div class="bg-transparent">
        <div class="nav">
            <div class="container">
                <div class="d-flex flex-column justify-content-center align-items-center h-100">
                    <div class="d-flex flex-row justify-content-between align-items-stretch w-100">
                        <div class="d-flex flex-row">
                            <router-link :to="{ path: '/', hash: '#home' }">
                                <img src="@/assets/img/apsararya_flower.png" class="logo" alt="logo">
                            </router-link>
                        </div>
                        <div class="d-flex flex-row">
                            <router-link class="nav-items" :to="{ path: '/', hash: '#home' }">Home</router-link>
                            <router-link class="nav-items" :to="{ path: '/', hash: '#about' }">About</router-link>
                            <router-link class="nav-items" :to="{ path: '/', hash: '#myWork' }">My Works</router-link>
                            <router-link class="nav-items" :to="{ path: '/', hash: '#contact' }">Contact</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidenav">
            <router-link id="fv-dots" :to="{ path: '/', hash: '#home' }"></router-link>
            <router-link id="fv-dots" :to="{ path: '/', hash: '#about' }"></router-link>
            <router-link id="fv-dots" :to="{ path: '/', hash: '#myWork' }"></router-link>
            <router-link id="fv-dots" :to="{ path: '/', hash: '#contact' }"></router-link>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="css" scoped>
.logo {
    height: 1.8rem;
    margin: 10px 0;
}
</style>