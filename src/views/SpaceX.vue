<template>
    <div class="home">
        <div class="spacexbg"></div>
        <div class="spacex">
            <div class="loading" v-if="launchData.length === 0">Loading...</div>
            <Flights v-else :launchData="launchData" />
        </div>
    </div>
</template>

<script>
import Flights from '@/components/Flights.vue';

import { mapState } from 'vuex';

export default {
    name: 'SpaceX',
    components: { Flights },
    created () {
        if (!this.$store.getters.getLaunchData.length) {
            this.$store.dispatch('getLaunchData');
        }
    },
    computed: mapState({
        launchData: state => state.launchData,
    }),
};
</script>

<style scoped>
    .spacexbg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: url('~@/assets/spacexbg.jpg') no-repeat fixed 50% 50%;
        background-size: cover;
        z-index: -1;
    }

    .spacexbg:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .65);
        content: '';
    }

    .spacex h1 {
        text-align: center;
        font-weight: 400;
        color: #fff;
    }

    .spacex .loading {
        text-align: center;
        color: #fff;
    }
</style>
