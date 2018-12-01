function jour(){
    var dates = document.getElementById('date').value;
    document.getElementById('header-under-title').innerHTML = dates;
    console.log(dates);
}

setInterval("jour()",100)

function button(){
    var div1 = document.getElementById('hora1');
    var hor1 = document.getElementById('hor1');
    var div2 = document.getElementById('hora2');
    var hor2 = document.getElementById('hor2');
    var div3 = document.getElementById('hora3');
    var hor3 = document.getElementById('hor3');
    var div4 = document.getElementById('hora4');
    var hor4 = document.getElementById('hor4');
    var div5 = document.getElementById('hora5');
    var hor5 = document.getElementById('hor5');
    var check1 = document.getElementById('check1').checked;
    var check2 = document.getElementById('check2').checked;
    var check3 = document.getElementById('check3').checked;
    var check4 = document.getElementById('check4').checked;
    var check5 = document.getElementById('check5').checked;
    if(check1 == true){
        div1.style.display = "block";
        hor1.style.display = "block";
    }
    else if(check1 == false){
        div1.style.display = "none";
        hor1.style.display = "none";
    }
    if(check2 == true){
        div2.style.display = "block";
        hor2.style.display = "block";
    }
    else if(check2 == false){
        div2.style.display = "none";
        hor2.style.display = "none";
    }
    if(check3 == true){
        div3.style.display = "block";
        hor3.style.display = "block";
    }
    else if(check3 == false){
        div3.style.display = "none";
        hor3.style.display = "none";
    }
    if(check4 == true){
        div4.style.display = "block";
        hor4.style.display = "block";
    }
    else if(check4 == false){
        div4.style.display = "none";
        hor4.style.display = "none";
    }
    if(check5 == true){
        div5.style.display = "block";
        hor5.style.display = "block";
    }
    else if(check5 == false){
        div5.style.display = "none";
        hor5.style.display = "none";
    }
}

    setInterval("button()",25);

function horaires(){
    var horaire1 = document.getElementById('horaire1').value;
    var horaire2 = document.getElementById('horaire2').value;
    var horaire3 = document.getElementById('horaire3').value;
    var horaire4 = document.getElementById('horaire4').value;
    var horaire5 = document.getElementById('horaire5').value;
    var heur1 = document.getElementById('heur1').innerHTML;
    var heur2 = document.getElementById('heur2').innerHTML;
    var heur3 = document.getElementById('heur3').innerHTML;
    var heur4 = document.getElementById('heur4').innerHTML;
    var heur5 = document.getElementById('heur5').innerHTML;
    document.getElementById('heur1').innerHTML = horaire1;
    document.getElementById('heur2').innerHTML = horaire2;
    document.getElementById('heur3').innerHTML = horaire3;
    document.getElementById('heur4').innerHTML = horaire4;
    document.getElementById('heur5').innerHTML = horaire5;
}

function pseudos(){
    var pseudo1 = document.getElementById('pseudo1').value;
    var pseudo2 = document.getElementById('pseudo2').value;
    var pseudo3 = document.getElementById('pseudo3').value;
    var pseudo4 = document.getElementById('pseudo4').value;
    var pseudo5 = document.getElementById('pseudo5').value;
    var pseud1 = document.getElementById('pseud1').innerHTML;
    var pseud2 = document.getElementById('pseud2').innerHTML;
    var pseud3 = document.getElementById('pseud3').innerHTML;
    var pseud4 = document.getElementById('pseud4').innerHTML;
    var pseud5 = document.getElementById('pseud5').innerHTML;
    document.getElementById('pseud1').innerHTML = pseudo1;
    document.getElementById('pseud2').innerHTML = pseudo2;
    document.getElementById('pseud3').innerHTML = pseudo3;
    document.getElementById('pseud4').innerHTML = pseudo4;
    document.getElementById('pseud5').innerHTML = pseudo5;
}


setInterval("horaires()",600);
setInterval("pseudos()",600);




