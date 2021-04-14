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
    import ('../views/home/childcomps/zhibo/zhibo')
const tuijian = () =>
    import ('../views/home/childcomps/tuijian/tuijian')
const remen = () =>
    import ('../views/home/childcomps/remen/remen')
const yingshi = () =>
    import ('../views/home/childcomps/yingshi/yingshi')
const zhuifan = () =>
    import ('../views/home/childcomps/zhuifan/zhuifan')
const xiaokan = () =>
    import ('../views/home/childcomps/xiaokan/xiaokan')
const kangji = () =>
    import ('../views/home/childcomps/kangji/kangji')
const detail = () =>
    import ('../views/detail/detail')
const vistor = () =>
    import ('../views/vistor/vistor')
const login = () =>
    import ('../views/mine/childcomps/login')
const register = () =>
    import ('../views/mine/childcomps/register')
const userinfo = () =>
    import ('../views/mine/childcomps/userinfo')
const edit = () =>
    import ('../views/mine/childcomps/edit')
const game = () =>
    import ('../views/home/childcomps/zhibo/childcomps/game')
const quanping = () =>
    import ('../views/home/childcomps/zhibo/childcomps/quanping')
const yule = () =>
    import ('../views/home/childcomps/zhibo/childcomps/yule')
const danji = () =>
    import ('../views/home/childcomps/zhibo/childcomps/danji')
const diantai = () =>
    import ('../views/home/childcomps/zhibo/childcomps/diantai')
const xuni = () =>
    import ('../views/home/childcomps/zhibo/childcomps/xuni')
const quanbu = () =>
    import ('../views/home/childcomps/zhibo/childcomps/quanbu')
    
const shenghuo = () =>
import ('../views/home/childcomps/zhibo/childcomps/shenghuo')
Vue.use(VueRouter)

const routes = [{
        path: '/home',
        component: home,
        children: [{
                path: '/zhibo',
                component: zhibo,
            },
            {
                path: '/tuijian',
                component: tuijian
            },
            {
                path: '/remen',
                component: remen
            },
            {
                path: '/yingshi',
                component: yingshi
            },
            {
                path: '/xiaokan',
                component: xiaokan
            },
            {
                path: '/kangji',
                component: kangji
            },
            {
                path: '/zhuifan',
                component: zhuifan
            },
            {
                path: '',
                redirect: '/tuijian'
            }
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
        path: '/login',
        component: login,
        meta: {
            isshow: true
        }
    },
    {
        path: '/register',
        component: register,
        meta: {
            isshow: true
        }
    },
    {
        path: '/userinfo',
        component: userinfo,
        meta: {
            isshow: true
        }
    },
    {
        path: '/edit',
        component: edit,
        meta: {
            isshow: true
        }
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
    },
    {
        path: '/detail/:id',
        component: detail,
        meta: {
            isshow: true
        }
    },
    {
        path: '/vistor/:id',
        component: vistor,
        meta: {
            isshow: true
        }
    },
    {
        path: '/zhibo/game',
        component: game,
        meta: {
            isshow: true
        }
    },
    {
        path: '/zhibo/quanping',
        component: quanping,
        meta: {
            isshow: true
        }
    },
    {
        path: '/zhibo/yule',
        component: yule,
        meta: {
            isshow: true
        }
    },
    {
        path: '/zhibo/danji',
        component: danji,
        meta: {
            isshow: true
        }
    },
    {
        path: '/zhibo/diantai',
        component: diantai,
        meta: {
            isshow: true
        }
    },
    {
        path: '/zhibo/xuni',
        component: xuni,
        meta: {
            isshow: true
        }
    },
    {
        path: '/zhibo/quanbu',
        component: quanbu,
        meta: {
            isshow: true
        }
    },
    {
        path: '/zhibo/shenghuo',
        component: shenghuo,
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

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

    return originalPush.call(this, location).catch(err => err)

}

router.beforeEach((to, from, next) => {
    //to 将要访问的路径
    //from 代表从哪个路径跳转来的
    //next()表示放行 next('./login')表示强制返回login
    //console.log(manager)
    if (to.path === '/userinfo') {
        const manager = sessionStorage.getItem('token')
        if (!manager) {
            Vue.prototype.$toast.fail('请先登录账号')
            return next('/login');
        }
        next()
    } else {
        return next()
    }
})

export default router