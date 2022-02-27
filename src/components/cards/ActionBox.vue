<template>
  <div class="action-item column justify-center">
    <img class="btn--icon" src="~assets/icons/Freezecard.svg" />
    <p class="btn--text">Freeze Card</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
});
</script>

<style lang="scss" scoped>
.action-item {
  width: 3.5rem;
}
.btn--text {
  text-align: center;
}
</style>
