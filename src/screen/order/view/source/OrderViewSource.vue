<template>
    <div class="table">
        <ovs-tr></ovs-tr>
        <collapse>
          <collapse-td-item v-for="(m, i) in orders" :key="i">
              <ovs-td slot="tit" :one="m"></ovs-td>

              <nav slot="cont" class="px_x2 bg-FFF">
                <order-expanel-inner class="px_x4 py" :mode="'VIEW'" :_one="m" :_pay="true">
                    <order-exi-opera slot="opera"></order-exi-opera>
                </order-expanel-inner>
              </nav>
          </collapse-td-item>
        </collapse>

        <div class="py"></div>
        <pagenation></pagenation>
        <div class="py"></div>
    </div>
</template>
<script>
import Collapse from '../../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
import OrderExiOpera from '../../expanel/opera/OrderExiOpera.vue'
import OrderExpanelInner from '../../expanel/OrderExpanelInner.vue'
import OvsTd from './table/OvsTd.vue'
import OvsTr from './table/OvsTr.vue'
export default {
  components: { OvsTr, OvsTd, Pagenation, Collapse, CollapseTdItem, OrderExpanelInner, OrderExiOpera },
    data() {
        return {
        }
    },
    computed: { orders() { return this.$store.state.data.orders } }
}
</script>