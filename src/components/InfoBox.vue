<script setup lang="ts">
import type { Stand } from '@/types';

defineProps<{
  activeCard: Stand | null;
}>();
</script>

<template>
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
</template>

<style scoped>
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
</style>