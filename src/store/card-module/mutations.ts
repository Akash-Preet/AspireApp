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
};

export default mutation;
