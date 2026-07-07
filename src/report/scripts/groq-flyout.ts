export const groqFlyoutScript = `(function(){
document.addEventListener("click",function(e){
var target=e.target.closest("[data-groq-flyout-target]");
if(target){
e.preventDefault();
var id=target.getAttribute("data-groq-flyout-target");
if(!id)return;
var dialog=document.getElementById(id);
if(dialog&&typeof dialog.showModal==="function")dialog.showModal();
return;
}
if(e.target.closest("[data-groq-flyout-close]")){
var closeDialog=e.target.closest("dialog[data-groq-flyout]");
if(closeDialog)closeDialog.close();
}
});
document.addEventListener("click",function(e){
var dialog=e.target;
if(dialog&&dialog.tagName==="DIALOG"&&dialog.hasAttribute("data-groq-flyout")&&e.target===dialog){
dialog.close();
}
});
})();`;
