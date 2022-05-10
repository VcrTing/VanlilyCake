<template>
    <nav>
        <div class="fx-s">
            <p class="w-31 fx-l">
                送貨人員：
                <span v-if="!edit">
                    {{ one.sender.named }}
                </span>
                <ui-icon-input v-else :icon="'user'">
                    <input class="input" placeholder="請輸入" v-model="form.user_named">
                </ui-icon-input>
            </p>
            <p class="w-31 fx-l">
                <span class="min-5em">電話：</span>
                <span v-if="!edit">{{ one.user.phoned }}</span>
                <ui-icon-input v-else :icon="'phoned'">
                    <input class="input input-4 pr_s_ipt" placeholder="請輸入" v-model="form.user_phoned">
                </ui-icon-input>
            </p>
            <p class="w-31 fx-l">
                <span class="min-7em">取貨時間：</span>
                <span v-if="!edit">{{ one.user.phoned_from }}</span>
                <time-one :_calss="'ip-time-def'" v-else></time-one>
            </p>
        </div>
    </nav>
</template>
<script>
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import VfBuyPlantSelect from '../../../view_form/order/VfBuyPlantSelect.vue'
export default {
  components: { UiIconInput, VfBuyPlantSelect, TimeOne },
    props: { 
        edit: {
            type: Boolean, default: false },
        one: {
            type: Object }
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
            if ( this.one ) {
                this.form.user_named = this.one.sender.named
                this.form.user_phoned = this.one.user.phoned
                this.form.user_phoned_from = this.one.user.phoned_from
            }
        }
    }
}
</script>