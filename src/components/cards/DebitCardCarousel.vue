<template>
  <div class="debit-card">
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        swipeable
        control-color="secondary"
        animated
        navigation-position="bottom"
        navigation
        padding
        height="300px"
        class="bg-white text-black rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div class="q-mt-md">
            <DebitCard />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <div class="q-mt-md">
            <DebitCard />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <div class="q-mt-md">
            <DebitCard />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import DebitCard from './DebitCard.vue';

export default defineComponent({
  components: {
    DebitCard,
  },
  setup() {
    return {
      slide: ref('style'),
      lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  },
});
</script>

<style lang="scss" scoped></style>
