
const url="./json/categories(1).json"

function Works()
{
    fetch(url)
        .then(responce => {
            return responce.json();
        })
        .then(data => {
            initCard(data);
        })
console.log(data);
    }

