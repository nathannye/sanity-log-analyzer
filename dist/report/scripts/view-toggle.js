export const viewToggleScript = `(function(){
var STORAGE_KEY="sanity-log-report-show-studio";
var checkbox=document.getElementById("show-studio-requests");
var billableView=document.querySelector('[data-report-view="billable"]');
var allView=document.querySelector('[data-report-view="all"]');
if(!checkbox||!billableView||!allView)return;

function setView(showAll){
billableView.hidden=showAll;
allView.hidden=!showAll;
try{sessionStorage.setItem(STORAGE_KEY,showAll?"1":"0");}catch(e){}
}

var saved=null;
try{saved=sessionStorage.getItem(STORAGE_KEY);}catch(e){}
if(saved==="1"){
checkbox.checked=true;
setView(true);
}

checkbox.addEventListener("change",function(){
setView(checkbox.checked);
});
})();`;
//# sourceMappingURL=view-toggle.js.map