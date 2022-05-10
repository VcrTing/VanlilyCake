<template>
    <div>
        <panel-inner class="panel-inner-pure" :header="'送貨地區'">
            <comp-addr-area v-if="!__edit" slot="cont"></comp-addr-area>
            <comp-ve-order-addr-area v-else slot="cont"></comp-ve-order-addr-area>
        </panel-inner>
        <div class="py_s"></div>
        <panel-inner class="panel-inner-pure" :header="__edit ? '送貨類別' : '送貨備註'">
            <comp-addr-mark v-if="!__edit" slot="cont"></comp-addr-mark>
            <comp-ve-order-addr-mark v-else slot="cont"></comp-ve-order-addr-mark>
        </panel-inner>
    </div>
</template>
<script>
import CompAddrArea from '../../../../component/addr/for_order/CompAddrArea.vue'
import CompAddrMark from '../../../../component/addr/for_order/CompAddrMark.vue'
import CompVeOrderAddrArea from '../../../../component/order/view_edit/addr/CompVeOrderAddrArea.vue'
import CompVeOrderAddrMark from '../../../../component/order/view_edit/addr/CompVeOrderAddrMark.vue'
import PanelInner from '../../../../funcks/ui/panel/PanelInner.vue'
export default {
    props: [ 'cards', '__edit' ],
    data() {
        return {
            edit: true
        }
    },
    components: { PanelInner, CompAddrArea, CompAddrMark, CompVeOrderAddrArea, CompVeOrderAddrMark }
}
</script>