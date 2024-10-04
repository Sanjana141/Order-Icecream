function fn(){
    const qt1 = prompt("how many vanilla?");
    const qt2 = prompt("how many chocolate?");
    const qt3 = prompt("how many butterscotch?");
    document.getElementById("quantity").innerText=`Total quantity: ${parseInt(qt1)+parseInt(qt2)+parseInt(qt3)}`;
    document.getElementById("total").innerText=`Total amount: ${50*parseInt(qt1)+55*parseInt(qt2)+60*parseInt(qt3)}`;

};

