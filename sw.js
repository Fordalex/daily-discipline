if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),t={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutView-Bcrqs-q-.js",revision:null},{url:"assets/AboutView-CSIvawM9.css",revision:null},{url:"assets/AccountView-DnGihYKW.js",revision:null},{url:"assets/ChecklistsView-9a5pXl_O.js",revision:null},{url:"assets/HabitsView-Dj7ZdJxZ.css",revision:null},{url:"assets/HabitsView-DQW5Xydu.js",revision:null},{url:"assets/index-BC62IVEx.css",revision:null},{url:"assets/index-DA8vyl7n.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"icons/icons8-check-192x192.png",revision:"f27804a616ee17e553111ed2658c8153"},{url:"icons/icons8-check-512x512.png",revision:"9b05aa0fae327afaede8a202f08e4014"},{url:"index.html",revision:"526bf8cc38e0b48f4aec212ae88a0635"},{url:"registerSW.js",revision:"211a5448ac2649ede14ae42361159960"},{url:"icons/icons8-check-192x192.png",revision:"f27804a616ee17e553111ed2658c8153"},{url:"icons/icons8-check-512x512.png",revision:"9b05aa0fae327afaede8a202f08e4014"},{url:"manifest.webmanifest",revision:"a400c7eb8185698cb751b09481be76ce"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
