// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "亲爱的宝贝",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第三个生日！",
        "这两年来，我见过你",
        "奇怪的样子",
        "可爱的样子",
        "目目的样子",
        "帅帅的样子",
        "都是我喜欢的样子",
        "今年要吃好好的",
        "多打球",
        "和想我！",
        "我们还要一起过很多很多个生日哦",
        "生日快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg",
        "亲爱的宝贝": "./imgs/hezhao1.jpg",
        "今天是你的生日": "./imgs/shengri.jpg",
        "这是我们在一起的": "./imgs/合照2.jpg",
        "第三个生日！": "./imgs/合照3.jpg",
        "这两年来，我见过你": "./imgs/jianguo.jpg",
        "奇怪的样子": "./imgs/kekeaiai.jpg",
        "可爱的样子": "./imgs/hanhan.jpg",
        "目目的样子": "./imgs/mumu.jpg",
        "帅帅的样子": "./imgs/shuaishuai.jpg",
        "都是我喜欢的样子": "./imgs/xihuan.jpg",
        "今年要吃好好的": "./imgs/chihao.jpg",
        "多打球": "./imgs/yundong.jpg",
        "和想我！": "./imgs/xiangwo.jpg",
        "我们还要一起过很多很多个生日哦": "./imgs/合照5.jpg",
        "生日快乐~~": "./imgs/合照4.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "上音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '爱你的大美女~'
};
