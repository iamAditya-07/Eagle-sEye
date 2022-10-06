document.getElementById("btn").onclick = function() {myFunction()};


function myFunction(){
    var x;
    var count=0;  
    x = document.getElementById("img1").value;
    x = parseInt(x);
    if (x==8) {
        count++;
        //count+=parseInt(x);
    }

    x = document.getElementById("img2").value;
    x = parseInt(x);
    //count+=parseInt(x);
    if (x==2) {
        count++;
    }

    x = document.getElementById("img3_1").value;
    y = document.getElementById("img3_2").value;
    x = parseInt(x);
    y = parseInt(y);
    //count=count+x+y;
    if (x==4 && y==1) {
        count++;
    }

    x = document.getElementById("img4").value;
    x = parseInt(x);
    //t+=x;
    if (x==3) {
        count++;
    }

    x = document.getElementById("img5").value;
    x = parseInt(x);
    //count+=x;
    if (x==4) {
        count++;
    }

    x = document.getElementById("img6").value;
    x = parseInt(x);
    //count+=x;
    if (x==2) {
        count++;
    }
    x = document.getElementById("img7").value;
    if (x=="A") {
        count++;
    }

    x = document.getElementById("img8").value;
    x = parseInt(x);
    //count+=x;
    if (x==2) {
        count++;
    }


    document.getElementById("txtresult").value = count;

}



