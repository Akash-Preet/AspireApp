import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { CardStateInterface } from './state';

const getters: GetterTree<CardStateInterface, StateInterface> = {
  // someAction(/* context */) {
  //   // your code
  // },
  getCards(context) {
    return context.cards;
  },
  getActiveCard(context) {
    return context.activeCard;
  },
  getActions(context) {
    return context.actions;
  },
  getTransaction(context) {
    return context.transaction;
  },
};

export default getters;
