<template>
    <panel-inner :header="'新增付款記錄'">
        <comp-pay-record-line slot="cont"></comp-pay-record-line>
    </panel-inner>
</template>

<script>
import CompPayRecordLine from '../../../../component/pay/record/CompPayRecordLine.vue'
import PanelInner from '../../../../funcks/ui/panel/PanelInner.vue'
export default {
  components: { PanelInner, CompPayRecordLine },

}
</script>

<style>

</style>