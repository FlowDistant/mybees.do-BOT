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
  
  function Fix1(action = "plus"){
	var _0x49ed=['qty\x20button-qty-minus','76997WmeBdR','3Xhfeqs','plus','13JiMZnd','900085USZXjx','qty\x20button-qty-plus','34iOYTfI','click','getElementsByClassName','19MVJADC','1TWIXSd','1299563KnPulN','36946uURBlQ','433369fQPfEF','action-button','438695esmIFG','1183942udZxoz'];var _0x46cd3b=_0x3de0;function _0x3de0(_0x59f491,_0x5b4e96){_0x59f491=_0x59f491-0xe4;var _0x49ed0d=_0x49ed[_0x59f491];return _0x49ed0d;}(function(_0x77994b,_0x765586){var _0x300094=_0x3de0;while(!![]){try{var _0x54846f=-parseInt(_0x300094(0xf4))*parseInt(_0x300094(0xe8))+-parseInt(_0x300094(0xf2))+-parseInt(_0x300094(0xef))*-parseInt(_0x300094(0xeb))+-parseInt(_0x300094(0xe7))+parseInt(_0x300094(0xec))*-parseInt(_0x300094(0xe6))+parseInt(_0x300094(0xe5))*-parseInt(_0x300094(0xee))+-parseInt(_0x300094(0xe9))*-parseInt(_0x300094(0xf1));if(_0x54846f===_0x765586)break;else _0x77994b['push'](_0x77994b['shift']());}catch(_0x13e842){_0x77994b['push'](_0x77994b['shift']());}}}(_0x49ed,0xced51));action==_0x46cd3b(0xf0)?(document[_0x46cd3b(0xe4)](_0x46cd3b(0xf3))[0x0][_0x46cd3b(0xf5)](),document[_0x46cd3b(0xe4)](_0x46cd3b(0xea))[0x0][_0x46cd3b(0xf5)]()):(document[_0x46cd3b(0xe4)](_0x46cd3b(0xed))[0x0][_0x46cd3b(0xf5)](),document['getElementsByClassName'](_0x46cd3b(0xea))[0x0]['click']());
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
					if(soundAlert=="yes"){
								chrome.extension.sendMessage({action: "alert"}, function(response) {});
					}
                         
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
			v24 = setInterval(function(){	
				if($(".prod-PriceSection:contains('We\'re having technical difficulties and are looking into the problem now.')").is(":visible")) {
					clearInterval(v24);
					setTimeout(function(){
						location.reload(true);
					},getRndRefreshRange(timeoutMin, timeoutMax)); 						
				}
			},10);	
			v25 = setInterval(function(){	
				if($(".fulfillment-text:contains('Price for in-store purchase only')").is(":visible") && !$(".prod-product-cta-add-to-cart").is(":visible")) {
					clearInterval(v25);
					setTimeout(function(){
						location.reload(true);
					},getRndRefreshRange(timeoutMin, timeoutMax)); 						
				}
			},10);	
			v26 = setInterval(function(){	
				if($(".blitz-container-border").is(":visible") && !$(".prod-product-cta-add-to-cart").is(":visible")) {
					clearInterval(v26);
					setTimeout(function(){
						location.reload(true);
					},getRndRefreshRange(timeoutMin, timeoutMax)); 						
				}
			},10);		
			v3 = setInterval(function(){	
				if($("span:contains('Preorder available')").is(":visible") && $("span:contains('Price for in-store purchase only')").is(":visible")) {
					clearInterval(v3);
					setTimeout(function(){
						location.reload(true);
					},getRndRefreshRange(timeoutMin, timeoutMax));  							
				}
			},10);	
            if(autocheckoutselect==="yes"){								
				v4 = setInterval(function() {
					if($(".cart-pos-proceed-to-checkout").is(":visible")) { 
						try{
							clearInterval(v4);	
							if(soundAlert=="yes"){
								chrome.extension.sendMessage({action: "alert"}, function(response) {});
							}											
							document.getElementsByClassName("cart-pos-proceed-to-checkout")[0].getElementsByTagName("button")[0].click();
						}catch (err) { }				
					}
				},10);				
                v5 = setInterval(function(){ 
                    try{                    
                        if ($(".SignUp-container").is(":visible"))
                        {
							document.getElementsByClassName("SignUp-container")[0].getElementsByTagName("button")[0].click();
							clearInterval(v5);
                        }                               
                    }catch(err){}
                },10);
                v6 = setInterval(function(){ 
                    try{                    
                        if ($(".CXO-InlineShippingOptions-options").is(":visible"))
                        {
							$(".cxo-continue-btn").click();
							clearInterval(v6);
                        }                               
                    }catch(err){}
                },10);	  
				v7 = setInterval(function(){                                     
                    if ($("[aria-label='Continue to Delivery Address']").is(":visible"))
                        {
						 try{ 
							setTimeout(function(){
								try{document.getElementsByClassName("button cxo-continue-btn button--primary")[0].click();}catch(er){}
								clearInterval(v7);
							},20);
						 }catch(err){}							
                    }                               
                   
                },10);
				
                v88 = setInterval(function(){ 
                    try{  
                        if($("#email").is(":visible")) {																		
							$("#firstName").focus();
							$("#firstName").val(shipFirstName);
							document.getElementById("firstName").dispatchEvent(new Event('change', { bubbles: true }));
							$("#lastName").val(shipLastName);
							document.getElementById("lastName").dispatchEvent(new Event('input', { bubbles: true }));
							$("#phone").val(shipPhone);
							document.getElementById("phone").dispatchEvent(new Event('input', { bubbles: true }));
							
							try{$("#email").val(shipEmail);
							document.getElementById("email").dispatchEvent(new Event('input', { bubbles: true }));}catch(err){}
							$("#addressLineOne").val(shipStreetAddress1);document.getElementById("addressLineOne").dispatchEvent(new Event('input', { bubbles: true }));
							$("#addressLineTwo").val(shipStreetAddress2);document.getElementById("addressLineTwo").dispatchEvent(new Event('input', { bubbles: true }));
							$("#state").removeAttr("initialvalue");
							$("#state").val(shipStateShort);document.getElementById("state").dispatchEvent(new Event('change', { bubbles: true }));
							$("#city").removeAttr("initialvalue");
							$("#city").val(shipCity);document.getElementById("city").dispatchEvent(new Event('input', { bubbles: true }));
							$("#postalCode").removeAttr("initialvalue");
							$("#postalCode").val(shipZipCode);document.getElementById("postalCode").dispatchEvent(new Event('input', { bubbles: true }));
							if($("#firstName").val(shipFirstName)){
								try{document.getElementsByClassName("delivery-identity")[0].getElementsByTagName("button")[1].click();}catch(efgrr){}
							clearInterval(v88);	
							}								
                        }
                    }catch(err){}
                }, 10);		
				v89 = setInterval(function(){                     
					if($("#people\\[0\\]\\.firstName").is(":visible")) {
						try{  
							clearInterval(v89);
							$("#people\\[0\\]\\.firstName").focus();
							$("#people\\[0\\]\\.firstName").val(storeFirstName);
							document.getElementById("people[0].firstName").dispatchEvent(new Event('change', { bubbles: true }));
							$("#people\\[0\\]\\.lastName").val(storeLastName);
							document.getElementById("people[0].lastName").dispatchEvent(new Event('input', { bubbles: true }));
							$("#people\\[0\\]\\.email").val(storeEmail);
							document.getElementById("people[0].email").dispatchEvent(new Event('input', { bubbles: true }));
							
							$("#people\\[0\\]\\.phone").val(storePhone);
							document.getElementById("people[0].phone").dispatchEvent(new Event('input', { bubbles: true }));
							document.getElementsByClassName("auto-submit-pickup-person")[0].click();	
						}catch(err){}
					}                    
                }, 10);					
				v9 = setInterval(function(){ 				
					if ($(".address-validation-buttons").is(":visible")){
						clearInterval(v9);
						try{
							document.getElementsByClassName("address-validation-buttons")[0].getElementsByTagName("button")[0].click();
						}catch(err){}
					}
				},10)
				v99 = setInterval(function(){ 				
					if ($("[data-automation-id='address-book-action-buttons-on-continue']").is(":visible")){
						clearInterval(v99);
						$("[data-automation-id='address-book-action-buttons-on-continue']").click();						
					}
				},10)								
                v10 = setInterval(function(){ 				
					if($("[name='creditCard']").is(":visible") && !$("span:contains('having trouble with your request')").is(":visible")){
						try{
							try{
								$("[name='creditCard']").val(cardNumber);						
								document.getElementById("creditCard").dispatchEvent(new Event('input', { bubbles: true }));
							}catch(hjh){}	
							try{
								$("#cvv").val(cardCVV);
								document.getElementById("cvv").dispatchEvent(new Event('input', { bubbles: true }));
							}catch(hjh){} 
							try{
								var s = document.getElementsByName("month-chooser")[0];							
								for(var i=0;i<s.options.length; i++){								
									if(s.options[i].value==expireMonth){
										s.options[i].selected = true;
										s.dispatchEvent(new Event("change", { bubbles: true }));						
									}							
								}
							}catch(hjh){}	
							try{								
								var s = document.getElementsByName("year-chooser")[0];							
								for(var i=0;i<s.options.length; i++){								
									if(s.options[i].value==expireYear){
										s.options[i].selected = true;
										s.dispatchEvent(new Event("change", { bubbles: true }));						
									}							
								}
							}catch(hjh){}									
							if(!$("[data-automation-id='credit-card-balance-status-message']").is(":visible")){
								if(giftCard=="yes"){
									$("#payment-option-radio-1").click();									  
								}
							}
							if(shippingAddress=="new"){
								document.getElementsByClassName("option-marker-container")[0].getElementsByTagName("span")[0].click();
								clearInterval(v10);
							}else{
								if(document.getElementsByName("creditCard")[0].value==cardNumber){
									setTimeout(function(){ 
										try{document.getElementsByClassName("edit-form-actions")[0].getElementsByTagName("button")[0].click();}catch(hjh){}	
									},500);
									clearInterval(v10);																					
								}
							}									
						}catch(err){}																						
					}
                }, 10);
				
				v1011 = setInterval(function(){ 				
					if($("[data-automation-id='address-form-alert']").is(":visible")){
						$("[data-automation-id='data-automation-id']").click();							
						clearInterval(v1011);						 
					}
				},10);
				/*v1012 = setInterval(function(){ 				
					if($(document.URL=="https://www.walmart.com/checkout/#/payment").is(":visible") && !$("[name='creditCard']").is(":visible") && !$("#cvv-confirm").is(":visible")){
						clearInterval(v1012);
						setTimeout(function(){
							location.reload();
						},refreshInterval)			
					}
				},10);
				*/
				v101 = setInterval(function(){ 				
					if ($("#pin").is(":visible")){
						clearInterval(v101);
						 $("#number").val(giftCardNumber);
					   document.getElementById("number").dispatchEvent(new Event('input', { bubbles: true }));
					   $("#pin").val(giftCardPassword);
						document.getElementById("pin").dispatchEvent(new Event('input', { bubbles: true }));
					   $(".submit-save-gift-card").click();
									
					}
				},10);
				v102 = setInterval(function(){
					//if(shippingAddress=="new"){
						if($("#addressLineOne").is(":visible")){
							try{
								$("#firstName").val(billFirstName);document.getElementById("firstName").dispatchEvent(new Event('input', { bubbles: true }));
								$("#lastName").val(billLastName);document.getElementById("lastName").dispatchEvent(new Event('input', { bubbles: true }));
								$("#addressLineOne").val(billStreetAddress1);document.getElementById("addressLineOne").dispatchEvent(new Event('input', { bubbles: true }));
								$("#addressLineTwo").val(billStreetAddress2);document.getElementById("addressLineTwo").dispatchEvent(new Event('input', { bubbles: true }));
								$("#state").removeAttr("initialvalue");
								$("#state").val(billStateShort);document.getElementById("state").dispatchEvent(new Event('change', { bubbles: true }));
								$("#city").removeAttr("initialvalue");
								$("#city").val(billCity);document.getElementById("city").dispatchEvent(new Event('input', { bubbles: true }));
								$("#postalCode").removeAttr("initialvalue");
								$("#postalCode").val(billZipCode);document.getElementById("postalCode").dispatchEvent(new Event('input', { bubbles: true }));
								clearInterval(v102);
							}catch(err){}
						}
					//}						
				},10);
				v11 = setInterval(function(){ 				
					if($(".fulfillment-opts-continue").is(":visible") && !$("span:contains('Your payment couldn't be authorized. Please verify the card number and try again, or use a different card or payment option.')").is(":visible")){
						try{							
							$("#cvv-confirm").val(cardCVV);
							document.getElementById("cvv-confirm").dispatchEvent(new Event('input', { bubbles: true }));
						}catch(err){}
						document.getElementsByClassName("fulfillment-opts-continue")[0].getElementsByTagName("span")[0].click();
						clearInterval(v11);						
					}
				},10); 
				v110 = setInterval(function(){ 				
					if($("#fulfillment-options-changed").is(":visible")){
						$("[data-automation-id='fulfillment-continue']").click();
						clearInterval(v110);						
					}
				},10);
				v1101 = setInterval(function(){ 				
					if($(".cxo-continue-btn").is(":visible")){
						$("[data-automation-id='fulfillment-continue']").click();
						clearInterval(v1101);						
					}
				},10);
				
				v111 = setInterval(function(){ 				
					if($("[data-automation-id='address-book-action-buttons-on-continue']").is(":visible")){
						$("[data-automation-id='address-book-action-buttons-on-continue']").click();
						clearInterval(v111);						
					}
				},10); 
				v112 = setInterval(function(){ 				
					if($("[data-automation-id='pickup-submit']").is(":visible")){
						$("[data-automation-id='pickup-submit']").click();
						clearInterval(v112);						
					}
				},10);  
				 
				v12 = setInterval(function(){ 				
					if ($(".auto-submit-place-order").is(":visible")){
						clearInterval(v12);
						document.getElementsByClassName("auto-submit-place-order")[0].click();						
					}
				},10); 
				
				v13 = setInterval(function(){ 				
					if ($("p:contains('having technical issues')").is(":visible")){
						clearInterval(v13);
						setTimeout(function(){
							location.reload(true);
						},getRndRefreshRange(timeoutMin, timeoutMax)); 				
					}
				},100); 
				v14 = setInterval(function(){ 				
					if ($("[data-automation-id='address-book-alert']").is(":visible")){
						clearInterval(v14);
						setTimeout(function(){
							location.reload(true);
						},getRndRefreshRange(timeoutMin, timeoutMax)); 			
					}
				},100); 
				v14 = setInterval(function(){ 				
					if ($("p:contains('We\\'re having trouble with your request. Please wait a moment and then try again.')").is(":visible")){
						clearInterval(v14);
						console.log("hii");
						setTimeout(function(){
							location.reload(true);
						},getRndRefreshRange(timeoutMin, timeoutMax)); 			
					}
				},100);
				v678 = setInterval(function(){ 
                    try{
						if($(".recaptcha-checkbox-checkmark").is(":visible")){ 
							$(".recaptcha-checkbox-checkmark").click();
                            clearInterval(v678);
                        }
                    }catch(err){}
				},50);
				v15 = setInterval(function(){ 
                    try{
						if(document.URL.match('https://www.walmart.com/checkout/#/fulfillment') && !$(".CXO_module_heading_heading-text").is(":visible")){
							clearInterval(v15);
							setTimeout(function(){
								location.reload(true);
							},getRndRefreshRange(timeoutMin, timeoutMax)); 				
                        }
                    }catch(err){}
				},1000);
				v16 = setInterval(function(){ 
                    try{
						if(document.URL.match('https://www.walmart.com/checkout/#/payment') && !$(".CXO_module_heading_heading-text").is(":visible")){ 
							clearInterval(v16);
							setTimeout(function(){
								location.reload(true);
							},getRndRefreshRange(timeoutMin, timeoutMax)); 				
                        }
                    }catch(err){}
				},1000);
				/*if(captchaSolver=="yes"){
					v671 = setInterval(function(){ 
						try{
							if($("#px-captcha").is(":visible"))
							{ 
								$.ajax({
								  type: "POST",
								  url: "https://2captcha.com/in.php",
								  data: {'key' : key, 'method' : "userrecaptcha", 'googlekey' : "6Lcj-R8TAAAAABs3FrRPuQhLMbp5QrHsHufzLf7b", 'pageurl':document.URL}
								}).done(function( res ) {	  
								  if(res.match("OK")){
									clearInterval(v671);
									var id = res.replace("OK|","");
									var rurl="https://2captcha.com/res.php?key="+key+"&action=get&id="+id;
									document.getElementById("g-recaptcha-response").style.display="";
									setTimeout(function(){									
										v672 = setInterval(function(){ 
											try{										
												$.ajax({
												  type: "GET",
												  url:rurl 
												}).done(function( res ) {	  
												  if(res.match("OK")){
													clearInterval(v672);
													var value = res.replace("OK|","");
													document.getElementById("g-recaptcha-response").innerHTML=value;
													$(".recaptcha-checkbox-checkmark").click();
												  }
												});
											}catch(nalukalu){}
										},3000);
									},4000);
								  }
								}); 												
							}
						}catch(err){}
					},100);	
				}	*/										
            }
		});
	}
});

