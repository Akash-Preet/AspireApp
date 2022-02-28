<template>
  <q-item
    class="action column justify-center items-center no-wrap"
    clickable
    v-ripple
    @click="triggerEvent(action)"
  >
    <q-img
      class="action-item"
      :src="require(`../../assets/icons/${action.icon}`)"
    />
    <p class="btn--text">{{ action.label }}</p>
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
.action {
  padding: 0rem;
  .action-item {
    max-width: 3.5rem;
    text-align: center;
  }
  .btn--text {
    text-align: center;
    font-size: 1.3rem;
  }
}
</style>
