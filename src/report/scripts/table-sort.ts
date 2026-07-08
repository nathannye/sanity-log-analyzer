export const tableSortScript = `(function(){
function parseSortValue(raw,type){
if(raw==="")return null;
if(type==="number"){
var n=Number(raw);
return Number.isFinite(n)?n:null;
}
return raw;
}
function compareValues(a,b,type,direction){
var mult=direction==="asc"?1:-1;
if(a===null&&b===null)return 0;
if(a===null)return 1;
if(b===null)return -1;
if(type==="string")return String(a).localeCompare(String(b))*mult;
return(Number(a)-Number(b))*mult;
}
function setHeaderState(btn,direction){
var aria=direction==="asc"?"ascending":direction==="desc"?"descending":"none";
btn.setAttribute("data-sort-direction",direction);
btn.setAttribute("aria-sort",aria);
}
function sortTable(table,direction,key,type){
var tbody=table.querySelector("tbody");
if(!tbody)return;
var rows=Array.from(tbody.querySelectorAll("tr"));
if(direction==="none"){
rows.sort(function(a,b){
return Number(a.getAttribute("data-row-index"))-Number(b.getAttribute("data-row-index"));
});
}else{
var attr="data-sort-"+key;
rows.sort(function(a,b){
var av=parseSortValue(a.getAttribute(attr)||"",type);
var bv=parseSortValue(b.getAttribute(attr)||"",type);
return compareValues(av,bv,type,direction);
});
}
rows.forEach(function(row){tbody.appendChild(row);});
}
document.addEventListener("click",function(e){
var btn=e.target.closest("[data-sort-key]");
if(!btn)return;
var table=btn.closest("[data-sortable-table]");
if(!table)return;
e.preventDefault();
var key=btn.getAttribute("data-sort-key");
var type=btn.getAttribute("data-sort-type")||"string";
if(!key)return;
var current=btn.getAttribute("data-sort-direction")||"none";
var next=current==="none"?"asc":current==="asc"?"desc":"none";
table.querySelectorAll("[data-sort-key]").forEach(function(other){
if(other!==btn)setHeaderState(other,"none");
});
setHeaderState(btn,next);
sortTable(table,next,key,type);
});
})();`;
