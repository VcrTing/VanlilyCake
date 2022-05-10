<template>
    <div class="px_x2 py_x">

        <div class="px_x2 pt_s" v-for="(pro, i) in pros" :key="i">
            <div class="fx-s fx-t">
                <div class="w-75">
                    <nav class="fx-l fx-t">
                        <div class="w-25">
                            <img class="img" :src="pro.img">
                        </div>
                        <div class="w-10"></div>
                        <div class="w-55">
                            <p class="pb">配件圖：</p>
                            <ui-img-group :imgs="pro.imgs"></ui-img-group>
                        </div>
                        <div class="w-10"></div>
                    </nav>
                </div>
                <div class="w-25 t-r row-item">
                    <button class="btn-pri_out px py_s">檢查清單</button>
                    <button class="btn-pri_out px_x2 py_s">編輯</button>
                </div>
            </div>

            <div class="py_x">
                <hr/>
            </div>

            <div class="fx-s fx-t">
                <div class="w-33">
                    <p>
                        款式：
                        <span>{{ pro.typed }}</span>
                    </p>
                    <p>
                        味道：
                        <span>{{ pro.wd }}</span>
                    </p>
                    <p>
                        主題顏色：
                        <span>{{ pro.color }}</span>
                    </p>
                    <p>
                        重量：
                        <span>{{ pro.weight }}</span>
                    </p>
                    <div class="fx-l fx-t">
                        <div>
                            <p>生日字粒：</p>
                        </div>
                        <div class="pl_x2">
                            <p>名字字粒：{{ one.marks.main }}</p>
                            <p>底盤字粒：{{ one.marks.main }}</p>
                        </div>
                    </div>
                </div>
                <div class="w-44">
                    <p>
                        特別要求：
                        <span>名字字粒&nbsp;&nbsp;{{ one.marks.main }}</span>&nbsp;
                        <span class="btn-succ">已更新</span>
                    </p>
                    <p>
                        呎時：
                        <span>{{ pro.chis }}</span>
                    </p>
                    <p>
                        數量：
                        <span>{{ pro.num }}</span>
                    </p>
                </div>
                <div class="w-22">
                    <p>
                        合共費用：
                        <span>${{ pro.price_result }}</span>
                    </p>
                    <p>
                        蛋糕價錢：
                        <span>${{ pro.price }}</span>
                    </p>
                    <p>
                        蛋糕原價：
                        <span>${{ pro.price_origin }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UiImgGroup from '../../../../funcks/ui_element/img/UiImgGroup.vue'
export default {
  components: { UiImgGroup },
    props: [ 'one' ],
    data() {
        return {
            pros: [ ]
        }
    },
    mounted() {
        this.pros = this.one.product
    }
}
</script>