import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () =>
    import ('../views/home/home')
const category = () =>
    import ('../views/category/category')
const updata = () =>
    import ('../views/updata/updata')
const buy = () =>
    import ('../views/buy/buy')
const mine = () =>
    import ('../views/mine/mine')
const search = () =>
    import ('../views/search/search')
const message = () =>
    import ('../views/message/message')
const zhibo = () =>
    import ('../views/home/childcomps/zhibo')
const tuijian = () =>
    import ('../views/home/childcomps/tuijian')
const remen = () =>
    import ('../views/home/childcomps/remen')
const yingshi = () =>
    import ('../views/home/childcomps/yingshi')
const zhuifan = () =>
    import ('../views/home/childcomps/zhuifan')
const xiaokan = () =>
    import ('../views/home/childcomps/xiaokan')
const kangji = () =>
    import ('../views/home/childcomps/kangji')

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        component: home,
        children: [{
                path: '/home/zhibo',
                component: zhibo
            },
            {
                path: '/home/tuijian',
                component: tuijian
            },
            {
                path: '',
                redirect: '/home/tuijian'
            },
            {
                path: '/home/remen',
                component: remen
            },
            {
                path: '/home/yingshi',
                component: yingshi
            },
            {
                path: '/home/xiaokan',
                component: xiaokan
            },
            {
                path: '/home/kangji',
                component: kangji
            },
            {
                path: '/home/zhuifan',
                component: zhuifan
            },
        ]
    },
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/updata',
        component: updata
    },
    {
        path: '/buy',
        component: buy
    },
    {
        path: '/mine',
        component: mine
    },
    {
        path: '/search',
        component: search,
        meta: {
            isshow: true
        }
    },
    {
        path: '/message',
        component: message,
        meta: {
            isshow: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router