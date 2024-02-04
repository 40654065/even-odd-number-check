function check(){
    let a=parseInt(document.getElementById("tu").value);
    if(a %2==0){
        document.getElementById("num").innerHTML=a+ " is odd";
    }
    else{
        document.getElementById("num").innerHTML=a+ " is even";
    }

    
};

    
