import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        launchData: [],
    },
    mutations: {
        setLaunchData (state, data) {
            state.launchData = data;
        },
    },
    actions: {
        async getLaunchData ({ commit }) {
            const results = await axios.get('https://api.spacexdata.com/v3/launches/');
            commit('setLaunchData', results.data);
        },
    },
    getters: {
        getLaunchData: state => state.launchData,
        getLaunchDataLength: state => state.launchData.length,
        getFlightData: state => number => state.launchData.find(flight => flight.flight_number === parseInt(number)),
    },
});
