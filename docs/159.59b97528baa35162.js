"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[159],{159:(S,m,c)=>{c.r(m),c.d(m,{HomeComponent:()=>I});var r=c(6814),d=c(1120),g=c(8129),l=c(756),u=c(3519),_=c.n(u),t=c(4769),p=c(0),f=c(6286),h=c(9196);function x(i,n){1&i&&t._UZ(0,"img",11)}function v(i,n){1&i&&t._UZ(0,"img",12)}function C(i,n){1&i&&t._UZ(0,"img",13)}function T(i,n){1&i&&t._UZ(0,"img",14)}function P(i,n){if(1&i&&(t._UZ(0,"img",19),t.TgZ(1,"h3",20),t._uU(2),t.qZA()),2&i){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH)("alt",e.name)("title",e.slug),t.xp6(2),t.Oqu(e.name)}}function O(i,n){if(1&i&&(t.ynx(0),t.YNc(1,P,3,4,"ng-template",18),t.BQk()),2&i){const e=n.$implicit;t.xp6(1),t.Q6J("id",e._id)}}function Z(i,n){if(1&i&&(t.TgZ(0,"section",0)(1,"h2",15),t._uU(2," Popular Category Of The Store "),t._UZ(3,"i",16),t.qZA(),t.TgZ(4,"owl-carousel-o",3),t.YNc(5,O,2,1,"ng-container",17),t.qZA()()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("options",e.categoryOptions),t.xp6(1),t.Q6J("ngForOf",e.categoryList)}}function b(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"i",38),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.addToWishlist(s._id))}),t.qZA()}}function w(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"i",39),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.removeFromWishlist(s._id))}),t.qZA()}}function E(i,n){if(1&i&&t._UZ(0,"i",40),2&i){const e=n.$implicit,o=t.oxw().$implicit;t.ekj("rating-color",o.ratingsAverage>=e)}}const M=function(i){return["/details",i]},A=function(){return[1,2,3,4,5]};function y(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",24)(1,"div",25),t.YNc(2,b,1,0,"i",26),t.YNc(3,w,1,0,"i",27),t.TgZ(4,"div",28),t._UZ(5,"img",29),t.TgZ(6,"h4",30),t._uU(7),t.qZA(),t.TgZ(8,"h5",31),t._uU(9),t.ALo(10,"cuttext"),t.qZA(),t.TgZ(11,"div",32)(12,"p",33),t._uU(13),t.qZA(),t.TgZ(14,"p"),t.YNc(15,E,1,2,"i",34),t.qZA()()(),t.TgZ(16,"button",35,36),t.NdJ("click",function(){const a=t.CHM(e).$implicit,H=t.MAs(17),W=t.oxw(2);return t.KtG(W.addProduct(a._id,H))}),t._uU(18," Add Product"),t._UZ(19,"i",37),t.qZA()()()}if(2&i){const e=n.$implicit,o=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!o.wishlistProductId.includes(e._id)),t.xp6(1),t.Q6J("ngIf",o.wishlistProductId.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(13,M,e._id)),t.xp6(1),t.Q6J("title",e.title)("src",e.imageCover,t.LSH)("alt",e.title),t.xp6(2),t.Oqu(e.category.name),t.xp6(2),t.hij(" ",t.xi3(10,10,e.title,2)," "),t.xp6(4),t.hij("",e.price," EGP"),t.xp6(2),t.Q6J("ngForOf",t.DdM(15,A))}}function U(i,n){if(1&i&&(t.TgZ(0,"section",0)(1,"h2",15),t._uU(2," Popular Products Of The Store "),t._UZ(3,"i",21),t.qZA(),t.TgZ(4,"div",22),t.YNc(5,y,20,16,"div",23),t.qZA()()),2&i){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",e.productlist.slice(0,24))}}function D(i,n){1&i&&(t.TgZ(0,"h2",41),t._uU(1,"Please Wait...."),t._UZ(2,"i",42),t.qZA())}let I=(()=>{class i{constructor(e,o,s,a){this._ProductService=e,this._CartService=o,this._Renderer2=s,this._WishlistService=a,this.productlist=[],this.categoryList=[],this.wishlistProductId=[],this.categoryOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,autoplay:!0,autoplaySpeed:1e3,autoplayTimeout:3e3,navText:["",""],responsive:{0:{items:2},400:{items:3},740:{items:4},940:{items:5}},nav:!1},this.mainSliderOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,autoplay:!0,autoplaySpeed:1e3,autoplayTimeout:4e3,navText:["",""],responsive:{0:{items:1}},nav:!1}}ngOnInit(){this._ProductService.getAllProduct().subscribe({next:e=>{console.log(e.data),this.productlist=e.data},error:e=>{console.log(e)}}),this._ProductService.getCategory().subscribe({next:e=>{console.log(e.data),this.categoryList=e.data},error:e=>{console.log(e)}}),this._WishlistService.getWishlist().subscribe({next:e=>{const o=e.data.map(s=>s._id);this.wishlistProductId=o}})}addProduct(e,o){this._Renderer2.setAttribute(o,"disabled","true"),this._CartService.addToCart(e).subscribe({next:s=>{console.log(s),"success"==s.status&&(_().fire({position:"top-end",icon:"success",title:s.message,showConfirmButton:!1,timer:1500}),this._Renderer2.removeAttribute(o,"disabled"),this._CartService.cartNumber.next(s.numOfCartItems))},error:s=>{console.log(s),this._Renderer2.removeAttribute(o,"disabled")}})}addToWishlist(e){this._WishlistService.addProductWishlist(e).subscribe({next:o=>{"success"==o.status&&(_().fire({position:"top-end",icon:"success",title:o.message,showConfirmButton:!1,timer:1500}),this.wishlistProductId=o.data,this._WishlistService.wishlistNumber.next(o.data.length))}})}removeFromWishlist(e){this._WishlistService.removeProductWishlist(e).subscribe({next:o=>{console.log(o),"success"==o.status&&(_().fire({position:"top-end",icon:"info",title:o.message,showConfirmButton:!1,timer:1500}),this.wishlistProductId=o.data,this._WishlistService.wishlistNumber.next(o.data.length))}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(p.M),t.Y36(f.N),t.Y36(t.Qsj),t.Y36(h.M))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:16,vars:5,consts:[[1,"py-4","mx-3"],[1,"row","gx-4"],[1,"col-md-9","rounded","overflow-hidden"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],[1,"d-flex","flex-column","rounded"],["height","195","src","./assets/images/fixed4.jpg","alt","slide",1,"fixed-img","w-100","rounded-top","shadow"],["height","195","src","./assets/images/bgclothes.jpg","alt","slide",1,"fixed-img","w-100","rounded-bottom","shadow"],["class","py-4 mx-3",4,"ngIf","ngIfElse"],["msg",""],["height","400","src","./assets/images/bggreenclothes.jpg","alt","slider image ",1,"rounded"],["height","400","src","./assets/images/bgclothes3.jpg","alt","slider image ",1,"rounded"],["height","400","src","./assets/images/bgclothes2.jpg","alt","slider image ",1,"rounded"],["height","400","src","./assets/images/main-slider-2.jpeg","alt","slider image ",1,"rounded"],[1,"fw-bolder","mb-4","main-title"],[1,"fas","fa-tags","fa-1x","text-main"],[4,"ngFor","ngForOf"],["carouselSlide","",3,"id"],["height","300","title",".",1,"w-100",3,"src","alt","title"],[1,"h5","text-main","text-center","mt-2"],[1,"fas","fa-store","fa-1x","text-main"],[1,"row","g-4"],["class","col-md-2",4,"ngFor","ngForOf"],[1,"col-md-2"],[1,"product","cursor-pointer","p-2","h-100"],["class","fa-regular fa-heart heart",3,"click",4,"ngIf"],["class","fa-solid fa-heart heart",3,"click",4,"ngIf"],["role","button",3,"routerLink"],["title",".",1,"w-100",3,"title","src","alt"],[1,"h6","my-2","fw-semibold","text-main"],[1,"h6","text-dark","fw-semibold"],[1,"d-flex","align-items-center","justify-content-between","my-2"],[1,"fw-semibold","text-dark"],["class","fas fa-star ",3,"rating-color",4,"ngFor","ngForOf"],[1,"main-btn","w-100","my-1","small",3,"click"],["btnAdd",""],[1,"fas","fa-cart-plus","ms-1","fa-bounce"],[1,"fa-regular","fa-heart","heart",3,"click"],[1,"fa-solid","fa-heart","heart",3,"click"],[1,"fas","fa-star"],[1,"text-center","fw-semibold","mt-5","text-main"],[1,"fa-regular","fa-hourglass-half","fa-bounce"]],template:function(o,s){if(1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"owl-carousel-o",3),t.YNc(4,x,1,0,"ng-template",4),t.YNc(5,v,1,0,"ng-template",4),t.YNc(6,C,1,0,"ng-template",4),t.YNc(7,T,1,0,"ng-template",4),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6),t._UZ(10,"img",7)(11,"img",8),t.qZA()()()(),t.YNc(12,Z,6,2,"section",9),t.YNc(13,U,6,1,"section",9),t.YNc(14,D,3,0,"ng-template",null,10,t.W1O)),2&o){const a=t.MAs(15);t.xp6(3),t.Q6J("options",s.mainSliderOptions),t.xp6(9),t.Q6J("ngIf",s.categoryList.length>0)("ngIfElse",a),t.xp6(1),t.Q6J("ngIf",s.productlist.length>0)("ngIfElse",a)}},dependencies:[r.ez,r.sg,r.O5,d.rH,g.r,l.bB,l.Fy,l.Mp],styles:[".product[_ngcontent-%COMP%]{border:solid 1px #0aad0a!important;transition:all .5s;overflow:hidden!important}.product[_ngcontent-%COMP%]:hover{box-shadow:0 0 10px #11bd1168;transform:scale(1.01)}.product[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{transform:translateY(190%);opacity:0;transition:all .5s}.product[_ngcontent-%COMP%]:hover   .main-btn[_ngcontent-%COMP%]{transform:translateY(0);opacity:1}.fixed-img[_ngcontent-%COMP%]{margin-bottom:10px}"]})}return i})()}}]);