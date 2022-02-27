<template>
  <div class="action-item column justify-center">
    <img class="btn--icon" src="~assets/icons/Freezecard.svg" svg-inline />
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
  width: 35px;
}
.btn--text {
  text-align: center;
}
</style>
