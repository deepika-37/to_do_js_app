let element1 = document.getElementsByClassName('cards')[0];
console.log(Object.entries(localStorage));
// console.log(localS);
// let b;
// console.log(localStorage.getItem("k0"));
window.addEventListener('load', () => {
    
    let count = 0;

    if(localStorage.getItem("count") != null) {
        document.querySelector("#starting").remove();
    };

    while(localStorage.getItem(String(count)) !== null) {
        console.log("I was here " +  count) ;
        let element2 = document.createElement("div");
        // element2.setAttribute("class", "card");

        // element2.setAttribute("id", "");

        // if(localStorage.getItem(b).length === 0) {
        //     localStorage.getItem(b).push("k0");
        // } else {
        //     let className = 'k' + count;
        // }

        // element2.setAttribute("class", className);
        
        let inp = "";
        if (localStorage.getItem("b") == null) {
            inp = "k0";
            b = ["k0"];
            localStorage.setItem("b", "[]");
            let old_data =JSON.parse(localStorage.getItem("b"));
            old_data.push(inp);
            localStorage.setItem("b", JSON.stringify(old_data));
        } else {
            let rd = JSON.parse(localStorage.getItem("b"));
            let l1 = rd.length;
            inp = "k" + l1;
            rd.push(inp);
            localStorage.setItem("b",JSON.stringify(rd));
        }

        


        


        element2.classList.add("card", inp);
        console.log(element2);

        element2.innerHTML = `
   
                <h3 href="" class="red1 size2">${localStorage.getItem(String(count))}</h3>
                <div class="sep">
                    <hr>
                <br>
                <p class="red1 size1"><del>Completed Task</del></p>
                <br>
                <button value="submit" name="submit" id="addThings" onclick="add(${inp})">
                <img src="./sqaure.png" class="resize" alt="can't load">
                </button>
                <span>Pending Task</span>
                </div>
           
        `;
        element1.appendChild(element2);
        // console.log('input passed was ' + inp);
        count++;
    }

    // element1.appendChild(element2);
    console.log(JSON.parse(localStorage.getItem("b")));
});

//------------------------ Pops up when add item in card is clicked

function add(inp1) {

    document.getElementsByClassName("blurrr")[0].style.filter = "blur(5px)";
    let w = document.createElement("div");
    w.setAttribute("class", "in");
    w.innerHTML = `
        <form action="./index.html" method="post">
            <label for="t1" class="l1">Add New List</label> <br> <br>
            <input type="text" class="inp1" id="t1"> <br> <br>
            <button type="submit" class="b1" value="submit" onclick="setItems(${inp1})">Add</button>
        </form>
    `;

    document.getElementsByClassName("secondPage")[0].appendChild(w);
    // console.log("input passed was " + inp1)
    
}




//----------------Load all cards
console.log(localStorage.length);


if (localStorage.getItem('b') != null) {
    let cards =JSON.parse(localStorage.getItem('b'));
    let l = cards.length;
    for(let i = 0; i < l; i++) {
        let element4 = document.getElementsByClassName(cards[i])[0];
        let items =JSON.parse(localStorage.getItem(cards[i]));

        for(let j = 0; j < items.length; j++) {
            let child = document.create("p");
            child.classList.add("red1", "size1");

            child.innerHTML = `
            <del>${items[j]}</del>
            `;

            element4.appendChild(child);
            
        }

    }
};




// let count = 0;
// if (localStorage.getItem('b') != null) {
//     let cards =JSON.parse(localStorage.getItem('b'));
//     let l = cards.length;
//     for(let i = 0; i < l; i++) {
//         let element4 = document.getElementsByClassName(cards[i])[0];
//         let items =JSON.parse(localStorage.getItem(cards[i]));

//         for(let j = 0; j < items.length; j++) {
//             let child = document.create("p");
//             child.classList.add("red1", "size1");

//             child.innerHTML = `
//             <del>${items[j]}</del>
//             `;

//             element4.appendChild(child);
            
//         }

//     }
// };

//-------------------------- Set items in the card



function setItems(inp2) {
    let txt = document.getElementById("t1").value;

    if(localStorage.getItem(inp2) == null) {
        let arr = [txt];
        localStorage.setItem(inp2, JSON.stringify(arr))
    } else {
        let arr = JSON.parse(localStorage.getItem(inp2));
        arr.push(txt);
        localStorage.setItem(inp2, JSON.stringify(arr));
    }

    // console.log("input passed was " + inp2)

    // let content = JSON.parse
    // localStorage.set(inp2, )

};


//localStorage.clear();

// console.log(localStorage.length);









