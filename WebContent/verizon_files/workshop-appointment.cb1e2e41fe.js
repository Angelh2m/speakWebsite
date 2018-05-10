var localJson = false;
    apptChange = true;
	
$(window).load(function() {
   /* $zipCodeSelected = $('#zipSelected');
    $selectedDate = $('#selectedDate');
	if(typeof apptList !=="undefined" && apptList.status=="success"){
		function available(date) {
			month = (date.getMonth() + 1) <10?'0'+(date.getMonth() + 1):(date.getMonth() + 1);
			day =  date.getDate()<10?'0'+ date.getDate(): date.getDate();
			dmy = (month) + "/" + day + "/" + date.getFullYear();
			highlight = eventDates[date];
			if (highlight) {
				$selectedDate.html($.datepicker.formatDate('MM dd, yy', new Date(highlight))).attr('data-dateselected', $.datepicker.formatDate('mm-dd-yy', new Date(highlight)));
				return [true, "event", ""];
			} else if ($.inArray(dmy, availableDates) != -1) {
				return [true, "", "Available"];
			} else {
				return [false, "", "unAvailable"];
			}
		}
		appt.processData(apptList);
		$datePicker = $('#date').datepicker({
			minDate: '0',
			beforeShowDay: available,
			onSelect: function(dateText) {
				eventDates = {};
				pageType = $zipCodeSelected.attr('data-pagetype');
				pickedDate = "\'" + $.datepicker.formatDate('mm-dd-yy', new Date(dateText)) + "\'";
				if (pageType == "workshops") {
					jsonUrl = 'action=changeDate&date='+dateText
					URL = localJson ? 'workshop.json' :  '/vzw/global/gadgets/availableWorkShopSlots.jsp?'+jsonUrl;

				} else if (pageType == "appointment") {
					jsonUrl = 'action=changeDate&date='+dateText
					URL = localJson ? 'appointment.json' : '/vzw/global/gadgets/availableAppointmentsSlots.jsp?'+jsonUrl;
				}

				appt.getApptData(URL);
				eventDates[new Date(pickedDate)] = new Date(pickedDate);
			}
		}); 
		$('#dateToday').html($('#dateToday').html() + '<a href="#" data-todayDate="' + $.datepicker.formatDate('mm-dd-yy', new Date()) + '">' + $.datepicker.formatDate('MM dd, yy', new Date()) + '</a>');

	}
	else if(typeof apptList !=="undefined" && apptList.status=="empty")
	{	App.helpers.modal($('#slotsNotAvailableMessage').html(), { type: 'colorbox', close: 'hide'});
	}*/
	
});

appt = {
	apptChanged:false,
	init:function(){
		
		this.loadApptDetails();
		this.loadAppointments();
		
	},
	available:function(date) {
			var availableDates = apptList.availableDates;
			month = (date.getMonth() + 1) <10?'0'+(date.getMonth() + 1):(date.getMonth() + 1);
			day =  date.getDate()<10?'0'+ date.getDate(): date.getDate();
			dmy = (month) + "/" + day + "/" + date.getFullYear();
			highlight = eventDates[date];
			if (highlight) {
				$selectedDate.html($.datepicker.formatDate('MM dd, yy', new Date(highlight))).attr('data-dateselected', $.datepicker.formatDate('mm-dd-yy', new Date(highlight)));
				return [true, "", ""];
			} else if ($.inArray(dmy, availableDates) != -1) {
				return [true, "", "Available"];
			} else {
				return [false, "", "Unavailable"];
			}
		},
	loadApptDetails:function(){
	$zipCodeSelected = $('#zipSelected');
    $selectedDate = $('#selectedDate');
	if(typeof apptList !=="undefined" && apptList.status=="success"){
		
		var that = this;
		eventDates = {};
		eventDates[new Date(apptList.availableDates[0])] = new Date(apptList.availableDates[0]);
		$datePicker = $('#date').datepicker({
			minDate: '0',
			beforeShowDay: that.available,
			defaultDate:new Date(apptList.slotDate),
			onSelect: function(dateText) {
				eventDates = {};
				$selectedDate.html($.datepicker.formatDate('MM dd, yy', new Date(dateText))).attr('data-dateselected', $.datepicker.formatDate('mm-dd-yy', new Date(dateText)));
				pageType = $zipCodeSelected.attr('data-pagetype');
				pickedDate = "\'" + $.datepicker.formatDate('mm-dd-yy', new Date(dateText)) + "\'";
				if (pageType == "workshops") {
					jsonUrl = 'action=changeDate&date='+dateText
					URL = localJson ? 'workshop.json' :  '/vzw/global/gadgets/availableWorkShopSlots.jsp?'+jsonUrl;

				} else if (pageType == "appointment") {
					jsonUrl = 'action=changeDate&date='+dateText
					URL = localJson ? 'appointment.json' : '/vzw/global/gadgets/availableAppointmentsSlots.jsp?'+jsonUrl;
				}

				that.getApptData(URL);
				eventDates[new Date(pickedDate)] = new Date(pickedDate);
			}
		}); 
		$('#dateToday').html($('#dateToday').html() + '<a data-todayDate="' + $.datepicker.formatDate('mm-dd-yy', new Date()) + '">' + $.datepicker.formatDate('MM dd, yy', new Date()) + '</a>');

		this.processData(apptList);
		
	}
	else if(typeof apptList !=="undefined" && apptList.status=="empty")
	{	App.helpers.modal($('#slotsNotAvailableMessage').html(), { type: 'colorbox', close: 'hide'});
	}
	
	},
	loadAppointments:function(){	
		that = this;
		var dropdownRefreshed = false;
			$('body').on('click',function(){
				if(!dropdownRefreshed){
					$('#appointmentType').selectpicker('refresh');
				}
			});
			if(typeof  apptList.availableAppointments !=="undefined"){	
			var availableList = apptList.availableAppointments;
			if(availableList.length > 0){
				$('#appointmentType').html('');
				for(var i in apptList.availableAppointments){
					if($('.appointmentDropdown span.apptName').text()==apptList.availableAppointments[i].appointmentName){
					$('#appointmentType').append('<option selected  value="'+apptList.availableAppointments[i].appointmentCode+'">'+apptList.availableAppointments[i].appointmentName+'</option>');
					}
					else{
						$('#appointmentType').append('<option value="'+apptList.availableAppointments[i].appointmentCode+'">'+apptList.availableAppointments[i].appointmentName+'</option>');
					}
				};
				$("#appointmentType").selectpicker('refresh');
								
				$('p.appt-desc').addClass('hide');
				
				var curApptClass = $("#appointmentType").val();
				$('p.appt-desc.'+curApptClass).removeClass('hide');
			}	
			$('.bootstrap-select').on('click', function() {
				$(this).toggleClass("open");
			});
		}
		$('#appointmentType').on('change', function() {
			apptSelected = $(this).val();
			pageType = $zipCodeSelected.data('pageType');
			//dateText = "\'" + $.datepicker.formatDate('mm-dd-yy', new Date($selectedDate.attr('data-dateselected'))) + "\'";
			jsonUrl = 'action=changeApt&aptId='+apptSelected;
			URL = localJson ? 'appointment.json' : '/vzw/global/gadgets/availableAppointmentsSlots.jsp?'+jsonUrl;
			that.apptChanged = true;
			appt.getApptData(URL,that.apptChanged);
			apptChange = true;
			$datePicker.datepicker("refresh");
		});
		var firstClick = true;
		$('#changeLink').off("click").on('click', function() {		
			$('#appt-drop-container').toggle();
			if(firstClick){
			$('#appointmentType').selectpicker('refresh');
			firstClick = false;
			}
		});	
	
	},
    getApptData: function(jsonUrl,apptChanged) {
        URL = jsonUrl;
        $.ajax({
            type: "GET",
            url: URL,
			beforeSend:function(){try{$(document.body).loader().showMe();}catch(e){console.log(e)}},
            cache: false,
            success: function(response) {
					if(typeof(response)!='object'){
						response = JSON.parse(response);
					}
					if(response.status =="empty"){
						$('#appointmentType option').each(function(option){
							if($(this).html()==$('.appointmentDropdown span.apptName').text()){
								$(this).prop('selected',true);
								$('#appointmentType').selectpicker('refresh');
							}
						});
						App.helpers.modal($('#slotsNotAvailableMessage').html(), { type: 'colorbox', close: 'hide'});					
					}else {
						$('.appointmentDropdown span.apptName').html($('#appointmentType option:selected').html());
					    appt.processData(response);
						
						$('p.appt-desc').addClass('hide');
							var curApptClass = $("#appointmentType").val();
						$('p.appt-desc.'+curApptClass).removeClass('hide');
						if(apptChanged == true){
						$('#changeLink').trigger('click');
						that.apptChanged= false;
						}
					} 
					$(document.body).loader().hideMe();
            },
            error: function() {
				$(document.body).loader().hideMe();
				App.helpers.modal($('#slotsNotAvailableMessage').html(), { type: 'colorbox', close: 'hide'});	
				$('#appointmentType option').each(function(option){
					if($(this).html() == $('.appointmentDropdown span.apptName').html()){
						$(this).prop('selected',true);
						$('#appointmentType').selectpicker('refresh');
					}
				});
			},
			complete:function(){
				$(document.body).loader().hideMe();
			}
        });
    },
    processData: function(data) {
        $('.details-view-workshops').html("");

        if (typeof data !== "object") {
            data = JSON.parse(data);
        }
        for (i in data.appointments) {
            appt.populateWorkshopDetails(data.appointments[i],i);
        }
        appt.matchHeight();
       if (typeof data.availableDates !== "undefined" && apptChange) {
            availableDates = data.availableDates;
			apptChange= false;
			eventDates[new Date(data.slotDate)] = new Date(data.slotDate);
			$datePicker.datepicker('setDate',new Date(data.slotDate));
        }
    },
    matchHeight: function() {
        var offset = 0;
        $('.details-view-workshops > .apptDetails-section').each(function() {
            if (offset == 0) {
                offset = $(this).offset().top;
            } else if (offset !== $(this).offset().top) {
                offset = 0;
				//$(this).prev().css('margin-right','0px');
                $(this).before('<div class="lineSeperator"></div>')
            }
        });
    },
	decodeHtml:function(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
 	},
    populateWorkshopDetails: function(pointId) {
        var template = Hogan.compile($('#point_details').html());
        if (typeof pointId.distance !== "undefined") {
            var distance = pointId.distance;
            distance = (Math.floor(distance * 100) / 100) + ' mi';
        }
        
		if (typeof pointId.address !== "undefined") {
			pointId.address = this.decodeHtml(pointId.address);
		}
		if (typeof pointId.title !== "undefined") {
			pointId.title = this.decodeHtml(pointId.title);
		}

        var address = pointId.address + ' ' + pointId.city + ', ' + pointId.state;
        obj = "";
        var data = {
            distance: distance || false,
            address: pointId.address || false,
            city: pointId.city || false,
            state: pointId.stateAbbr || pointId.state || false,
            zip: pointId.zip || false,
            phone: pointId.phone || false,
            timing: pointId.timing || false,
            title: pointId.title || false
        };
		if(pointId.apptDetails !=="undefined" && pointId.apptDetails.length > 0){
			$.each(pointId.apptDetails, function(index, value) {
				if (typeof value.slots !== "undefined") {
					if(parseInt(value.slots)>0){
						if(value.endTime) {
							obj += '<li class="workshopSlots"><a href="javascript:void(0);" onclick="appt.submitForm('+"\'"+value.locationId+"\'"+','+"\'"+value.slotId+"\'"+','+"\'"+value.submitDate+"\'"+')"><span class="hours">' + value.hours + ' - '+value.endTime+'</span><span class="slots">' + value.slots + ' spots available</span></a></li>'
						}
						else {
							obj += '<li class="workshopSlots"><a href="javascript:void(0);" onclick="appt.submitForm('+"\'"+value.locationId+"\'"+','+"\'"+value.slotId+"\'"+','+"\'"+value.submitDate+"\'"+')"><span class="hours">' + value.hours + '</span><span class="slots">' + value.slots + ' spots available</span></a></li>'
						}					
					}
					else{
						obj += '<li class="workshopSlots disabled"><a href="javascript:void(0);"><span class="hours">' + value.hours + '</span><span class="slots">No spots available</span></a></li>'
					}
				} else {
					if(value.endTime) {
						obj += '<li><a href="javascript:void(0);" onclick="appt.submitForm('+"\'"+value.locationId+"\'"+','+"\'"+value.slotId+"\'"+','+"\'"+value.submitDate+"\'"+')"><span class="hours">' + value.hours + ' - '+value.endTime + '</span></a></li>'
					}
					else {
						obj += '<li><a href="javascript:void(0);" onclick="appt.submitForm('+"\'"+value.locationId+"\'"+','+"\'"+value.slotId+"\'"+','+"\'"+value.submitDate+"\'"+')"><span class="hours">' + value.hours + '</span></a></li>'
					}					
				}
			});		
			
		}
		else if(pointId.apptDetails !=="undefined" && pointId.apptDetails.length == 0){
			var pageTypeClass = ($zipCodeSelected.attr('data-pagetype') == "workshops")?"workshopPage":"appointmentPage";
			obj += '<li  class="'+pageTypeClass+'"><a class="noRsults"><span class="hours">No spots available</span></a></li>';
		}
		data.hours = obj;
        $('.details-view-workshops').html($('.details-view-workshops').html() + template.render(data));
        
    },
    submitForm: function(locationId,slotId,date) {
      $('#locationId').val(locationId);
	  $('#slotId').val(slotId);
	  $('#submitDate').val(date); 
	  $('#selectSlotId').trigger('click');
    }

}
appt.init();
$(window).resize(function() {
    $('.lineSeperator').remove();
    appt.matchHeight();
});