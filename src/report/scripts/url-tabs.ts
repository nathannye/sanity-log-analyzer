export const urlTabsScript = `(function(){
function visibleUrlTabsSection(){
return document.querySelector('[data-report-view]:not([hidden]) [data-url-tabs]');
}

function activateUrlTab(tab){
var section=visibleUrlTabsSection();
if(!section)return;
var resolved=tab||section.getAttribute("data-default-url-tab")||"image";
if(!section.querySelector('[data-url-tab="'+resolved+'"]')){
resolved=section.getAttribute("data-default-url-tab")||"image";
}
var tabs=section.querySelectorAll("[data-url-tab]");
var panels=section.querySelectorAll("[data-url-panel]");
tabs.forEach(function(btn){
var isActive=btn.getAttribute("data-url-tab")===resolved;
btn.setAttribute("aria-selected",isActive?"true":"false");
});
panels.forEach(function(panel){
panel.hidden=panel.getAttribute("data-url-panel")!==resolved;
});
section.setAttribute("data-active-url-tab",resolved);
}

window.__activateUrlTab=activateUrlTab;

document.addEventListener("click",function(e){
var tabButton=e.target.closest("[data-url-tab]");
if(!tabButton)return;
var section=tabButton.closest("[data-url-tabs]");
if(!section)return;
var tab=tabButton.getAttribute("data-url-tab");
if(!tab)return;
e.preventDefault();
activateUrlTab(tab);
var suffix=tab==="image"?"":("/"+tab);
if(history.replaceState){
history.replaceState(null,"",window.location.pathname+window.location.search+"#urls"+suffix);
}
});
})();`;
