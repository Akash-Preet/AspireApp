<template>
  <div class="q-pa-md info-box__accordian">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Card Details"
        :disable="off"
        class="info-box__accordian--item"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['off'],
});
</script>

<style lang="scss" scoped>
.info-box__accordian {
  max-width: 35rem;
  @media screen and (max-width: $breakpoint-xs-max) {
    max-width: 41.4rem;
    margin: 0px auto;
    padding-left: 0px;
    padding-right: 0px;
  }
}

.info-box__accordian--item {
  background: #f5f9ff;
  border: 0.1rem solid #f5f5f5;
  font-size: 1.4rem;
  color: $primary;
}
</style>
