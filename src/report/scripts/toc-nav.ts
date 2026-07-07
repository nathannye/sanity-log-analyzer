export const tocNavScript = `(function(){
function parseHash(hash){
var raw=(hash||"").replace(/^#/,"");
if(!raw)return{section:"",urlTab:null};
if(raw.indexOf("urls/")===0)return{section:"urls",urlTab:raw.slice(5),full:raw};
if(raw==="urls")return{section:"urls",urlTab:null,full:"urls"};
return{section:raw,urlTab:null,full:raw};
}

function scrollToSection(section,fullHash){
var target=document.querySelector('[data-report-view]:not([hidden]) [data-section="'+section+'"]');
if(!target)return;
target.scrollIntoView({behavior:"smooth",block:"start"});
if(history.replaceState){
history.replaceState(null,"",window.location.pathname+window.location.search+"#"+fullHash);
}else{
window.location.hash=fullHash;
}
}

function navigate(hash){
var parsed=parseHash(hash);
if(!parsed.section)return;
scrollToSection(parsed.section,parsed.full);
if(parsed.section==="urls"&&typeof window.__activateUrlTab==="function"){
window.__activateUrlTab(parsed.urlTab);
}
}

document.addEventListener("click",function(e){
var link=e.target.closest("[data-toc-link]");
if(!link)return;
var slug=(link.getAttribute("href")||"").replace(/^#/,"");
if(!slug)return;
e.preventDefault();
navigate("#"+slug);
});

var initialHash=window.location.hash;
if(initialHash){
requestAnimationFrame(function(){navigate(initialHash);});
}
})();`;
