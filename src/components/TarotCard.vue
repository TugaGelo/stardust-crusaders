<script setup lang="ts">
import type { Stand } from '@/types';

defineProps<{
  stand: Stand;
  isActive: boolean;
}>();
</script>

<template>
  <div class="card" :class="{ 'card--active': isActive }">
    <img :src="stand.tarotCardImageUrl" :alt="stand.tarotCard" />
  </div>
</template>

<style scoped>
.card {
  width: var(--card-width);
  height: var(--card-height);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  transform: scale(0.7) translateY(20px);
  opacity: 0.5;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
}

.card--active {
  transform: scale(1) translateY(0);
  opacity: 1;
  z-index: 100;
  border: 3px solid #fca311;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>