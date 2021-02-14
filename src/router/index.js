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

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        component: home
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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router