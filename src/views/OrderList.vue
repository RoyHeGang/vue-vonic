<template>
    <div class="page has-navbar" v-nav="{title: '订单中心', showBackButton: true}">
        <div class="page-content padding-top">
            <list>
                <item class="item-list">
                    <div class="item-tip">
                        <span class="left">订单号：867804101453283329</span>
                        <span class="right">2017-05-26</span>
                    </div>
                    <div class="item-cont">
                        <img class="left" src="http://media.digikey.com/Photos/Mallory%20Sonalert%20Products%20Photos/ZA-SERIES.jpg" width="60" height="60" />
                        <div class="left mr20 item-info">
                            <h4>OPPO-R9s</h4>
                            <p>制造商：oppo</p>
                            <p>供应商：王大妈专卖店</p>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <span>数量: 1PCS</span>
                        <span>单价: ￥4.73</span>
                        <span>总价: ￥24.73</span>
                    </div>
                </item>
                <item>
                    <div class="item-tip">
                        <span class="left">订单号：867804101453283329</span>
                        <span class="right">2017-05-26</span>
                    </div>
                    <div class="item-cont">
                        <img class="left" src="http://media.digikey.com/Photos/Mallory%20Sonalert%20Products%20Photos/ZA-SERIES.jpg" width="60" height="60" />
                        <div class="left mr20 item-info">
                            <h4>OPPO-R9s</h4>
                            <p>制造商：oppo</p>
                            <p>供应商：王大妈专卖店</p>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <span>数量: 1PCS</span>
                        <span>单价: ￥4.73</span>
                        <span>总价: ￥24.73</span>
                    </div>
                </item>
                <item>
                    <div class="item-tip">
                        <span class="left">订单号：867804101453283329</span>
                        <span class="right">2017-05-26</span>
                    </div>
                    <div class="item-cont">
                        <img class="left" src="http://media.digikey.com/Photos/Mallory%20Sonalert%20Products%20Photos/ZA-SERIES.jpg" width="60" height="60" />
                        <div class="left mr20 item-info">
                            <h4>OPPO-R9s</h4>
                            <p>制造商：oppo</p>
                            <p>供应商：王大妈专卖店</p>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <span>数量: 1PCS</span>
                        <span>单价: ￥4.73</span>
                        <span>总价: ￥24.73</span>
                    </div>
                </item>
            </list>
        </div>
    </div>
</template>

<style>
.list{
    font-size: 12px;
}
.item-list{
    margin-bottom: 10px;
}
.item-tip{
    overflow: hidden;
    margin-bottom: 5px;
    border-bottom: 1px dashed #ddd;
    padding-bottom: 10px;
}
.left{
    float: left;
}
.right{
    float: right;
}
.mr20{
    margin-left: 20px;
}
.item-cont{
    overflow: hidden;
    margin-bottom: 10px;
}
.item-info h4{
    margin-bottom: 5px;
    font-size: 16px;
}
.item-info p{
    line-height: 20px;
}
.item-bottom{
    padding-top: 10px;
    border-top: 1px dashed #ddd;
}
.item-bottom span{
    display: inline-block;
    margin-right: 10px;
}
</style>
