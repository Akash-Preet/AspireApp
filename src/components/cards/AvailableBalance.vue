<template>
  <div class="ava-bal">
    <p>Available balance</p>
    <div class="ava-bal__details">
      <span class="ava-bal__details--icon">S$</span>
      <!-- <p class="ava-bal__details--hero">3,000</p> -->
      <p class="ava-bal__details--hero">{{ activeCard.balance }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ava-bal {
  color: $text;
  padding: 0.5rem 0rem;
  margin: 1.5rem 0rem;
  .ava-bal__details {
    display: flex;
    align-items: center;
    .ava-bal__details--icon {
      width: 4rem;
      line-height: 1.6rem;

      background-color: $secondary;
      color: $white;

      text-align: center;
      font-weight: 700;

      border-radius: 0.4rem;
      padding: 0.2rem 1.3rem 0.4rem 1.3rem;
    }
    .ava-bal__details--hero {
      font-size: 2.6rem;
      color: $text;
      margin-left: 1.2rem;
      font-weight: 700;
      line-height: 3.2rem;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'src/store';

// import { Card } from 'src/boot/models';

export default defineComponent({
  setup() {
    const $store = useStore();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    let activeCard = ref($store.getters['cardModule/getActiveCard']);

    // watch(
    //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    //   () => $store.getters['cardModule/getActiveCard'],
    //   function () {
    //     console.log('value changes detected');
    //   }
    // );

    // $store.watch(
    //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    //   (state, getters) => getters['cardModule/getActiveCard'],
    //   () => {
    //     console.log('value changes detected via vuex watch');
    //   }
    // );

    $store.watch(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
      (state, getters) => getters['cardModule/getActiveCard'],
      () => {
        console.log('value changes detected via vuex watch');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        activeCard.value = $store.getters['cardModule/getActiveCard'];
      }
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { activeCard };
  },
});
</script>
