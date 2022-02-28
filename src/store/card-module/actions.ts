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
  addCard(context, payload) {
    context.commit('setCard', payload);
  },
  deleteCard(context, payload) {
    debugger;
    context.commit('removeCard', payload);
  },
  updateFreezeCard(context, payload) {
    debugger;
    context.commit('freezeCard', payload);
  },
};

export default actions;
