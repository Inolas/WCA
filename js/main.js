var displayContainer = document.getElementById("JSONdata");
var mBtn = document.getElementById("getStuff");
var mCount = document.getElementById("listCount");
var mList = document.getElementById("orderedList");

var htmlData = '';
var index = 1;

mBtn.addEventListener("click", function () {
    //create a request
    var mRequest = new XMLHttpRequest();

    //open a new connection, using get on URL endpoint
    mRequest.open('GET', 'https://raw.githubusercontent.com/Inolas/WCA/master/WCA_Results_Person_India.json');
    
    mRequest.onload = function(){ //start accessing JSON data
        var WCAdata = JSON.parse(mRequest.responseText);
        
        displayHtml(WCAdata);
        index++;
    }
    //sent the request
    mRequest.send();
    //if I place index++; here the screen displays 2. first instead of 1.
    if (index > 5) {
        console.log(index);
        
        this.classList.add("hide-btn");
        // this.style.display = 'none';
    }

})

function displayHtml(data){
    // mList.insertAdjacentHTML(beforeend, '<ol>');
    // htmlData = '<ol>';
    listCount.innerHTML = index;
    
    data.forEach(element => {
        // htmlText = '<li>';
        htmlData += '<li><p>'+(index)+'. '+data.personName +' participated in ' +data.eventId
                    +' with an average speed '+(data.average/60).toFixed(3)+' secs</p></li>';        
    });
        mList.insertAdjacentHTML('beforeend', htmlData);

    // mList.insertAdjacentHTML(beforeend, '</ol>');

}