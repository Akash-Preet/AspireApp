<template>
  <q-btn dense no-caps unelevated class="btn btn--color">
    <div class="flex no-wrap items-center">
      <img class="btn--icon" src="~assets/icons/box.svg" />
      <p class="btn--text"><slot></slot></p>
    </div>
  </q-btn>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.btn {
  min-width: 10.9rem;
  border-radius: 0.4rem;
  min-height: 3.5rem;
  font-size: 1.3rem;
}
.btn--color {
  background: $btn-primary;
  color: $white;
  @media screen and (max-width: $breakpoint-xs-max) {
    background: #23cefd00;
    color: #23cefd;
  }
}
.btn--text {
  margin-left: 0.8rem;
}
</style>
