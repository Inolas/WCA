
$.getJSON("WCA_Results_Person_India.json", function(data){
    var output = '<ol>';
    // var index = 1;
    $.each(data, function (key, val) {
        output += '<li><p>'+val.personName +' participated in ' +val.eventId
                + ' with an average speed '+(val.average/60).toFixed(3)+' secs</p></li>';        
        
    });
    output += '</ol>';
    $('.orderedList').html(output);
});

// $(".orderedList").load(APIendpoint[2]);