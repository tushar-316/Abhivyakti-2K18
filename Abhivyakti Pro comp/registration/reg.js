var euphonycell = [
    {display: "Surtaaj", value: "Surtaaj" },
    {display: "Raag", value: "Raag" },
    {display: "Blues", value: "Blues" },
    {display: "Saamanjasya", value: "Saamanjasya" }];

var choreographycell = [
    {display: "UNESCORTED", value: "UNESCORTED" },
    {display: "SQUADS", value: "SQUADS" }];

var draculacell = [
    {display: "Mime (min=2 & max=5)", value: "Mime" },
    {display: "Ad-Mad (min=3 & max=6)", value: "Ad-Mad" }
    ];


var informalcell = [
    {display: "ABHIVYAKTI PREMIER LEAGUE (Faculty)", value: "ABHIVYAKTI PREMIER LEAGUE (Faculty)" },
    {display: "ABHIVYAKTI PREMIER LEAGUE (Student)", value: "ABHIVYAKTI PREMIER LEAGUE (Student)" },
    {display: "COUPLE RACE", value: "COUPLE RACE" },
    {display: "TUG OF WAR", value: "TUG OF WAR" },
    {display: "TREASURE HUNT", value: "TREASURE HUNT" },
    {display: "LEMON SPOON RACE", value: "LEMON SPOON RACE" },
    {display: "HANKY RUN", value: "HANKY RUN" },

    {display: "SACK RACE", value: "SACK RACE" },
    {display: "HIT THE CAN", value: "HIT THE CAN" },
    {display: "BALL IN BETWEEN", value: "BALL IN BETWEEN" },
    {display: "DART GAME", value: "DART GAME" },
    {display: "KAI PO CHE", value: "KAI PO CHE" },
    {display: "FACULTY CHESS", value: "FACUKTY CHESS" },
    {display: "GULLY CRICKET", value: "GULLY CRICKET" },

    {display: "BANANA RACE", value: "BANANA RACE" }];

var handicraftcell = [
    {display: "Icecream Stick Tricks", value: "Icecream Stick Tricks" },
    {display: "Pot Decoration", value: "Pot Decoration" },
    {display: "Card Making", value: "Card Making" },
    {display: "Nail and Thread", value: "Nail and Thread" },
    {display: "Mehendi Artistry", value: "Mehendi Artistry" },
    {display: "Power Couple", value: "Power Couple" }];

var mediacell = [
    {display: "Mascot", value: "Mascot" },
    {display: "RJ Hunt", value: "RJ Hunt" },
    {display: "Flex", value: "Flex" }];

var photocell = [
    {display: "Candle Race", value: "Candle Race" },
    {display: "Selfie Contest", value: "Selfie Contest" },
    {display: "Mobile Grapher Competition", value: "Mobile Grapher Competition" },
    {display: "Video Making", values: "Video Making"},
    {display: "Incredible Indian", values: "Incredible Indian"}];


var literaticell = [
    {display: "Word Combat(Eng. Debate)", value: "Word Combat(Eng. Debate)" },
    {display: "The Head Start(Eng. G.D)", value: "The Head Start(Eng. G.D)" },
    {display: "Kataksha(Hindi Debate)", value: "Kataksha(Hindi Debate)" },
    {display: "The Head Start", value: "The Head Start" },
    {display: "Name in the bowl", value: "Name in the bowl" },
    {display: "Pie the word", value: "Pie the word" },
    {display: "PPD", value: "PPD" },
    {display: "Unrolling Couplets", value: "Unrolling Couplets" },
    {display: "The Toon's Eye", value: "The Toon's Eye" },
    {display: "Graffiti", value: "Graffiti" },
    {display: "Viewson", value: "Viewson" },
    {display: "Qriosity Quiz", value: "Qriosity Quiz" },
    {display: "Samadhan", value: "Samadhan" },
    {display: "Spell Bee", value: "Spell Bee" },
    {display: "Just a Minute(JAM)", value: "Just a Minute(JAM)" },
    {display: "Dumbcharades", value: "Dumbcharades" }];

var newspapercell = [
    {display: "T-Shirt Painting", value: "T-Shirt Painting" },
    {display: "Tattoo Making", value: "Tattoo Making" },
    {display: "Musical Chair", value: "Musical Chair" },
    {display: "Tambola", value: "Tambola" },
    {display: "Challenge Your Talent", value: "Challenge Your Talent" },
    {display: "Proud to be me", value: "Tambola" },
    {display: "Giant Lude", value: "Giant Lude" },
    {display: "Beg Burrow Buy", value: "Beg Burrow Buy" },
    {display: "Dog and the bones", value: "Dog and the bones" },
    {display: "Ring Throw", value: "Ring Throw" },

    {display: "Kabaddi", value: "Kabaddi" }];

$("#parent_selection").change(function() {
    var parentone = $(this).val();
    switch(parentone){
        case 'Euphony':
             listone(euphonycell);
            break;
        case 'Choreography':
             listone(choreographycell);
            break;
        case 'Dramatics':
             listone(draculacell);
            break;
        case 'Informal':
             listone(informalcell);
            break;
       
        case 'Handicraft':
             listone(handicraftcell);
            break;
        case 'Media':
             listone(mediacell);
            break;
        case 'Photography':
             listone(photocell);
            break;
        case 'Literaty':
             listone(literaticell);
            break;
        case 'Newspaper':
             listone(newspapercell);
            break;
        default:
            $("#child_selection").html('');
            break;
           }
});
function listone(array_list)
{
  $("#child_selection").html("");
  $(array_list).each(function (i) { 
      $("#child_selection").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
  });
}

var btechyear = [
    {display: " Ist Year", value: " Ist Year" },
    {display: " IInd Year", value: " IInd Year" },
    {display: " IIIrd Year", value: " IIIrd Year" },
    {display: "IVth Year", value: "IVth Year" }];

var srdtyear = [
    {display: " Ist Year", value: " Ist Year" },
    {display: " IInd Year", value: " IInd Year" },
    {display: " IIIrd Year", value: " IIIrd Year" }];

var myear = [
    {display: " Ist Year", value: " Ist Year" },
    {display: " IInd Year", value: " IInd Year" }];

$("#parent_branch").change(function() {
    var parenttwo = $(this).val();
    switch(parenttwo){
        case 'Computer Science':
             listtwo(btechyear);
            break;
        case 'Information Technology':
             listtwo(btechyear);
            break;
        case 'Electronics Communication':
             listtwo(btechyear);
            break;
        case 'Machanical Engineering':
             listtwo(btechyear);
            break;
        case 'Electrical Engineering':
             listtwo(btechyear);
            break;
        case 'Electronics Instrumentation':
             listtwo(btechyear);
            break;
        case 'Civil Engineering':
             listtwo(btechyear);
            break;
        case 'Electrical Electronics':
             listtwo(btechyear);
            break;
        case 'BBA':
             listtwo(srdtyear);
            break;
        case 'BCA':
             listtwo(srdtyear);
            break;
        case 'MBA':
             listtwo(myear);
            break;
        case 'MCA':
             listtwo(myear);
            break;
        default: //default child option is blank
            $("#child_year").html('');
            break;
           }
});
function listtwo(array_list)
{
    $("#child_year").html(""); //reset child options
    $(array_list).each(function (i) { //populate child options
        $("#child_year").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
    });
}