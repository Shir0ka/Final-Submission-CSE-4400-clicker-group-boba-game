var gdjs;(function(l){const u=new l.Logger("PIXI game renderer"),f=[37,38,39,40];class R{constructor(e,t){this._isFullPage=!0;this._isFullscreen=!1;this._pixiRenderer=null;this._threeRenderer=null;this._gameCanvas=null;this._domElementsContainer=null;this._canvasWidth=0;this._canvasHeight=0;this._keepRatio=!0;this._nextFrameId=0;this._wasDisposed=!1;this.getElectronRemote=()=>{if(typeof require=="function"){const e=this._game.getAdditionalOptions(),t=e&&e.electronRemoteRequirePath?e.electronRemoteRequirePath:"@electron/remote";try{return require(t)}catch(i){console.error(`Could not load @electron/remote from "${t}". Error is:`,i)}}return null};this._game=e,this._forceFullscreen=t,this._marginLeft=this._marginTop=this._marginRight=this._marginBottom=0,this._setupOrientation()}createStandardCanvas(e){this._throwIfDisposed();const t=document.createElement("canvas");e.appendChild(t),this.initializeForCanvas(t)}initializeForCanvas(e){this._throwIfDisposed(),typeof THREE!="undefined"?(this._threeRenderer=new THREE.WebGLRenderer({canvas:e,antialias:this._game.getAntialiasingMode()!=="none"&&(this._game.isAntialisingEnabledOnMobile()||!l.evtTools.common.isMobile()),preserveDrawingBuffer:!0}),this._threeRenderer.useLegacyLights=!0,this._threeRenderer.autoClear=!1,this._threeRenderer.setSize(this._game.getGameResolutionWidth(),this._game.getGameResolutionHeight()),this._pixiRenderer=new PIXI.Renderer({width:this._game.getGameResolutionWidth(),height:this._game.getGameResolutionHeight(),view:e,context:this._threeRenderer.getContext(),clearBeforeRender:!1,preserveDrawingBuffer:!0,antialias:!1,backgroundAlpha:0})):this._pixiRenderer=PIXI.autoDetectRenderer({width:this._game.getGameResolutionWidth(),height:this._game.getGameResolutionHeight(),view:e,preserveDrawingBuffer:!0,antialias:!1}),this._pixiRenderer.plugins.accessibility.destroy(),delete this._pixiRenderer.plugins.accessibility,this._gameCanvas=e,e.style.position="absolute",e.tabIndex=1,e.style.userSelect="none",e.style.outline="none";const t=document.createElement("div");t.style.position="absolute",t.style.overflow="hidden",t.style.outline="none",t.style.pointerEvents="none",t.addEventListener("scroll",i=>{t.scrollLeft=0,t.scrollTop=0,i.preventDefault()}),e.addEventListener("pointerdown",()=>{e.focus()}),t.style["-webkit-user-select"]="none",e.parentNode?.appendChild(t),this._domElementsContainer=t,this._resizeCanvas(),this._game.getScaleMode()==="nearest"&&(e.style["image-rendering"]="-moz-crisp-edges",e.style["image-rendering"]="-webkit-optimize-contrast",e.style["image-rendering"]="-webkit-crisp-edges",e.style["image-rendering"]="pixelated"),this._game.getPixelsRounding()&&(PIXI.settings.ROUND_PIXELS=!0),window.addEventListener("resize",()=>{this._game.onWindowInnerSizeChanged(),this._resizeCanvas()}),e.focus()}static getWindowInnerWidth(){return typeof window!="undefined"?window.innerWidth:800}static getWindowInnerHeight(){return typeof window!="undefined"?window.innerHeight:800}updateRendererSize(){this._resizeCanvas()}_setupOrientation(){if(typeof window=="undefined"||!window.screen||!window.screen.orientation)return;const e=this._game.getGameData().properties.orientation;try{if(e==="default"){const t=window.screen.orientation.unlock();t&&t.catch(()=>{})}else window.screen.orientation.lock(e).catch(()=>{})}catch(t){u.error("Unexpected error while setting up orientation: ",t)}}_resizeCanvas(){if(!this._pixiRenderer||!this._domElementsContainer)return;(this._pixiRenderer.width!==this._game.getGameResolutionWidth()||this._pixiRenderer.height!==this._game.getGameResolutionHeight())&&(this._pixiRenderer.resize(this._game.getGameResolutionWidth(),this._game.getGameResolutionHeight()),this._threeRenderer&&this._threeRenderer.setSize(this._game.getGameResolutionWidth(),this._game.getGameResolutionHeight()));const e=this._forceFullscreen||this._isFullPage||this._isFullscreen;let t=this._game.getGameResolutionWidth(),i=this._game.getGameResolutionHeight(),o=window.innerWidth-this._marginLeft-this._marginRight,r=window.innerHeight-this._marginTop-this._marginBottom;if(o<0&&(o=0),r<0&&(r=0),e&&!this._keepRatio)t=o,i=r;else if(e&&this._keepRatio||t>o||i>r){let d=o/t;i*d>r&&(d=r/i),t*=d,i*=d}this._gameCanvas&&(this._gameCanvas.style.top=this._marginTop+(r-i)/2+"px",this._gameCanvas.style.left=this._marginLeft+(o-t)/2+"px",this._gameCanvas.style.width=t+"px",this._gameCanvas.style.height=i+"px"),this._domElementsContainer.style.top=this._marginTop+(r-i)/2+"px",this._domElementsContainer.style.left=this._marginLeft+(o-t)/2+"px",this._domElementsContainer.style.width=t+"px",this._domElementsContainer.style.height=i+"px",this._canvasWidth=t,this._canvasHeight=i}keepAspectRatio(e){this._keepRatio!==e&&(this._keepRatio=e,this._resizeCanvas())}setMargins(e,t,i,o){this._throwIfDisposed(),!(this._marginTop===e&&this._marginRight===t&&this._marginBottom===i&&this._marginLeft===o)&&(this._marginTop=e,this._marginRight=t,this._marginBottom=i,this._marginLeft=o,this._resizeCanvas())}setWindowSize(e,t){this._throwIfDisposed();const i=this.getElectronRemote();if(i){const o=i.getCurrentWindow();try{o&&o.setContentSize(e,t)}catch(r){u.error(`Window size setting to width ${e} and height ${t} failed. See error:`,r)}}else u.warn("Window size can't be changed on this platform.")}centerWindow(){this._throwIfDisposed();const e=this.getElectronRemote();if(e){const t=e.getCurrentWindow();try{t&&t.center()}catch(i){u.error("Window centering failed. See error:",i)}}else u.warn("Window can't be centered on this platform.")}setFullScreen(e){if(this._throwIfDisposed(),!this._forceFullscreen&&this._isFullscreen!==e){this._isFullscreen=!!e;const t=this.getElectronRemote();if(t){const i=t.getCurrentWindow();try{i&&i.setFullScreen(this._isFullscreen)}catch(o){u.error(`Full screen setting to ${this._isFullscreen} failed. See error:`,o)}}else this._isFullscreen?document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen();this._resizeCanvas()}}isFullScreen(){const e=this.getElectronRemote();if(e)try{return e.getCurrentWindow().isFullScreen()}catch(t){return u.error("Full screen detection failed. See error:",t),!1}return this._isFullscreen||window.screen.height===window.innerHeight}convertCanvasToDomElementContainerCoords(e,t){const i=t||[0,0];return i[0]=e[0]*this._canvasWidth/this._game.getGameResolutionWidth(),i[1]=e[1]*this._canvasHeight/this._game.getGameResolutionHeight(),i}getCanvasToDomElementContainerHeightScale(){return(this._canvasHeight||1)/this._game.getGameResolutionHeight()}bindStandardEvents(e,t,i){this._throwIfDisposed();const o=this._gameCanvas;if(!o)return;const r=n=>{const s=[n.pageX-o.offsetLeft,n.pageY-o.offsetTop];return s[0]*=this._game.getGameResolutionWidth()/(this._canvasWidth||1),s[1]*=this._game.getGameResolutionHeight()/(this._canvasHeight||1),s},d=n=>{const s=n.pageX-o.offsetLeft,a=n.pageY-o.offsetTop;return 0<=s&&s<(this._canvasWidth||1)&&0<=a&&a<(this._canvasHeight||1)};(function(){isNaN(o.offsetLeft)&&(o.offsetLeft=0,o.offsetTop=0),isNaN(i.body.scrollLeft)&&(i.body.scrollLeft=0,i.body.scrollTop=0),(i.documentElement===void 0||i.documentElement===null)&&(i.documentElement={}),isNaN(i.documentElement.scrollLeft)&&(i.documentElement.scrollLeft=0,i.documentElement.scrollTop=0),isNaN(o.offsetLeft)&&(o.offsetLeft=0,o.offsetTop=0)})();const m=()=>!(i.activeElement===o||i.activeElement===i.body||i.activeElement===null),h=n=>!(n.target===o||n.target===i.body);i.onkeydown=function(n){m()||(f.includes(n.keyCode)&&n.preventDefault(),e.onKeyPressed(n.keyCode,n.location))},i.onkeyup=function(n){m()||(f.includes(n.keyCode)&&n.preventDefault(),e.onKeyReleased(n.keyCode,n.location))};function g(n){switch(n){case 1:return l.InputManager.MOUSE_MIDDLE_BUTTON;case 2:return l.InputManager.MOUSE_RIGHT_BUTTON}return n}o.onmousemove=function(n){const s=r(n);e.onMouseMove(s[0],s[1])},o.onmousedown=function(n){return e.onMouseButtonPressed(g(n.button)),t.focus!==void 0&&t.focus(),!1},o.onmouseup=function(n){return e.onMouseButtonReleased(g(n.button)),!1},o.onmouseleave=function(n){e.onMouseLeave()},o.onmouseenter=function(n){e.onMouseEnter();const s=[l.InputManager.MOUSE_LEFT_BUTTON,l.InputManager.MOUSE_RIGHT_BUTTON,l.InputManager.MOUSE_MIDDLE_BUTTON,l.InputManager.MOUSE_BACK_BUTTON,l.InputManager.MOUSE_FORWARD_BUTTON];for(let a=0,v=s.length;a<v;++a){const c=s[a],p=(n.buttons&1<<a)!=0,_=e.isMouseButtonPressed(c);p&&!_?e.onMouseButtonPressed(c):!p&&_&&e.onMouseButtonReleased(c)}},t.addEventListener("click",function(n){return t.focus!==void 0&&t.focus(),!1},!1),o.oncontextmenu=function(n){return n.preventDefault(),n.stopPropagation(),!1},o.onwheel=function(n){e.onMouseWheel(-n.deltaY)},t.addEventListener("touchmove",function(n){if(!h(n)&&(n.preventDefault(),n.changedTouches))for(let s=0;s<n.changedTouches.length;++s){const a=r(n.changedTouches[s]);e.onTouchMove(n.changedTouches[s].identifier,a[0],a[1]),e.isSimulatingMouseWithTouch()&&(d(n.changedTouches[s])?e.onMouseEnter():e.onMouseLeave())}},{passive:!1}),t.addEventListener("touchstart",function(n){if(!h(n)){if(n.preventDefault(),n.changedTouches)for(let s=0;s<n.changedTouches.length;++s){const a=r(n.changedTouches[s]);e.onTouchStart(n.changedTouches[s].identifier,a[0],a[1])}return!1}},{passive:!1}),t.addEventListener("touchend",function(n){if(!h(n)){if(n.preventDefault(),n.changedTouches)for(let s=0;s<n.changedTouches.length;++s)e.onTouchEnd(n.changedTouches[s].identifier);return!1}},{passive:!1}),t.addEventListener("touchcancel",function(n){if(!h(n)){if(n.preventDefault(),n.changedTouches)for(let s=0;s<n.changedTouches.length;++s)e.onTouchCancel(n.changedTouches[s].identifier);return!1}},{passive:!1})}setWindowTitle(e){typeof document!="undefined"&&(document.title=e)}getWindowTitle(){return typeof document!="undefined"?document.title:""}startGameLoop(e){this._throwIfDisposed();let t=0;const i=o=>{this._nextFrameId=requestAnimationFrame(i);const r=t?o-t:0;t=o,e(r)||cancelAnimationFrame(this._nextFrameId)};requestAnimationFrame(i)}stopGameLoop(){cancelAnimationFrame(this._nextFrameId)}getPIXIRenderer(){return this._pixiRenderer}getThreeRenderer(){return this._threeRenderer}getDomElementContainer(){return this._domElementsContainer}openURL(e){if(typeof window!="undefined"){const t=this.getElectron();t?t.shell.openExternal(e):typeof window.cordova!="undefined"&&typeof window.cordova.InAppBrowser!="undefined"?window.cordova.InAppBrowser.open(e,"_system","location=yes"):window.open(e,"_blank")}}stopGame(){const e=this.getElectronRemote();if(e){const t=e.getCurrentWindow();if(t)try{t.close()}catch(i){u.error("Window closing failed. See error:",i)}}else typeof navigator!="undefined"&&navigator.app&&navigator.app.exitApp&&navigator.app.exitApp()}dispose(e){this._pixiRenderer?.destroy(),this._threeRenderer?.dispose(),this._pixiRenderer=null,this._threeRenderer=null,e&&this._gameCanvas&&this._gameCanvas.parentNode?.removeChild(this._gameCanvas),this._gameCanvas=null,this._domElementsContainer?.parentNode?.removeChild(this._domElementsContainer),this._domElementsContainer=null,this._wasDisposed=!0}getCanvas(){return this._gameCanvas}isWebGLSupported(){return!!this._pixiRenderer&&this._pixiRenderer.type===PIXI.RENDERER_TYPE.WEBGL}getElectron(){return typeof require=="function"?require("electron"):null}getGame(){return this._game}_throwIfDisposed(){if(this._wasDisposed)throw"The RuntimeGameRenderer has been disposed and should not be used anymore."}}l.RuntimeGamePixiRenderer=R,l.RuntimeGameRenderer=R})(gdjs||(gdjs={}));
//# sourceMappingURL=runtimegame-pixi-renderer.js.map