
function additem(){
    //count = count +1;
    var tot=localStorage.length;
    var uId=tot+1;
    var x = document.getElementById("myText").value;
    var node = document.createElement("li");
    var textnode=document.createTextNode(x);
    node.appendChild(textnode);
    node.setAttribute("id",uId);
    node.innerHTML = (myText.value)+" <a href='javascript:deleteitem(\"" + uId + "\")'>Delete</a>";
    localStorage.setItem(uId, x);
    document.getElementById("list").appendChild(node);

   }

function deleteitem(id){
    //alert(id);
    var x = document.getElementById("list");
    x.removeChild(document.getElementById(id));
    localStorage.removeItem(id);
        }

function goclear(){
    document.getElementById("myText").value = "";
    }

function returnlist(){
    for(var i=0;i<localStorage.length;i++) {
    var key = localStorage.key(i);
   var val = localStorage[key];
    var node = document.createElement("li");
    var textnode=document.createTextNode(key);
    node.appendChild(textnode);
    localStorage.getItem(key);
    //node.setAttribute("id",key);
   document.getElementById("list").appendChild(node);
    node.innerHTML = (val)+" <a href='javascript:deleteitem(\"" + key + "\")'>Delete</a>";
    console.log(key + " => " + val);
    //additem();
    }
  }
