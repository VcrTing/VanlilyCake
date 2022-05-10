<template>
    <div>
        <ui-header :header="'訂單'">
            <button @click="openMod" slot="cont" class="btn btn-pri py_n px_x3">新增訂單</button>
        </ui-header>
        <div class="py"></div>
        <ui-search></ui-search>
        <div>
            <order-exi-tab></order-exi-tab>

            <div>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
import Modal from '../../../funcks/ui/modal/Modal.vue'
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import UiSearch from '../../../funcks/ui_element/search/UiSearch.vue'
import OrderExiTab from '../expanel_tab/OrderExiTab.vue'
export default {
  components: { UiHeader, UiSearch, Modal, OrderExiTab },
    methods: {
        openMod() {
            // this.$refs.modREF.change()
        }
    }
}
</script>