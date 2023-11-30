// import data from './kampane.json' assert {type: 'json'};
import data from './kampane.json' assert {type: 'json'};

 console.log(data.length);



// var skratka = document.getElementById("skratka").value;
// var podpisanie = document.getElementById("podpisanie").value;
// var ukoncenie = document.getElementById("ukoncenie").value;
// var dlzka = document.getElementById("dlzka").value;
// var vzorec = document.getElementById("vzorec").value;
// var pokuta = document.getElementById("pokuta").value;



//     var txt = document.getElementById('skratka').innerHTML;
//         for(var i = 0; i < data.lenght; i++){
//             if (skratka === data[i].kampan){
//             console.log(data[i].viazanost);
//     }
// }

// vypocita, kolko mesiacov ubehlo od podpisania po ukoncenie zmluvy

function PocetMesiacov(podpisanieZmluvy, ukoncenieZmluvy) {

    // prerobenie zadaneho datumu vo formulari dd.mm.yyyy na yyyy.mm.dd pre javascript

    let dateString1 = podpisanieZmluvy
    let [day1, month1, year1] = dateString1.split('.')
    const d1 = new Date(+year1, +month1 -1, +day1)

    let dateString2 = ukoncenieZmluvy
    let [day2, month2, year2] = dateString2.split('.')
    const d2 = new Date( +year2, +month2 -1, +day2)


    var d1Y = d1.getFullYear();
    var d2Y = d2.getFullYear();
    var d1M = d1.getMonth();
    var d2M = d2.getMonth();

    return (d2M+12*d2Y)-(d1M+12*d1Y);
}

// vypocet sankcie pre vzorec "P" 
// 24 mesač = P = 120 - (2,5 * PM)
// 12 mesač =  P = 120 - (5 * PM)

// const vzorecP = (vypocetP) => {
//     if (data[i].viazanost === 24) {
//         return 120 - (2.5 * PocetMesiacov);
//     }
//     else if (data[i].viazanost === 12) {
//         return 120 - (5 * PocetMesiacov);
//     }
// }

myForm.addEventListener("submit", function(e) {
    
    const inputs = document.getElementById("my-form").elements;
    const skratkaKampane = inputs["skratka"].value;
    const podpisanieZmluvy = inputs["podpisanie"].value;
    const ukoncenieZmluvy = inputs["ukoncenie"].value;

    let dlzkaViazanosti = document.getElementById("dlzka");
    let platiVzorec = document.getElementById("vzorec");


    // for cyklus na dohladanie objektu kampane zadaneho v poli skratkaKampane [i]

    for(var i = 0; i < data.length; i++){
        if (skratkaKampane === data[i].kampan){
            dlzkaViazanosti.setAttribute('value', data[i].viazanost);
            platiVzorec.setAttribute('value', data[i].vypocet);
            console.log(`${data[i].viazanost} a ${podpisanieZmluvy} a ${PocetMesiacov(podpisanieZmluvy, ukoncenieZmluvy)}`);
    }
}



  e.preventDefault();
});

