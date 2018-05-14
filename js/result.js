const getID = () => {
    //let originalURL;
}

$(document).ready(() => {
    let url = `http://localhost:53077/api/getuser?id=${getID()}`
    /*$.getJSON(url, function(data) {
        console.log (data);
    });*/
    console.log(url);
});