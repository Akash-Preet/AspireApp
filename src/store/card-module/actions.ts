import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { CardStateInterface } from './state';

const actions: ActionTree<CardStateInterface, StateInterface> = {
  // someAction(/* context */) {
  //   // your code
  // },
  changeActiveCard(context, payload) {
    context.commit('setActiveCard', payload);
  },
};

export default actions;
