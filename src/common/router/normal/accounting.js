import accounting from "@/screen/accounting/accounting.vue"

import ConsumeView from '../../../screen/accounting/consume/ConsumeView.vue'
import ContrastView from '../../../screen/accounting/contrast/ContrastView.vue'

import ProduCenter from '../../../screen/accounting/producenter/ProduCenter.vue'
import ProInventoryView from '../../../screen/accounting/producenter/inventory/ProInventoryView.vue'

import StaffManage from '../../../screen/accounting/staffmanage/StaffManage.vue'

import SalaryManage from '../../../screen/accounting/salarymanage/SalaryManage.vue'
import AccFormSalaryManage from '../../../screen/accounting_form/salarymanage/AccFormSalaryManage.vue'

export default (head) => {
    return [
        {
            path: head,
            component: accounting,
            redirect: head + '/consume',
            children: [
                {
                    path: head + '/consume',
                    component: ConsumeView,
                },
                {
                    path: head + '/contrast',
                    component: ContrastView,
                },

                {
                    path: head + '/staffmanage',
                    component: StaffManage,
                },
                {
                    path: head + '/salarymanage',
                    component: SalaryManage,
                    children: [
                        {
                            path: head + '/salarymanage/acc_form_salary',
                            component: AccFormSalaryManage
                        }
                    ]
                },

                {
                    path: head + '/producenter',
                    component: ProduCenter,
                    children: [
                        {
                            path: head + '/producenter/inventory',
                            component: ProInventoryView
                        }
                    ]
                }
            ]
        }
    ]
}