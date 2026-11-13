<script setup>
import PageLoader from './components/utils/PageLoader.vue';
import NavBar from './components/layouts/NavBar.vue';
import HeroComponent from './components/sections/HeroComponent.vue'
import ProfileComponent from './components/sections/ProfileComponent.vue';
import EducationComponent from './components/sections/EducationComponent.vue';
import ExperienceComponent from './components/sections/ExperienceComponent.vue';
import SkillComponent from './components/sections/SkillComponent.vue';
import ContactComponent from './components/sections/ContactComponent.vue';
import CertificateComponent from './components/sections/CertificateComponent.vue';
import { onMounted } from 'vue'

onMounted(() => {
  document.title = "BUN Arya Portfolio"
});

</script>

<template>
  <PageLoader>
    <NavBar />
    <HeroComponent />
    <ProfileComponent />
    <ExperienceComponent />
    <EducationComponent />
    <CertificateComponent/>
    <SkillComponent />
    <ContactComponent />
  </PageLoader>
</template>
<style></style>
