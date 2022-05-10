<template>
    <div>
        <div class="fx-s fx-t">
            <div class="w-35">
                <ui-inline-input :header="'送貨日期：'">
                    <time-one></time-one>
                </ui-inline-input>
                <div class="pt_t"></div>
                <ui-inline-input :header="'取貨：'">
                    <vf-get-way-select class="input"></vf-get-way-select>
                </ui-inline-input>
            </div>
            <div class="w-65 fx-s">
                <div class="w-50">
                    <ui-inline-input :header="'送貨時段：'">
                        <time-one></time-one>
                    </ui-inline-input>
                    <ui-inline-input :header="'運費：'">
                        <ui-input-money>
                            <input type="number" placeholder="0.00">
                        </ui-input-money>
                    </ui-inline-input>
                </div>
                <div class="w-50">
                    <ui-inline-input :header="'運費狀況：'">
                        <vf-paycost-select class="input"></vf-paycost-select>
                    </ui-inline-input>
                    <ui-inline-input :header="'附加運費：'">
                        <ui-input-money>
                            <input type="number" placeholder="0.00">
                        </ui-input-money>
                    </ui-inline-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UiInlineInput from '../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInputMoney from '../../../funcks/ui_element/input/moeny/UiInputMoney.vue'
import TimeOne from '../../../funcks/ui_element/timed/one/TimeOne.vue'
import VfPaycostSelect from '../../view_form/order/VfPaycostSelect.vue'
import VfGetWaySelect from '../../view_form/send/VfGetWaySelect.vue'
export default {
  components: { UiInlineInput, TimeOne, VfGetWaySelect, UiInputMoney, VfPaycostSelect },

}
</script>

<style>

</style>