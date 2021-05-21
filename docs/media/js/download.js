function downloadbtn(color, dhref,v){
    document.write("<a href=\""+dhref+"\"><button class=\"btn btn-"+color+"\">Download<br /><small><i>"+v+"</i></small></button></a>")
}
function v(version){
    document.write("<h5><i>"+version+"</i></h5>")
}
function dpre(){
    document.write("<div class=\"download\"><h2>Download</h2>")
}
function download(title, desc, filename, setupsize, licsense, devhref, dev, sysos, sysram, type, sysarch){
    document.write('<div class="cat"><div class="list-group mt-3"><button class="btn btn-success d-block p-2">'+title+'</button><div class="card card-body"><div class="overview"><h1>'+title+'</h1><p>'+desc+'</p></div><div class="setup"><h2>Setup Details</h2><ul><li>File name : <i>'+filename+'</i></li><li>Setup size : <i>'+setupsize+'</i></li><li>License : <i>'+licsense+'</i></li><li>Developer : <a href="'+devhref+'><i>'+dev+'</i></a></li></ul></div><div class="sysrequi"><h2>System Requirment</h2><ul><li>Operating System : <i>'+sysos+' <br /></i></li><li>RAM : '+sysram+'</li><li>Type : <i>'+type+'</i></li><li>Architecture : '+sysarch+'</li></ul></div>')
}
function last(){
    document.write("</p></div></div></div></div></div>")
}
function note(){
    document.write('<p><b>Note : If any latest Version is Available please tell us by click on Latest Version Available, we will try to add the latest version to it</b></p><form action="javascript:sendemail()" id="form"><button type="submit" class="btn btn-primary mb-2">Latest Verison</button></form></div><div class="older"><h2>Older Version</h2>')
}
function nootherversion(){
    document.write("<p><i>No older version is Available</i></p>")
}