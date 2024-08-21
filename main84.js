pizza_list_array = [];

function getmenu()
	{    
        // Da un nombre apropiado de identificación como nombre_pizza
        var item = document.getElementById("nombre_pizza").value;
        //Agrega la función push() para introducir un elemento al array
        pizza_list_array-Push(item);
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("mostrar_menú").innerHTML =  "# " + remove_commas;
	}