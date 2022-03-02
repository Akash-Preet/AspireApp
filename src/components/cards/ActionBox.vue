<template>
  <q-item
    class="action-tab__item column justify-center items-center no-wrap"
    clickable
    v-ripple
    @click="triggerEvent(action)"
  >
    <q-img
      class="action-tab__img"
      :src="require(`../../assets/icons/${action.icon}`)"
    />
    <p class="action-tab__text">{{ action.label }}</p>
  </q-item>
</template>
<script lang="ts">
import { Action } from 'src/boot/models';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    action: {
      type: Object as PropType<Action>,
      required: true,
    },
  },
  setup(props, context) {
    const triggerEvent = (event: Action) => {
      context.emit('triggerEvent', event);
    };

    return { triggerEvent };
  },
});
</script>

<style lang="scss" scoped>
.action-tab__item {
  padding: 0rem;
  max-width: 6.5rem;
  .action-tab__img {
    max-width: 3.5rem;
    text-align: center;
  }
  .action-tab__text {
    text-align: center;
    font-size: 1.3rem;
  }
}
</style>
