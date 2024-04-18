import { fuggvenyem3 } from "./main.js";

export function tesztFuggvenyek(){
    
        const TESZTESETEK = [
            {
                n : 312,
                vart :  6
            },
            {
                n : 3122,
                vart :  8
            },
            {
                n : 0,
                vart : 0 
            },
            {
                n : 69,
                vart : 15 
            },
            {
                n : 1,
                vart : 1 
            },
            {
                n : 2,
                vart : 2 
            },
            {
                n : 3,
                vart : 3 
            },
            {
                n : 4,
                vart : 4 
            },
            {
                n : 5,
                vart : 5 
            },
            {
                n : 6,
                vart : 6 
            },
            {
                n : 7,
                vart : 7 
            },
            {
                n : 8,
                vart : 8 
            },
            {
                n : 9,
                vart : 9 
            },
            {
                n : 10,
                vart : 1 
            },
            {
                n : Number.MAX_VALUE,
                vart : 1292 
            },
            {
                n: -5,
                vart: 0 
            },
            {
                n: 4.2,
                vart: 4.2

            },
            {
                n: 999999,
                vart: 54
            }

        ]
        TESZTESETEK.forEach(function(teszt){
            console.assert(
                teszt.vart === fuggvenyem3(teszt.n),
                 `n: ${teszt.n} vart: ${teszt.vart} kapott: ${fuggvenyem3(teszt.n)}`,`HIBA`
             );             
        });

    }