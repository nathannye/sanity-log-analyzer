export const copyButtonsScript = `(function(){
document.addEventListener("click",function(e){
var btn=e.target.closest("[data-copy-value]");
if(!btn)return;
e.preventDefault();
var value=btn.getAttribute("data-copy-value");
if(!value)return;
navigator.clipboard.writeText(value).then(function(){
window.__showReportToast("Copied");
}).catch(function(){});
});
})();`;
