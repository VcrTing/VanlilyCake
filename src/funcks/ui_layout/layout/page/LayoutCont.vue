<template>
    <div class="pt">
        <crumbs class="pl_x6">
            <slot name="top"></slot>
        </crumbs>

        <collapse>
            <collapse-card-item :open="_collapse">
                <div slot="tit" class="fx-s" :class="_class">
                    <div class="w-70">
                        <slot name="filter"></slot>
                    </div>
                    <div class="w-30 t-r">
                        <slot name="opera"></slot>
                    </div>
                </div>
                <div slot="cont">
                    <slot name="center"></slot>
                </div>
            </collapse-card-item>
        </collapse>

        <slot name="cont"></slot>
    </div>

</template>

<script>
import CollapseCardItem from '../../../ui/collapse/card/CollapseCardItem.vue'
import Collapse from '../../../ui/collapse/Collapse.vue'
import Crumbs from '../../menu/crumbs/Crumbs.vue'
export default {
    props: {
        _class: {
            type: String,
            default: 'w-unf-r'
        },
        _collapse: {
            type: Boolean,
            default: false
        }
    },
  components: { Crumbs, Collapse, CollapseCardItem },

}
</script>

<style>

</style>