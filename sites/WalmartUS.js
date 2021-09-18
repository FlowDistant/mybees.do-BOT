function keysFoundAnd(keywords, data)
{
	for(i=0; i<keywords.length; i++)
	{
		if(!data.match(new RegExp(keywords[i].replace(/\s{2,}/g, ' '), "i")))
		{
			return false;
		}
	}
	return true;
}
function keysFoundOr(keywords, data)
{
	for(i=0; i<keywords.length; i++)
	{
		if(data.match(new RegExp(keywords[i].replace(/\s{2,}/g, ' '), "i")))
		{
			return true;
		}
	}
	return false;
}
function findNegativeKeys(keywords2,data)
{
	if(keywords2[0]=="")
	{
	return false
	}
	for(i=0; i<keywords2.length; i++)
	{
		if(data.match(new RegExp(keywords2[i], "i")))
		{
			return true;
		}
	}
	return false;
}
function getRndRefreshRange(min, max) {

	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

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
		var	size = response.shoesSize;
		var quantity = response.quantity;
		var	KeywordsType = response.KeywordsType;
		var	soundAlert = response.soundAlert;
		var	size2 = response.size2;
		var	low = response.low;
		var	high = response.high;
		var	keywords = response.keywords;
		var	keywords2 = response.keywords2;
        var timeoutMin = Number(response.timeOut);    
        var timeoutMax = Number(response.timeoutMax);   
		var key=response.ckey;
		var captchaSolver=response.captchaSolver;
        var autocheckoutselect = response.autocheckoutselect;
        var checkoutType = response.checkoutType;
        var checkoutDelay = response.checkoutDelay;       
		var username2 = response.username2;
		var password2 = response.password2;		
		var AccountBilling = response.AccountBilling;
        var billCountry = response.billCountry;
        var storeFirstName = response.storeFirstName;
        var storeLastName = response.storeLastName;
        var storeEmail = response.storeEmail;
        var storePhone = response.storePhone;
		var billFirstName = response.billFirstName;
        var billLastName = response.billLastName;
        var billStreetAddress1 = response.billStreetAddress1;
        var billStreetAddress2 = response.billStreetAddress2;
        var billZipCode = response.billZipCode;
        var billCity = response.billCity;
        var billState = response.billState;
        var billPhone = response.billPhone;
        var billEmail = response.billEmail; 
        var billStateKythnyc = response.billStateKythnyc;
        var shipStateKythnyc = response.newStateKythnyc; 
        var shippingAddress = response.shippingAddress;
        var shipCountry = response.newCountry;
        var shipFirstName = response.newFirstName;
        var shipLastName = response.newLastName;
        var shipStreetAddress1 = response.newStreetAddress1;
        var shipStreetAddress2 = response.newStreetAddress2;
        var shipZipCode = response.newZipCode;
        var shipCity = response.newCity;
        var shipState = response.newState;
        var shipPhone = response.newPhone;
        var shipEmail = response.newEmail;        
        var paymentMethod = response.paymentMethod;
        var paymentCard = response.paymentCard;
        var cardNumber = response.cardNumber;
        var expireMonth = response.expireMonth;
        var expireYear = response.expireYear;
        var cardCVV = response.cardCVV;
        var giftCard = response.giftCard;
        var giftCardNumber = response.giftCardNumber;
        var giftCardPassword = response.giftCardPassword;
        var paypalEmail = response.paypalEmail;
        var paypalPassword = response.paypalPassword;
        var cardHolderName = response.cardHolderName;
		var billStateShort = response.billStateShort;
		var shipStateShort = response.newStateShort;
		var Url = response.Url;		
        expireYear = "20".concat(expireYear); 



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

