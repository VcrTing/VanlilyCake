<template>
    <div class="fx-s">
        <div class="w-85 fx-s">
            <div class="30">
                付款日期：<span>2022/03/14</span>
            </div>
            <div class="25">
               付款方法：<span>转账</span>
            </div>
            <div class="25">
                费用：$<money :v="208000"></money>
            </div>
            <div class="20">
                状况：<span>开放</span>
            </div>
        </div>
        <button class="pri">
            编辑
        </button>
    </div>
</template>

<script>
import Money from '../../../funcks/ui/money/Money.vue'
export default {
  components: { Money },

}
</script>

<style>

</style>