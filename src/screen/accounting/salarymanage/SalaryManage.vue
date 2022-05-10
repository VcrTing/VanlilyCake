<template>
<div>
    <layout-cont v-if="!son" :_class="'pt_x2'">
        <salarymanage-top-filter slot="filter"></salarymanage-top-filter>
         <nav slot="opera">
            <button class="btn-pri_out btn-input px_x3">员工录入</button>
            <span>&nbsp;</span>
            <button @click="go('acc_form_salary')" class="btn-pri btn-input px_x3">新增工资管理</button>
        </nav>

        <div slot="cont">
            <nav class="table">
                <salary-manage-tr></salary-manage-tr>
                <collapse>
                    <collapse-td-item v-for="(v, i) in many" :key="i">
                        <salary-manage-td slot="tit" :one="v"></salary-manage-td>
                        <salarymanage-expanel slot="cont"></salarymanage-expanel>
                    </collapse-td-item>
                </collapse>
            </nav>

            <pagenation class="py"></pagenation>
        </div>
    </layout-cont>
    <router-view/>
</div>
</template>

<script>
import Collapse from '../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import LayoutCont from '../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import SalarymanageExpanel from './expan/SalarymanageExpanel.vue'
import SalaryManageTd from './table/SalaryManageTd.vue'
import SalaryManageTr from './table/SalaryManageTr.vue'
import SalarymanageTopFilter from './top/SalarymanageTopFilter.vue'
export default {
  components: { LayoutCont, SalarymanageTopFilter, SalaryManageTr,
    Collapse, CollapseTdItem, SalaryManageTd, SalarymanageExpanel
    ,Pagenation       },
    data() {
        return {
            many: [
                {
                    id: 1, tit: '12月份月结', num: 24,
                    salary: '366666', date: '2022-12-23 12:23'
                },
                {
                    id: 2, tit: '2021年奖金', num: 21,
                    salary: '99999999999', date: '2022-01-23 12:23'
                },
            ]
        }
    },
    computed: {
        son() { let src = this.$route.path.split('salarymanage').filter(e => (e != '' && e != '/')); return src.length > 1 }  
    },
    mounted() { console.log('SON =', this.$route.path.split('salarymanage').filter(e => e != '')) },
    methods: {
        mod(num) { this.$store.commit('changeFunck', [ 'modal_form', num ]); }
    }
}
</script>

<style>

</style>