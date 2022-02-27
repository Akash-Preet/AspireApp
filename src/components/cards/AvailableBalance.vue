<template>
  <div class="ava-bal">
    <p>Available balance</p>
    <div class="ava-bal__details">
      <span class="ava-bal__details--icon">S$</span>
      <p class="ava-bal__details--hero">3,000</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ava-bal {
  font-size: 13px;
  color: $text;
  .ava-bal__details {
    display: flex;
    align-items: center;
    .ava-bal__details--icon {
      width: 40px;
      line-height: 16px;

      background-color: $secondary;
      color: $white;

      text-align: center;
      font-weight: 700;

      border-radius: 4px;
      padding: 2px 13px 4px 13px;
    }
    .ava-bal__details--hero {
      font-size: 26px;
      color: $text;
      margin-left: 12px;
      font-weight: 700;
      line-height: 32px;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
