export const toastScript = `(function(){
var toast=null,hideTimer=null;
var supportsPopover=typeof HTMLElement.prototype.showPopover==="function";
window.__showReportToast=function(message){
if(!toast){
toast=document.createElement("div");
toast.className="copy-toast";
toast.setAttribute("role","status");
toast.setAttribute("aria-live","polite");
if(supportsPopover)toast.setAttribute("popover","manual");
document.body.appendChild(toast);
}
toast.textContent=message||"Done";
if(supportsPopover){
if(toast.matches(":popover-open"))toast.hidePopover();
toast.showPopover();
}
toast.classList.add("copy-toast--visible");
clearTimeout(hideTimer);
hideTimer=setTimeout(function(){
toast.classList.remove("copy-toast--visible");
if(supportsPopover&&toast.matches(":popover-open"))toast.hidePopover();
},1500);
};
})();`;
