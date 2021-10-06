function save()
{


	localStorage['quantity']=$("#quantity").val();

	localStorage['soundAlert']=$("#soundAlert").val();
	localStorage['site'] = $("#site").val();
	localStorage['url'] = $("#url").val();
	localStorage['purl'] = $("#purl").val();
  
    localStorage['autocheckoutselect'] = $("#autocheckoutselect").val();

	localStorage['specifymybeescodeselect'] = $("#specifymybeescodeselect").val();
	localStorage['mybeescode'] = $("#mybeescode").val();         
   
    	
}

$('#save').live('click', function(){
    save();	
	alert("Data Saved Successfully");
});
$('#start').live('click', function(){	
    save();
	
		chrome.extension.sendMessage({action: "startListening"}, function(response) {
			$(".mainContainer").html('<div class="buttonContainer"><a href="#" id="stop" class="stop myButton">Stop</a></div>');
			window.close();
		});
			
});
$('#stop').live('click', function(){ 
	chrome.extension.sendMessage({action: "stopListening"}, function(response) {
		location.reload();
    });
});

localStorage['app']="ssense";


$(function(){

	
	if (localStorage.getItem("soundAlert") === null) {
		$("#soundAlert").val();
	}else{
		$("#soundAlert").val(localStorage['soundAlert']);
	}

	if (localStorage.getItem("url") === null) {
		$("#url").val("");
	}else{
		$("#url").val(localStorage['url']);
	}

	
	if (localStorage.getItem("quantity") === null){
		$("#quantity").val(1);
	}else{
		$("#quantity").val(localStorage['quantity']);
	}	
	
    
	if(localStorage.getItem("autocheckoutselect") === null){
		$("#autocheckoutselect").val("no");
	}else{
		$("#autocheckoutselect").val(localStorage['autocheckoutselect']);
	}
    

	if(localStorage.getItem("specifymybeescodeselect") === null){
		$("#specifymybeescodeselect").val("no");
	}else{
		$("#specifymybeescodeselect").val(localStorage['specifymybeescodeselect']);		
	}
      
    
    $("#specifymybeescodeselect").click(function() {
        if($("#specifymybeescodeselect").val()==="yes"){
            $("#mybees_code").show();
        }else{
			$("#mybees_code").hide();
		}
    }); 

	if($("#specifymybeescodeselect").val()==="yes"){
		$("#mybees_code").show();
	}else{
		$("#mybees_code").hide();
	}
	
	if (localStorage.getItem("mybeescode") === null) {
		$("#mybeescode").val("");
	}else{
		$("#mybeescode").val(localStorage['mybeescode']);
	}

	
   		
	if(localStorage['recording'] == 'true'){
		$(".mainContainer").html('<div align="center"><button href="#" id="stop" value="STOP"class="start myButton btn btn-large" style="align:center;"><span align="center"><h4> STOP </h4></span></button></div>');
	}	
});






