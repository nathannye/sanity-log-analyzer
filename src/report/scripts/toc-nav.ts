export const tocNavScript = `(function(){
function scrollToSection(slug){
var target=document.querySelector('[data-report-view]:not([hidden]) [data-section="'+slug+'"]');
if(!target)return;
target.scrollIntoView({behavior:"smooth",block:"start"});
if(history.replaceState){
history.replaceState(null,"",window.location.pathname+window.location.search+"#"+slug);
}else{
window.location.hash=slug;
}
}

document.addEventListener("click",function(e){
var link=e.target.closest("[data-toc-link]");
if(!link)return;
var slug=(link.getAttribute("href")||"").replace(/^#/,"");
if(!slug)return;
e.preventDefault();
scrollToSection(slug);
});

var initialSlug=(window.location.hash||"").replace(/^#/,"");
if(initialSlug){
requestAnimationFrame(function(){scrollToSection(initialSlug);});
}
})();`;
