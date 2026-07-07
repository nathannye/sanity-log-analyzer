export const copyButtonsScript = `(function(){
var toast=null,hideTimer=null;
function showToast(){
if(!toast){
toast=document.createElement("div");
toast.className="copy-toast";
toast.setAttribute("role","status");
toast.setAttribute("aria-live","polite");
toast.textContent="Copied";
document.body.appendChild(toast);
}
toast.classList.add("copy-toast--visible");
clearTimeout(hideTimer);
hideTimer=setTimeout(function(){toast.classList.remove("copy-toast--visible")},1500);
}
document.addEventListener("click",function(e){
var btn=e.target.closest("[data-copy-value]");
if(!btn)return;
e.preventDefault();
var value=btn.getAttribute("data-copy-value");
if(!value)return;
navigator.clipboard.writeText(value).then(showToast).catch(function(){});
});
})();`;
