export const toastScript = `(function(){
var toast=null,hideTimer=null;
window.__showReportToast=function(message){
if(!toast){
toast=document.createElement("div");
toast.className="copy-toast";
toast.setAttribute("role","status");
toast.setAttribute("aria-live","polite");
document.body.appendChild(toast);
}
toast.textContent=message||"Done";
toast.classList.add("copy-toast--visible");
clearTimeout(hideTimer);
hideTimer=setTimeout(function(){toast.classList.remove("copy-toast--visible")},1500);
};
})();`;
