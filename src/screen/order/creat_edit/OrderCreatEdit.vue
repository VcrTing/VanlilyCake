<template>
    <layout-panel>
        <order-expanel-inner 
          :_pay="false"
          :mode="'EDIT'" slot="cont">
            <div class="fx-c upper" slot="opera">
                <button class="btn-pri px_x3 py_s">
                  添加
                </button>
                <span class="pl_n"></span>
                <button class="btn-pri_out px_x2 py_s">
                  返回
                </button>
            </div>
          </order-expanel-inner>
    </layout-panel>
</template>

<script>
import LayoutPanel from '../../../funcks/ui_layout/layout/page/LayoutPanel.vue'
import OrderExiOpera from '../expanel/opera/OrderExiOpera.vue'
import OrderExpanelInner from '../expanel/OrderExpanelInner.vue'
export default {
  components: { LayoutPanel, OrderExpanelInner, OrderExiOpera },

}
</script>

<style>

</style>