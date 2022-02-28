import { Card } from 'src/boot/models';
import { MutationTree } from 'vuex';
import { CardStateInterface } from './state';

const mutation: MutationTree<CardStateInterface> = {
  // someMutation(/* state: ExampleStateInterface */) {
  //   // your code
  // },
  setActiveCard(state: CardStateInterface, payload: Card) {
    state.activeCard = payload;
  },
  setCard(state: CardStateInterface, payload: Card) {
    state.cards.push(payload);
    return state.cards;
  },
  removeCard(state: CardStateInterface, payload: Card) {
    debugger;
    // state.cards = state.cards.filter((card) => {
    //   return card.user_id !== payload.user_id;
    // });
    let deleteIndex = 0;
    state.cards.forEach((card, index) => {
      if (card.user_id === payload.user_id) {
        deleteIndex = index;
      }
    });
    state.cards.splice(deleteIndex, 1);
    if (state.cards.length > 0) {
      state.activeCard = state.cards[0];
    }
  },

  freezeCard(state: CardStateInterface, payload: Card) {
    debugger;
    state.cards.forEach((card) => {
      if (card.user_id === payload.user_id) {
        card.isFreezed = !card.isFreezed;
      }
    });
  },
};

export default mutation;
