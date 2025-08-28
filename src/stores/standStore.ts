import { defineStore } from 'pinia';
import type { Stand } from '@/types';

export const useStandStore = defineStore('stands', {
  state: () => ({
    stands: [
      // The Fool
      {
        id: 1,
        name: 'The Fool',
        user: 'Iggy',
        tarotCard: 'The Fool',
        tarotCardImageUrl: '/images/tarot/The_Fool.png',
        standImageUrl: '/images/stand/The_Fool.png',
        userImageUrl: '/images/user/Iggy.png',
        abilities: ['Sand Manipulation', 'Shapeshifting', 'Glider'],
      },
      // The Magician
      {
        id: 2,
        name: "Magician's Red",
        user: 'Muhammad Avdol',
        tarotCard: 'The Magician',
        tarotCardImageUrl: '/images/tarot/The_Magician.png',
        standImageUrl: '/images/stand/The_Magician.png',
        userImageUrl: '/images/user/Avdol.png',
        abilities: ['Pyrokinesis', 'Crossfire Hurricane', 'Red Bind'],
      },
      // The High Priestess
      {
        id: 3,
        name: 'High Priestess',
        user: 'Midler',
        tarotCard: 'The High Priestess',
        tarotCardImageUrl: '/images/tarot/Priestess.png',
        standImageUrl: '/images/stand/Priestess.png',
        userImageUrl: '/images/user/Midler.png',
        abilities: ['Mineral Mimicry', 'Shapeshifting'],
      },
      // The Empress
      {
        id: 4,
        name: 'Empress',
        user: 'Nena',
        tarotCard: 'The Empress',
        tarotCardImageUrl: '/images/tarot/Empress.png',
        standImageUrl: '/images/stand/Empress.png',
        userImageUrl: '/images/user/Nena.png',
        abilities: ['Parasitic Growth', 'Blood Assimilation'],
      },
      // The Emperor
      {
        id: 5,
        name: 'Emperor',
        user: 'Hol Horse',
        tarotCard: 'The Emperor',
        tarotCardImageUrl: '/images/tarot/Emperor.png',
        standImageUrl: '/images/stand/Emperor.png',
        userImageUrl: '/images/user/Hol_Horse.png',
        abilities: ['Homing Bullets', 'Trajectory Control'],
      },
      // The Hierophant
      {
        id: 6,
        name: 'Hierophant Green',
        user: 'Noriaki Kakyoin',
        tarotCard: 'The Hierophant',
        tarotCardImageUrl: '/images/tarot/Hierophant.png',
        standImageUrl: '/images/stand/Hierophant.png',
        userImageUrl: '/images/user/Kakyoin.png',
        abilities: ['Emerald Splash', 'Body Manipulation', "Hierophant's Barrier"],
      },
      // The Lovers
      {
        id: 7,
        name: 'Lovers',
        user: 'Steely Dan',
        tarotCard: 'The Lovers',
        tarotCardImageUrl: '/images/tarot/Lovers.png',
        standImageUrl: '/images/stand/Lovers.png',
        userImageUrl: '/images/user/Steely_Dan.png',
        abilities: ['Damage Reflection', 'Microscopic Size', 'Spore Production'],
      },
      // The Chariot
      {
        id: 8,
        name: 'Silver Chariot',
        user: 'Jean Pierre Polnareff',
        tarotCard: 'The Chariot',
        tarotCardImageUrl: '/images/tarot/Chariot.png',
        standImageUrl: '/images/stand/Chariot.png',
        userImageUrl: '/images/user/Polnareff.png',
        abilities: ['Super Speed', 'Armor Detachment', 'Rapier Proficiency'],
      },
      // Strength
      {
        id: 9,
        name: 'Strength',
        user: 'Forever',
        tarotCard: 'Strength',
        tarotCardImageUrl: '/images/tarot/Strength.png',
        standImageUrl: '/images/stand/Strength.png',
        userImageUrl: '/images/user/Forever.png',
        abilities: ['Ship Augmentation', 'Total Control of Ship'],
      },
      // The Hermit
      {
        id: 10,
        name: 'Hermit Purple',
        user: 'Joseph Joestar',
        tarotCard: 'The Hermit',
        tarotCardImageUrl: '/images/tarot/Hermit.png',
        standImageUrl: '/images/stand/Hermit.png',
        userImageUrl: '/images/user/Joseph.png',
        abilities: ['Spirit Photography', 'Vine Manipulation', 'Hamon Conduction'],
      },
      // Wheel of Fortune
      {
        id: 11,
        name: 'Wheel of Fortune',
        user: 'ZZ',
        tarotCard: 'Wheel of Fortune',
        tarotCardImageUrl: '/images/tarot/Wheel.png',
        standImageUrl: '/images/stand/Wheel.png',
        userImageUrl: '/images/user/ZZ.png',
        abilities: ['Car Fusion', 'Body Modification', 'Gasoline Bullets'],
      },
      // Justice
      {
        id: 12,
        name: 'Justice',
        user: 'Enya the Hag',
        tarotCard: 'Justice',
        tarotCardImageUrl: '/images/tarot/Justice.png',
        standImageUrl: '/images/stand/Justice.png',
        userImageUrl: '/images/user/Enya.png',
        abilities: ['Fog Manipulation', 'Puppetry through Wounds'],
      },
      // The Hanged Man
      {
        id: 13,
        name: 'Hanged Man',
        user: 'J. Geil',
        tarotCard: 'The Hanged Man',
        tarotCardImageUrl: '/images/tarot/Hanged.png',
        standImageUrl: '/images/stand/Hanged.png',
        userImageUrl: '/images/user/Geil.png',
        abilities: ['Reflection Travel', 'Light-Speed Attack'],
      },
      // Death Thirteen
      {
        id: 14,
        name: 'Death Thirteen',
        user: 'Mannish Boy',
        tarotCard: 'Death Thirteen',
        tarotCardImageUrl: '/images/tarot/Death.png',
        standImageUrl: '/images/stand/Death.png',
        userImageUrl: '/images/user/Mannish.png',
        abilities: ['Dream World Control', 'Memory Erasure'],
      },
      // Temperance
      {
        id: 15,
        name: 'Yellow Temperance',
        user: 'Rubber Soul',
        tarotCard: 'Temperance',
        tarotCardImageUrl: '/images/tarot/Temperance.png',
        standImageUrl: '/images/stand/Temperance.png',
        userImageUrl: '/images/user/Soul.png',
        abilities: ['Assimilation', 'Impervious Defense', 'Shapeshifting'],
      },
      // The Devil
      {
        id: 16,
        name: 'Ebony Devil',
        user: 'Devo the Cursed',
        tarotCard: 'The Devil',
        tarotCardImageUrl: '/images/tarot/Devil.png',
        standImageUrl: '/images/stand/Devil.png',
        userImageUrl: '/images/user/Devo.png',
        abilities: ['Hate Amplification', 'Animates Inanimate Objects'],
      },
      // The Tower
      {
        id: 17,
        name: 'Tower of Gray',
        user: 'Gray Fly',
        tarotCard: 'The Tower',
        tarotCardImageUrl: '/images/tarot/Tower.png',
        standImageUrl: '/images/stand/Tower.png',
        userImageUrl: '/images/user/Gray.png',
        abilities: ['Extreme Speed', 'Tongue Ripping'],
      },
      // The Star
      {
        id: 18,
        name: 'Star Platinum',
        user: 'Jotaro Kujo',
        tarotCard: 'The Star',
        tarotCardImageUrl: '/images/tarot/Star.png',
        standImageUrl: '/images/stand/Star.png',
        userImageUrl: '/images/user/Jotaro.png',
        abilities: ['Super Strength', 'Super Speed', 'Precision', 'Time Stop'],
      },
      // The Moon
      {
        id: 19,
        name: 'Dark Blue Moon',
        user: 'Impostor Captain Tennille',
        tarotCard: 'The Moon',
        tarotCardImageUrl: '/images/tarot/Moon.png',
        standImageUrl: '/images/stand/Moon.png',
        userImageUrl: '/images/user/Tennille.png',
        abilities: ['Aquatic Superiority', 'Barnacle Growth', 'Sharp Scales'],
      },
      // The Sun
      {
        id: 20,
        name: 'Sun',
        user: 'Arabia Fats',
        tarotCard: 'The Sun',
        tarotCardImageUrl: '/images/tarot/Sun.png',
        standImageUrl: '/images/stand/Sun.png',
        userImageUrl: '/images/user/Fats.png',
        abilities: ['Intense Heat Generation', 'Energy Lasers'],
      },
      // Judgement
      {
        id: 21,
        name: 'Judgement',
        user: 'Cameo',
        tarotCard: 'Judgement',
        tarotCardImageUrl: '/images/tarot/Judgement.png',
        standImageUrl: '/images/stand/Judgement.png',
        userImageUrl: '/images/user/Cameo.png',
        abilities: ['Wish Granting (via Clay)', 'Clay Duplication'],
      },
      // The World
      {
        id: 22,
        name: 'The World',
        user: 'DIO',
        tarotCard: 'The World',
        tarotCardImageUrl: '/images/tarot/World.png',
        standImageUrl: '/images/stand/World.png',
        userImageUrl: '/images/user/DIO.png',
        abilities: ['Time Stop', 'Super Strength', 'Super Speed'],
      },
    ] as Stand[],

    activeIndex: 17, 
  }),

  getters: {
    visibleCards(state): Stand[] {
      const visibleCount = 7;
      const half = Math.floor(visibleCount / 2);
      const stands = state.stands;
      const active = state.activeIndex;
      
      const visible = [];
      for (let i = active - half; i <= active + half; i++) {
        let index = i % stands.length;
        if (index < 0) {
          index += stands.length;
        }
        visible.push(stands[index]);
      }
      return visible;
    },

    activeCard(state): Stand {
      return state.stands[state.activeIndex];
    },
  },

  actions: {
    nextCard() {
      this.activeIndex = (this.activeIndex + 1) % this.stands.length;
    },
    previousCard() {
      this.activeIndex = this.activeIndex - 1;
      if (this.activeIndex < 0) {
        this.activeIndex = this.stands.length - 1;
      }
    },
  },
});
