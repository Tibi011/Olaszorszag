let eteltomb = [
    {
        "etelNeve":"Carpaccio",
        "etelInfo":"Vékonyra szeletelt nyers marhahús (vagy hal), parmezánnal és rukkolával.",
        "kep":"carpaccio.png"
    },
    {
        "etelNeve":"Lasagna alla bolognese",
        "etelInfo":"Rétegezett tészta húsos-paradicsomos raguval és besamellel.",
        "kep":"lasagne.png"
    },
    {
        "etelNeve":"Bistecca alla fiorentina",
        "etelInfo":"Hatalmas, csontos marhahússteak, firenzei stílusban.",
        "kep":"Bistecca.png"
    },

    {
        "etelNeve":"Pizza Margherita",
        "etelInfo":"Paradicsom, mozzarella és bazsalikom (olasz zászló színei).",
        "kep":"pizza.png"
    },

    {
        "etelNeve":"Polenta",
        "etelInfo":"Kukoricadarából készült köret, sült vagy főtt változatban.",
        "kep":"polenta.png"
    },

    {
        "etelNeve":"Tiramisù",
        "etelInfo":"Babapiskóta, kávé, mascarpone krém és kakaó.",
        "kep":"tiramisu.png"
    }
    
]
let sz=""

for (const elem of eteltomb) {
    sz+=`
    <div class="col-sm-4">
    <div class="dobozdiv">
    <div class="text-center ">${elem.etelNeve}</div>
    <div class="text-center mb-5">${elem.etelInfo}</div>
    <div><img class="img-fluid img-rounded  img-responsive" src="kepek/${elem.kep}" ></div>
    </div>
    </div>
    `
}
document.getElementById("etelAdat").innerHTML=sz