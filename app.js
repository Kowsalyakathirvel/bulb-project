function change(){
var imag=document.getElementById("bulb");

    if(imag.src.match("on"))
    {
        imag.src="./assets/off.jpg";
    }
    else{
        imag.src="./assets/on.jpg";
    }
}