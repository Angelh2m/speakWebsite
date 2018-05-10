var BANNER = {
  init: function() {
    this.createTooltips();
    this.listenToolTip();
    this.createModal();
    this.listenModal();
  },
  createTooltips: function() {
    $('.banner-container [data-tooltip]').each(function(index) {
      var tipId = "banner-tooltip--" + index,
        tipText = $(this).attr('data-tooltip');
      $(this).attr('data-tooltip', tipId).attr({
        'aria-expanded': false,
        'tabindex': 0,
      }).removeAttr('data-tooltip-class');
      $("<span/>", {
        "id": tipId,
        "class": "banner-tooltip-content",
        'tabindex': 0,
        html: tipText,
      }).css('display', 'none').insertAfter(this);
    });
  },
  showTooltip: function(tip, type) {
    tip.attr('aria-describedby', tip.parent().find('.banner-tooltip-content').attr('id')).attr('aria-expanded', true).parent().find('.banner-tooltip-content').fadeIn('fast').focus();
    //Show close button on click only
    if (type == 'click' || type == 'keydown') {
      tip.parent().find('.banner-tooltip-content').append('<button class="close-tooltip"><span aria-hidden="true"></span>close information</button>');
    };
  },
  hideTooltip: function(tip) {
    tip.removeAttr('aria-describedby').attr('aria-expanded', false).parent().find('.banner-tooltip-content').fadeOut('fast').parent().find('.banner-tooltip-link').focus();
    // Hide close button
    tip.parent().find('.banner-tooltip-content').find("button.close-tooltip").remove();
  },
  toggleTooltip: function(tip, type) {
    if (tip.parent().find('.banner-tooltip-content').is(':visible')) {
      this.hideTooltip(tip);
    } else {
      this.showTooltip(tip, type);
    }
  },
  eventToolTip: function(tip, type, key) {
    switch (type) {
      case "mouseenter":
        this.showTooltip(tip, type)
        break;
      case "mouseleave":
        this.hideTooltip(tip)
        break;
      case "click":
        this.showTooltip(tip, type)
        break;
      case "keydown":
        switch (key) {
          case 32: //SPACEBAR
            this.toggleTooltip(tip, type)
            break;
          case 13: //ENTER
            this.toggleTooltip(tip, type)
            break;
          case 27: //ESC
            this.hideTooltip(tip)
            break;
        }
        break;
    }
  },
  listenToolTip: function() {
    $('.banner-tooltip-link').on('click mouseenter mouseleave keydown', function(e) {
      if (e.keyCode == "32" || e.keyCode == "13" || e.keyCode == "27") {
        e.preventDefault();
      }
      BANNER.eventToolTip($(e.currentTarget), e.type, e.keyCode);
    });
    $('.banner-tooltip-content').on('click blur', 'button.close-tooltip', function(e) {
      BANNER.hideTooltip($(e.currentTarget).parent().parent().find('.banner-tooltip-link'));
    });
  },
  createModal: function() {
    $('[data-modal]').each(function(index) {
      var modalId = "banner-modal--" + index,
        modalText = $(this).attr('data-modal');
      $(this).addClass('banner-modal-trigger').attr('href', '#' + modalId).attr('aria-controls', modalId).removeAttr('data-modal').removeAttr('data-modal-class');
      $("<div/>", {
        "id": modalId,
        "class": "banner-modal",
        html: "<div class='banner-modal-content'><button class='banner-modal-close' type='button' aria-label='close' aria-controls=" + modalId + ">×</button>" + modalText + "</div>",
        "role": "dialog",
        "aria-labelledby": "banner-modal-label",
        "tabindex": "-1",
        "aria-hidden": true,
      }).css('display', 'none').insertAfter($(this).closest('.banner-container'));
    });
  },
  showModal: function(modal) {
    $('#' + modal).fadeIn('fast').attr('aria-hidden', 'false').attr('tabindex', '0').focus();
  },
  hideModal: function(modal) {
    $('#' + modal).fadeOut('fast').attr('aria-hidden', 'true').attr('tabindex', '-1');
    $('.banner-modal-trigger[aria-controls="' + modal + '"]').focus();
  },
  listenModal: function() {
    $('.banner-modal-trigger').on('click', function(e) {
      BANNER.showModal($(e.currentTarget).attr('aria-controls'));
    });
    $('.banner-modal-content').on('click', 'button.banner-modal-close', function(e) {
      BANNER.hideModal($(e.currentTarget).attr('aria-controls'));
    });
    $('.banner-modal').on('click', function(e) {
      if (!$(e.target).hasClass('banner-modal-content')) {
        BANNER.hideModal($(e.currentTarget).attr('id'));
      }
    });
  }
};
$(function() {
  BANNER.init();
});
