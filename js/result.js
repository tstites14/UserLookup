const getID = () => {
    let originalURL = window.top.location.href;
    console.log(originalURL);

    var regex = new RegExp(`[?&]id(=([^&#]*)|&|#|$)`),
        result = regex.exec(originalURL);

    if (!result) return null;
    if (!result[2]) return "";

    return decodeURIComponent(result[2].replace(/\+/g, ""))
}

async function getData(url) {
    let jsonInput;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {
            console.log("Data Loaded");
            jsonInput = xhr.responseText;
        } else if (xhr.readyState === xhr.LOADING) {
            console.log("Loading data...");
        }
    };
    xhr.onload = function() {
        var output = JSONtoString(jsonInput);

        objectToHTML(output);
    }
    xhr.send();
}

const JSONtoString = (input) => {
    console.log("Converting raw JSON to object...")
    return JSON.parse(input);
}

const objectToHTML = (objectInput) => {
    document.getElementById("fname").innerHTML = objectInput.fname;
    document.getElementById("lname").innerHTML = objectInput.lname;
    document.getElementById("address").innerHTML = objectInput.address;
    document.getElementById("city").innerHTML = objectInput.city;
    document.getElementById("state").innerHTML = objectInput.state;
    document.getElementById("zip").innerHTML = objectInput.zip;
}

let getUserURL = `http://localhost:53077/api/getuser?id=${getID()}`;
getData(getUserURL);
