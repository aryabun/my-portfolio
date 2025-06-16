<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';
import MyWorkView from './views/MyWorkView.vue';

</script>

<template>
  <HeaderComponent />
  <section id="home" class="home-background">
    <HomeView id="home" />
  </section>
  <section id="about">
    <AboutView id="about" />
  </section>
  <section id="myWork">
    <MyWorkView id="myWork" />
  </section>
  <section id="contact">
    <ContactView id="contact" />
  </section>
</template>
<style></style>
