<template>
    <modal-by-state ref="modREF" class="modal-w-min">
        <comp-source-soft-plus v-if="page == 1"></comp-source-soft-plus>
        <comp-source-invite-plus v-if="page == 2"></comp-source-invite-plus>
        <comp-source-addr-plus v-if="page == 3"></comp-source-addr-plus>
        <comp-order-cake-creat-edit v-if="page == 21"></comp-order-cake-creat-edit>
    </modal-by-state>
</template>

<script>
import Modal from '../../funcks/ui/modal/Modal.vue'
import ModalByState from '../../funcks/ui/modal/ModalByState.vue'
import CompOrderCakeCreatEdit from '../order/creat_edit/cake/CompOrderCakeCreatEdit.vue'
import CompSourceAddrPlus from './source_addr/creat_edit/CompSourceAddrPlus.vue'
import CompSourceInvitePlus from './source_invite/creat_edit/CompSourceInvitePlus.vue'
import CompSourceSoftPlus from './source_soft/creat_edit/CompSourceSoftPlus.vue'
export default {
    components: {
        Modal,
        ModalByState,
        CompSourceSoftPlus,
        CompSourceAddrPlus,
        CompSourceInvitePlus,
        CompOrderCakeCreatEdit,
    },
    computed: {
        page() { return this.$store.state.funck.modal_form }
    },
    methods: {
        change() { this.$refs.modREF.change() }
    }
}
</script>

<style>

</style>