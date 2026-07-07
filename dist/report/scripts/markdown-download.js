export const markdownDownloadScript = `(function(){
var button=document.getElementById("download-markdown");
var payloadEl=document.getElementById("report-markdown");
if(!button||!payloadEl)return;

button.addEventListener("click",function(){
var payload;
try{payload=JSON.parse(payloadEl.textContent||"");}catch(e){return;}
if(!payload||!payload.filenameBase)return;

var checkbox=document.getElementById("show-studio-requests");
var view=checkbox&&checkbox.checked?"all":"billable";
if(!checkbox)view="all";

var markdown=view==="all"?payload.all:payload.billable;
if(!markdown)return;

var suffix=view==="all"?"_all":"_billable-only";
var filename=payload.filenameBase+suffix+".md";
var blob=new Blob([markdown],{type:"text/markdown;charset=utf-8"});
var url=URL.createObjectURL(blob);
var link=document.createElement("a");
link.href=url;
link.download=filename;
link.click();
URL.revokeObjectURL(url);
window.__showReportToast("Downloaded");
});
})();`;
//# sourceMappingURL=markdown-download.js.map