<template>
    <layout-cont :_class="'pt_x2'" :_collapse="exp">
        <consume-top-filter @submit="subFit" slot="filter"></consume-top-filter>
        <nav slot="opera">
            <button @click="model(110)" class="btn-pri btn-input px_x3">新增支出</button>
        </nav>

        <consume-center-card slot="center" :funn="funnel"></consume-center-card>

        <div slot="cont">
            
            <nav class="table">
                <consume-tr></consume-tr>
                <collapse>
                    <collapse-td-item
                        v-for="(v, i) in consumes" :key="i" >
                        <consume-td :one="v" slot="tit"></consume-td>
                        <div slot="cont">
                            OOO
                        </div>
                    </collapse-td-item>
                </collapse>
            </nav>

            <pagenation class="py_x2"></pagenation>

            <modal-consume ref="modREF"></modal-consume>
        </div>
    </layout-cont>
</template>

<script>
import Collapse from '../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import LayoutCont from '../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import ModalConsume from './comm/ModalConsume.vue'
import ConsumeTd from './table/ConsumeTd.vue'
import ConsumeTr from './table/ConsumeTr.vue'
import ConsumeCenterCard from './top/ConsumeCenterCard.vue'
import ConsumeTopFilter from './top/ConsumeTopFilter.vue'
export default {
  components: { LayoutCont, ConsumeTopFilter, ConsumeTr, CollapseTdItem, ConsumeTd,
    Collapse,
    Pagenation,
    ModalConsume,
    ConsumeCenterCard },
    data() {
        return {
            funnel: {}
        }
    },
    computed: {
        exp() {
            let res = false
            if (this.funnel.named || this.funnel.end) { res = true }
            return res
        },
        consumes() { return this.$store.state.data.consumes }
    },
    methods: {
        model(num) { this.$refs.modREF.open(num); this.funnel = {} },
        subFit(funn) { this.funnel = funn; console.log('FUNN =', funn) }
    }
}
</script>

<style>

</style>