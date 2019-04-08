<template>
    <transition-group appear class="flight-list" name="flight-list" tag="div">
        <div class="flight-item" v-for="(flight, index) in launchData" :key="index">
            <router-link :to="`/flight/${ flight.flight_number }`">
                <img v-if="flight.links.mission_patch_small" class="patch" :src="flight.links.mission_patch_small" >
                <h2 v-else-if="flight.mission_name">{{ flight.mission_name }}</h2>
            </router-link>
        </div>
    </transition-group>
</template>

<script>
export default {
    name: 'Flights',
    props: ['launchData'],
};
</script>

<style scoped>
    .flight-list {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: auto;
        grid-gap: 50px;
        justify-items: center;
        padding: 50px;
    }

    .flight-item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        transition: .25s ease-in;
    }

    .flight-item h2 {
        text-align: center;
        font-size: 1.25em;
        color: #666;
        padding: 0 25px;
    }

    .flight-item a {
        text-decoration: none;
        outline: none;
    }

    .flight-item .patch {
        position: relative;
        transform: scale(1, 1);
        transform-origin: center;
        opacity: .8;
        width: 100%;
        transition: .15s linear;
    }

    .flight-item:hover {
        background-color: transparent;
        border: none;
    }

    .flight-item:hover .patch {
        transform: scale(1.1, 1.1);
        opacity: 1;
    }

    .flight-item:hover h2 {
        opacity: 1;
    }

    .flight-item:hover h2:after {
        width: 100%;
    }

    .flight-list-enter-active {
        transition: all 0.75s ease;
    }

    .flight-list-enter /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(50px);
    }

</style>
