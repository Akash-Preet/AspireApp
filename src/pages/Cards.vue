<template>
  <q-page class="cards__page">
    <div class="cards__wraper">
      <div class="cards__header row justify-between items-center">
        <div class="col-3"><AvailableBalance></AvailableBalance></div>
        <div class="col-3"><BaseButton>New card</BaseButton></div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="q-pa-md">
            <div class="q-gutter-y-md">
              <q-card>
                <q-tabs
                  v-model="tab"
                  inline-label
                  class="text-black"
                  align="left"
                >
                  <q-tab name="my_debit_cards" label="My debit cards" />
                  <q-tab name="all_company_cards" label="All company cards" />
                </q-tabs>

                <q-tab-panels
                  v-model="tab"
                  animated
                  class="bg-white text-black"
                >
                  <q-tab-panel name="my_debit_cards">
                    <div class="text-h6">Debit card</div>
                    <div class="row">
                      <div class="col-6">
                        <div class="row">
                          <div class="col-12">
                            <DebitCardCarousel></DebitCardCarousel>
                          </div>
                          <div class="col-12">
                            <div class="row justify-between items-center">
                              <ActionBox></ActionBox>
                              <ActionBox></ActionBox>
                              <ActionBox></ActionBox>
                              <ActionBox></ActionBox>
                              <ActionBox></ActionBox>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <InformationBox></InformationBox>
                        <InformationBox></InformationBox>
                      </div>
                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="all_company_cards">
                    <div class="text-h6">All Company Card</div>
                  </q-tab-panel>
                </q-tab-panels>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import BaseButton from 'src/components/app_common/BaseButton.vue';
import ActionBox from 'src/components/cards/ActionBox.vue';
import AvailableBalance from 'src/components/cards/AvailableBalance.vue';
import DebitCardCarousel from 'src/components/cards/DebitCardCarousel.vue';
import InformationBox from 'src/components/cards/InformationBox.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CardsPage',
  components: {
    AvailableBalance,
    BaseButton,
    DebitCardCarousel,
    ActionBox,
    InformationBox,
  },
  setup() {
    const tab = ref('my_debit_cards');

    return { tab };
  },
});
</script>
