<template>
  <q-page class="cards__page">
    <div class="cards__container">
      <div class="row justify-between items-center cards__header">
        <AvailableBalance></AvailableBalance>
        <BaseButton>New card</BaseButton>
      </div>
      <div class="row" style="margin-top: 1.5rem">
        <div class="col-12">
          <div class="q-gutter-y-md">
            <q-tabs
              v-model="tab"
              dense
              inline-label
              no-caps
              class="text-primary cards__tabs"
              align="left"
              indicator-color="info"
            >
              <q-tab name="my_debit_cards" label="My debit cards" />
              <q-tab name="all_company_cards" label="All company cards" />
            </q-tabs>
            <q-card>
              <q-tab-panels
                v-model="tab"
                animated
                class="bg-white text-black cards__tab-panels"
              >
                <q-tab-panel name="my_debit_cards">
                  <div class="text-h6">Debit card</div>
                  <div class="row">
                    <div class="col-7">
                      <div class="row">
                        <div class="col-12">
                          <DebitCardCarousel :cards="cards"></DebitCardCarousel>
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
                    <div class="col-5">
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
  </q-page>
</template>

<script lang="ts">
import BaseButton from 'src/components/app_common/BaseButton.vue';
import ActionBox from 'src/components/cards/ActionBox.vue';
import AvailableBalance from 'src/components/cards/AvailableBalance.vue';
import DebitCardCarousel from 'src/components/cards/DebitCardCarousel.vue';
import InformationBox from 'src/components/cards/InformationBox.vue';
import { defineComponent, ref } from 'vue';

// import { Card } from 'src/boot/models';
// import { cardsData } from 'boot/cards_data';

import { useStore } from 'src/store';

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
    const $store = useStore();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
    const cards = $store.getters['cardModule/getCards'];
    // const cards = ref<Card[]>(cardsData);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const activeCard = $store.getters['cardModule/getActiveCard'];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { tab, cards, activeCard };
  },
});
</script>

<style lang="scss">
.cards__container {
  width: 100%;
  margin: 0 auto;
  max-width: 90.6rem;
}
.cards__tabs {
  width: fit-content;
  .q-tabs__content {
    .q-tab {
      padding: 0px;
      width: fit-content;
      &:first-child {
        margin-right: 32px;
      }

      &.q-tab--active {
        .q-tab__label {
          font-size: 14px;
          line-height: 20px;
          color: $text;
          font-weight: 600;
        }
      }

      &.q-tab--inactive {
        .q-tab__label {
          font-size: 14px;
          line-height: 20px;
          color: rgba($color: $text, $alpha: 0.3);
        }
      }
    }
  }
}
</style>
