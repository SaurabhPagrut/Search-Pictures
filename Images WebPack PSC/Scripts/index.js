// Secret Key : "ZQmw_ChDqLPIaG5IO1zaDXjQJDnqLNumOxfPMlDhNOU";
// Fetch Link : "https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${Access_Key}";
// let url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=${Access_Key}`;

const Access_Key = "Y9wAZ3erKP-vTy4ME8ChaeZ71t-j7TwnW1Ei_7pEj68";

// Importing Navbar function from navbar.js file
import navbar from "../Components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

// Adding Enter Event and collecting the data from the searchImages function
let search = (event) => {
    let container = document.getElementById("container");
    let query = document.getElementById("query").value;
    if (event.key === "Enter")
        searchImages(Access_Key, query).then((data) => {
            container.innerHTML = null;
            appends(data.results, container);
        });
}
document.getElementById("query").addEventListener("keydown", search);

// Importing the searchImages function from fetch.js file
import searchImages from "./fetch.js";

let cbz = document.getElementById("categories").children;

for (let c of cbz){
    c.addEventListener("click", showFunction);
}

function showFunction() {
    searchImages(Access_Key, this.id).then((data) => {
        document.getElementById("query").value = this.id;
        container.innerHTML = null;
        appends(data.results, container);
    });
}

// appending the collected data into the dom
let appends = (data, container) => {
    container.innerHTML = null;
    data.forEach(({ alt_description, urls: { small } }) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");

        img.src = small;
        h3.innerText = alt_description;
        // console.log(small, alt_description)

        div.append(img, h3);
        container.append(div);
    });
};