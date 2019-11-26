var array = ["Euler", "Java", "C", "Shell", "Lisp", "Scheme", "Simula", "Smalltalk", "Fortran"];
function func1(input)
{
    for (var i =0; i<array.length; i++)
    {
            if(array[i]==input)
            {
                var li = document.createElement("li");
                var textnode=document.createTextNode(input);
                li.appendChild(textnode);
                document.getElementById("list").appendChild(li);
            }
      }
}

function func2(func1, array)
{
    for (var i =0; i<array.length; i++)
    {
        func1(array[i]);

    }

}


function search()
 {
    var key = document.getElementById("searchword").value;
    for (i = 0; i < array.length; i++)
      {
          var txt = array[i];
          if (txt.substring(0, key.length).toUpperCase() == key.toUpperCase())
            {
              document.getElementById("list").children[i].style.display = "list-item";

            }
            else
            {
              document.getElementById("list").children[i].style.display = "none";
            }
      }
  }
