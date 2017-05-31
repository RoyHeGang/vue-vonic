<template>
    <div class="page has-navbar has-tabbar" v-tabbar-menu-index="3">
        <von-header theme="light">
            <span slot="title">个人中心</span>
        </von-header>

        <div class="page-content padding-top">
            <div style="text-align: center; padding: 50px 20px;">
                <md-button class="button button-assertive">
                  登陆
                </md-button>
                <md-button class="button button-assertive">
                  注册
                </md-button>
            </div>
            <list>
                <item class="item-icon-right">我的购物车 <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i></item>
                <item class="item-icon-right"><router-link to="/orderList">我的订单</router-link> <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i></item>
                <item class="item-icon-right">询报价管理 <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i></item>
                <item class="item-icon-right">我的 <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i></item>
            </list>
        </div>
    </div>
</template>

<style>
.list{
    font-size: 14px;
}

.button-assertive{
    margin: 0 20px;
    padding: 0 30px;
}
</style>
