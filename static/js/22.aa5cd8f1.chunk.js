"use strict";(self.webpackChunkygig=self.webpackChunkygig||[]).push([[22],{5022:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return a}});var r=n(1811),i=n(9507),u=n(7909),a=function(t,e,n,a,c){var o=t.ownerDocument.defaultView,f=(0,i.i)(t),s=function(t){return f?-t.deltaX:t.deltaX};return(0,u.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return f?e>=o.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=s(t)/o.innerWidth;a(e)},onEnd:function(t){var e=s(t),n=o.innerWidth,i=e/n,u=function(t){return f?-t.velocityX:t.velocityX}(t),a=u>=0&&(u>.2||e>n/2),h=(a?1-i:i)*n,d=0;if(h>5){var l=h/Math.abs(u);d=Math.min(l,540)}c(a,i<=0?.01:(0,r.j)(0,i,.9999),d)}})}}}]);
//# sourceMappingURL=22.aa5cd8f1.chunk.js.map