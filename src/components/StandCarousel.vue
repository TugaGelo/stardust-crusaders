<script setup lang="ts">
import { useStandStore } from '@/stores/standStore';
import { storeToRefs } from 'pinia';
import TarotCard from './TarotCard.vue';

const standStore = useStandStore();

const { visibleCards } = storeToRefs(standStore);
const { nextCard, previousCard } = standStore;
</script>

<template>
  <div class="carousel-container">
    <button @click="previousCard" class="nav-button prev">&lt;</button>

    <div class="carousel-track">
      <TarotCard
        v-for="(stand, index) in visibleCards"
        :key="stand.id"
        :stand="stand"
        :is-active="index === 3"
      />
    </div>

    <button @click="nextCard" class="nav-button next">&gt;</button>
  </div>
</template>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: relative;
}

.carousel-track {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 80%;
  perspective: 1000px;
}

.nav-button {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  z-index: 200;
  position: absolute;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-button.prev {
  left: 5%;
}

.nav-button.next {
  right: 5%;
}
</style>