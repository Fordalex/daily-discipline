if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const a=e=>s(e,o),t={module:{uri:o},exports:c,require:a};i[o]=Promise.all(n.map((e=>t[e]||a(e)))).then((e=>(r(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutView-CSIvawM9.css",revision:null},{url:"assets/AboutView-DFifItDc.js",revision:null},{url:"assets/HabitsView-BSFLNz9j.js",revision:null},{url:"assets/index-BvY2A1iN.js",revision:null},{url:"assets/index-Dfku_Hsg.css",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"icons/icons8-check-48.png",revision:"a4c339b580d7a332caf4a1bf97f51344"},{url:"icons/icons8-check-96.png",revision:"a39f40752ab3331787af4baba34397fe"},{url:"index.html",revision:"3df4315616d6487a19ea6cfc59e6323a"},{url:"registerSW.js",revision:"211a5448ac2649ede14ae42361159960"},{url:"icons/icons8-check-48.png",revision:"a4c339b580d7a332caf4a1bf97f51344"},{url:"icons/icons8-check-96.png",revision:"a39f40752ab3331787af4baba34397fe"},{url:"manifest.webmanifest",revision:"184542ada7006415add022de512566e8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));