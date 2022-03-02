<template>
  <div class="debit-card">
    <div class="q-pa-md debit-card__carousel">
      <q-carousel
        v-model="slide"
        swipeable
        control-color="secondary"
        animated
        navigation-position="bottom"
        navigation
        padding
        height="30rem"
        class="bg-white text-black rounded-borders"
      >
        <q-carousel-slide
          v-for="(card, index) in cards"
          :key="card.user_id"
          :name="index"
          class="column no-wrap flex-center"
        >
          <div class="q-mt-md">
            <DebitCard :card="card" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>
<script lang="ts">
import { Card } from 'src/boot/models';
import { defineComponent, ref, PropType } from 'vue';
import DebitCard from './DebitCard.vue';

export default defineComponent({
  props: {
    cards: {
      type: Array as PropType<Card[]>,
      required: true,
    },
  },
  components: {
    DebitCard,
  },
  setup() {
    let slide = ref(0);
    return { slide };
  },
});
</script>

<style lang="scss">
.debit-card {
  .debit-card__carousel {
    .q-carousel__control {
      top: 27.6rem;
      .q-carousel__navigation-inner {
        .q-btn-item {
          font-size: 0.5rem !important;
          margin: 0.3rem 0.2rem;
          padding: 0.25rem;
        }
        .q-carousel__navigation-icon--active {
          width: 10px;
        }
      }
    }
    @media screen and (max-width: $breakpoint-xs-max) {
      padding: 0px;
      width: 100%;
    }
  }
}
</style>
