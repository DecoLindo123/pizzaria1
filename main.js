menuListArray = ["Pizza Vegetariana","Pizza Portuguesa",
 "Pizza de Calabresa", "Pizza de Quatros Queijos"//adicionar mais itens
                    ];

function getMenu(){
var htmldata;
menuListArray.sort();
for(var x=0; x<menuListArray.leght; x++){
    htmldata=htmldata=menuListArray[x]+'<br>'; 
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
var htmldata=""
for(var x=0; x<menuListArray.leght; x++){
    htmldata=htmldata=menuListArray[x]+'<br>'; 
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    additen();
}