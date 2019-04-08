<template>
    <div id="app">
        <Navigation />
        <RouteAnimator>
            <router-view/>
        </RouteAnimator>
    </div>
</template>

<script>
import RouteAnimator from '@/components/RouteAnimator.vue';
import Navigation from '@/components/Navigation.vue';

export default {
    name: 'App',
    components: {
        Navigation,
        RouteAnimator,
    },
};
</script>

<style lang="scss">
    body {
        background-color: #000;
        margin: 0;
        padding: 0;
        overflow-y: scroll;
    }

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        background-color: rgba(0, 0, 0, 1);
        a {
            font-weight: 400;
            color: #fff;
            text-decoration: none;
            &.router-link-exact-active {
                color: #0096e8;
                font-weight: 500;
            }
            margin: 0 15px;
            cursor: pointer;

            &.title {
                position: absolute;
                right: 25px;
            }
        }
    }

</style>
