function myFunctionp(){
    let P = +prompt("Oturacagin perimetri:");
    let l = +prompt("Uzunlugu:");
    let So = +prompt('Oturacagin sahesi:');
    let V = So*l;
    let Sy = P*l;
    let St =Sy + 2*So;
    let netice = "Oturacaginin perimetri " + P + " m , uzunlugu " + l + " m  ve oturacagin sahesi ise " + So + " m^2 olan prizmanin hecmi " + V + ' m^3, yan sethinin sahesi ' + Sy + ' m^2, ve tam sethinin sahesi ise ' + St + ' m^2-dir.'
    document.getElementById("silindr").innerHTML = netice
}
function myFunctions(){
    let pi = +prompt("Pi:");
    let h = +prompt("Hundurluyu:");
    let So = +prompt('Oturacagin sahesi:');
    let r = +prompt('Radiusu:')
    let V = So*h;
    let Sy = 2*pi*r*h;;
    let St = Sy + 2*pi*r**2;
    let netice = "Radiusu " + r + " m , hundurluyu " + h + " m  ve oturacagin sahesi ise " + So + " m^2 olan silindrin hecmi " + V + ' m^3, yan sethinin sahesi ' + Sy + ' m^2, ve tam sethinin sahesi ise ' + St + ' m^2-dir.'
    document.getElementById("silindr").innerHTML = netice 
}
function myFunctionk(){
    let r = +prompt("Radiusu:")
    let d = +prompt("Diametri:")
    let pi= +prompt('Pi:')
    let S=pi*d**2;
    let V=4*pi*r*r*r/3;
    let netice= 'Radiusu ' + r + ' m, diamteri ise ' + d + ' m olan kurenin sahesi ' + S + ' m^2 ve hecmi ' + V + ' m^3-dur.'
    document.getElementById("kure").innerHTML = netice;
}