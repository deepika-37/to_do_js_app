


function createCard() {
    let txt = document.querySelector("#t1").value;

    let c = 0;
    if(localStorage.getItem("count") == null) {
        localStorage.setItem("count", c);
        localStorage.setItem(c, txt);
    } else {
        c = parseInt(localStorage.getItem("count"));
        c++;
        localStorage.setItem("count", c);
        localStorage.setItem(c, txt);
    };
    
    
    
    
    // if(localStorage.getItem("count") == 0) {
    //     localStorage.setItem("0", txt);
    // }

    // else {
    //     let len = localStorage.length;
    //     localStorage.setItem(String(len), txt);
    // }

    
    
    
}

