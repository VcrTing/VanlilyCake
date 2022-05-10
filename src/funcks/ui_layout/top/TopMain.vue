<template>
    <nav class="fx-s px_x2">
        <div class="w-70">
            <span class="hand" @click="menu(1)">菜单</span>
        </div>
        <div class="w-30">
            <div class="fx-r" @click="auth">
                <img class="user-face hand" src="https://img2.baidu.com/it/u=3474614069,3903854886&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500">
                <div class="user-name pl ttd hand">
                    vcrting@163.com
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    methods: {
        auth() {
            this.$router.push('/login')
        },
        menu(num) {
            console.log('菜单 =', num)
            this.$store.commit('changeFunck', [ 'menu', num ])
        }
    }
}
</script>