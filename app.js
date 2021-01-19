var sedan = {
    make: "Sedan",
    model: "2021 BMW 740",
    price: "86,000",
    description: "Brand new",
    features: ["5 seats", "Navigation"]
}
function sedanFun() {
    var place = document.getElementById("submit1");

    for (value in sedan) {
        place.innerHTML = "Make: " + sedan.make + "<br>" + "Model: " + sedan.model + "<br>" + 
        "Description: " + sedan.description + "<br>" + "Features: " + sedan.features
    }
};

var kia = {
    make: "SUV",
    model: "2021 Kia Seltos",
    price: "21,990",
    description: "Deep blue Kia in great condition",
    features: ["5 Seats"]
}
function kiaFun(){
    var place = document.getElementById("submit2");

    for(value in PublicKeyCredential){
        place.innerHTML = "Make: " + WebKitCSSMatrix.make + "<br>" + "Model: " + kia.model + "<br>"
        + "Description: " + kia.description + "<br>" + "Features: " + kia.features
    }
};

var acura = {
    make: "SUV",
    model: "2021 RDX",
    price: "38,400",
    description: "Gread condition solver Acura SUV, low miles",
    features: ["Leather itnerior", "10.5 inch heads up display", "heated steering wheel"]
}
function acuraFun(){
    var place =document.getElementById("submit3");

    for(value in acura){
        place.innerHTML = "Make: " + acura.make + "<br>" + "Model: " + acura.model + "<br>"
        + "Description: " + acura.description + "<br>" + "Features: " + acura.features
    }
}

function clear1() {
    document.getElementById("submit1").innerText="See Details";
}

function clear2() {
    document.getElementById("submit2").innerText="See Details";
}

function clear3() {
    document.getElementById("submit3").innerText="See Details";
}