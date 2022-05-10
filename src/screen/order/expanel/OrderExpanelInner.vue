<template>
    <div class="">
        <ui-header class="py_x">
            <h3 slot="tit" class="n">單號：6405</h3>
            <button slot="cont" class="btn-pri py_s px_x2">返回</button>
        </ui-header>

        <h5 class="n py_n">基本信息</h5>
        <comp-ve-order-basic class="pb_x2" :one="_one" :edit="edt"></comp-ve-order-basic>

        <div class="pb_x3">
            <nav class="fx-l">
                <h5 class="n py_n">蛋糕信息</h5>&nbsp;&nbsp;
                <button @click="modal(21)" class="btn-pri py_t px_s s">添加訂制蛋糕</button>
            </nav>

            <panel-inner :header="'定製蛋糕內容'" v-if="_one">
                <order-exi-product slot="cont" :one="_one"></order-exi-product>
            </panel-inner>
        </div>

        <div class="pb_x3">
            <h5 class="n py_n">送貨信息</h5>
            <comp-ve-order-send class="pb_x2" :one="_one" :edit="edt"></comp-ve-order-send>
            <comp-ve-order-send-people class="py" :one="_one" :edit="edt"></comp-ve-order-send-people>
            <order-exi-send-card :edit="edt"></order-exi-send-card>
        </div>

        <h5 class="n py">備註</h5>
        <order-exi-remark :edit="edt" class="pb_x2"></order-exi-remark>
        
        <div class="pb_x2" v-if="_pay">
            <order-exi-pay></order-exi-pay>
        </div>

        <slot name="opera"></slot>
    </div>
</template>
<script>
import CompVeOrderBasic from '../../../component/order/view_edit/basic/CompVeOrderBasic.vue'
import CompVeOrderSend from '../../../component/order/view_edit/send/CompVeOrderSend.vue'
import CompVeOrderSendPeople from '../../../component/order/view_edit/send/CompVeOrderSendPeople.vue'
import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import OrderExiRemark from './mark/OrderExiRemark.vue'
import OrderExiOpera from './opera/OrderExiOpera.vue'
import OrderExiPay from './pay/OrderExiPay.vue'
import OrderExiProduct from './product/OrderExiProduct.vue'
import OrderExiSendCard from './send_card/OrderExiSendCard.vue'
export default {
    components: {
        OrderExiOpera,
        OrderExiProduct,
        PanelInner,
        OrderExiSendCard,
        OrderExiPay,
        CompVeOrderBasic,
        UiHeader,
        CompVeOrderSend,
        CompVeOrderSendPeople,
        OrderExiRemark
    },
    props: [ '_one', 'mode', '_pay' ],
    mounted() { console.log('ONE =', this._one) },
    data() {
        return {
            
        }
    },
    computed: {
        edt() { return (this.mode == 'EDIT')},
    },
    methods: {
        create_or_edit() { console.log("OederExpanelInner create or edit") },
        modal(num) { this.$store.commit('changeFunck', [ 'modal_form', num ]) }
    }
}
</script>