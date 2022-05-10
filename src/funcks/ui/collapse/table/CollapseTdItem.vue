<template>
    <nav class="collapse-item collapse-td-item" :class="{ 'collapse-active': open }">
        <button>
            <slot name="tit"></slot>
        </button>
        <div :class="{ 'collapse-td-active': open }">
            <slot name="cont"></slot>
        </div>
    </nav>
</template>
<script>
export default {
    data() { return { open: false } },
    methods: {
        change() {
            const src = this.open
            this.$parent.change(false)
            this.open = !src
        }
    }
}
</script>
<style lang="sass" scoped>
.collapse-active
    & > div
        max-height: 160em
</style>