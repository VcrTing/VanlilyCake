<template>
        <div class="item td" >
            <div class="w-6  w-7-s">
                <span class="tag tag-pri_light" v-if="one.is_new">New</span>
            </div>
            <div class="w-6  w-7-s">{{ one.number }}</div>
            <div class="w-8  w-10-s">{{ one.date }}</div>
            <div class="w-8  w-12-s">{{ one.user.named }}</div>
            <div class="w-13 w-19-s">{{ one.product[0].named }}</div>
            <div class="w-15 w-0-s">
                <view-order-time-send :_time="one.send.date"></view-order-time-send>
            </div>
            <div class="w-6  w-8-s">{{ one.send.timed }}</div>
            <div class="w-7">
                <view-order-send-type :_typed="one.send_type"></view-order-send-type>
            </div>
            <div class="w-13 w-0-s">{{ one.addr.addr }}</div>
            <div class="w-6">
                <view-order-pay-status :_is_pay="!one.is_pay"></view-order-pay-status>
            </div>
            <div class="w-7 w-8-s">
                <opera-status :_item="one"></opera-status>
            </div>
            <div class="w-6 w-7-s t-c">
                <view-order-check-bulb :is_check="one.is_check"></view-order-check-bulb>
            </div>
            <div class="w-9">
                <ui-table-opera @view="itemView" @edit="itemEdit"></ui-table-opera>
            </div>
        </div>
</template>
<script>
import OperaStatus from '../../../../../component/opera/comm/OperaStatus.vue'
import ViewOrderSendType from '../../../../../component/view/order/send/type/ViewOrderSendType.vue'
import ViewOrderTimeSend from '../../../../../component/view/order/time/ViewOrderTimeSend.vue'
import ViewOrderCheckBulb from '../../../../../component/view/order_status/check/ViewOrderCheckBulb.vue'
import ViewOrderPayStatus from '../../../../../component/view/order_status/pay/ViewOrderPayStatus.vue'
import UiTableOpera from '../../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
    components: { UiTableOpera, ViewOrderTimeSend, ViewOrderCheckBulb, ViewOrderSendType, ViewOrderPayStatus, OperaStatus },
    props: [ 'one' ],
    mounted() {
        console.log('Parent =', this)
    },
    methods: {
        itemView() {
            this.$parent.change()
            console.log('change =', this.$parent)
        },
        itemEdit() {
            console.log('編輯')
        }
    }
}
</script>