import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        token: '',
        loading: false,

        user: null,
        plant: null,

        funck: {
            // 0 = 关闭所有 MENU
            // 1 = 打开 主 MENU
            menu: 0,
            // 0 = 关闭 MODAL，1 = 新增来源,
            // 11 = 新增付款记录
            // 21 = 蛋糕资料
            // 110 = 公司支出
            
            // 111 = 员工管理
            // 115 = 工资发放
            
            // 120 = 产品对比
            // 125 = 产品库存
            modal_form: 0
        },

        data: {
            orders: [
                {
                    date: '2021-09-20', changer: 'Vanessakuo', number: 'KS0001', status: 1, order_from: 'Whatsapp',
                    product: [
                        {
                            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F11%2F20170511154838_sZJP4.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651049453&t=a63e0cf065617c64c5b4c56f65849640',
                            imgs: [
                                { src: 'https://img14.360buyimg.com/pop/jfs/t1/134954/18/10543/152856/5f6ab84eEe0634ef3/427a250d49fe63c1.jpg' },
                                { src: 'https://img14.360buyimg.com/pop/jfs/t1/134954/18/10543/152856/5f6ab84eEe0634ef3/427a250d49fe63c1.jpg' },
                                { src: 'https://img14.360buyimg.com/pop/jfs/t1/134954/18/10543/152856/5f6ab84eEe0634ef3/427a250d49fe63c1.jpg' },
                                { src: 'https://img14.360buyimg.com/pop/jfs/t1/134954/18/10543/152856/5f6ab84eEe0634ef3/427a250d49fe63c1.jpg' }
                            ],
                            typed: '金色系大塊糖皮蛋糕', num: 1, price: 2080.00, 
                            price_origin: 2099.00, price_result: 2082.00,
                            wd: '海洋椰子棗糖咖啡', color: '藍金色', 
                            weight: 'N.A', chis: '6+4',
                            named: '脆皮红花大蛋糕'
                        }
                    ],
                    marks: { main: 'KC Li', sub: 'happy birthday' },
                    addr: { addr: '红花节16路感比大厦c216' },
                    user: {
                        named: '湯小姐', phoned: '56677663', from: 'WhatsApp', phoned_from: '12345678'
                    },
                    send: {
                        date: '2021-09-24 12:12', timed: '10:00-13:00',
                        getter: 'GOGOVAN', cost: 0, cost_add: 0, mark: '九龍滿1200元免送貨費',
                    },
                    sender: { named: '小明', phoned: '97366132', timed: '10:00' },
                    mark1: '', mark2: '', is_check: true, is_pay: true, is_new: true
                }
            ],
            products: [
                {
                    number: '00001', typed: { named: '生日牌' }, named: '彩色气球Happy Birthday 生日蛋糕插牌装饰',
                    brand: { named: 'Noble Shop' }, invent: 360, used: 30, bad: 2, remark: 'HKTVmall现在没货',
                    id: 1, specifications: { size: { named: '大包' } }, avatar: 'https://img0.baidu.com/it/u=1814954244,3528300064&fm=253&fmt=auto&app=120&f=PNG?w=408&h=408',
                    invens: [
                        { store: { named: 'HKYVMALL' }, come_date: '2021-12-12', color: '红', id: 1,
                            num: 130,  num_change: -8, used: 7, bad: 1,  issue_date: '2021-12-30' },
                        { store: { named: '百佳' }, come_date: '2021-08-12', color: '红', id: 1,
                            num: 130,  num_change: -7, used: 2, bad: 0,  issue_date: '2021-8-30' }
                    ]
                }
            ],
            staffs: [
                { 
                    id: 1, named: '何甜甜', number: '2888899', depart: { named: '销售' }, position: { named: '销售' },
                    phoned: 92779625, email: 'vcrting@163.com', bank: { number: '6255676678990203' }, money: '140000'
                },
                { 
                    id: 2, named: '沙砾值', number: '1919101', depart: { named: '扫地' }, position: { named: '清洁' },
                    phoned: 92779624, email: 'vcrting@162.com', bank: { number: '2255676678990203' }, money: '110000'
                }
            ],
            consumes: [
                {
                    id: 1, is_new: true, number: 'SFPY0920202', date: '2021-12-12',
                    content: '公司员工支出', typed: '员工工资', unit: 'HKD', money: 9970, 
                    pdf: { named: '123.pdf' } },
                {
                    id: 2, is_new: false, number: 'SFPY0920203', date: '2021-12-23',
                    content: '公司出行支出', typed: '交通', unit: 'HKD', money: 1270, 
                    pdf: { named: '123.pdf' } },
            ]
        }
    },
    mutations: {
        change(state, k_v) {
            state[k_v[0]] = k_v[1]
        },
        changeFunck(state, k_v) {
            state.funck[k_v[0]] = k_v[1]
        }
    },
    getters: { 
        
        checkToken(state) {
            let res = false
                const token = sessionStorage.getItem('oils_token')
                if ((token == undefined) || (token == '') || (token == null) || (token == 'undefined')) {
                    res = true
                } else {
                    state.token = token
                    console.log('token = ', token.substring(0, 15) + '...')
                }
                try{ } catch(e) { }
            return v => {
              return res
            }
        },
    },
    modules: {

    }
})