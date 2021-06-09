var lunbo,prev,next,index=0,lastIndex=0,lis,shop1,name1,a1;function init(){var i;lunbo=document.querySelector(".imgs"),prev=document.querySelector("[name=prev]"),next=document.querySelector("[name=next]"),imgs=document.querySelectorAll(".imgs img"),lis=Array.from(document.querySelectorAll(".imgs li")),prev.addEventListener("click",clickHander1),next.addEventListener("click",clickHander1),lunbo.onmouseover=unt,lunbo.onmouseleave=tun,team=setInterval(gn,2500),lis.forEach(function(i,e){i.onclick=bn}),shop1=document.querySelectorAll(".shopping-list"),name1=getCookie("name"),a1=document.querySelector(".a1"),console.log(a1),name1?a1.innerHTML=name1:(alert("先登录后重试"),i=location.href,location.href="../html/天猫-登陆页面.html?newUrl="+i)}function clickHander1(){"&lt;"==this.innerHTML&&(redcolor(),lastIndex=index,--index<0&&(index=imgs.length-1)),"&gt;"==this.innerHTML&&(redcolor(),lastIndex=index,++index===imgs.length&&(index=0))}function gn(){lastIndex=index,++index===imgs.length&&(index=0),redcolor()}function redcolor(){imgs[index].classList.add("bc"),imgs[lastIndex].classList.remove("bc"),lis[index].classList.add("ac"),lis[lastIndex].classList.remove("ac")}function bn(){redcolor(),lastIndex=index,index=lis.indexOf(this)}function unt(){clearInterval(team)}function tun(){init()}init(),async function(){var arr=await promiseAjax({url:"../php/list.php"});arr=eval("("+arr+")"),arr.sort(function(i,e){return.5-Math.random()});for(var str="",i=0;i<arr.length&&8!=i;i++)str+=`
            
            <div class="shopping-item">
            <div style="margin: 20px;">
                <img
                    src="${arr[i].tu1}"style="width:160px;">
                <p class="shopping-name">${arr[i].new1}</p>
                <p style="margin-top: 10px;">
                <p style="display: inline-block;margin-top: 15px;"><span style="font-size: 12px;">￥</span><span
                        style="font-size: 18px;font-weight: bold;color: #2F2F2F;">${arr[i].price}</span></p>
                        <a href="./详情.html?id=${arr[i].id}"><img style="float: right;width: 40px;height: 40px;" src="../images/gouwuche.png"></a>
                </p>
            </div>
        </div>
                
        `;shop1[0].innerHTML=str;var arr=await promiseAjax({url:"../php/list.php"});arr=eval("("+arr+")"),arr2=arr.sort(function(i,e){return.5-Math.random()});for(var str="",i=0;i<arr2.length&&8!=i;i++)str+=`
            
            <div class="shopping-item">
            <div style="margin: 20px;">
                <img
                    src="${arr2[i].tu1}"style="width:160px;">
                <p class="shopping-name">${arr2[i].new1}</p>
                <p style="margin-top: 10px;">
                <p style="display: inline-block;margin-top: 15px;"><span style="font-size: 12px;">￥</span><span
                        style="font-size: 18px;font-weight: bold;color: #2F2F2F;">${arr2[i].price}</span></p>
                        <a href="./详情.html?id=${arr2[i].id}"><img style="float: right;width: 40px;height: 40px;" src="../images/gouwuche.png"></a>
                </p>
            </div>
        </div>                
        `;shop1[2].innerHTML=str;var arr=await promiseAjax({url:"../php/list.php"});arr=eval("("+arr+")"),arr1=arr.sort(function(i,e){return.5-Math.random()});for(var str="",i=0;i<arr1.length&&8!=i;i++)str+=`
            
            <div class="shopping-item">
            <div style="margin: 20px;">
                <img
                    src="${arr1[i].tu1}"style="width:160px;">
                <p class="shopping-name">${arr1[i].new1}</p>
                <p style="margin-top: 10px;">
                <p style="display: inline-block;margin-top: 15px;"><span style="font-size: 12px;">￥</span><span
                        style="font-size: 18px;font-weight: bold;color: #2F2F2F;">${arr1[i].price}</span></p>
                <a href="./详情.html?id=${arr1[i].id}"><img style="float: right;width: 40px;height: 40px;" src="../images/gouwuche.png"></a>
                </p>
            </div>
        </div>
                
        `;shop1[1].innerHTML=str}();