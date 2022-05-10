<template>
    <modal-by-state ref="modREF" class="modal-w-min">
        <comp-salary-item-table v-if="page == 115"></comp-salary-item-table>
    </modal-by-state>
</template>

<script>
import CompSalaryItemTable from '@/component/staff/creat_edit/salary/CompSalaryItemTable.vue'
import ModalByState from '@/funcks/ui/modal/ModalByState.vue'
export default {
    components: { ModalByState, CompSalaryItemTable },
    data() { return { salary: null } },
    computed: {
        page() { return this.$store.state.funck.modal_form }
    },
    methods: {
        open(num, _salary) { this.$store.commit('changeFunck', [ 'modal_form', num])
            this.salary = _salary
        },
        change() { this.$refs.modREF.change() }
    }
}
</script>

<style>

</style>