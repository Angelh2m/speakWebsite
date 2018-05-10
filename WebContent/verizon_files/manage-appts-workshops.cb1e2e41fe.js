App.pages.storeLocator.locator.ManageWorkshopAppointments = {

                init:function(){
                                this.validateUser();
								this.bookWorkshopAppointments();
                },
                validateUser:function(){
                                var that = this;
                                
     $("#manage-workshops-form").validate({
        ignore: ':hidden',
        submitHandler:function(form,event) {
        event.preventDefault();		
        $.ajax({
                url:'/postpayservices/model/com/vzw/rest/storelocator/ManageWorkshopsApptsRestService/retrieveRegisteredEvents',
                type: 'GET',
				beforeSend:function(){try{$(document.body).loader().showMe();}catch(e){console.log(e)}},
                data: {
                   emailAddress: $('#accountID').val(),
                   eventType: 'wrk',
				   reCaptchaResponse: grecaptcha.getResponse()
            },
                                                dataType: 'JSON',
                                                success:function(data){
															var rawData = JSON.parse(data.registeredEvents);
																if(rawData.error=='undefined' || rawData.error == undefined){
                                                                that.showList(data);
                                                                that.cancelAppointmentOrWorkshop();
																$(document.body).loader().hideMe();
																vzwDL.page.pageName ="/desktop store/store locator/appointment/manage summary";
																vzwDL.page.hier1 = "/desktop store/store locator/appointment/manage summary";
																}
																else{
																	$(document.body).loader().hideMe();
																	App.helpers.modal($('#slotsNotAvailableMessage').html(), { type: 'colorbox', close: 'hide'});
																}
                                                },
												error:function(e){
													App.helpers.modal($('#slotsNotAvailableMessage').html(), { type: 'colorbox', close: 'hide'});
													$(document.body).loader().hideMe();
												},
												complete:function(e){
													$(document.body).loader().hideMe();
												}

          });  
                                
                    },
		 
        highlight: function(element, errorClass, validClass) {
            if (element.type === "radio") {
                this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            } else {
                $(element).addClass(errorClass).removeClass(validClass);
            }
            $(element).siblings(".error.success").removeClass('success');
                                 $('.continue').addClass('disabled');
								 $('.continue').attr('disabled','disabled');
        },
                                success:function(element){
								if(grecaptcha.getResponse()!=''){
									$('.continue').removeClass('disabled');
									$('.continue').removeAttr('disabled');
								}
								else{
										$('.continue').addClass('disabled');
										$('.continue').attr('disabled','disabled');
								}
							},
        focusCleanup: true,
        focusInvalid: false,
        rules:{
            
            email:{
                required:true,
                email:true,
                maxlength:80
            }			
        },
        messages:{
            email:{
                required:"Please enter your email address",
                email:"Please enter a valid email address",
                maxlength:"Please enter a valid email address"
            }
                    
        }
    });
                },
                showList:function(data){
                                data = JSON.parse(data.registeredEvents);
                                //data = data.registeredEvents;
                                var listOfWorkshops = data.workshops;
                                var listOfApptments = data.apptmnts;
                                $('#manage-workshops-form').addClass('hide');
                                if(listOfApptments != undefined && listOfApptments.length <= 0 && listOfWorkshops != undefined && listOfWorkshops.length <= 0){
                                                $('.book-new').removeClass('hide');
                                }
                                else{
                                                $('.workshop-appointment-wrapper').removeClass('hide');
                                                if(listOfApptments != undefined && listOfApptments.length<=0){
                                                                $('.workshop-appointment-wrapper').find('.appt-desc').removeClass('hide');
                                                                $('.workshop-appointment-wrapper').find('.appt-book').removeClass('hide');   
                                                }
                                                else{
																				var template = Hogan.compile($('#appointment_details').html().trim());
																				$.each(listOfApptments,function(idx,val){
                                                                                var htmlData = template.render(val);
                                                                                $('.appointments-container').append(htmlData);
                                                                 });
                                                                
                                                }
                                                if(listOfWorkshops != undefined && listOfWorkshops.length<=0){
                                                                
                                                                $('.workshop-appointment-wrapper').find('.workshops-desc').removeClass('hide');
                                                                $('.workshop-appointment-wrapper').find('.workshops-book').removeClass('hide');      
                                                }
                                                else{
                                                                                var template = Hogan.compile($('#workshop_details').html().trim());
                                                                                $.each(listOfWorkshops,function(idx,val){
                                                                                var htmlData = template.render(val);
                                                                                $('.workshops-container').append(htmlData);
                                                                });
                                                }


                                }

                },
                cancelAppointmentOrWorkshop:function(){
                                function openForm(){
                                                $('.modal-container').on('click','.continue',function(){
                                                                var info = $(this).attr('data-info');
                                                                var info = info.split('|');
                                                                var eventType = info[0];
                                                                var registrantId = info[1];
                                                                var scheduleItemId = info[2];
                                                                $.ajax({
                url:'/postpayservices/model/com/vzw/rest/storelocator/ManageWorkshopsApptsRestService/cancelEvent',
                type: 'GET',
				beforeSend:function(){try{$(document.body).loader().showMe();}catch(e){console.log(e)}},
                                                data: {
															eventType:eventType,
															scheduledItemId:scheduleItemId,
                                                            registrantId: registrantId                                                                              
												},
                                                dataType: 'JSON',
                                                success:function(data){
												data = JSON.parse(data.cancelStatus);
												
                                            if(data.applicationResponseCode =="Success" || data.applicationResponseCode =="success"){
                                                                var eventType = $('.eventType').html();
                                                                $('.modal-container').find('.close-button').trigger('click');
                                                                $('#'+scheduleItemId).remove();
                                                                var eventCount = $('div[data-event-type="'+eventType+'"]').length;
                                                                if(eventType=='Workshop' && eventCount <= 0){
                                                                                $('.workshop-appointment-wrapper').find('.workshops-desc').removeClass('hide');
                                                                                $('.workshop-appointment-wrapper').find('.workshops-book').removeClass('hide');        
                                                                }
                                                                else if(eventType=='Appointment' && eventCount <= 0){
                                                                                $('.workshop-appointment-wrapper').find('.appt-desc').removeClass('hide');
                                                                                $('.workshop-appointment-wrapper').find('.appt-book').removeClass('hide');                                   
                                                                }
                                                                if($('.appointment').length<=0){
                                                                                $('.workshop-appointment-wrapper').addClass('hide');
                                                                                $('.book-new').removeClass('hide');
                                                                }
																$(document.body).loader().hideMe();
													}
													else{
														$(document.body).loader().hideMe();
														App.helpers.modal($('#errorCancelMessage').html(), { type: 'colorbox', close: 'hide'});
													}
													
                                                },
												error:function(){
													App.helpers.modal($('#errorCancelMessage').html(), { type: 'colorbox', close: 'hide'});
													$(document.body).loader().hideMe();
												},
												complete:function(){
													$(document.body).loader().hideMe();
												}
                                                });
                                });
                                }
                                $('.workshop-appointment-wrapper').on('click','.cancelEvent',function(){
                                                var eventType = $(this).parent('.appointment').attr('data-event-type');
                                                var info = $(this).attr('data-info');
                                                $('.cancel-modal').find('.eventType').html(eventType);
                                                $('.cancel-modal').find('.continue').attr("data-info",info);
                                                App.helpers.modal( $('.cancel-modal').html(),{ type: 'colorbox', close: 'hide'},openForm);
                                });
                },
                bookWorkshopAppointments:function(){
                                var openModal=function(){        
                                $('.modal-container').find('input[type="checkbox"]').iCheck('');
                    $('.modal-container .store-search-modal').on('submit',function(e) {
                                                  e.preventDefault();
                                                  var value = $('.modal-container #zip-search').val();        
                                                  var store_my_loc = $('.store_my_loc').is(':checked') ? true : false;
                                                  var result = '';
                                                  var resultsType='';
                                                  url = '/vzw/stores/storesearchresults/?store_my_loc='+store_my_loc+'&';
                                                  if($(this).hasClass('workshop-search-modal')){          
                                                  url = '/vzw/stores/workshopsresults/?store_my_loc='+store_my_loc+'&';            
                                                  resultsType="workshops"; 
                                                  }
                                                                
                                                  App.pages.storeLocator.locator.addressValidation(value,result,url,resultsType);
                                  
                                });
                                };
                                $('.book-new, .workshop-appointment-wrapper').on('click','.appt-book,.workshops-book',function(e){
                                                                                e.preventDefault();
                                                                                var clicked = $(this).hasClass('appt-book')?'appt':'workshop';
                                                                                $('.see-more-zip-modal').find('.store-search-modal').hasClass('workshop-search-modal')?'':$('.see-more-zip-modal').find('.store-search-modal').addClass('workshop-search-modal');
                                                                                $('.see-more-zip-modal').find('p.desc').html('Enter your location to book a workshop near you.');
                                                                                if(clicked=='appt'){
                                                                                                $('.see-more-zip-modal').find('.store-search-modal').removeClass('workshop-search-modal');
                                                                                                $('.see-more-zip-modal').find('p.desc').html('Enter your location to book an appointment near you.');
                                                                                }
                                                                                var options = {easyclose:'yes'}
                                                                                App.helpers.modal( $('.see-more-zip-modal').html(),{ type: 'colorbox', close: 'hide'},openModal);
                                });
                }
};
function formValid(){
	if($('#accountID').hasClass('valid')){
				$('.continue').removeClass('disabled');
				$('.continue').removeAttr('disabled');
			}
			else{
				$('.continue').addClass('disabled');
				$('.continue').attr('disabled','disabled');
			}
}
App.pages.storeLocator.locator.ManageWorkshopAppointments.init();
