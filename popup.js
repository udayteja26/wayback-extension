var getSegment = function (url, index) {
   return url.replace(/^https?:\/\//, '').split('/')[index];
}

chrome.tabs.query({
active: true,
lastFocusedWindow: true
}, function(tabs) {
// and use that tab to fill in out title and url
var tab = tabs[0];
if(
getSegment(tab.url,0)=="web-beta.archive.org"
)
{
var inter=getSegment(tab.url, 2);
alert("This page of"+getSegment(tab.url, 3)+"is archived by wayback machine at:\n"+inter.slice(6,8)+"-"+inter.slice(4,6)+"-"+inter.substr(0,4)+"  "+inter.slice(8,10)+"hrs"+inter.slice(10,12)+"min"+inter.slice(12)+"sec");
document.write("This page of"+getSegment(tab.url, 3)+"is archived by wayback machine at:\n"+inter.slice(6,8)+"-"+inter.slice(4,6)+"-"+inter.substr(0,4)+"  "+inter.slice(8,10)+"hrs"+inter.slice(10,12)+"min"+inter.slice(12)+"sec");
 }
else{
  document.write("Archived time can be obtained only while replaying archived pages through wayback machine");
  
}});