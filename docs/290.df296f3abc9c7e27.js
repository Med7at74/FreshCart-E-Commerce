"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[290],{5290:(g,m,a)=>{a.r(m),a.d(m,{CartComponent:()=>v});var u=a(6814),p=a(1120),t=a(4769),C=a(6286);function l(n,b){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13),t._UZ(2,"img",14),t.qZA(),t.TgZ(3,"div",15)(4,"div")(5,"h3",16),t._uU(6),t.qZA(),t.TgZ(7,"p",17),t._uU(8),t.qZA(),t.TgZ(9,"button",18,19),t.NdJ("click",function(){const o=t.CHM(e).$implicit,c=t.MAs(10),d=t.oxw(2);return t.KtG(d.removeItem(o.product._id,c))}),t._UZ(11,"i",20),t._uU(12," Remove "),t.qZA()(),t.TgZ(13,"div")(14,"button",21,22),t.NdJ("click",function(){const o=t.CHM(e).$implicit,c=t.MAs(15),d=t.MAs(20),h=t.oxw(2);return t.KtG(h.changeCount(o.product._id,o.count+1,c,d))}),t._uU(16," + "),t.qZA(),t.TgZ(17,"span",23),t._uU(18),t.qZA(),t.TgZ(19,"button",21,24),t.NdJ("click",function(){const o=t.CHM(e).$implicit,c=t.MAs(15),d=t.MAs(20),h=t.oxw(2);return t.KtG(h.changeCount(o.product._id,o.count-1,c,d))}),t._uU(21," - "),t.qZA()()()()}if(2&n){const e=b.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("title",e.product.title)("alt",e.product.title),t.xp6(4),t.Oqu(e.product.title),t.xp6(2),t.hij("Price : ",e.price," EGP"),t.xp6(10),t.Oqu(e.count)}}const f=function(n){return["/payment",n]};function i(n,b){if(1&n){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h2",4),t._uU(3," Your Cart "),t._UZ(4,"i",5),t._uU(5," : "),t.qZA(),t.TgZ(6,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.clearCart())}),t._uU(7," Clear All "),t._UZ(8,"i",7),t.qZA()(),t.TgZ(9,"p",8),t._uU(10),t.qZA(),t.YNc(11,l,22,6,"div",9),t.TgZ(12,"button",10),t._uU(13," Order Now "),t._UZ(14,"img",11),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(10),t.hij("Total Price : ",e.cartDetails.totalCartPrice," EGP"),t.xp6(1),t.Q6J("ngForOf",e.cartDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(3,f,e.cartDetails._id))}}function _(n,b){1&n&&(t.TgZ(0,"h2",25),t._uU(1,"Your Shoping Cart is Empity....."),t._UZ(2,"i",26),t.qZA())}let v=(()=>{class n{constructor(e,r){this._CartService=e,this._Renderer2=r,this.cartDetails=null}ngOnInit(){this._CartService.getUserCart().subscribe({next:e=>{console.log(e),"success"==e.status&&(this.cartDetails=e.data)},error:e=>{console.log(e)}})}removeItem(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeItemFromCart(e).subscribe({next:s=>{console.log(s),"success"==s.status&&(this.cartDetails=s.data,this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartNumber.next(s.numOfCartItems))},error:s=>{console.log(s),this._Renderer2.removeAttribute(r,"disabled")}})}changeCount(e,r,s,o){r>=1?(this._Renderer2.setAttribute(s,"disabled","true"),this._Renderer2.setAttribute(o,"disabled","true"),this._CartService.updateCart(e,r).subscribe({next:c=>{console.log(c),"success"==c.status&&(this.cartDetails=c.data,this._Renderer2.removeAttribute(s,"disabled"),this._Renderer2.removeAttribute(o,"disabled"))},error:c=>{console.log(c),this._Renderer2.removeAttribute(s,"disabled"),this._Renderer2.removeAttribute(o,"disabled")}})):console.log(" no ")}clearCart(){this._CartService.clearAllCart().subscribe({next:e=>{console.log(e),"success"==e.message&&(this.cartDetails=null,this._CartService.cartNumber.next(0))},error:e=>{console.log(e)}})}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(C.N),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","p-4 shadow w-75 mx-auto bg-main-light rounded my-4",4,"ngIf","ngIfElse"],["msg",""],[1,"p-4","shadow","w-75","mx-auto","bg-main-light","rounded","my-4"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text-main","fw-semibold","mb-2"],[1,"fas","fa-cart-plus","fa-1x","text-main","fa-bounce"],[1,"btn","btn-outline-danger","btn-sm","px-3","py-1",3,"click"],[1,"fas","fa-trash"],[1,"text-dark","fw-semibold"],["class","row border-bottom pb-2 mb-2",4,"ngFor","ngForOf"],[1,"main-btn","py-0","px-3","mt-3","d-block","ms-auto",3,"routerLink"],["src","./assets/images/master new.svg","alt","visa",1,"p-0","m-0"],[1,"row","border-bottom","pb-2","mb-2"],[1,"col-md-1"],["title","imageCover",1,"w-100",3,"src","title","alt"],[1,"col-md-11","d-flex","align-items-center","justify-content-between"],[1,"fw-semibold","text-dark"],[1,"fw-semibold","text-dark","small","mb-0"],[1,"btn","btn-outline-danger","btn-sm","px-3","py-1","my-2",3,"click"],["btnRemoveItem",""],[1,"fas","fa-trash-can"],[1,"btn","btn-sm","border-success",3,"click"],["btn1",""],[1,"mx-2"],["btn2",""],[1,"text-center","text-main","mt-5"],[1,"fa-regular","fa-face-sad-tear","mx-2","fa-bounce"]],template:function(r,s){if(1&r&&(t.YNc(0,i,15,5,"section",0),t.YNc(1,_,3,0,"ng-template",null,1,t.W1O)),2&r){const o=t.MAs(2);t.Q6J("ngIf",s.cartDetails)("ngIfElse",o)}},dependencies:[u.ez,u.sg,u.O5,p.rH]})}return n})()},6286:(g,m,a)=>{a.d(m,{N:()=>C});var u=a(5619),p=a(4769),t=a(9862);let C=(()=>{class l{constructor(i){this._HttpClient=i,this.cartNumber=new u.X(0),this.baseUrl="https://ecommerce.routemisr.com"}addToCart(i){return this._HttpClient.post(this.baseUrl+"/api/v1/cart",{productId:i})}getUserCart(){return this._HttpClient.get(this.baseUrl+"/api/v1/cart")}removeItemFromCart(i){return this._HttpClient.delete(this.baseUrl+`/api/v1/cart/${i}`)}updateCart(i,_){return this._HttpClient.put(this.baseUrl+`/api/v1/cart/${i}`,{count:_})}clearAllCart(){return this._HttpClient.delete(this.baseUrl+"/api/v1/cart")}checkOutSession(i,_){return this._HttpClient.post(this.baseUrl+`/api/v1/orders/checkout-session/${i}?url=https://Med7at74.github.io/FreshCart-E-Commerce`,{shippingAddress:_})}getUserOrder(i){return this._HttpClient.get(this.baseUrl+`/api/v1/orders/user/${i}`)}static#t=this.\u0275fac=function(_){return new(_||l)(p.LFG(t.eN))};static#e=this.\u0275prov=p.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()}}]);