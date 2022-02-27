<template>
  <q-layout view="lHh Lpr lFf" class="app-layout">
    <q-drawer
      class="bg-primary app-sidebar"
      :width="340"
      show-if-above
      :breakpoint="930"
      side="left"
    >
      <router-link to="/cards" class="app-logo">
        <img src="~assets/app-full-logo.svg" svg-inline class="no-outline" />
      </router-link>
      <p class="app-desc">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>

      <q-list class="text-white app-links">
        <AspireAppLink
          v-for="(link, index) in appLinks"
          :key="index"
          :appLinks="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import AspireAppLink from 'src/components/AspireAppLink.vue';
import { AppLink } from 'src/components/models';

const linksList = [
  {
    title: 'Home',
    icon: 'assets/icons/Home.svg',
    route: '/home',
  },
  {
    title: 'Cards',
    icon: './assets/icons/Card.svg',
    route: '/cards',
  },
  {
    title: 'Payments',
    icon: 'assets/icons/Payments.svg',
    route: '/payments',
  },
  {
    title: 'Credit',
    icon: 'assets/icons/Credit.svg',
    route: '/credit',
  },
  {
    title: 'Settings',
    icon: 'assets/icons/Account.svg',
    route: '/settings',
  },
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AspireAppLayout',

  components: {
    AspireAppLink,
  },

  setup() {
    const appLinks = ref<AppLink[]>(linksList);
    return {
      appLinks,
    };
  },
});
</script>

<style scoped lang="scss">
.app-layout {
  .app-sidebar {
    padding: 48px;
  }
}
</style>
