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
        tarotCardImageUrl: '/images/card_fool.png',
        standImageUrl: '/images/stand_the_fool.png',
        userImageUrl: '/images/user_iggy.png',
        abilities: ['Sand Manipulation', 'Shapeshifting', 'Glider'],
      },
      // The Magician
      {
        id: 2,
        name: "Magician's Red",
        user: 'Muhammad Avdol',
        tarotCard: 'The Magician',
        tarotCardImageUrl: '/images/card_magician.png',
        standImageUrl: '/images/stand_magicians_red.png',
        userImageUrl: '/images/user_muhammad_avdol.png',
        abilities: ['Pyrokinesis', 'Crossfire Hurricane', 'Red Bind'],
      },
      // The High Priestess
      {
        id: 3,
        name: 'High Priestess',
        user: 'Midler',
        tarotCard: 'The High Priestess',
        tarotCardImageUrl: '/images/card_high_priestess.png',
        standImageUrl: '/images/stand_high_priestess.png',
        userImageUrl: '/images/user_midler.png',
        abilities: ['Mineral Mimicry', 'Shapeshifting'],
      },
      // The Empress
      {
        id: 4,
        name: 'Empress',
        user: 'Nena',
        tarotCard: 'The Empress',
        tarotCardImageUrl: '/images/card_empress.png',
        standImageUrl: '/images/stand_empress.png',
        userImageUrl: '/images/user_nena.png',
        abilities: ['Parasitic Growth', 'Blood Assimilation'],
      },
      // The Emperor
      {
        id: 5,
        name: 'Emperor',
        user: 'Hol Horse',
        tarotCard: 'The Emperor',
        tarotCardImageUrl: '/images/card_emperor.png',
        standImageUrl: '/images/stand_emperor.png',
        userImageUrl: '/images/user_hol_horse.png',
        abilities: ['Homing Bullets', 'Trajectory Control'],
      },
      // The Hierophant
      {
        id: 6,
        name: 'Hierophant Green',
        user: 'Noriaki Kakyoin',
        tarotCard: 'The Hierophant',
        tarotCardImageUrl: '/images/card_hierophant.png',
        standImageUrl: '/images/stand_hierophant_green.png',
        userImageUrl: '/images/user_noriaki_kakyoin.png',
        abilities: ['Emerald Splash', 'Body Manipulation', "Hierophant's Barrier"],
      },
      // The Lovers
      {
        id: 7,
        name: 'Lovers',
        user: 'Steely Dan',
        tarotCard: 'The Lovers',
        tarotCardImageUrl: '/images/card_lovers.png',
        standImageUrl: '/images/stand_lovers.png',
        userImageUrl: '/images/user_steely_dan.png',
        abilities: ['Damage Reflection', 'Microscopic Size', 'Spore Production'],
      },
      // The Chariot
      {
        id: 8,
        name: 'Silver Chariot',
        user: 'Jean Pierre Polnareff',
        tarotCard: 'The Chariot',
        tarotCardImageUrl: '/images/card_chariot.png',
        standImageUrl: '/images/stand_silver_chariot.png',
        userImageUrl: '/images/user_jean_pierre_polnareff.png',
        abilities: ['Super Speed', 'Armor Detachment', 'Rapier Proficiency'],
      },
      // Strength
      {
        id: 9,
        name: 'Strength',
        user: 'Forever',
        tarotCard: 'Strength',
        tarotCardImageUrl: '/images/card_strength.png',
        standImageUrl: '/images/stand_strength.png',
        userImageUrl: '/images/user_forever.png',
        abilities: ['Ship Augmentation', 'Total Control of Ship'],
      },
      // The Hermit
      {
        id: 10,
        name: 'Hermit Purple',
        user: 'Joseph Joestar',
        tarotCard: 'The Hermit',
        tarotCardImageUrl: '/images/card_hermit.png',
        standImageUrl: '/images/stand_hermit_purple.png',
        userImageUrl: '/images/user_joseph_joestar.png',
        abilities: ['Spirit Photography', 'Vine Manipulation', 'Hamon Conduction'],
      },
      // Wheel of Fortune
      {
        id: 11,
        name: 'Wheel of Fortune',
        user: 'ZZ',
        tarotCard: 'Wheel of Fortune',
        tarotCardImageUrl: '/images/card_wheel_of_fortune.png',
        standImageUrl: '/images/stand_wheel_of_fortune.png',
        userImageUrl: '/images/user_zz.png',
        abilities: ['Car Fusion', 'Body Modification', 'Gasoline Bullets'],
      },
      // Justice
      {
        id: 12,
        name: 'Justice',
        user: 'Enya the Hag',
        tarotCard: 'Justice',
        tarotCardImageUrl: '/images/card_justice.png',
        standImageUrl: '/images/stand_justice.png',
        userImageUrl: '/images/user_enya_the_hag.png',
        abilities: ['Fog Manipulation', 'Puppetry through Wounds'],
      },
      // The Hanged Man
      {
        id: 13,
        name: 'Hanged Man',
        user: 'J. Geil',
        tarotCard: 'The Hanged Man',
        tarotCardImageUrl: '/images/card_hanged_man.png',
        standImageUrl: '/images/stand_hanged_man.png',
        userImageUrl: '/images/user_j_geil.png',
        abilities: ['Reflection Travel', 'Light-Speed Attack'],
      },
      // Death Thirteen
      {
        id: 14,
        name: 'Death Thirteen',
        user: 'Mannish Boy',
        tarotCard: 'Death Thirteen',
        tarotCardImageUrl: '/images/card_death_thirteen.png',
        standImageUrl: '/images/stand_death_thirteen.png',
        userImageUrl: '/images/user_mannish_boy.png',
        abilities: ['Dream World Control', 'Memory Erasure'],
      },
      // Temperance
      {
        id: 15,
        name: 'Yellow Temperance',
        user: 'Rubber Soul',
        tarotCard: 'Temperance',
        tarotCardImageUrl: '/images/card_temperance.png',
        standImageUrl: '/images/stand_yellow_temperance.png',
        userImageUrl: '/images/user_rubber_soul.png',
        abilities: ['Assimilation', 'Impervious Defense', 'Shapeshifting'],
      },
      // The Devil
      {
        id: 16,
        name: 'Ebony Devil',
        user: 'Devo the Cursed',
        tarotCard: 'The Devil',
        tarotCardImageUrl: '/images/card_devil.png',
        standImageUrl: '/images/stand_ebony_devil.png',
        userImageUrl: '/images/user_devo_the_cursed.png',
        abilities: ['Hate Amplification', 'Animates Inanimate Objects'],
      },
      // The Tower
      {
        id: 17,
        name: 'Tower of Gray',
        user: 'Gray Fly',
        tarotCard: 'The Tower',
        tarotCardImageUrl: '/images/card_tower.png',
        standImageUrl: '/images/stand_tower_of_gray.png',
        userImageUrl: '/images/user_gray_fly.png',
        abilities: ['Extreme Speed', 'Tongue Ripping'],
      },
      // The Star
      {
        id: 18,
        name: 'Star Platinum',
        user: 'Jotaro Kujo',
        tarotCard: 'The Star',
        tarotCardImageUrl: '/images/card_star.png',
        standImageUrl: '/images/stand_star_platinum.png',
        userImageUrl: '/images/user_jotaro_kujo.png',
        abilities: ['Super Strength', 'Super Speed', 'Precision', 'Time Stop'],
      },
      // The Moon
      {
        id: 19,
        name: 'Dark Blue Moon',
        user: 'Impostor Captain Tennille',
        tarotCard: 'The Moon',
        tarotCardImageUrl: '/images/card_moon.png',
        standImageUrl: '/images/stand_dark_blue_moon.png',
        userImageUrl: '/images/user_impostor_captain_tennille.png',
        abilities: ['Aquatic Superiority', 'Barnacle Growth', 'Sharp Scales'],
      },
      // The Sun
      {
        id: 20,
        name: 'Sun',
        user: 'Arabia Fats',
        tarotCard: 'The Sun',
        tarotCardImageUrl: '/images/card_sun.png',
        standImageUrl: '/images/stand_sun.png',
        userImageUrl: '/images/user_arabia_fats.png',
        abilities: ['Intense Heat Generation', 'Energy Lasers'],
      },
      // Judgement
      {
        id: 21,
        name: 'Judgement',
        user: 'Cameo',
        tarotCard: 'Judgement',
        tarotCardImageUrl: '/images/card_judgement.png',
        standImageUrl: '/images/stand_judgement.png',
        userImageUrl: '/images/user_cameo.png',
        abilities: ['Wish Granting (via Clay)', 'Clay Duplication'],
      },
      // The World
      {
        id: 22,
        name: 'The World',
        user: 'DIO',
        tarotCard: 'The World',
        tarotCardImageUrl: '/images/card_world.png',
        standImageUrl: '/images/stand_the_world.png',
        userImageUrl: '/images/user_dio.png',
        abilities: ['Time Stop', 'Super Strength', 'Super Speed'],
      },
    ] as Stand[],

    // NEW STATE for the carousel
    activeIndex: 17, // Start with Star Platinum (index 17)
  }),

  // NEW GETTERS for the carousel
  getters: {
    // This getter provides the 7 cards for the visual carousel display.
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

    // NEW: This getter gives us the single, currently active stand object.
    activeCard(state): Stand {
      return state.stands[state.activeIndex];
    },
  },

  actions: {
    // The 'setHoveredStand' action is no longer needed.
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
