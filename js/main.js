var displayContainer = document.getElementById("JSONdata");
var mBtn = document.getElementById("getStuff");
var htmlData = '';
var index = 26262;

mBtn.addEventListener("click", function () {
    //create a request
    var mRequest = new XMLHttpRequest();

    //open a new connection, using get on URL endpoint
    mRequest.open('GET', 'https://raw.githubusercontent.com/Inolas/WCA/master/WCA_Results_Person_India.json');
    
    mRequest.onload = function(){ //start accessing JSON data
        var WCAdata = JSON.parse(mRequest.responseText);
        console.log(WCAdata[26265]);
        // displayHtml(WCAdata[26265]);
        
        displayHtml(WCAdata[index]);
        index++;  
    }
    //sent the request
    mRequest.send();
    
    if (index > 26270) {
        // mBtn.classList.add("hide-btn");
        this.style.display = 'none';
    }      
})

function displayHtml(data){


    htmlData = '<br><p>'+(index%26261)+'. '+data.personName +' participated in ' +data.eventId+' with an average speed '+data.average+'</p>';
    displayContainer.insertAdjacentHTML('beforeend', htmlData);
}