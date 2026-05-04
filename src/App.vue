<script setup>
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
// import MyWorkView from './views/MyWorkView.vue';
import SkillView from './views/SkillView.vue';

</script>

<template>
  <NavBar />
  <HomeView id="home" />
  <AboutView id="about" />
  <SkillView id="skill" />
  <!-- <MyWorkView id="myWork" /> -->
  <ContactView id="contact" />
</template>
<style></style>
