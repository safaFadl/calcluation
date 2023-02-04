// let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;

function myFunction(x)
{
    
    console.log(x)
    
        document.forms["myForm"]["Result"].value +=x;
    
   
   // document.forms["myForm"]["Result"].value += document.forms["myForm"]["btn_1"].value;
}
function FunCalc()
{
    document.forms["myForm"]["Result"].value= eval(document.forms["myForm"]["Result"].value);
    // document.forms["myForm"]["Result"].value=""; 
}
function FunReset()
{
    document.forms["myForm"]["Result"].value= "";
    // document.forms["myForm"]["Result"].value=""; 
}
