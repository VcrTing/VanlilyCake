<template>
    <modal-by-state ref="modREF" class="modal-w-min">
        <comp-staff-create-edit v-if="page == 111"></comp-staff-create-edit>
        <comp-staff-create-edit :def="staff" :mode="'EDIT'" v-if="page == 112"></comp-staff-create-edit>
    </modal-by-state>
</template>

<script>
import CompStaffCreateEdit from '../../../../component/staff/creat_edit/staff/CompStaffCreateEdit.vue'
import ModalByState from '../../../../funcks/ui/modal/ModalByState.vue'
export default {
  components: { ModalByState, CompStaffCreateEdit },
    data() { return { staff: null } },
    computed: {
        page() { return this.$store.state.funck.modal_form }
    },
    methods: {
        open(num, _staff) { this.$store.commit('changeFunck', [ 'modal_form', num])
            this.staff = _staff
        },
        change() { this.$refs.modREF.change() }
    }
}
</script>

<style>

</style>