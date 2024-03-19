$(document).ready(function(){

	$("h4").on("click",function(){
    $(this).addClass("active");
    $("h4").not(this).removeClass("active");

    if($(this).is("#corelink")){
    	$("#marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #security, #transport, #decor, #production,#members1").css("display","none");
    	$("#core").css("display","block");
    }

    if($(this).is("#marketinglink")){
    	$("#core, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #security, #transport, #decor, #production,#members1").css("display", "none");
    	$("#marketing").css("display","block");
    }

    if($(this).is("#sponsorshiplink")){
    	$("#core, #marketing, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #security, #transport, #decor, #production,#members1").css("display", "none");
    	$("#sponsorship").css("display","block");
    }

    if($(this).is("#prlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #security, #transport, #decor, #production,#members1").css("display", "none");
    	$("#pr").css("display","block");
    }

    if($(this).is("#websitelink")) {
        $("#core, #marketing, #sponsorship, #content, #design, #pr, #cultural, #technical, #sports, #finance, #hospitality, #accom, #security, #transport, #decor, #production,#members1").css("display", "none");
        $("#website").css("display", "block");
    }

    if($(this).is("#contentlink")){
    	$("#core, #marketing, #sponsorship, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #security, #transport, #decor, #production,#members1").css("display", "none");
    	$("#content").css("display","block");
    }

    if($(this).is("#designlink")){
    	$("#core, #marketing, #sponsorship, #content, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #security, #transport, #decor, #production,#members1").css("display", "none");
    	$("#design").css("display","block");
    }

    if($(this).is("#culturallink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #technical, #sports, #finance, #hospitality, #accom, #security, #transport, #decor, #production,#members1").css("display", "none");
    	$("#cultural").css("display","block");
    }

    if($(this).is("#technicallink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #sports, #finance, #hospitality, #accom, #security, #transport, #decor, #production,#members1").css("display", "none");
    	$("#technical").css("display","block");
    }

    if($(this).is("#sportslink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #finance, #hospitality, #accom, #security, #transport, #decor, #production,#members1").css("display", "none");
    	$("#sports").css("display","block");
    }

    if($(this).is("#financelink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #hospitality, #accom, #security, #transport, #decor, #production,#members1").css("display","none");
    	$("#finance").css("display","block");
    }

    if($(this).is("#hospitalitylink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #accom, #security, #transport, #decor, #production,#members1").css("display","none");
    	$("#hospitality").css("display","block");
    }

    if($(this).is("#accomlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #security, #transport, #decor, #production,#members1").css("display","none");
    	$("#accom").css("display","block");
    }

    if($(this).is("#securitylink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #decor, #production,#members1").css("display", "none");
    	$("#security").css("display","block");
    }

    if($(this).is("#transportlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #security, #decor, #production,#members1").css("display", "none");
    	$("#transport").css("display","block");
    }

    if($(this).is("#decorlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production,#members1").css("display", "none");
    	$("#decor").css("display","block");
    }

    if($(this).is("#productionlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #decor, #security,#members1").css("display", "none");
    	$("#production").css("display","block");
    }
    if($(this).is("#members1link")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production").css("display", "none");
    	$("#members1").css("display","block");
    }
     /*       if($(this).is("#decorlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production").css("display", "none");
    	$("#decor").css("display","block");
    }
            if($(this).is("#decorlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production").css("display", "none");
    	$("#decor").css("display","block");
    }
            if($(this).is("#decorlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production").css("display", "none");
    	$("#decor").css("display","block");
    }
            if($(this).is("#decorlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production").css("display", "none");
    	$("#decor").css("display","block");
    }
            if($(this).is("#decorlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production").css("display", "none");
    	$("#decor").css("display","block");
    }
            if($(this).is("#decorlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production").css("display", "none");
    	$("#decor").css("display","block");
    }
            if($(this).is("#decorlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production").css("display", "none");
    	$("#decor").css("display","block");
    }
            if($(this).is("#decorlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production").css("display", "none");
    	$("#decor").css("display","block");
    }
            if($(this).is("#decorlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production").css("display", "none");
    	$("#decor").css("display","block");
    }
            if($(this).is("#decorlink")){
    	$("#core, #marketing, #sponsorship, #content, #design, #pr, #website, #cultural, #technical, #sports, #finance, #hospitality, #accom, #transport, #security, #production").css("display", "none");
    	$("#decor").css("display","block");
    }*/
    });
});