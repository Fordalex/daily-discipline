if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const c=e=>i(e,r),t={module:{uri:r},exports:l,require:c};s[r]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(o(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutView-BlqlXZQF.js",revision:null},{url:"assets/AboutView-CSIvawM9.css",revision:null},{url:"assets/HabitsView-Dx9ly5dy.js",revision:null},{url:"assets/index-CQdpetKt.js",revision:null},{url:"assets/index-CxIPovlK.css",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"icons/icons8-check-192x192.png",revision:"f27804a616ee17e553111ed2658c8153"},{url:"icons/icons8-check-512x512.png",revision:"9b05aa0fae327afaede8a202f08e4014"},{url:"index.html",revision:"487f1a843b02546af1e62765d4146b56"},{url:"registerSW.js",revision:"211a5448ac2649ede14ae42361159960"},{url:"icons/icons8-check-192x192.png",revision:"f27804a616ee17e553111ed2658c8153"},{url:"icons/icons8-check-512x512.png",revision:"9b05aa0fae327afaede8a202f08e4014"},{url:"manifest.webmanifest",revision:"a400c7eb8185698cb751b09481be76ce"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
