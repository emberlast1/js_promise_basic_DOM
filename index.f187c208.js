var e=document.querySelector("body"),n=document.querySelector(".logo"),t=function(){var n=document.createElement("div");n.classList.add("message"),n.innerText="Promise was resolved!",e.append(n)},r=function(){var n=document.createElement("div");n.classList.add("message error-message"),n.innerText="Promise was rejected",e.append(n)},c=new Promise(function(e){n.addEventListener("click",function(){e()})}),o=new Promise(function(e,n){setTimeout(function(){return n(Error("rejected in 3 seconds"))},3e3)});c.then(t).catch(r),o.then(t).catch(r);
//# sourceMappingURL=index.f187c208.js.map
