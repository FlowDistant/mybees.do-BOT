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
	
		var quantity = response.quantity;
		var	soundAlert = response.soundAlert;
		var autocheckoutselect = response.autocheckoutselect;
		var Url = response.Url;		
     
		var  c0000xxxx = ".bees-product-detail"; // 
		var  c0001xxxx = "requested-qty"; // classinputcount
		var  c0002xxxx = "bees-add-to-cart"; //  classbuttonaddcart
		var  c0003xxxx = "qty-button-plus"; // class buttonplus
		var  c0004xxxx = "qty-button-minus"; // class buttonminus
		var  c0005xxxx = "bees-product-detail-title"; // class bees-product-detail-title
		var  c0006xxxx = "bees-product-image"; // class bees-product-image
		var  c0007xxxx = "span:contains('Mi Camión')"; // go to cart
		var  c000icxxx = "h3:contains('Mi Camión')"; // identificar si esta en pag cart
		var  c001icxxx = "#cart_page_title_divider"; // identificar si esta en pag cart
		var  c002icpxx = "a:contains('%product-title%')"; // identificar producto si esta en carro
		var  c003icpxx = "a:contains('Finalizar Compra')"; // boton de finalizar compra
		var  c004icpxx = "span:contains('Su camión está vacío, agregue uno o más productos')"; // comprobar si el carro esta vacio
		var  c001iccxx = "a:contains('%product-title%')"; // comprobar si el producto esta en confirmacion
		var  c002iccxx = "a:contains('Confirmar Pedido')"; // boton de finalizar compra confirmacion
		var  c000icrxx = "h1:contains('¡Listo!')"; // confirmacion de pedido ready I
		var  c001icrxx = "span:contains('¡Gracias! Tu compra ')"; // confirmacion de pedido ready II
		var  c002icrxx = "bees-number-display"; // confirmacion total
		var  c003icrxx = "bees-text"; // confirmacion time

        var  c503error = "span:contains('503 - Servicio no disponible')"; // confirmacion time


		
			
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
			//material-icons bees-modal-close

				if($(c0000xxxx).is(":visible")){				
                         
							var qty_bees = document.getElementsByClassName(c0001xxxx)[0].value;											

							if(qty_bees != quantity || qty_bees > quantity){
                              
								for(i=0;i<=quantity-1;i++){
							    	document.getElementsByClassName(c0003xxxx)[0].click();    
							    }	

								document.getElementsByClassName(c0002xxxx)[0].click();
                             							                  
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
					
			        if($(c503error).is(":visible") || $("p:contains('Varnish cache server')").is(":visible") || $("h2:contains('503 - Servicio no disponible')").is(":visible") || $("h1:contains('400 Bad Request')").is(":visible")){

				        location.reload(true);	

				        setTimeout(function(){$(location).attr('href',Url)}, 7000);
			        }
					
				}
			}, 10000);// 55000Bees dominicana es un poco lenta por lo tanto necesita mas de 10000 miles segundo para evitar un flood y hacer dano.
						

			v2 = setInterval(function(){
			
				clearInterval(v2);

				if($(".bees-product-detail").is(":visible")){	

					var prg = document.getElementsByClassName(c0005xxxx)[0].innerText;

					if(prg == null || prg == ""){

						$(location).attr('href',Url);

					}

					sessionStorage.setItem('prg', prg);
					
					var thumbnail = document.getElementsByClassName(c0006xxxx)[0].src;

					if(thumbnail == null || thumbnail == ""){

						$(location).attr('href',Url);

					}

					sessionStorage.setItem('thumbnail', thumbnail);
									
					//document.getElementsByClassName("action showcart")[0].click();
					$(c0007xxxx).click();

				}
									
											
			},65000);	
						
			v21 = setInterval(function(){

				clearInterval(v21);
				
				if($(c000icxxx).is(":visible") && $(c001icxxx).is(":visible") ) {		
					
					
				   												
						var prgSession = sessionStorage.getItem('prg');

						/*if(prgSession == null || prgSession == ""){

							$(location).attr('href',Url);
						}	*/
						
																
						if($(c002icpxx.replace("%product-title%",prgSession)).is(":visible")) {

							//document.getElementsByClassName("close-modal")[0].click();
							

					        discord_message(prgSession + " -> disponibles", sessionStorage.getItem('thumbnail'));

							if(soundAlert=="yes"){
								chrome.extension.sendMessage({action: "alert"}, function(response) {});
					        }
								
							if(autocheckoutselect =="yes"){

								if($(c003icpxx).is(":visible")){
								
							      
									$(c003icpxx)[0].click();
								}else{
                                    discord_message(":bangbang:  Pedido parado en el carrito de " +prgSession, "", "inconveniente");
									location.reload(true);

								}
							}
						}else{	
							$(location).attr('href',Url);
						}
                   
			    }else if($(c004icpxx).is(":visible")){
					$(location).attr('href',Url);

				}
				
			},25000);	
			v22 = setInterval(function(){	

				clearInterval(v22);
			

				if($(c001iccxx.replace("%product-title%",sessionStorage.getItem('prg'))).is(":visible")) {
									
							
					setTimeout(function(){   $(c002iccxx)[0].click()   }, 7000);
					
				}
				
			},60000);	
			v23 = setInterval(function(){	

			    clearInterval(v23);
              
				if($(c000icrxx).is(":visible") && $(c001icrxx).is(":visible")) {

					var prgSession = sessionStorage.getItem('prg');	

					if(prgSession == null || prgSession == ""){

						$(location).attr('href',Url);
					}

					//var shipping_date = document.getElementsByClassName('bees-date-display')[0].innerText;
					var shipping_total = document.getElementsByClassName(c002icrxx)[0].innerText;
					var shipping_time =  document.getElementsByClassName(c003icrxx)[0].innerText;

					discord_message(":white_check_mark: Pedido Realizado de " + prgSession + ": " + shipping_time + ", Monto: " + shipping_total , "", "realizado");

					//$(location).attr('href',window.location.protocol + "//"+ window.location.host);

			

					//$(location).attr('href',Url);
					//discord_message(":arrows_counterclockwise: " + prgSession +  " Recargado para ordenar nuevamente.");

				}
			},20000);        
		});
	}
});

