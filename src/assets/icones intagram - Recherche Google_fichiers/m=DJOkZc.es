"use strict";loaded_1_9(function(_){var window=this;
_.m("DJOkZc");
var BYi=function(a){_.Kh.call(this,a.Na);this.Fi=this.Va("V68bde");this.Ma=this.isOpen=!1;this.Ca=this.Ea=null;this.Jb=a.service.Zb;this.Gn=a.service.viewport;this.Bk=a.service.window;_.Ru(this).listen(this.Fi.el(),"click",this.OBb);this.Ia=[this.Bk.Hd().documentElement]};_.E(BYi,_.Kh);BYi.Ka=function(){return{service:{Zb:_.Nv,viewport:_.yv,window:_.$u}}};_.h=BYi.prototype;_.h.r7c=function(a){this.Ca=a};_.h.T7b=function(){return this.isOpen};
_.h.BKc=function(a){var b=!this.isOpen;this.oa||(this.oa=a.actionElement.el());if(!this.Ma&&b){var c=_.gh(this.oa,3);this.Jb.Ca(this.Fi.el(),c);this.Ma=!0}if(b){if(!this.isOpen){this.Ea=null;this.isOpen=!0;this.getRoot().rc("iWO5td",this.isOpen);this.Fi.show();b=this.Fi;c=b.setStyle;var d=this.Fi.el().getBoundingClientRect().height,e,f=null==(e=this.Ca)?void 0:e.getBoundingClientRect();e=this.oa.getBoundingClientRect();var g=(null==f?void 0:f.top)||0;f=(null==f?void 0:f.bottom)||this.Gn.Ca().size.height;
var k=e.top-d;d=(e.bottom+d<f||k<g&&f-e.bottom>e.top-g?this.oa.getBoundingClientRect().height+4:-this.Fi.el().getBoundingClientRect().height-4)+"px";var l;e=_.gp(this.Bk.get().document.documentElement);var n;if(g=!e){g=this.Fi.el().getBoundingClientRect().width;f=null==(n=this.Ca)?void 0:n.getBoundingClientRect();n=(null==f?void 0:f.left)||0;f=(null==f?void 0:f.right)||this.Gn.Ca().size.width;k=this.oa.getBoundingClientRect();var q=k.right-g;g=!!(k.left+g<f||q<n&&f-k.right>k.left-n)}!(n=g)&&(n=e)&&
(n=this.Fi.el().getBoundingClientRect().width,e=null==(l=this.Ca)?void 0:l.getBoundingClientRect(),l=(null==e?void 0:e.left)||0,e=(null==e?void 0:e.right)||this.Gn.Ca().size.width,g=this.oa.getBoundingClientRect(),f=g.left+n,n=!(g.right-n>l||f>e&&g.left-l>e-g.right));l=n?0:this.oa.getBoundingClientRect().width-this.Fi.el().getBoundingClientRect().width;c.call(b,{top:d,left:l+"px"});this.oa.setAttribute("aria-expanded","true");_.Ru(this).listen(this.Bk.get().document.documentElement,"click",this.LBb,
{capture:!0});_.Ru(this).listen(this.Bk.get().document.documentElement,"touchmove",this.MBb,{capture:!0});_.Ru(this).listen(this.Bk.get().document.documentElement,"touchstart",this.NBb,{capture:!0})}}else this.m5();a.event.stopPropagation()};_.h.m5=function(){this.isOpen&&this.oa&&(this.isOpen=!1,this.getRoot().rc("iWO5td",this.isOpen),this.Fi.Bc(),this.oa.setAttribute("aria-expanded","false"))};
_.h.MBb=function(a){this.getRoot().el().contains(a.target)||(this.m5(),_.Ru(this).Og(this.Bk.get().document.documentElement,"touchmove",this.MBb,{capture:!0}))};_.h.OBb=function(){this.m5()};
_.h.LBb=function(a){if(!this.getRoot().el().contains(a.target)){if((this.isOpen||this.Ea===a.target)&&this.Ia.some(function(c){return c.contains(a.target)})&&!this.Fi.el().contains(a.target)){a.preventDefault();a.stopPropagation();var b;null==(b=a.We)||b.stopImmediatePropagation()}this.m5();_.Ru(this).Og(this.Bk.get().document.documentElement,"click",this.LBb,{capture:!0})}};
_.h.NBb=function(a){this.getRoot().el().contains(a.target)||!this.isOpen||this.Ia.some(function(b){return b.contains(a.target)})||(a.stopPropagation(),a.preventDefault(),this.m5(),this.Ea=a.target,_.Ru(this).Og(this.Bk.get().document.documentElement,"touchstart",this.NBb,{capture:!0}))};_.U(BYi.prototype,"u3oFEe",function(){return this.OBb});_.U(BYi.prototype,"c3i93",function(){return this.m5});_.U(BYi.prototype,"WRyONc",function(){return this.BKc});_.U(BYi.prototype,"tLCEwd",function(){return this.T7b});
_.Uu(_.Yeb,BYi);
_.p();
});
// Google Inc.