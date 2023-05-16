
const  convFahrenheit = () => {
   var celcius = parseFloat(document.querySelector("#celcius").value);

   var fahrenheitRes = (1.8 * celcius)+32;
   var res = fahrenheitRes.toFixed(2);

   document.querySelector("#celcius").value = celcius;
   document.querySelector("#fahrenheit").value = res;
}

const  convCelcius = () => {
    var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);
 
    var celciusres= (fahrenheit - 32)/1.8;
    var res = celciusres.toFixed(2);
    document.querySelector("#celcius").value = res;
    document.querySelector("#fahrenheit").value = fahrenheit ;
 }

 const reset = () =>{
    document.querySelector("#celcius").value = " ";
    document.querySelector("#fahrenheit").value = " ";
 }