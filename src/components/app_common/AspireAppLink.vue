<template>
  <q-item clickable :to="appLinks.route" class="link flex items-center no-wrap">
    <q-item-section v-if="appLinks.icon" avatar class="link__img">
      <!-- <q-icon class="text-dark" size="lg">
        <img src="~assets/icons/Card.svg" />
      </q-icon> -->
      <q-img
        width="2.4rem"
        height="2.4rem"
        :src="require(`../../assets/icons/${appLinks.icon}`)"
      />
      <!-- <q-img :src="require(`../../assets/icons/${appLinks.icon}`)" /> -->
    </q-item-section>
    <q-item-section class="link__text">
      <q-item-label>{{ appLinks.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { AppLink } from 'src/boot/models';
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

<style lang="scss">
.link {
  .link__img {
    .q-img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>
