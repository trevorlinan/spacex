<template>
    <transition
        :name="transitionName"
        @beforeEnter="beforeEnter"
        @enter="enter"
        @leave="leave"
        mode="out-in">
        <slot />
    </transition>
</template>

<script>
const DEFAULT_TRANSITION_NAME = 'fade';
const DEFAULT_TRANSITION_MODE = 'out-in';

export default {
    name: 'RouteAnimator',
    data () {
        return {
            transitionName: DEFAULT_TRANSITION_NAME,
            transitionMode: DEFAULT_TRANSITION_MODE,
            transitionToPage: ''
        };
    },
    created () {
        console.log(this.$router);
        this.$router.beforeEach((to, from, next) => {
            console.log('to: ', to.name, 'from: ', from.name);
            this.transitionToPage = to.name;
            next();
        });
    },
    methods: {
        beforeEnter (elm) {
            TweenMax.to(elm, 0, {
                x: this.transitionToPage === 'flight' ? '100vw' : 0,
                y: this.transitionToPage === 'flight' ? 0 : '100vh',
            });
        },
        enter (elm, done) {
            TweenMax.to(elm, 0.35, {
                x: 0,
                y: 0,
                onComplete () {
                    console.log('enter animation done');
                    done();
                }
            });
        },
        leave (elm, done) {
            TweenMax.to(elm, 0.35, {
                x: this.transitionToPage === 'flight' ? 0 : '100vw',
                y: this.transitionToPage === 'flight' ? '100vh' : 0,
                onComplete () {
                    console.log('leave animation done');
                    done();
                }
            });
        }
    },
};
</script>

<style scoped>

</style>
