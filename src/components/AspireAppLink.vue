<template>
  <q-item clickable :to="appLinks.route">
    <q-item-section v-if="appLinks.icon" avatar>
      <q-icon :name="`img:${appLinks.icon}`" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ appLinks.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { AppLink } from './models';
export default defineComponent({
  name: 'AspireAppLink',
  props: {
    appLinks: {
      required: true,
      type: Object as PropType<AppLink>,
    },
  },
});
</script>
