if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>i(e,o),t={module:{uri:o},exports:c,require:l};s[o]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutView-CSIvawM9.css",revision:null},{url:"assets/AboutView-DelKMLUZ.js",revision:null},{url:"assets/ChecklistsView-CGGpXOpJ.js",revision:null},{url:"assets/HabitsView-DMVDvD3E.js",revision:null},{url:"assets/HabitsView-pp6SJNkj.css",revision:null},{url:"assets/index-B7gCQf5x.js",revision:null},{url:"assets/index-Ch0xkRUN.css",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"icons/icons8-check-192x192.png",revision:"f27804a616ee17e553111ed2658c8153"},{url:"icons/icons8-check-512x512.png",revision:"9b05aa0fae327afaede8a202f08e4014"},{url:"index.html",revision:"41eeccc4c2a21a6c84ba8fb64751c6ee"},{url:"registerSW.js",revision:"211a5448ac2649ede14ae42361159960"},{url:"icons/icons8-check-192x192.png",revision:"f27804a616ee17e553111ed2658c8153"},{url:"icons/icons8-check-512x512.png",revision:"9b05aa0fae327afaede8a202f08e4014"},{url:"manifest.webmanifest",revision:"a400c7eb8185698cb751b09481be76ce"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
