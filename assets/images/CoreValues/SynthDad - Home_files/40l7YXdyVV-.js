if (self.CavalryLogger) { CavalryLogger.start_js(["G0IJB"]); }

__d("BrowserDimensionsResizeLogger",["Bootloader","BrowserDimensionsLogger","debounceAcrossTransitions","getViewportDimensions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1e3,h=null;a={init:function(){__p&&__p();var a=function a(){b("Bootloader").loadModules(["WebBrowserDimensionsResizeTypedLogger"],function(){},"BrowserDimensionsResizeLogger"),window.removeEventListener("resize",a)};window.addEventListener("resize",a);window.addEventListener("resize",b("debounceAcrossTransitions")(function(){h===null&&(h=b("BrowserDimensionsLogger").getInitialViewportDimensions());var a=Object.assign({},h),c=b("getViewportDimensions")();h=c;var d=Math.floor(Math.abs(c.width-a.width)),e=Math.floor(Math.abs(c.height-a.height));if(d===0&&e===0)return;var f=window.screen.width,g=window.screen.height;b("Bootloader").loadModules(["WebBrowserDimensionsResizeTypedLogger"],function(b){new b().setPreviousWidth(a.width).setPreviousHeight(a.height).setCurrentWidth(c.width).setCurrentHeight(c.height).setScreenWidth(f).setScreenHeight(g).log()},"BrowserDimensionsResizeLogger")},g))}};e.exports=a}),null);
__d("legacy:Toggler",["Toggler"],(function(a,b,c,d,e,f){a.Toggler=b("Toggler")}),3);