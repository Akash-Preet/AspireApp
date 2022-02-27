<template>
  <q-btn dense no-caps unelevated class="btn btn--color">
    <div class="flex no-wrap items-center">
      <img class="btn--icon" src="~assets/icons/box.svg" svg-inline />
      <!-- <p class="q-px-md"><slot></slot></p> -->
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
  min-width: 109px;
  border-radius: 4px;
  min-height: 35px;
  font-size: 13px;
}
.btn--color {
  background: $btn-primary;
  color: $white;
}
.btn--text {
  margin-left: 8px;
}
</style>
