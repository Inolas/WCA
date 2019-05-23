var displayContainer = document.getElementById("JSONdata");
var htmlData = '';
var mRequest = new XMLHttpRequest();
mRequest.open('GET', 'https://raw.githubusercontent.com/Inolas/WCA/master/WCA_Results_Person_India.json');
mRequest.onload = function(){
    var WCAdata = JSON.parse(mRequest.responseText);
    console.log(WCAdata[26265]);
    displayHtml(WCAdata[26265]);
    
}
mRequest.send();

function displayHtml(data){
    htmlData = '<br><p>'+data.personName +' participated in ' +data.eventId+' with an average speed '+data.average+'</p>';
    displayContainer.insertAdjacentHTML('beforeend', htmlData);
}