import Vue from 'vue'
import {
    Button,
    Tabbar,
    TabbarItem,
    Icon,
    Tab,
    Tabs,
    Swipe,
    SwipeItem,
    Lazyload,
    PullRefresh,
    Toast,
    List,
    Grid,
    GridItem,
    Collapse,
    CollapseItem,
    Popup,
    Field,
    NavBar,
    Dialog,
    Uploader
} from 'vant'

Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Popup);
Vue.use(Field);
Vue.use(NavBar);
Vue.use(Dialog);
Vue.use(Uploader);

Vue.prototype.$toast = Toast