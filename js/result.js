const getID = () => {
    let originalURL = window.top.location.href;
    console.log(originalURL);

    var regex = new RegExp(`[?&]id(=([^&#]*)|&|#|$)`),
        result = regex.exec(originalURL);

    if (!result) return null;
    if (!result[2]) return "";

    return decodeURIComponent(result[2].replace(/\+/g, ""))
}

$(document).ready(() => {
    let url = `http://localhost:53077/api/getuser?id=${getID()}`;
    console.log(url);
    /*$.getJSON(url, function(data) {
        console.log (data);
    });*/
});