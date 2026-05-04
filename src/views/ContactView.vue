<template>
    <section id="contact">
      <HeaderComponent :label="`Contact`"/>
      <div :id="id" class="container">
         
      </div>
    </section>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
defineProps({
  id: { type: String, required: false }
})
</script>