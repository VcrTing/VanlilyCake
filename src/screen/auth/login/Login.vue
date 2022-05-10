<template>
    <auth-layout class="fx-s">
        <h1 class="t-c py_x">登錄到Vanlily Cake</h1>
        <div class="pt_x2">
            <ui-input :is_err="named_err" class="pb">
                <div class="input-icon input-icon-l input-auth">
                    <i class="mdi mdi-account-outline h4 sus"></i>
                    <input v-model="named" class="input br_s ip-w-100" placeholder="用戶名">
                </div>
            </ui-input>
            <ui-input :is_err="pass_err" class="pb">
                <div class="input-icon input-icon-l input-auth">
                    <i class="mdi mdi-account-outline h4 sus"></i>
                    <input v-model="pass" @keydown.enter="submit" class="input br_s ip-w-100" placeholder="密碼">
                </div>
            </ui-input>
            <div class="pt">
                <button @click="submit" class="btn-pri w-100 py br_s upper">
                    登錄
                </button>
            </div>
        </div>
    </auth-layout>
</template>

<script>
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import Logo from '../../../funcks/ui_static/logo/Logo.vue'
import AuthLayout from '../comm/AuthLayout.vue'
export default {
  components: { AuthLayout, Logo, UiInput },
    data() {
        return {
            named: '',
            pass: '',
            pass_err: false, named_err: false,
        }
    },
    watch: {
        named(n, o) { 
            this.named_err = n ? !this.vid.input.vid_named(n) : false
        },
        pass(n, o) {
            console.log('vid =', this.vid)
            this.pass_err = n ? !this.vid.input.vid_named(n) : false
        }
    },
    methods: {
        _res() {
            let res = false

            return res 
        },
        finish() { this.$router.push('/admin/order/view/query') },
        submit() {
            const data = this._res()

            if (data) {
                console.log('提交～')
            }

            this.finish()
        }
    }
}
</script>

<style lang="sass" scoped>
h1
    // font-size: 3vw !important
</style>