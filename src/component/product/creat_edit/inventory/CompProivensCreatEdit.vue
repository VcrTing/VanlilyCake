<template>
    <form-def :header="'新增物品'" @submit="create_or_update">
        <div class="fx-s w-100">
            <div class="w-333">
                <p>物品編號：<span>{{ uuid }}</span></p>
            </div>
            <ui-inline-input :is_err="form_err.typed" class="w-333" :header="'物品類別：'">
                <vf-pro-type-select class="input input-3"
                    :def="form.typed"  @change="changeTyped"></vf-pro-type-select>
            </ui-inline-input>
            <ui-inline-input-fill :is_err="form_err.named" class="w-333" :header="'產品全名'">
                <input v-model="form.named" class="input ip-w-100" placeholder="'請輸入名稱'"/>
            </ui-inline-input-fill>
        </div>

        <div class="fx-s w-100">
            <ui-inline-input-fill :is_err="form_err.brand" class="w-333" :header="'品牌：'">
                <input v-model="form.brand" class="input ip-w-100" placeholder="請輸入內容">
            </ui-inline-input-fill>
            <ui-inline-input :is_err="form_err.spsfs" class="w-333" :header="'規格：'">
                <vf-prospecification-select class="input input-3"
                    :def="form.spsfs" @change="(v) => form.spsfs = v"></vf-prospecification-select>
            </ui-inline-input>
            <ui-inline-input-fill :is_err="form_err.remark" class="w-333" :header="'備註：'">
                <input v-model="form.remark" class="input ip-w-100" placeholder="請輸入內容"/>
            </ui-inline-input-fill>
        </div>
        
        <comp-pro-ivens-item-table class="pt"></comp-pro-ivens-item-table>
    </form-def>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInlineInputFill from '../../../../funcks/ui_element/input/inline/UiInlineInputFill.vue'
import FormDef from '../../../../funcks/ui_layout/form/def/FormDef.vue'
import VfProspecificationSelect from '../../../view_form/pros/VfProspecificationSelect.vue'
import VfProTypeSelect from '../../../view_form/pros/VfProTypeSelect.vue'
import CompProIvensItemTable from '../../view_create_edit/inventory/CompProIvensItemTable.vue'
export default {
  components: { FormDef, UiInlineInput, VfProspecificationSelect,
    VfProTypeSelect,
    UiInlineInputFill,
    CompProIvensItemTable },
    data() {
        return {
            form: { typed: 1, named: '', spsfs: 1, brand: '', remark: '' },
            form_err: { typed: false, named: false, spsfs: false, brand: false, remark: false }
        }
    },
    computed: {
        uuid() { return '0001' }
    },
    methods: {
        changeTyped(v) { console.log(v); this.form.typed = v },
        create_or_update() {
            console.log(this.form)
        }
    }
}
</script>

<style>

</style>