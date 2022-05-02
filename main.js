var Name_of_the_Guest_array = [];

function Submit()

 {

var Guest_name = document.getElementById("Enter_name").value;
Name_of_the_Guest_array.push;
document.getElementById("Display_name").innerHTML = Name_of_the_Guest_array;
console.log(Name_of_the_Guest_array);
var length_of_the_array = Name_of_the_Guest_array.length;
console.log(length_of_the_array);

}

function Show_list()

 {

	var i = Name_of_the_Guest_array.join("<br>");
	console.log(Name_of_the_Guest_array);
	document.getElementById("Show_names").innerHTML = i.toString();

}

function Sorting()

{

	Name_of_the_Guest_array.sort();
	var i = Name_of_the_Guest_array.join("<br>")
	console.log(Name_of_the_Guest_array);
	document.getElementById("Sorted_names").innerHTML = i.toString();

}

function Search()

{

	var s = document.getElementById("Search_name").value;
	var found = 0;
	var j;
	for(j=0; j<document.getElementById.length; j++)
	if(Name_of_the_Guest_array[j])
	found = found+1
  
}

 }
 
 document.getElementById("Search_names").innerHTML = "Name Found "+found+"Time/s"
