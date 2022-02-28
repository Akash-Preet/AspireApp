import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { CardStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const cardModule: Module<CardStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default cardModule;
