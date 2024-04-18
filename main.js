import { tesztFuggvenyek } from "./teszt.js";

export function fuggvenyem3(kapottSzam){
    let osszegSzam = 0
    while(kapottSzam > 0){
        let maradek = kapottSzam % 10;
        osszegSzam = osszegSzam + maradek;
        kapottSzam = Math.floor(kapottSzam / 10);
    }
    return osszegSzam;     
}



tesztFuggvenyek();