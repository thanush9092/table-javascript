function myfunction(){
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let number=document.getElementById("number").value;
    let RegEx =  /^[a-z]+$/i;
    let RegEx3=/^\S[0-9]{0,3}$/;;
    
    
  
    // name
    if( name.match(RegEx)){
        document.getElementById("name").style.border= "1px solid lightgreen";
        document.getElementById( "error").innerHTML=""; 
        
      
      }
      else{
        document.getElementById("name").style.border="1px solid red";
        document.getElementById("error").innerHTML="Check the field is Empty !";
        document.getElementById("error").style.color="red";
      }
      // age
      if(age.match(RegEx3)){
        document.getElementById("age").style.border="1px solid lightgreen";
        document.getElementById("error1").innerHTML="";

     }
      else{
        document.getElementById("age").style.border="1px solid red";
        document.getElementById("error1").innerHTML="Check the field is Empty !";
        document.getElementById("error1").style.color="red";
      }
      
   
            // mobile number
        if(number === "" || isNaN(number)){
            document.getElementById("number").style.border = "1px solid red";   
            document.getElementById("mob").innerHTML = "Check the field is Empty !";
            document.getElementById("mob").style.color="red";
            }
        else if(number.length!==10){
            document.getElementById("number").innerHTML = "Must contain 10 digits" 
            document.getElementById("mob").style.border = "1px solid red"; 
            document.getElementById("mob-").style.color="red";  
            }
            else{
            document.getElementById("number").style.border="1px solid lightgreen";   
            document.getElementById("mob").innerHTML = "";    
            } 
     

const data=[
  {
    "Name":"Tamil",
    "Age": 21,
    "Phonenumber":"9043576765"
  },
 { 
  "Name":"Vicky",
  "Age":20,
  "Phonenumber":"9075873456"},
 
]
let col = [];
for (let i = 0; i < data.length; i++) {
  for (let key in data[i]) {
    if (col.indexOf(key) === -1) {
      col.push(key);
    }
  }
  
}

// Create a table.
const table = document.createElement("table");

// Create table header row using the extracted headers above.
let tr = table.insertRow(-1);                   // table row.

for (let i = 0; i < col.length; i++) {
  let th = document.createElement("th");      // table header.
  th.innerHTML = col[i];
  tr.appendChild(th);
}

// add json data to the table as rows.
for (let i = 0; i < data.length; i++) {

  tr = table.insertRow(-1);

  for (let j = 0; j < col.length; j++) {
    let tabCell = tr.insertCell(-1);
    tabCell.innerHTML = data[i][col[j]];
  }
}

const details= new Object()
details.name=document. getElementById("name").value,
details.age=document. getElementById("age").value,
details.phonenumber=document. getElementById("number").value;

let trow =table.insertRow();
for(let i in details){
    let tabcell=trow.insertCell(-1);
    tabcell.innerHTML=details[i];
}

// Now, add the newly created table with json data, to a container.
const divShowData = document.getElementById('showData');
divShowData.innerHTML = "";
divShowData.appendChild(table);

}

// filter

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
