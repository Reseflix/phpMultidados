async function dashcolor(e) {
    document.getElementsByClassName("portlet-title")[0].style.backgroundColor = getComputedStyle(e).backgroundColor;
    let req = e.previousSibling.previousSibling.getElementsByClassName("desc")[0].innerText;
    let res = await $.post("/phpMultidados/inc/consulta.php",{value:req});
    dashtable(res);
}
function dashtable(res){
    let table = document.getElementsByClassName("table table-hover")[0];
    table.innerHTML = "";
    let thead,tbody;
    //thead
    thead = "<thead><tr><th>#</th>";
    for(x in res[0]){
        thead += `<th>${x}</th>`;
    };
    thead += "</tr></thead>";
    table.innerHTML += thead;
    //tbody
    tbody = "<tbody>";
    res.forEach((value,key) => {
        tbody += `<tr><td>${key}</td>`
        for(x in value) {
            tbody +=`<td>${value[x]}</td>`
        } 
       tbody += "</tr>"
    });
    tbody += "</tbody>";
    table.innerHTML += tbody;
}