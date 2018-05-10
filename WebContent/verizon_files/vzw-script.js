var gn_category=25;
			   var responsiveGN ='1';
			   var loggedInURL=document.getElementById("amLoginUrl").value; 
			   var goto = document.getElementById("amLoginRedirectUrl").value;
			   var gotoUrl = document.getElementById("amLogoutRedirectUrl").value;
			   var cartUrl = document.getElementById("cartUrl").value;
			   var contextPath = document.getElementById("contextPath").value;
			  function gnCustomizeMenu() {
                  updateMenuURL("logout", gotoUrl);
			      updateMenuURL("vgn_shcart", cartUrl);
			      if($jQ('#gnFlag').val()=='true'){
						  if(vzgn.isLoggedIn){
						  	updateMenuURL("gn224", contextPath+"/");
						  	updateMenuURL("gn108", contextPath+"/audio/");
						  	updateMenuURL("gn106", contextPath+"/batteries-and-chargers/");
						  	updateMenuURL("gn110", contextPath+"/car-and-travel/");
						  	updateMenuURL("gn61", contextPath+"/cases-and-protection/");
						  	updateMenuURL("gn359", contextPath+"/everyday-essentials/");
						  	updateMenuURL("gn334", contextPath+"/gaming-and-toys/");
						  	updateMenuURL("gn336", contextPath+"/in-the-home/");
						  	updateMenuURL("gn386", contextPath+"/special-offers/");	
					        updateMenuURL("gn112", contextPath+"/allproducts/");			  
						  	jQuery("#gn224").html("Gadgets & Gear");
						  	jQuery("#gn108").html("Audio");
						  	jQuery("#gn106").html("Batteries & Chargers");
						  	jQuery("#gn110").html("Car & Travel");
						  	jQuery("#gn61").html("Cases & Protection");
						  	jQuery("#gn359").html("Everyday Essentials");
						  	jQuery("#gn334").html("Gaming & Toys");
						  	jQuery("#gn336").html("In the Home");
						  	jQuery("#gn386").html("Special Offers");
						}else{				  	
							updateMenuURL("gn223", contextPath+"/");
						  	updateMenuURL("gn109", contextPath+"/audio/");
						  	updateMenuURL("gn107", contextPath+"/batteries-and-chargers/");
						  	updateMenuURL("gn111", contextPath+"/car-and-travel/");
						  	updateMenuURL("gn62", contextPath+"/cases-and-protection/");
						  	updateMenuURL("gn359", contextPath+"/everyday-essentials/");
						  	updateMenuURL("gn333", contextPath+"/gaming-and-toys/");
						  	updateMenuURL("gn335", contextPath+"/in-the-home/");
						  	updateMenuURL("gn385", contextPath+"/special-offers/");	
					         	updateMenuURL("gn113", contextPath+"/allproducts/");			  
						  	jQuery("#gn223").html("Gadgets & Gear");
						  	jQuery("#gn109").html("Audio");
						  	jQuery("#gn107").html("Batteries & Chargers");
						  	jQuery("#gn111").html("Car & Travel");
						  	jQuery("#gn62").html("Cases & Protection");
						  	jQuery("#gn359").html("Everyday Essentials");
						  	jQuery("#gn333").html("Gaming & Toys");
						  	jQuery("#gn335").html("In the Home");
						  	jQuery("#gn385").html("Special Offers");
						}
			   }

			   }
		   		var cartStatus ='1';