function addtheplayers1and2(){
    Pl1=document.getElementById("P1").value;
    Pl2=document.getElementById("P2").value;
    localStorage.setItem("Player1",Pl1);
    localStorage.setItem("Player2",Pl2);
    window.location="nextpage.html";
}

function transfer(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    Theanswer=parseInt(num1)*parseInt(num2);
    anumber="<h4 id='number'>" + num1 + "×"+num2 +"</h4>";
    boxofinput="<br>Answer : <input type='text' id='input check box'>";
    checkknowledge="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    fragments=Theanswer + anumber + boxofinput + checkknowledge;
    document.getElementById("output").innerHTML=fragments;
    document.getElementById(num1).value="";
    document.getElementById(num2).value="";
}