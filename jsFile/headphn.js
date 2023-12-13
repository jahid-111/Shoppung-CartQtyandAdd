console.log("hello from Headphone js");





function theCounterHValueQty(theHValue){
    const headphnQty= document.getElementById('headphnQty');
    const headphnQtyString=headphnQty.value;
    const headphnQtyValue=parseInt(headphnQtyString)
        let headphnQtyValuePlus;
            if(theHValue){
                headphnQtyValuePlus = headphnQtyValue+1
            }
            else{
                headphnQtyValuePlus = headphnQtyValue-1
            }
        headphnQty.value=headphnQtyValuePlus;
return headphnQtyValuePlus;
}

document.getElementById('hedpPlus').addEventListener('click', function(){
    const theValue = theCounterHValueQty(true);
    const subtotal = theValue*700;
    const totalPrice =document.getElementById('totalPrice');
        totalPrice.innerText=subtotal;
})

document.getElementById('hedpnMinus').addEventListener('click', function(){
    const theValue = theCounterHValueQty(false);
    const subtotal = theValue*700;
    const totalPrice =document.getElementById('totalPrice');
        totalPrice.innerText=subtotal;

})


































