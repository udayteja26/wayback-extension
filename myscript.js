

var url = window.location.href;
var file = url.split('?')[0];
var pathanddomain = file.split('/');
var path = pathanddomain.splice(1, pathanddomain.length-1);
var pathIndexToGet = 3;
var pathIndexToGet2 = 4;
var inter=path[pathIndexToGet];
alert("this page of \t"+path[pathIndexToGet2]+" "+"is archived by wayback machine at: \n"+inter.slice(6,8)+"-"+inter.slice(4,6)+"-"+inter.substr(0,4)+"  "+inter.slice(8,10)+"hrs"+inter.slice(10,12)+"min"+inter.slice(12)+"sec");


