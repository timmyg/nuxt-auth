import Vuex from "vuex";
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';


const createStore = () => {
  return new Vuex.Store({
    // State:
    //  - single object contains all your application level state
    state,
    mutations,
    actions,
    getters
  });
};

export default createStore;
