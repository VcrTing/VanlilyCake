<template>
    <layout-cont :_class="'w-unf-p-r'">
        <button slot="top" class="btn-pri px py_t">
            <i class="mdi mdi-chevron-left"></i>
            返回
        </button>

        <pro-inven-filter slot="filter"></pro-inven-filter>

        <div slot="cont">
            <div class="table">
                <pro-inven-tr></pro-inven-tr>
                <ui-page-empty :srcs="pros">
                    <collapse>
                        <collapse-td-item v-for="(v, i) in pros" :key="i">
                            <pro-inven-td :one="v" slot="tit"></pro-inven-td>
                            <pro-iven-expanel :one="v" slot="cont"></pro-iven-expanel>
                        </collapse-td-item>
                    </collapse>
                </ui-page-empty>
            </div>

            <modal-proiven></modal-proiven>

            <pagenation class="py_x2"></pagenation>
        </div>
    </layout-cont>
</template>

<script>
import LayoutCont from '@/funcks/ui_layout/layout/page/LayoutCont.vue'
import ProInvenFilter from './top/ProInvenFilter.vue'
import ProInvenTr from './table/ProInvenTr.vue'
import ProInvenTd from './table/ProInvenTd.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
import Collapse from '../../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import ProIvenExpanel from './expan/ProIvenExpanel.vue'
import ModalProiven from './comm/ModalProiven.vue'
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
export default {
    components: { LayoutCont, ProInvenFilter, ProInvenTr, ProInvenTd, UiPageEmpty, Collapse, CollapseTdItem, ProIvenExpanel, ModalProiven, Pagenation },
    data() { return { } },
    computed: { pros() { return this.$store.state.data.products } }
}
</script>

<style>

</style>