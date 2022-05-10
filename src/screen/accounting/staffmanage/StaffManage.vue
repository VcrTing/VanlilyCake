<template>
    <layout-cont :_class="'pt_x2'">
        <staffmanage-top-filter slot="filter"></staffmanage-top-filter>
        <nav slot="opera">
            <button class="btn-pri_out btn-input px_x3">工資管理</button>
            <span>&nbsp;</span>
            <button @click="modal(111)" class="btn-pri btn-input px_x3">新增員工</button>
        </nav>

        <div slot="cont">
            
            <nav class="table">
                <staff-manage-tr></staff-manage-tr>
                <ui-page-empty :srcs="staffs">
                    <collapse>
                        <collapse-td-item v-for="(v, i) in staffs" :key="i">
                            <staff-manage-td slot="tit" :one="v"></staff-manage-td>
                        </collapse-td-item>
                    </collapse>
                </ui-page-empty>
            </nav>

            <pagenation class="py_x2"></pagenation>
            <modal-staff ref="modREF"></modal-staff>
        </div>
    </layout-cont>
</template>

<script>
import Collapse from '../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import LayoutCont from '../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import ModalStaff from './comm/ModalStaff.vue'
import StaffManageTd from './table/StaffManageTd.vue'
import StaffManageTr from './table/StaffManageTr.vue'
import StaffmanageTopFilter from './top/StaffmanageTopFilter.vue'
export default {
  components: { LayoutCont, StaffManageTr, StaffmanageTopFilter, Collapse, UiPageEmpty, CollapseTdItem, StaffManageTd, ModalStaff, Pagenation },
    data() {
        return {
            
        }
    },
    computed: { 
        staffs() { return this.$store.state.data.staffs }
    },
    methods: {
        modal(num) { this.$refs.modREF.open(num) }
    }
}
</script>

<style>

</style>