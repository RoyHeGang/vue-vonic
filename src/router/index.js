import Home from '../views/Home.vue'
import TabbarHome from '../views/tabbar/Home.vue'
import TabbarDiscount from '../views/tabbar/Discount.vue'
import TabbarCart from '../views/tabbar/Cart.vue'
import TabbarMy from '../views/tabbar/My.vue'
import OrderList from '../views/OrderList.vue'

const routes = [{
    path: '',
    component: Home,
    children: [{
        path: '',
        component: TabbarHome
    }, {
        path: 'discount',
        component: TabbarDiscount
    }, {
        path: 'cart',
        component: TabbarCart
    }, {
        path: 'my',
        component: TabbarMy
    }]
}, {
    path: '/orderList',
    component: OrderList
}, {
    path: '*',
    component: TabbarHome
}]

export default routes
