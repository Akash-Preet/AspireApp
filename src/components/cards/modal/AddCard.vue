<template>
  <q-card style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Your name</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-input
        ref="inputRef"
        filled
        v-model="userName"
        label="Required Field"
        :rules="[(val) => (val && val.length > 0) || 'Name is required']"
        @keyup.enter="prompt = false"
      />
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <BaseButton @click="addCard($event)">Add card</BaseButton>
      <q-btn flat label="Cancel" v-close-popup />
    </q-card-actions>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseButton from 'src/components/app_common/BaseButton.vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  components: { BaseButton },
  setup(props, context) {
    const userName = ref('');
    const prompt = ref(true);
    const $q = useQuasar();

    const addCard = () => {
      if (userName.value) {
        const addCardDetails = {
          user_id: Math.random() * (9999 - 1) + 1,
          name: userName.value,
          number: Math.random().toString().slice(2, 18),
          thruMonth: Math.floor(Math.random() * (12 - 1) + 1).toString(),
          thruYear: parseInt(
            '20' + Math.floor(Math.random() * (2099 - 2020) + 1).toString()
          ),
          cvv: Math.random() * (9999 - 1) + 1,
          isFreezed: false,
          balance: '3,000',
          type: 'debit',
          payment_network: 'visa',
        };
        context.emit('addCard', addCardDetails);
      } else {
        $q.notify({
          position: 'top',
          type: 'negative',
          message: 'Name Required',
        });
      }
    };
    return { prompt, userName, addCard };
  },
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
