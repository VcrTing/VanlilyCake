<template>
    <select class="select select-sts" :class="{ 'select-sts-succ': status == 3, 'select-sts-err': status == 0 }" v-model="status">
        <option :value="1">開放</option>
        <option :value="0">關閉</option>
        <option :value="3">已調配</option>
    </select>
</template>
<script>
export default {
    props: [ '_item' ],
    data() {
        return {
            status: 1
        }
    },
    mounted() {
        this.status = this.fetch()
    },
    methods: {
        fetch() {
            let res = this._item.status
            return res
        }
    }
}
</script>