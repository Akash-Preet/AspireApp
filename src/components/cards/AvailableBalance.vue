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
  color: $text;
  padding: 0.5rem 0rem;
  margin: 1.5rem 0rem;
  .ava-bal__details {
    display: flex;
    align-items: center;
    .ava-bal__details--icon {
      width: 4rem;
      line-height: 1.6rem;

      background-color: $secondary;
      color: $white;

      text-align: center;
      font-weight: 700;

      border-radius: 0.4rem;
      padding: 0.2rem 1.3rem 0.4rem 1.3rem;
    }
    .ava-bal__details--hero {
      font-size: 2.6rem;
      color: $text;
      margin-left: 1.2rem;
      font-weight: 700;
      line-height: 3.2rem;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
