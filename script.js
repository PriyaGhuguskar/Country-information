const searchbutton = document.getElementById("search-button");
let countryinp = document.getElementById("country");

document.getElementById("capital").style.display = "none"
document.getElementById("continent").style.display = "none"
document.getElementById("population").style.display = "none"
document.getElementById("currency").style.display = "none"
document.getElementById("lan").style.display = "none"

searchbutton.addEventListener("click", () => {
    let countryname = countryinp.value
    let finalURL = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`
    // console.log(finalURL)
    fetch(finalURL).then((response) => response.json())
        .then((data) => {
            let desc = data[0]
            console.log(desc)
            console.log(desc.capital[0])
            console.log(desc.flags.svg)
            console.log(Object.keys(desc.currencies)[0])
            result.innerHTML = `
    <img src="${data[0].flags.svg}" class="flag-img">
   
    `
            displaycountry.innerText = ` ${data[0].name.common}`
            capitalName.innerText = `:- ${desc.capital[0]}`
            continentName.innerText = `:- ${desc.continents[0]}`
            lanName.innerText = `:- ${Object.keys(desc.languages)[0]}`
            currencyName.innerText = `:- ${Object.keys(desc.currencies)[0]}`
            populationName.innerText = `:- ${desc.population}`

            document.getElementById("capital").style.display = "block"
            document.getElementById("continent").style.display = "block"
            document.getElementById("population").style.display = "block"
            document.getElementById("currency").style.display = "block"
            document.getElementById("lan").style.display = "block"

        });
});
