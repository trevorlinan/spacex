<template>
    <div class="flight">
        <h1>{{ flightData.mission_name }}</h1>
        <div class="flight-switch">
            <router-link v-if="flightData.flight_number - 1 > 0" class="prev" :to="`/flight/${ parseInt(flightData.flight_number) - 1 }`">Prev</router-link>
            <router-link v-if="flightData.flight_number + 1 < launchDataLength" class="next" :to="`/flight/${ parseInt(flightData.flight_number) + 1 }`">Next</router-link>
        </div>
        <div>Flight Number: {{ flightData.flight_number }}</div>
        <div>Mission Name: {{ flightData.mission_name }}</div>
        <div>Launch Year: {{ flightData.launch_year }}</div>
        <div>Launch Success: {{ flightData.launch_success }}</div>
        <div>Launch Details: {{ flightData.details }}</div>
        <div class="video">
            <iframe class="yVideo" :src="flightVideo" allow='autoplay'></iframe>
        </div>
        <div class="images">
            <div class="image" v-for="(img, index) in flightImages" :key="index">
                <img :src="img" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Flight',
    created () {
        if (!this.$store.getters.getLaunchData.length) {
            this.$store.dispatch('getLaunchData');
        }
    },
    computed: {
        flightData () {
            return this.$store.getters.getFlightData(this.$route.params.flightNumber) || {};
        },
        flightVideo () {
            if (this.flightData && this.flightData.links && this.flightData.links.video_link) {
                return `${ this.flightData.links.video_link.replace('watch?v=', 'embed/') }?autoplay=1&loop=1`;
            }
            return null;
        },
        flightImages () {
            if (this.flightData && this.flightData.links && this.flightData.links.flickr_images.length) {
                return this.flightData.links.flickr_images;
            }
            return null;
        },
        launchDataLength () {
            return this.$store.getters.getLaunchDataLength || 0;
        },
    },
};
</script>

<style scoped>

    .flight {
        color: #fff;
    }

    .flight-switch {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flight-switch a {
        margin: 0 15px;
        color: #fff;
        text-decoration: none;
        outline: none;
    }

    .flight h1 {
        text-align: center;
    }

    .flight .back {
        position: absolute;
        top: 25px;
        left: 25px;
        font-size: 1em;
        font-weight: 400;
        text-decoration: none;
        outline: none;
        color: blue;
    }

    .flight .images {
        position: relative;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        grid-gap: 50px;
    }

    .flight .image {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 33vh;
    }

    .flight img {
        height: 100%;
    }

    .flight .video {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
    }

    .flight .yVideo {
        width: 50%;
        height: 50vh;
    }
</style>
