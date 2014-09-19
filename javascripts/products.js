(function() {
  $(function() {
    $('.lipscore-purchase').attr('ls-product-url', document.URL);
    $('.welcome-close').on('click', function(e) {
      e.preventDefault();
      return $('.welcome-wrapper').addClass('hidden');
    });
    $('.reminder-modal-close').on('click', function(e) {
      e.preventDefault();
      return $('#reminder-modal').modal('hide');
    });
    return $('#btn-reminder-email').on('click', function(e) {
      e.preventDefault();
      $('.lipscore-purchase').attr('ls-email', $('#reminder-email').val());
      lipscore.triggerPurchasedProducts();
      return $('#reminder-modal').modal('hide');
    });
  });

}).call(this);
