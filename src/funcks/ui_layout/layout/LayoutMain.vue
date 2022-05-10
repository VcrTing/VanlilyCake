<template>
    <div class="html"
        :class="{ 'html-active': menu, 'html-hide': !menu }"
    >
        <div class="menu">
            <slot name="menu"></slot>
        </div>
        <div class="menu-bg" @click="close"></div>
        <div class="content">
            <div class="top">
                <slot name="top"></slot>
            </div>
            <div class="center">
                <slot name="cont"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: true
        }
    },
    watch: {
        menu_funck(n, o) { this.menu = (n == 1) }
    },
    computed: {
        menu_funck() { return this.$store.state.funck.menu }
    },
    mounted() { 
        this.menu = (this.menu_funck == 1)
    },
    methods: {
        close() { this.$store.commit('changeFunck', [ 'menu', 0 ]) }
    }
}
</script>