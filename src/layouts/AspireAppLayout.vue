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
        <img src="~assets/app-full-logo.svg" class="no-outline" />
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

    <q-page-container class="app-page">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { AppLink } from 'src/boot/models';
import AspireAppLink from 'src/components/app_common/AspireAppLink.vue';

const linksList = [
  {
    title: 'Home',
    icon: 'Home.svg',
    route: '/home',
  },
  {
    title: 'Cards',
    icon: 'Card.svg',
    route: '/cards',
  },
  {
    title: 'Payments',
    icon: 'Payments.svg',
    route: '/payments',
  },
  {
    title: 'Credit',
    icon: 'Credit.svg',
    route: '/credit',
  },
  {
    title: 'Settings',
    icon: 'Account.svg',
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

<style lang="scss">
.app-layout {
  .app-sidebar {
    padding: 4.8rem;
  }
  .app-logo {
    padding: 0.5rem 0;
  }
  .app-desc {
    font-size: 1.5rem;
    color: $white;
    opacity: 0.3;
    padding: 0.5rem 0;
  }
  .app-links {
    font-size: 1.6rem;
  }
  .app-page {
    margin: 6rem;
  }
}
</style>
