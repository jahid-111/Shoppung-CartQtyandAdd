console.log("HELLO FROM MAIN JS");



function theCounterValueQty(counterValue){
    const addPriceElement=document.getElementById('mobileInputPrice');
    const addPriceElementString=addPriceElement.value;
    const addPriceElementValue=parseInt(addPriceElementString);
    let  newCasenumber;
        if(counterValue){
        newCasenumber = addPriceElementValue +1;
        }    
        else{
            newCasenumber = addPriceElementValue -1;
        };
            addPriceElement.value = newCasenumber;
    return newCasenumber;
}

document.getElementById("phone-increase-qyt").addEventListener('click', function(){
   const theValue= theCounterValueQty(true)

   const total= theValue*1299;
   
   const priceTotal=document.getElementById('priceTotal');   
   priceTotal.innerText=total;

})

document.getElementById("phone-decrease-qyt").addEventListener('click', function(){    
    const theValue= theCounterValueQty(false);
    const total=theValue*1299;
    const priceTotal=document.getElementById('priceTotal');  
    priceTotal.innerText=total;
})


