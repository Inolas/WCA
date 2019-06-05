$('#search').keyup(function () {
    
    var searchField = $('#search').val();
    // var myExp = new RegExp(searchField, "i");
    // var myExp = "Saloni Buddhadeo";
    
    $.getJSON("WCA_Results_Person_India.json", function(data){
        var output = '<ol class="searchResults">';
    
        $.each(data, function (key, val) {
            // bool boolRe = val.personName.includes(searchField);
            // console.log(val.personName.includes(searchField));
            if (val.personName.includes("Saloni")){
                output += '<p><li>'+
                            val.personName +' participated in ' +val.eventId + 
                            ' with an average speed '+(val.average/60).toFixed(3)
                        +' secs</li></p>';
            }
        });
        output += '</ol>';
        $('.orderedList').html(output);
    });
});

// $(".orderedList").load(APIendpoint[2]);