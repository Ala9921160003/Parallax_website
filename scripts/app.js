// const paragraph = document.getElementById('demo').innerHTML;

const cars = ["volvo", "ferari", "peride"];

const client = {
    age:50,
    name: "Arman ala",
    favorites:["books", "games", "movies"],
    city: "Tehran"
}

sayHello = () =>{
    document.getElementById('demo').innerHTML = `List :<br />${client["favorites"].join(`<br />`)}`;
}

cars[3] = "L90";
console.log(cars);

const myString = "ArmanAla";
let res1 = myString.substr(1, 3);
console.log(res1);
let favoritesT = client["favorites"];

function listConcat(){
    favoritesT = favoritesT.concat(["murduring", "robbery"]);
    console.log(favoritesT);
}

console.log("end");