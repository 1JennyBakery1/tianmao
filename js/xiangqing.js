var dt,box,search1,box1,index=0,lastIndex=0;function init(){box=document.querySelector("main"),search1=location.search,Search(),name1=getCookie("name"),a1=document.querySelector(".a1"),console.log(name1),name1&&(a1.innerHTML=name1)}function Search(){async function fn1(){dt=await promiseAjax({url:"../php/xiangqing.php",data:"id="+id}),dt=eval("("+dt+")");var str=`
                <div class="main-left">
                <div class="magnifier-box">
                    <div class="magnifier-content">
                        <div class="magnifier">
                            <div class="exzoom" id="exzoom">
                                <!--大图区域-->
                                <div class="exzoom_img_box">
                                    <ul class='exzoom_img_ul'>
                                        <li><img src="${dt.tu1}" style="width: 100%;"class="img1 im1">
                                        </li>
                                       <span></span>
                                    </ul>
                                    <ul class="imgs">
                                    <li><img src="${dt.tu1}" />
                                    </li>
                                    <li><img src="${dt.tu2}" />
                                    </li>
                                    <li><img src="${dt.tu3}" />
                                    </li>
                                    <li><img src="${dt.tu4}" />
                                    </li>
                                    <li><img src="${dt.tu5}" />
                                    </li>
                                    </ul>
                                    <div>
                                    <div class="bigbox">
                                    <img src="${dt.tu1}" class="im1">
                                    </div>
                                    </div>
                                </div>
                                <!--缩略图导航-->
                                <div class="exzoom_nav"></div>
                                <!--控制按钮-->
                                <p class="exzoom_btn">
                                    <!-- <a href="javascript:void(0);" class="exzoom_prev_btn"> &lt; </a>
                                <a href="javascript:void(0);" class="exzoom_next_btn"> &gt; </a> -->
                                </p>
                            </div>
                        </div>
                    </div>
    
                    <div class="magnifier-bottom">
                        <p>
                            <a href="#">
                                <span class="iconfont icon-shoucang"></span>
                                <span>收藏商品</span>
                            </a>
                            <span>(14504人气)</span>
                        </p>
                        <p>
                            <a href="#" class="underli">举报</a>
                        </p>
                    </div>
                </div>
                <div class="productInformation">
                    <div class="shop-name">
                        <p>${dt.names}</p>
                        <p>${dt.new1}</p>
                    </div>
                    <div class="price-box">
                        <div class="new-price">
                            <span class="sp1">促销价</span>
                            <p>
                                <span class="sp2">￥<span>${dt.price}</span></span>
                                <span class="sp3"><span></span>新品促销</span>
                            </p>
                        </div>
                        <p class="discount">淘金币可抵扣商品价格3%</p>
                    </div>
                    <div class="freight">
                        <div class="freight-box">
                            <div class="sp1">运费</div>
                            <div class="address-range">
                                <p class="p1">
                                    <span>河北石家庄快</span>
                                    <span>至</span>
                                </p>
                                <p class="address-choose">
                                    <span>郑州</span>
                                    <span class="iconfont icon-xiangxia3"></span>
                                </p>
                                <p><span>快递:${sum=parseInt(30*Math.random()+10).toFixed(2)}</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="shop-sales-statistics">
                        <p>
                            <span>月销量</span>
                            <span>${sum=parseInt(1e4*Math.random()+2e3)}+</span>
                        </p>
                        <p>
                            <span>累计评价</span>
                            <span>${sum=parseInt(1e4*Math.random()+2e3)}</span>
                        </p>
                        <p>
                            <span>送天猫积分</span>
                            <span class="clo208">${sum=parseInt(1e3*Math.random()+200)}</span>
                        </p>
                    </div>
                    <div class="shop-describe">
                        <div class="shop-describe-box">
                            <div class="shop-describe-content">
                                <dl class="shoe-size">
                                    
                                </dl>
                                <dl class="shop-count">
                                    <dt class="tb-metatit">数量</dt>
                                    <dd>
                                        <div class="counter-box">
                                            <div class="counter">
                                                <input type="text" id="shop-count" value="1">
                                                <div class="count-but">
                                                    <div>
                                                        <span class="iconfont icon-xiangshang"></span>
                                                    </div>
                                                    <div>
                                                        <span class="iconfont icon-xiangxia3"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="jian">件</span>
                                            <span class="inventory-surplus">库存${sum=parseInt(500*Math.random()+50)}件</span>
                                        </div>
                                    </dd>
                                </dl>
    
                                <div class="shop-describe-content-but">
                                    <div class="but-left">
                                        <a href="./购物车页面.html" title="点击此按钮，到下一步确认购买信息。">立即购买</a>
                                    </div>
                                    <div class="but-right">
                                        <a href="javascript:;">
                                            <span class="iconfont icon-gouwuchekong"></span>
                                            <span>加入购物车</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="shop-ensure">
                        <p>服务承诺</p>
                        <p class="p234">正品保证</p>
                        <p class="p234">极速退款</p>
                        <p class="p234">七天无理由退换</p>
                        <div class="p-pay">
                            <span>支付方式</span>
                            <span class="iconfont icon-xiangxia3 icon-active"></span>
                            <span class="iconfont icon-xiangshang"></span>
                        </div>
                    </div>
                </div>
            </div>
            
                `;function click1(){im1[0].src=this.firstElementChild.src,im1[1].src=this.firstElementChild.src}box.innerHTML=str,big1(),im1=document.querySelectorAll(".im1"),lis=Array.from(document.querySelectorAll(".imgs li")),lis.forEach(function(s){s.addEventListener("click",click1)})}var ar1,id;function box1(){var box=document.querySelector("main");console.log(box),box.onclick=function(){var e=e||window.event,target=e.target,cartList,bool;"加入购物车"==target.innerHTML&&(cartList=localStorage.getItem("cartList")||[],0<cartList.length?(cartList=eval("("+cartList+")"),console.log(cartList),bool=!0,cartList.forEach(s=>{dt.id==s.id&&(bool=!1,s.number++,localStorage.setItem("cartList",JSON.stringify(cartList)))}),bool&&(dt.number=1,cartList.push(dt),localStorage.setItem("cartList",JSON.stringify(cartList)))):(dt.number=1,cartList.push(dt),localStorage.setItem("cartList",JSON.stringify(cartList))))}}search1?(ar1=search1.split("="),"?id"==ar1[0]?(id=ar1[1],fn1()):(alert("参数有误"),location.href="../html/天猫列表页.html")):(alert("非法进入"),location.href="../html/天猫列表页.html"),box1()}function big1(){bigbox=document.querySelector(".bigbox"),xbox=document.querySelector(".exzoom_img_ul"),xbox.addEventListener("mouseenter",mouseenter1),xbox.addEventListener("mouseleave",mouseleave1),xbox.addEventListener("mousemove",mousemove1),span=document.querySelector(".exzoom_img_ul span"),img=document.querySelector(".bigbox img")}function mouseenter1(){bigbox.style.display="block",span.style.display="block"}function mouseleave1(){span.style.display="none",bigbox.style.display="none"}function mousemove1(s){var a=(s=s||window.event).pageX-xbox.offsetLeft-span.offsetWidth/2,s=s.pageY-xbox.offsetTop-span.offsetHeight/2;s<0&&(s=0),(a=a<0?0:a)>xbox.clientWidth-span.offsetWidth&&(a=xbox.clientWidth-span.offsetWidth),s>xbox.clientHeight-span.offsetHeight&&(s=xbox.clientHeight-span.offsetHeight),span.style.left=a+"px",span.style.top=s+"px",img.style.left=-2*a+"px",img.style.top=-2*s+"px"}init();