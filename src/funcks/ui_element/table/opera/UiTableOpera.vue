<template>
    <nav class="fx-c pri_son" v-if="!_mode">
        <button @click="view">检视</button>
        <span>&nbsp;&nbsp;</span>
        <button @click="edit">编辑</button>
    </nav>
    <nav v-else class="fx-c pri_son">
        <button @click="edit">编辑</button>
    </nav>
</template>
<script>
export default {
    props: [ '_item', '_mode' ],
    methods: {
        view() {
            this.$emit('view')
        },
        edit() {
            this.$emit('edit')
        }
    }
}
</script>