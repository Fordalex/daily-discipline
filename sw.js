if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),t={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutView-CSIvawM9.css",revision:null},{url:"assets/AboutView-D8i0v2Zt.js",revision:null},{url:"assets/ChecklistsView-ZAsdZ01h.js",revision:null},{url:"assets/HabitsView-lwk_14bw.css",revision:null},{url:"assets/HabitsView-MKrxub8Q.js",revision:null},{url:"assets/index-07mXpUCF.js",revision:null},{url:"assets/index-Dpb9KoKN.css",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"icons/icons8-check-192x192.png",revision:"f27804a616ee17e553111ed2658c8153"},{url:"icons/icons8-check-512x512.png",revision:"9b05aa0fae327afaede8a202f08e4014"},{url:"index.html",revision:"bb038bafeb518677be1ca2cb54b35f1e"},{url:"registerSW.js",revision:"211a5448ac2649ede14ae42361159960"},{url:"icons/icons8-check-192x192.png",revision:"f27804a616ee17e553111ed2658c8153"},{url:"icons/icons8-check-512x512.png",revision:"9b05aa0fae327afaede8a202f08e4014"},{url:"manifest.webmanifest",revision:"a400c7eb8185698cb751b09481be76ce"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
