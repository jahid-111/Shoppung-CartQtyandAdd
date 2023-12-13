console.log("HELLO FROM MAIN JS");



function theCounterValueQty(counterValue){

    const addPriceElement=document.getElementById('mobileInputPrice');
    const addPriceElementString=addPriceElement.value;
    const addPriceElementValue=parseInt(addPriceElementString);
   
    // console.log(addPriceElementValue);

    let  newCasenumber;

if(counterValue){

  newCasenumber=  addPriceElementValue +1;
}    



else{
    newCasenumber=  addPriceElementValue -1;
}

    addPriceElement.value=newCasenumber;




}





document.getElementById("phone-increase-qyt").addEventListener('click', function(){

    theCounterValueQty(true)


})
document.getElementById("phone-decrease-qyt").addEventListener('click', function(){

    theCounterValueQty(false)


})