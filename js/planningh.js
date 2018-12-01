function jour(){
    var dates1 = document.getElementById('date1').value;
    document.getElementById('header-under-title').innerHTML = dates1;
    console.log(dates1);
}

setInterval("jour()",100)

function button1(){
    var dates1 = document.getElementById('date1');
    var jour1 = document.getElementById('jour1');
    var div01 = document.getElementById('hora01');
    var hor01 = document.getElementById('hor01');
    var div02 = document.getElementById('hora02');
    var hor02 = document.getElementById('hor02');
    var div03 = document.getElementById('hora03');
    var hor03 = document.getElementById('hor03');
    var div04 = document.getElementById('hora04');
    var hor04 = document.getElementById('hor04');
    var div05 = document.getElementById('hora05');
    var hor05 = document.getElementById('hor05');
    var check001 = document.getElementById('check01');
    var check002 = document.getElementById('check02');
    var check003 = document.getElementById('check03');
    var check004 = document.getElementById('check04');
    var check005 = document.getElementById('check05');
    var check01 = document.getElementById('check01').checked;
    var check02 = document.getElementById('check02').checked;
    var check03 = document.getElementById('check03').checked;
    var check04 = document.getElementById('check04').checked;
    var check05 = document.getElementById('check05').checked;
    var checkjour = document.getElementById('checkj1').checked;
    if(checkjour == true){
        jour1.style.display = "block";
        dates1.style.display = "block";
        check001.style.display = "block";
        check002.style.display = "block";
        check003.style.display = "block";
        check004.style.display = "block";
        check005.style.display = "block";
    }
    else if(checkjour == false){
        jour1.style.display = "none";
        dates1.style.display = "none";
        check001.style.display = "none";
        check002.style.display = "none";
        check003.style.display = "none";
        check004.style.display = "none";
        check005.style.display = "none";
    }
    if(check01 == true){
        div01.style.display = "block";
        hor01.style.display = "block";
    }
    else if(check01 == false){
        div01.style.display = "none";
        hor01.style.display = "none";
    }
    if(check02 == true){
        div02.style.display = "block";
        hor02.style.display = "block";
    }
    else if(check02 == false){
        div02.style.display = "none";
        hor02.style.display = "none";
    }
    if(check03 == true){
        div03.style.display = "block";
        hor03.style.display = "block";
    }
    else if(check03 == false){
        div03.style.display = "none";
        hor03.style.display = "none";
    }
    if(check04 == true){
        div04.style.display = "block";
        hor04.style.display = "block";
    }
    else if(check04 == false){
        div04.style.display = "none";
        hor04.style.display = "none";
    }
    if(check05 == true){
        div05.style.display = "block";
        hor05.style.display = "block";
    }
    else if(check05 == false){
        div05.style.display = "none";
        hor05.style.display = "none";
    }
}

    setInterval("button1()",600);

    function button2(){
        var dates2 = document.getElementById('date2');
        var jour2 = document.getElementById('jour2');
        var div11 = document.getElementById('hora11');
        var hor11 = document.getElementById('hor11');
        var div12 = document.getElementById('hora12');
        var hor12 = document.getElementById('hor12');
        var div13 = document.getElementById('hora13');
        var hor13 = document.getElementById('hor13');
        var div14 = document.getElementById('hora14');
        var hor14 = document.getElementById('hor14');
        var div15 = document.getElementById('hora15');
        var hor15 = document.getElementById('hor15');
        var check011 = document.getElementById('check11');
        var check012 = document.getElementById('check12');
        var check013 = document.getElementById('check13');
        var check014 = document.getElementById('check14');
        var check015 = document.getElementById('check15');
        var check11 = document.getElementById('check11').checked;
        var check12 = document.getElementById('check12').checked;
        var check13 = document.getElementById('check13').checked;
        var check14 = document.getElementById('check14').checked;
        var check15 = document.getElementById('check15').checked;
        var checkjour = document.getElementById('checkj2').checked;
        if(checkjour == true){
            jour2.style.display = "block";
            dates2.style.display = "block";
            check011.style.display = "block";
            check012.style.display = "block";
            check013.style.display = "block";
            check014.style.display = "block";
            check015.style.display = "block";
        }
        else if(checkjour == false){
            jour2.style.display = "none";
            dates2.style.display = "none";
            check011.style.display = "none";
            check012.style.display = "none";
            check013.style.display = "none";
            check014.style.display = "none";
            check015.style.display = "none";
        }
        if(check11 == true){
            div11.style.display = "block";
            hor11.style.display = "block";
        }
        else if(check11 == false){
            div11.style.display = "none";
            hor11.style.display = "none";
        }
        if(check12 == true){
            div12.style.display = "block";
            hor12.style.display = "block";
        }
        else if(check12 == false){
            div12.style.display = "none";
            hor12.style.display = "none";
        }
        if(check13 == true){
            div13.style.display = "block";
            hor13.style.display = "block";
        }
        else if(check13 == false){
            div13.style.display = "none";
            hor13.style.display = "none";
        }
        if(check14 == true){
            div14.style.display = "block";
            hor14.style.display = "block";
        }
        else if(check14 == false){
            div14.style.display = "none";
            hor14.style.display = "none";
        }
        if(check15 == true){
            div15.style.display = "block";
            hor15.style.display = "block";
        }
        else if(check15 == false){
            div15.style.display = "none";
            hor15.style.display = "none";
        }
    }
    
        setInterval("button2()",600);

        function button3(){
            var dates3 = document.getElementById('date3');
            var jour3 = document.getElementById('jour3');
            var div31 = document.getElementById('hora31');
            var hor31 = document.getElementById('hor31');
            var div32 = document.getElementById('hora32');
            var hor32 = document.getElementById('hor32');
            var div33 = document.getElementById('hora33');
            var hor33 = document.getElementById('hor33');
            var div34 = document.getElementById('hora34');
            var hor34 = document.getElementById('hor34');
            var div35 = document.getElementById('hora35');
            var hor35 = document.getElementById('hor35');
            var check031 = document.getElementById('check31');
            var check032 = document.getElementById('check32');
            var check033 = document.getElementById('check33');
            var check034 = document.getElementById('check34');
            var check035 = document.getElementById('check35');
            var check31 = document.getElementById('check31').checked;
            var check32 = document.getElementById('check32').checked;
            var check33 = document.getElementById('check33').checked;
            var check34 = document.getElementById('check34').checked;
            var check35 = document.getElementById('check35').checked;
            var checkjour = document.getElementById('checkj3').checked;
            if(checkjour == true){
                jour3.style.display = "block";
                dates3.style.display = "block";
                check031.style.display = "block";
                check032.style.display = "block";
                check033.style.display = "block";
                check034.style.display = "block";
                check035.style.display = "block";
            }
            else if(checkjour == false){
                jour3.style.display = "none";
                dates3.style.display = "none";
                check031.style.display = "none";
                check032.style.display = "none";
                check033.style.display = "none";
                check034.style.display = "none";
                check035.style.display = "none";
            }
            if(check31 == true){
                div31.style.display = "block";
                hor31.style.display = "block";
            }
            else if(check31 == false){
                div31.style.display = "none";
                hor31.style.display = "none";
            }
            if(check32 == true){
                div32.style.display = "block";
                hor32.style.display = "block";
            }
            else if(check32 == false){
                div32.style.display = "none";
                hor32.style.display = "none";
            }
            if(check33 == true){
                div33.style.display = "block";
                hor33.style.display = "block";
            }
            else if(check33 == false){
                div33.style.display = "none";
                hor33.style.display = "none";
            }
            if(check34 == true){
                div34.style.display = "block";
                hor34.style.display = "block";
            }
            else if(check34 == false){
                div34.style.display = "none";
                hor34.style.display = "none";
            }
            if(check35 == true){
                div35.style.display = "block";
                hor35.style.display = "block";
            }
            else if(check35 == false){
                div35.style.display = "none";
                hor35.style.display = "none";
            }
        }
        
            setInterval("button3()",600);

            function button4(){
                var dates4 = document.getElementById('date4');
                var jour4 = document.getElementById('jour4');
                var div41 = document.getElementById('hora41');
                var hor41 = document.getElementById('hor41');
                var div42 = document.getElementById('hora42');
                var hor42 = document.getElementById('hor42');
                var div43 = document.getElementById('hora43');
                var hor43 = document.getElementById('hor43');
                var div44 = document.getElementById('hora44');
                var hor44 = document.getElementById('hor44');
                var div45 = document.getElementById('hora45');
                var hor45 = document.getElementById('hor45');
                var check041 = document.getElementById('check41');
                var check042 = document.getElementById('check42');
                var check043 = document.getElementById('check43');
                var check044 = document.getElementById('check44');
                var check045 = document.getElementById('check45');
                var check41 = document.getElementById('check41').checked;
                var check42 = document.getElementById('check42').checked;
                var check43 = document.getElementById('check43').checked;
                var check44 = document.getElementById('check44').checked;
                var check45 = document.getElementById('check45').checked;
                var checkjour = document.getElementById('checkj4').checked;
                if(checkjour == true){
                    jour4.style.display = "block";
                    dates4.style.display = "block";
                    check041.style.display = "block";
                    check042.style.display = "block";
                    check043.style.display = "block";
                    check044.style.display = "block";
                    check045.style.display = "block";
                }
                else if(checkjour == false){
                    jour4.style.display = "none";
                    dates4.style.display = "none";
                    check041.style.display = "none";
                    check042.style.display = "none";
                    check043.style.display = "none";
                    check044.style.display = "none";
                    check045.style.display = "none";
                }
                if(check41 == true){
                    div41.style.display = "block";
                    hor41.style.display = "block";
                }
                else if(check41 == false){
                    div41.style.display = "none";
                    hor41.style.display = "none";
                }
                if(check42 == true){
                    div42.style.display = "block";
                    hor42.style.display = "block";
                }
                else if(check42 == false){
                    div42.style.display = "none";
                    hor42.style.display = "none";
                }
                if(check43 == true){
                    div43.style.display = "block";
                    hor43.style.display = "block";
                }
                else if(check43 == false){
                    div43.style.display = "none";
                    hor43.style.display = "none";
                }
                if(check44 == true){
                    div44.style.display = "block";
                    hor44.style.display = "block";
                }
                else if(check44 == false){
                    div44.style.display = "none";
                    hor44.style.display = "none";
                }
                if(check45 == true){
                    div45.style.display = "block";
                    hor45.style.display = "block";
                }
                else if(check45 == false){
                    div45.style.display = "none";
                    hor45.style.display = "none";
                }
            }
            
                setInterval("button4()",600);

function horaires1(){
    var horaire01 = document.getElementById('horaire01').value;
    var horaire02 = document.getElementById('horaire02').value;
    var horaire03 = document.getElementById('horaire03').value;
    var horaire04 = document.getElementById('horaire04').value;
    var horaire05 = document.getElementById('horaire05').value;
    var heur01 = document.getElementById('heur01').innerHTML;
    var heur02 = document.getElementById('heur02').innerHTML;
    var heur03 = document.getElementById('heur03').innerHTML;
    var heur04 = document.getElementById('heur04').innerHTML;
    var heur05 = document.getElementById('heur05').innerHTML;
    document.getElementById('heur01').innerHTML = horaire01;
    document.getElementById('heur02').innerHTML = horaire02;
    document.getElementById('heur03').innerHTML = horaire03;
    document.getElementById('heur04').innerHTML = horaire04;
    document.getElementById('heur05').innerHTML = horaire05;
}

function pseudos1(){
    var pseudo01 = document.getElementById('pseudo01').value;
    var pseudo02 = document.getElementById('pseudo02').value;
    var pseudo03 = document.getElementById('pseudo03').value;
    var pseudo04 = document.getElementById('pseudo04').value;
    var pseudo05 = document.getElementById('pseudo05').value;
    var pseud01 = document.getElementById('pseud01').innerHTML;
    var pseud02 = document.getElementById('pseud02').innerHTML;
    var pseud03 = document.getElementById('pseud03').innerHTML;
    var pseud04 = document.getElementById('pseud04').innerHTML;
    var pseud05 = document.getElementById('pseud05').innerHTML;
    document.getElementById('pseud01').innerHTML = pseudo01;
    document.getElementById('pseud02').innerHTML = pseudo02;
    document.getElementById('pseud03').innerHTML = pseudo03;
    document.getElementById('pseud04').innerHTML = pseudo04;
    document.getElementById('pseud05').innerHTML = pseudo05;
}

function horaires2(){
    var horaire11 = document.getElementById('horaire11').value;
    var horaire12 = document.getElementById('horaire12').value;
    var horaire13 = document.getElementById('horaire13').value;
    var horaire14 = document.getElementById('horaire14').value;
    var horaire15 = document.getElementById('horaire15').value;
    var heur11 = document.getElementById('heur11').innerHTML;
    var heur12 = document.getElementById('heur12').innerHTML;
    var heur13 = document.getElementById('heur13').innerHTML;
    var heur14 = document.getElementById('heur14').innerHTML;
    var heur15 = document.getElementById('heur15').innerHTML;
    document.getElementById('heur11').innerHTML = horaire11;
    document.getElementById('heur12').innerHTML = horaire12;
    document.getElementById('heur13').innerHTML = horaire13;
    document.getElementById('heur14').innerHTML = horaire14;
    document.getElementById('heur15').innerHTML = horaire15;
}

function pseudos2(){
    var pseudo11 = document.getElementById('pseudo11').value;
    var pseudo12 = document.getElementById('pseudo12').value;
    var pseudo13 = document.getElementById('pseudo13').value;
    var pseudo14 = document.getElementById('pseudo14').value;
    var pseudo15 = document.getElementById('pseudo15').value;
    var pseud11 = document.getElementById('pseud11').innerHTML;
    var pseud12 = document.getElementById('pseud12').innerHTML;
    var pseud13 = document.getElementById('pseud13').innerHTML;
    var pseud14 = document.getElementById('pseud14').innerHTML;
    var pseud15 = document.getElementById('pseud15').innerHTML;
    document.getElementById('pseud11').innerHTML = pseudo11;
    document.getElementById('pseud12').innerHTML = pseudo12;
    document.getElementById('pseud13').innerHTML = pseudo13;
    document.getElementById('pseud14').innerHTML = pseudo14;
    document.getElementById('pseud15').innerHTML = pseudo15;
}

function horaires3(){
    var horaire31 = document.getElementById('horaire31').value;
    var horaire32 = document.getElementById('horaire32').value;
    var horaire33 = document.getElementById('horaire33').value;
    var horaire34 = document.getElementById('horaire34').value;
    var horaire35 = document.getElementById('horaire35').value;
    var heur31 = document.getElementById('heur31').innerHTML;
    var heur32 = document.getElementById('heur32').innerHTML;
    var heur33 = document.getElementById('heur33').innerHTML;
    var heur34 = document.getElementById('heur34').innerHTML;
    var heur35 = document.getElementById('heur35').innerHTML;
    document.getElementById('heur31').innerHTML = horaire31;
    document.getElementById('heur32').innerHTML = horaire32;
    document.getElementById('heur33').innerHTML = horaire33;
    document.getElementById('heur34').innerHTML = horaire34;
    document.getElementById('heur35').innerHTML = horaire35;
}

function pseudos3(){
    var pseudo31 = document.getElementById('pseudo31').value;
    var pseudo32 = document.getElementById('pseudo32').value;
    var pseudo33 = document.getElementById('pseudo33').value;
    var pseudo34 = document.getElementById('pseudo34').value;
    var pseudo35 = document.getElementById('pseudo35').value;
    var pseud31 = document.getElementById('pseud31').innerHTML;
    var pseud32 = document.getElementById('pseud32').innerHTML;
    var pseud33 = document.getElementById('pseud33').innerHTML;
    var pseud34 = document.getElementById('pseud34').innerHTML;
    var pseud35 = document.getElementById('pseud35').innerHTML;
    document.getElementById('pseud31').innerHTML = pseudo31;
    document.getElementById('pseud32').innerHTML = pseudo32;
    document.getElementById('pseud33').innerHTML = pseudo33;
    document.getElementById('pseud34').innerHTML = pseudo34;
    document.getElementById('pseud35').innerHTML = pseudo35;
}

function horaires4(){
    var horaire41 = document.getElementById('horaire41').value;
    var horaire42 = document.getElementById('horaire42').value;
    var horaire43 = document.getElementById('horaire43').value;
    var horaire44 = document.getElementById('horaire44').value;
    var horaire45 = document.getElementById('horaire45').value;
    var heur41 = document.getElementById('heur41').innerHTML;
    var heur42 = document.getElementById('heur42').innerHTML;
    var heur43 = document.getElementById('heur43').innerHTML;
    var heur44 = document.getElementById('heur44').innerHTML;
    var heur45 = document.getElementById('heur45').innerHTML;
    document.getElementById('heur41').innerHTML = horaire41;
    document.getElementById('heur42').innerHTML = horaire42;
    document.getElementById('heur43').innerHTML = horaire43;
    document.getElementById('heur44').innerHTML = horaire44;
    document.getElementById('heur45').innerHTML = horaire45;
}

function pseudos4(){
    var pseudo41 = document.getElementById('pseudo41').value;
    var pseudo42 = document.getElementById('pseudo42').value;
    var pseudo43 = document.getElementById('pseudo43').value;
    var pseudo44 = document.getElementById('pseudo44').value;
    var pseudo45 = document.getElementById('pseudo45').value;
    var pseud41 = document.getElementById('pseud41').innerHTML;
    var pseud42 = document.getElementById('pseud42').innerHTML;
    var pseud43 = document.getElementById('pseud43').innerHTML;
    var pseud44 = document.getElementById('pseud44').innerHTML;
    var pseud45 = document.getElementById('pseud45').innerHTML;
    document.getElementById('pseud41').innerHTML = pseudo41;
    document.getElementById('pseud42').innerHTML = pseudo42;
    document.getElementById('pseud43').innerHTML = pseudo43;
    document.getElementById('pseud44').innerHTML = pseudo44;
    document.getElementById('pseud45').innerHTML = pseudo45;
}


setInterval("horaires1()",600);
setInterval("pseudos1()",600);
setInterval("horaires2()",600);
setInterval("pseudos2()",600);
setInterval("horaires3()",600);
setInterval("pseudos3()",600);




