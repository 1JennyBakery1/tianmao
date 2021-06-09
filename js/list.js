var row,pagination,a1,lis,index=0,lastIndex=0;function init(){var a;row=document.querySelector(".mainMiddle"),pagination=document.querySelector(".pagination"),name1=getCookie("name"),a1=document.querySelector(".a1"),(lis=Array.from(document.querySelectorAll(".lis"))).forEach(a=>{a.addEventListener("click",click1)}),lis1=Array.from(document.querySelectorAll(".lis1")),lis1.forEach(a=>{a.addEventListener("click",click2)}),console.log(lis1),name1?a1.innerHTML=name1:(alert("先登录后重试"),a=location.href,location.href="../html/天猫-登陆页面.html?newUrl="+a)}function click1(){lastIndex=index,index=lis.indexOf(this),lis[lastIndex].classList.remove("ac"),lis[index].classList.add("ac"),show1()}function click2(){show1()}async function show1(){var arr=await promiseAjax({url:"../php/list.php"}),arr=eval("("+arr+")").sort(function(a,n){return.5-Math.random()}),o1={pageInfo:{pageInfo:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{var a=arr.slice(10*(a-1),10*a),n="";a.forEach(a=>{n+=`
            <div class="mainCon">
                <div class="mainConimg1">
                    <img src="${a.tu1}"style="width:100%;" alt="">
                </div>
                <p class="mainConp1">
                    &yen;${a.price}
                </p>
                <p class="mainConp2">${a.names}</p>
                <p class="mainConp3"> <a href="javascript:;"style="white-space:nowrap";>${a.new1}</a> </p>
                <div class="mainCond1">
                    <p class="mainCond1p1">月成交 <span>${sum=parseInt(1e4*Math.random()+2e3)} 笔</span></p>
                    <p class="mainCond1p2">评价 <span> ${sum=parseInt(1e4*Math.random()+2e3)}</span></p>
                    <img src="../images/手机列表页-天猫Tmall店铺logo_03.jpg" alt="">
                </div>
                <p class="jiaru"> <a href="./详情.html?id=${a.id}">进入详情页</a></p>
            </div>
            `}),row.innerHTML=n})}init(),show1();