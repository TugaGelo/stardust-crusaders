<script setup lang="ts">
import { useStandStore } from '@/stores/standStore';
import { storeToRefs } from 'pinia';

const standStore = useStandStore();

// We get 'activeCard' instead of 'hoveredStand'
const { visibleCards, activeCard } = storeToRefs(standStore);
// We no longer need 'setHoveredStand'
const { nextCard, previousCard } = standStore;
</script>

<template>
  <main>
    <div class="info-box">
      <div v-if="activeCard" class="info-content">
        <img :src="activeCard.userImageUrl" :alt="activeCard.user" class="user-image" />
        <div class="stand-details">
          <h2>{{ activeCard.name }} ({{ activeCard.tarotCard }})</h2>
          <h3>User: {{ activeCard.user }}</h3>
          <h4>Abilities:</h4>
          <ul>
            <li v-for="ability in activeCard.abilities" :key="ability">
              {{ ability }}
            </li>
          </ul>
        </div>
        <img :src="activeCard.standImageUrl" :alt="activeCard.name" class="stand-image" />
      </div>
    </div>

    <div class="carousel-container">
      <button @click="previousCard" class="nav-button prev">&lt;</button>
      
      <div class="carousel-track">
        <div
          v-for="(stand, index) in visibleCards"
          :key="stand.id"
          class="card"
          :class="{ 'card--active': index === 3 }"
        >
          <img :src="stand.tarotCardImageUrl" :alt="stand.tarotCard" />
        </div>
      </div>

      <button @click="nextCard" class="nav-button next">&gt;</button>
    </div>
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

.info-box {
  width: 700px;
  min-height: 220px;
  background: rgba(43, 43, 63, 0.85);
  border: 1px solid #7a42f4;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 200;
}

.info-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.user-image, .stand-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #fca311;
}

.stand-details { flex-grow: 1; padding: 0 20px; }
.info-box h2 { color: #fca311; margin-top: 0; }
.info-box ul { list-style: none; padding: 0; font-size: 0.9em; }
.info-box li { padding: 2px 0; }

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
