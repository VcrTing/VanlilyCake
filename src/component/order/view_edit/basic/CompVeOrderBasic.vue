<template>
    <nav>
        <div class="fx-s pt_s">
            <p class="w-333">
                落單同事：
                <span v-if="one">{{ one.changer }}</span>
            </p>
            <p class="w-333">
                訂單日期：
                <span v-if="one">{{ one.date }}</span>
            </p>
            <p class="w-333 fx-l">
                <span :class="{ 'min-5em': edit }">來源：</span>
                <span v-if="!edit">
                    {{ one.order_from }}
                </span>
                <ui-icon-input v-else :icon="'phoned'">
                    <vf-buy-plant-select class="input input-3"></vf-buy-plant-select>
                </ui-icon-input>
            </p>
        </div>
        <div class="fx-s fx-wp">
            <p class="w-333 w-100-p fx-l">
                客戶姓名：
                <span v-if="!edit">
                    {{ one.user.named }}
                </span>
                <ui-icon-input v-else :icon="'user'">
                    <input class="input input-3" placeholder="請輸入" v-model="form.user_named">
                </ui-icon-input>
            </p>
            <nav class="w-666 w-100-p fx-s">

                <p class="w-50 fx-l">
                    客戶電話：
                    <span v-if="!edit">{{ one.user.phoned }}</span>
                    <ui-icon-input v-else :icon="'phoned'">
                        <input class="input input-2 pr_s_ipt" placeholder="請輸入" v-model="form.user_phoned">
                    </ui-icon-input>
                    <span class="pri pl">
                        查詢<span class="w-0-s">用戶</span>以往訂單
                        <span class="w-0-s">記錄</span>
                    </span>
                </p>
                <p class="w-50 fx-l">
                    客戶電話：
                    <span v-if="!edit">{{ one.user.phoned_from }}</span>
                    <ui-icon-input v-else :icon="'phoned'">
                        <input class="input input-2 pr_s_ipt" placeholder="請輸入" v-model="form.user_phoned_from">
                    </ui-icon-input>
                    <span class="pri pl">
                        查詢<span class="w-0-s">用戶</span>以往訂單
                        <span class="w-0-s">記錄</span>
                    </span>
                </p>
            </nav>
        </div>
    </nav>
</template>
<script>
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import VfBuyPlantSelect from '../../../view_form/order/VfBuyPlantSelect.vue'
export default {
  components: { UiIconInput, VfBuyPlantSelect },
    props: { 
        edit: {
            type: Boolean, default: false },
        one: { type: Object }
    },
    data() {
        return {
            form: { user_named: '', user_phoned: '', user_phoned_from: '' }
        }
    },
    mounted() { 
        this.edit ? this.reset() : null
    },
    methods: {
        reset() {
            if (this.one) {
                this.form.user_named = this.one.user.named
                this.form.user_phoned = this.one.user.phoned
                this.form.user_phoned_from = this.one.user.phoned_from
            }
        }
    }
}
</script>