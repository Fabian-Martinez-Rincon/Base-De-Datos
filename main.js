//Start here
const database = [
    {
        carName: "Ford",
        carPrice: 17000,
        carCode: "FD"
    },
    {
        carName: "Ford",
        carPrice: 17000,
        carCode: "FD"
    },
    {
        carName: "Ford",
        carPrice: 17000,
        carCode: "FD"
    },
    {
        carName: "Ford",
        carPrice: 17000,
        carCode: "FD"
    },
    {
        carName: "Ford",
        carPrice: 17000,
        carCode: "FD"
    },
];

//Seleccionamos el elemento en la posicion x
function selectElement(selector){
    return document.querySelector(selector);
}

function getResults(){
    const search = selectElement('.searchbar').value;

    for (let i = 0; i < database.length; i++){
        if (
            database[i].carName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            database[i].carCode.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ){
            selectElement('.search-results').innerHTML+=`
            <div class = "search-results-item">
                <span class= "search-item">${database[i].carName}</span>
                <span class= "search-item">${database[i].carPrice}</span>
                <span class= "search-item">${database[i].carCode}</span>
            </div>
            `;
        }
    }
}

selectElement('.searchbar').addEventListener('keyup', getResults);