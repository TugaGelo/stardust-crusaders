<script setup lang="ts">
import { useStandStore } from '@/stores/standStore';
import { storeToRefs } from 'pinia';
import InfoBox from './components/InfoBox.vue';
import Carousel from './components/StandCarousel.vue';

const standStore = useStandStore();

const { activeCard } = storeToRefs(standStore);
</script>

<template>
  <main>
    <InfoBox :active-card="activeCard" />
    <Carousel />
  </main>
</template>

<style>
:root {
  --card-width: 150px;
  --card-height: 250px;
}

body {
  background-color: #1a1a2e;
  color: #e0e0e0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  overflow: hidden;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
</style>
