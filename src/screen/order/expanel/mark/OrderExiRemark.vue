<template>
    <nav>
        <comp-ve-order-remark
            :__edit="edit"
            :_header="'備註一：'"
            ></comp-ve-order-remark>
        <div class="py_s"></div>
        <comp-ve-order-remark
            :__edit="edit"
            :_header="'備註二：'"
            ></comp-ve-order-remark>
    </nav>

</template>

<script>
import CompVeOrderRemark from '../../../../component/order/view_edit/remark/CompVeOrderRemark.vue'
export default {
  components: { CompVeOrderRemark },
    props: [ 'edit' ],
}
</script>

<style>

</style>