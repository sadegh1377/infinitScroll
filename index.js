let listElm = document.querySelector('#infinite-list');
// Add 20 items.
let nextItem = 1;
let previousItem = 0

let loadMore = function (up) {
    if (up) {
        if (previousItem < -100) {
            return;
        }
        for (let i = 0; i > -20; i--) {
            let item = document.createElement('li');
            item.innerText = 'Item ' + previousItem--;
            listElm.scrollTop = listElm.clientHeight
            listElm.insertBefore(item, listElm.firstChild);
            removeElement(up)
        }
    } else {
        if (nextItem > 102) {
            return;
        }
        for (let i = 0; i < 20; i++) {
            let item = document.createElement('li');
            item.innerText = 'Item ' + nextItem++;
            listElm.appendChild(item);
            removeElement()
        }
    }
}

let removeElement = function (up) {
    if (up) {
        if (listElm.childElementCount > 100) {
            let extra = listElm.childElementCount - 100
            // console.log(extra)
            for (let i = 0; i < extra; i++) {
                listElm.removeChild(listElm.lastChild);
                nextItem--;
            }
        }
    } else {
        if (listElm.childElementCount > 100) {
            let extra = listElm.childElementCount - 100
            console.log(extra)
            for (let i = 0; i < extra; i++) {
                listElm.removeChild(listElm.firstChild);
                previousItem++;
            }
        }
    }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function () {
    if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        // console.log("scroll top = " + listElm.scrollTop)
        // console.log("client height = " + listElm.clientHeight)
        // console.log("scroll Height = " + listElm.scrollHeight)
        loadMore();
    } else if (listElm.scrollTop === 0) {
        // console.log("scroll top0 = " + listElm.scrollTop)
        loadMore(true)
    }
});

// Initially load some items.
loadMore();