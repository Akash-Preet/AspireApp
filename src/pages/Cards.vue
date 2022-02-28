<template>
  <q-page class="cards__page">
    <div class="cards__container">
      <div
        class="row justify-between items-center cards__header"
        v-if="cards.length > 0"
      >
        <AvailableBalance></AvailableBalance>
        <BaseButton @click="openDialog">New card</BaseButton>
      </div>
      <div class="row" style="margin-top: 1.5rem">
        <div class="col-12" v-if="cards.length > 0">
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
            <q-card
              class="card-shadow"
              style="box-shadow: 0rem 0.2rem 1.2rem #00000014 !important"
            >
              <q-tab-panels
                v-model="tab"
                animated
                class="bg-white text-black cards__tab-panels"
              >
                <q-tab-panel name="my_debit_cards">
                  <div class="row">
                    <div class="col-7">
                      <div class="row justify-center items-center">
                        <div class="col-12">
                          <DebitCardCarousel :cards="cards"></DebitCardCarousel>
                        </div>
                        <div class="col-12 action-tab">
                          <div class="row justify-between items-center no-wrap">
                            <ActionBox
                              v-for="(action, index) in actions"
                              :key="index"
                              :action="action"
                              @triggerEvent="fireTriggerEvent"
                            ></ActionBox>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-5 info-box">
                      <CardDetails :off="true"></CardDetails>
                      <RecentTransactions :off="false"></RecentTransactions>
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
        <div v-else>
          <h1>No Card Found, Please Add.</h1>
          <div class="flex items-center justify-center" style="height: 60vh">
            <BaseButton @click="openDialog">New card</BaseButton>
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="alert" persistent>
      <AddCard @addCard="addCard"></AddCard>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import BaseButton from 'src/components/app_common/BaseButton.vue';
import ActionBox from 'src/components/cards/ActionBox.vue';
import AvailableBalance from 'src/components/cards/AvailableBalance.vue';
import DebitCardCarousel from 'src/components/cards/DebitCardCarousel.vue';
import RecentTransactions from 'src/components/cards/RecentTransactions.vue';
import AddCard from 'src/components/cards/modal/AddCard.vue';

import { defineComponent, ref } from 'vue';
import { Action, Card } from 'src/boot/models';
// import { cardsData } from 'boot/cards_data';

import { useQuasar } from 'quasar';
import { useStore } from 'src/store';
import CardDetails from 'src/components/cards/CardDetails.vue';

export default defineComponent({
  name: 'CardsPage',
  components: {
    AvailableBalance,
    BaseButton,
    DebitCardCarousel,
    ActionBox,
    CardDetails,
    RecentTransactions,
    AddCard,
  },
  setup() {
    const tab = ref('my_debit_cards');
    const alert = ref(false);
    const $store = useStore();
    const $q = useQuasar();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
    let cards = $store.getters['cardModule/getCards'];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
    let actions = $store.getters['cardModule/getActions'];

    // const cards = ref<Card[]>(cardsData);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    let activeCard = $store.getters['cardModule/getActiveCard'];

    const openDialog = () => {
      alert.value = true;
    };

    const addCard = (card: Card) => {
      try {
        void $store.dispatch('cardModule/addCard', card);
        alert.value = false;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        $q.notify({
          position: 'top',
          type: 'positive',
          message: 'Card added successfully',
        });
      } catch (err) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        $q.notify({
          position: 'top',
          type: 'danger',
          message: 'Oops! Something wrong.',
        });
      }
    };
    const fireTriggerEvent = (action: Action): void => {
      if (action.onClick === 'freeze') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
        activeCard = $store.getters['cardModule/getActiveCard'];
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        void $store.dispatch('cardModule/updateFreezeCard', activeCard);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        if (activeCard.isFreezed) {
          $q.notify({
            position: 'top',
            type: 'positive',
            message: 'Card frozzen successfully',
          });
        } else {
          $q.notify({
            position: 'top',
            type: 'positive',
            message: 'Card unfrozzen successfully',
          });
        }
      } else if (action.onClick === 'cancel') {
        $q.dialog({
          title: 'Attention',
          message: 'Do you wish to cancel the card? This cannot be undone.',
          cancel: true,
        }).onOk(() => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
          activeCard = $store.getters['cardModule/getActiveCard'];
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          void $store.dispatch('cardModule/deleteCard', activeCard);
          $q.notify({
            position: 'top',
            type: 'negative',
            message: 'Card Canceled.',
          });
        });
      }
    };

    return {
      tab,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      cards,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      activeCard,
      alert,
      openDialog,
      addCard,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      actions,
      fireTriggerEvent,
    };
  },
});
</script>

<style lang="scss" scoped>
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
          color: $text;
        }
      }
    }
  }
}
.action-tab {
  background: #edf3ff !important;
  border-radius: 1.6rem;
  font-size: 1.3rem;
  max-width: 41.4rem;
  max-height: 11.6rem;
  padding: 2rem 2.7rem;
}
</style>
