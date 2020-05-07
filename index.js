let moreCounter = -1;
let btn = document.getElementById("ajax-json-more");

btn.addEventListener("click", function() {

    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'more.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            let ourData = JSON.parse(ourRequest.responseText);
            ourData.forEach(e => {
                console.log(e);
            });
            btn.insertAdjacentHTML('beforebegin', ourData[moreCounter].content);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();
    moreCounter++;
    if (moreCounter >= 1) {
        btn.classList.add("hide");
    }
});
