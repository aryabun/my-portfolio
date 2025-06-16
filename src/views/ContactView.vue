<template>
    <div :id="id" class="container mt-3">
        <div class="card">
            <div class="card-header">
                <h1>Contact</h1>
            </div>
            <div class="card-body">
                this is the body part
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  id: { type: String, required: false }
})
</script>