function discord_message(product, thumbnail, channel = "general") {
	
	    if(channel == "realizado"){
			var url_webhooks = "https://discord.com/api/webhooks/862043639298129980/MeO7xzzEcy1cEoXkWKN86-rZDur4N7hQH2pnRwjFMnywchXU_z8IoydZjJMsAEc5rLMk";
		}else if (channel == "inconveniente"){
			var url_webhooks = "https://discord.com/api/webhooks/862110251401871390/mnlntVrn_ptT0DmLSJm-X6IXiMv-11eAHORu-BegP4GsCpUPgsiupk4EgnEjUYqq_rF6";
		}else{
			var url_webhooks = "https://discord.com/api/webhooks/854425522557157407/tf6pVQQI6vfC9txQl4QnpGLfzsLOIYYysM0sPvLV-RChJUTuS58el-o9GgrxCobHuFK2";
		}

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url_webhooks, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
        "embeds":[
                    {
                    "title": product,
                     "color": 1127128,
                     "thumbnail":{
                     	"url": thumbnail,
                     }
                   
                    }
                ]
        }));
  }
   

chrome.extension.sendMessage({action: "isRecordingOn"}, function(response) {
	if(response.action == 'true'){
	
		var specifymybeescodeselect = response.specifymybeescodeselect;
		var mybeescode = response.mybeescode;
		var quantity = response.quantity;
		var	soundAlert = response.soundAlert;
		var autocheckoutselect = response.autocheckoutselect;
		var Url = response.Url;		
   				
		$(function(){
            try{
				keywords= keywords.trim();
				keywords=keywords.split(",");
			}catch(err){}
			try{
				keywords2= keywords2.trim();
				keywords2=keywords2.split(",");
			}catch(err){}
			try{
				low=Number(low);		
				high=Number(high);
			}catch(err){}
           v0 = setInterval(function(){


			$("#onetrust-consent-sdk").remove();
			  
			if($(".bees-modal-close").is(":visible")){
				$(".bees-modal-close")[0].click();
			}

			
			if(specifymybeescodeselect == "yes"){	

				if($("span:contains('Cambiar de Cuenta')").is(":visible")){

				    if(!$(".bees-dropdown-toggle").is(":visible")){
			            $(".bees-account-switcher-toggle-title")[0].click();
				    }
										       
				    if($(".bees-dropdown-toggle").is(":visible")){
    
				    	if($("span:contains('"+ mybeescode +"')").is(":visible")){
    
				    	    var currentcode = document.getElementsByClassName("bees-account-switcher-list-link active")[0].getElementsByClassName("bees-account-switcher-list-link-content")[0].getElementsByTagName('SPAN')[0].innerHTML;
        
				    	    if(!currentcode == mybeescode){
				    	    	$(".bees-account-switcher-toggle-title")[0].click();							
				    	    }else{
				    	    	$("span:contains('"+ mybeescode +"')")[0].click();
				    	    }
				        }													
				    }		
	            }   
		   }
    

			//material-icons bees-modal-close

				if($(".bees-product-detail").is(":visible")){				
                         
							var qty_bees = document.getElementsByClassName("requested-qty")[0].value;											

							if(qty_bees != quantity || !qty_bees > quantity){
                              
								for(i=0;i<=quantity-qty_bees-1;i++){
							    	document.getElementsByClassName("qty-button-plus")[0].click();    
							    }	

								document.getElementsByClassName("bees-add-to-cart")[0].click();
                             							                  
							}

							/*var qty_res = quantity;

							if(qty_bees > 0){						
								var qty_res = parseInt(quantity) -  parseInt(qty_bees);								
							}
							
							if(qty_res > 0){
							    for(i=0;i<=qty_res-1;i++){
							    	document.getElementsByClassName("qty button-qty-plus")[0].click();    
							    }													
							    document.getElementsByClassName("action-button")[0].click();
						    }else{
							
								if($(".price:contains('RD$0.00')").is(":visible") || $(".price")[0].innerText == null || $(".price")[0].innerText == empty){
								    Fix1("minus");
									setTimeout(function(){Fix1("plus")}, 7000);
								                             									
								   
								}

								

							}*/		
						clearInterval(v0);				
				}else{

					//<h1>Error 503 backend read error</h1>
					
			        if($("body:contains('Internal Server Error')").is(":visible") || $("p:contains('backend read error')").is(":visible") || $("h1:contains('Error 503 backend read error')").is(":visible") || $("h2:contains('Pagina no encontrada')").is(":visible") || $(".bees-loader").is(":visible") || $("h1:contains('502 Bad Gateway')").is(":visible") || $("span:contains('503 - Servicio no disponible')").is(":visible") || $("p:contains('Varnish cache server')").is(":visible") || $("h2:contains('503 - Servicio no disponible')").is(":visible") || $("h1:contains('400 Bad Request')").is(":visible")){

				        location.reload(true);	

				        setTimeout(function(){$(location).attr('href',Url)}, 7000);
			        }
					
				}
			}, 10000);// 55000Bees dominicana es un poco lenta por lo tanto necesita mas de 10000 miles segundo para evitar un flood y hacer dano.
						

			v2 = setInterval(function(){
			
				clearInterval(v2);

				if($(".bees-product-detail").is(":visible")){	

					var prg = document.getElementsByClassName("bees-product-detail-title")[0].innerText;

					if(prg == null || prg == ""){

						$(location).attr('href',Url);

					}

					sessionStorage.setItem('prg', prg);
					
					var thumbnail = document.getElementsByClassName("bees-product-image")[0].src;

					if(thumbnail == null || thumbnail == ""){

						$(location).attr('href',Url);

					}

					sessionStorage.setItem('thumbnail', thumbnail);
									
					//document.getElementsByClassName("action showcart")[0].click();
					$("span:contains('Mi Camión')").click();

				}
									
											
			},65000);	
						
			v21 = setInterval(function(){

				clearInterval(v21);
				
				if($("h3:contains('Mi Camión')").is(":visible") && $("#cart_page_title_divider").is(":visible") ) {		
					
					
				   												
						var prgSession = sessionStorage.getItem('prg');

						/*if(prgSession == null || prgSession == ""){

							$(location).attr('href',Url);
						}	*/
						
						var product_title = "a:contains('%product-title%')";
																
						if($(product_title.replace("%product-title%",prgSession)).is(":visible")) {

							//document.getElementsByClassName("close-modal")[0].click();
							

					        discord_message(prgSession + " -> disponibles", sessionStorage.getItem('thumbnail'));

							if(soundAlert=="yes"){
								chrome.extension.sendMessage({action: "alert"}, function(response) {});
					        }
								
							if(autocheckoutselect =="yes"){

								if($("a:contains('Finalizar Compra')").is(":visible")){
								
							      
									$("a:contains('Finalizar Compra')")[0].click();
								}else{
                                    discord_message(":bangbang:  Pedido parado en el carrito de " +prgSession, "", "inconveniente");
									location.reload(true);

								}
							}
						}else{	
							$(location).attr('href',Url);
						}
                   
			    }else if($("span:contains('Su camión está vacío, agregue uno o más productos')").is(":visible")){
					$(location).attr('href',Url);

				}
				
			},25000);	
			v22 = setInterval(function(){	

				clearInterval(v22);
			
				var product_title = "a:contains('%product-title%')";

				if($(product_title.replace("%product-title%",sessionStorage.getItem('prg'))).is(":visible")) {															
					setTimeout(function(){   $("a:contains('Confirmar Pedido')")[0].click()   }, 7000);				
				}
				
			},60000);	
			v23 = setInterval(function(){	

			    clearInterval(v23);
              
				if($("h1:contains('¡Listo!')").is(":visible") && $("span:contains('¡Gracias! Tu compra ')").is(":visible")) {

					var prgSession = sessionStorage.getItem('prg');	

					if(prgSession == null || prgSession == ""){

						$(location).attr('href',Url);
					}

					//var shipping_date = document.getElementsByClassName('bees-date-display')[0].innerText;
					var shipping_total = document.getElementsByClassName("bees-number-display")[0].innerText;
					var shipping_time =  document.getElementsByClassName("bees-text")[0].innerText;

					discord_message(":white_check_mark: Pedido Realizado de " + prgSession + ": " + shipping_time + ", Monto: " + shipping_total , "", "realizado");

					//$(location).attr('href',window.location.protocol + "//"+ window.location.host);

			

					//$(location).attr('href',Url);
					//discord_message(":arrows_counterclockwise: " + prgSession +  " Recargado para ordenar nuevamente.");

				}
			},20000);        
		});
	}
});

