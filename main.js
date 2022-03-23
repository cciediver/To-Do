let input = document.querySelector('#input');
let btn = document.querySelector("#btn");
let ul = document.getElementById("ul");


btn.onclick = function (){

    let value = input.value;

    // console.log(value);
    if(value != ''){
    ul.innerHTML +=  `<ul>
        <li> ${value}</li><br>
    </ul>`
    input.value = '';
    input.placeholder = "";
 } else{
     input.placeholder = "Input Can't be Empty ";
    
 }

}