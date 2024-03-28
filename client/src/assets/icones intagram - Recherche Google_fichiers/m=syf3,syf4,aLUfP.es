this._s=this._s||{};(function(_){var window=this;
try{
_.Xqb=function(a){this.Dm=a};
}catch(e){_._DumpException(e)}
try{
var Yqb=function(a){_.Yn.call(this,a.Ka);var b=this;this.window=a.service.window.get();this.wa=this.Dm();this.oa=window.orientation;this.ka=function(){var c=b.Dm(),d=b.lJb()&&90===Math.abs(window.orientation)&&b.oa===-1*window.orientation;b.oa=window.orientation;if(c!==b.wa||d){b.wa=c;d=_.ab(b.Oe);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new _.Xqb(c);try{e(f)}catch(g){_.ca(g)}}}};this.Oe=new Set;this.window.addEventListener("resize",this.ka);this.lJb()&&this.window.addEventListener("orientationchange",
this.ka)};_.F(Yqb,_.Yn);Yqb.kb=_.Yn.kb;Yqb.Ga=function(){return{service:{window:_.Zn}}};Yqb.prototype.addListener=function(a){this.Oe.add(a)};Yqb.prototype.removeListener=function(a){this.Oe.delete(a)};
Yqb.prototype.Dm=function(){if(Zqb()){var a=_.Hl(this.window);a=new _.ol(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.Yb()||(_.ja()?Zqb():this.window.visualViewport)?_.Hl(this.window):new _.ol(this.window.innerWidth,this.window.innerHeight);return a.height<a.width};Yqb.prototype.destroy=function(){this.window.removeEventListener("resize",this.ka);this.window.removeEventListener("orientationchange",this.ka)};var Zqb=function(){return _.ja()&&_.df.wH()&&!navigator.userAgent.includes("GSA")};
Yqb.prototype.Yb=function(){return _.$qb};Yqb.prototype.lJb=function(){return"orientation"in window};_.$qb=!1;_.$n(_.mSa,Yqb);
_.$qb=!0;
}catch(e){_._DumpException(e)}
try{
_.x("aLUfP");

_.y();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
