(function() {
  $(function() {
    $('#btn-reminder-email').prop('disabled', false);
    $('.lipscore-purchase').attr('ls-product-url', document.URL);
    $('.welcome-close').on('click', function(e) {
      e.preventDefault();
      $('.welcome-wrapper').addClass('hidden');
    });
    $('.reminder-modal-close').on('click', function(e) {
      e.preventDefault();
      $('#reminder-modal').modal('hide');
    });
    $('#btn-reminder-email').on('click', function(e) {
      e.preventDefault();
      $('.lipscore-purchase').attr('ls-email', $('#reminder-email').val());
      lipscore.triggerPurchasedProducts();
      $('#btn-reminder-email').addClass('btn-green');
      $('#btn-reminder-email').text('Sent!');
      $('#btn-reminder-email').prop('disabled', true);
    });
  });

}).call(this);
