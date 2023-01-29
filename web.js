function welcom() {
    var order1=document.getElementById("order1").value;
    var order2=document.getElementById("order2").value;
     var order3=document.getElementById("order3").value;
     var order4=document.getElementById("order4").value;
    document.getElementById("ord1").innerHTML=order1;
     document.getElementById("ord2").innerHTML=order3;
     document.getElementById("total").innerHTML=order2*order4*0.02;   

    
}