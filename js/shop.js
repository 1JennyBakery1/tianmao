var box,cartList,name1;function init(){var url;box=document.getElementById("main"),box.addEventListener("click",box1),cartList=localStorage.getItem("cartList")||[],name1=getCookie("name"),a1=document.querySelector(".a1"),name1?a1.innerHTML=name1:(alert("先登录后重试"),url=location.href,location.href="../html/天猫-登陆页面.html?newUrl="+url),0<cartList.length&&(cartList=eval("("+cartList+")"),show1())}function show1(){var a,t;0<cartList.length?(a=cartList.every(a=>1==a.sele),t=`
        <table class="contop">
        <tr>
            <td colspan="6">
                <div class="flex">
                    <div class="w80">
                        <input type="checkbox" name="quan" ${a?"checked":""}>全选
                    </div>
                    <div class="w251">商品信息</div>
                    <div class="w165"></div>
                    <div class="w129">单价</div>
                    <div class="w120 mar">数量</div>
                    <div class="w140">金额</div>
                    <div class="w119">操作</div>
                </div>
            </td>
        </tr>
    </table>
        `,cartList.forEach(a=>{t+=`
            
            <div class="content">
            <div class="pro w1190">
            <div class="pro-hd">
            <input type="checkbox" name="xuan" ${1==a.sele?"checked":""} data-id=${a.id}>
                <img src="../images/tm.png" alt="">
                <a href="javaScript:;">商品介绍：${a.new1}</a>
            </div>
            <div class="pro-bd">
                <div class="w552">
                    <input type="checkbox" name="xuan" ${1==a.sele?"checked":""} data-id=${a.id}>
                    <img src="${a.tu1}" alt="" style="width:80px;height:80px">
                    <a href="javaScript:;" style="white-space:nowrap;">${a.names}</a>
                    
                </div>
                <div class="w130">${a.price}</div>
                <div class="w120 btn">
                    <button ${a.number<=1?"disabled":""} data-id=${a.id}>-</button>
                    <input type="text" placeholder="" value="${a.number}" class='shuliang'>
                    <button data-id=${a.id}>+</button>
                </div>
                <div class="w140">
                    <div class="price" id="p1">${(a.price*a.number).toFixed(2)}</div>
                    </div>
                <div class="w119">
                    <div class="cz">
                        <a href="javaScript:;">移入收藏夹</a>
                        <a href="javaScript:;" style="color: red;" data-id=${a.id}>删除</a>
                        <a href="javaScript:;">相似宝贝</a>
                        </div>
                    </div>
                </div>
                </div>
            
        
            `}),t+=`
        <div class="w1190 jiesuan">
        <div class="fl">
            <div class="qx">
                <input type="checkbox" name="quan" ${a?"checked":""}>全选
            </div>
            <a href="javaScript:;">清空购物车</a>
            <a href="javaScript:;">移入收藏夹</a>
            <a href="javaScript:;">分享</a>
        </div>
        <div class="fr">
            <a href="javaScript:;">已选商品 <i>${total()[0]}</i> 件 </a>
            <span>合计（不含运费）： <i class="yf">${total()[1].toFixed(2)}</i> </span>
            <button class="js">结算</button>
        </div>
        </div>
        `):(console.log(123),t=`
        <table class="contop">
        <tr>
            <td colspan="6">
                <div class="flex">
                    <div class="w80">
                        <input type="checkbox" name="quan">全选
                    </div>
                    <div class="w251">商品信息</div>
                    <div class="w165"></div>
                    <div class="w129">单价</div>
                    <div class="w120 mar">数量</div>
                    <div class="w140">金额</div>
                    <div class="w119">操作</div>
                </div>
            </td>
        </tr>
    </table>
    <div class="content">
    <div class="pro w1190">
    <div class="pro-hd">
        <div style="width: 200px;height: 30px;line-height: 30px;
        background: red; margin: auto; border-radius: 15px;
        text-align: center;"><a href="./天猫列表页.html" 
        style="color: white;text-decoration: none;">赶紧去选购吧</a></div>
    </div>
</div>
    </div>
    <div class="w1190 jiesuan">
    <div class="fl">
        <div class="qx">
            <input type="checkbox" name="quan">全选
        </div>
        <a href="javaScript:;">清空购物车</a>
        <a href="javaScript:;">移入收藏夹</a>
        <a href="javaScript:;">分享</a>
    </div>
    <div class="fr">
        <a href="javaScript:;">已选商品 <i>0</i> 件 </a>
        <span>合计（不含运费）： <i class="yf">0.00</i> </span>
        <button class="js">结算</button>
    </div>
    </div>
        `),box.innerHTML=t}function box1(){var t,i=window.event.target;"+"==i.innerHTML&&(t=i.getAttribute("data-id"),console.log(cartList),cartList.forEach(a=>{a.id==t&&a.number++}),localStorage.setItem("cartList",JSON.stringify(cartList)),show1()),"-"==i.innerHTML&&(t=i.getAttribute("data-id"),cartList.forEach(a=>{a.id==t&&(a.number<=1?a.number=1:a.number--)}),localStorage.setItem("cartList",JSON.stringify(cartList)),show1()),"删除"==i.innerHTML&&(console.log(123),t=i.getAttribute("data-id"),cartList=cartList.filter(a=>a.id!=t),localStorage.setItem("cartList",JSON.stringify(cartList)),show1()),"quan"==i.name&&(cartList.forEach(a=>{i.checked?a.sele=1:a.sele=0}),localStorage.setItem("cartList",JSON.stringify(cartList)),show1()),"xuan"==i.name&&(t=i.getAttribute("data-id"),cartList.forEach(a=>{a.id==t&&(1==a.sele?a.sele=0:a.sele=1)}),localStorage.setItem("cartList",JSON.stringify(cartList)),show1()),"清空购物车"==i.innerHTML&&(cartList=[],localStorage.setItem("cartList",JSON.stringify(cartList)),show1())}function total(){var t=0,i=0;return cartList.forEach(a=>{1==a.sele&&(t+=a.number,i+=parseFloat(a.price)*parseInt(a.number))}),console.log(cartList),[t,i]}init();