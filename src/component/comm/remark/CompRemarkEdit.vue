<template>
    <div>
        <ui-input :header="'備註壹：'">
            <textarea v-model="mark1" class="input" :placeholder="'請輸入內容'"></textarea>
        </ui-input>
    </div>
</template>

<script>
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput },
    props: [ 'def' ],
    data() {
        return {
            mark1: ''
        }
    },
    mounted() { this.mark1 = this.def ? this.def : '' },
    methods: {
        result() { 
            return this.vid.val.empty( this.mark1 )
        }
    }
}
</script>

<style>

</style>