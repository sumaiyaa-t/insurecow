function readpdfURL3(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.pdf3-upload-wrap').hide();
        $('.pdf3-upload-image').attr('src', e.target.result);
        $('.pdf3-upload-content').show();
  
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removepdfUpload3();
    }
  }
  
  function removepdfUpload3() {
    $('.pdf3-upload-input').replaceWith($('.pdf3-upload-input').clone());
    $('.pdf3-upload-content').hide();
    $('.pdf3-upload-wrap').show();
  }
  $('.pdf3-upload-wrap').bind('dragover', function () {
          $('.pdf3-upload-wrap').addClass('image-dropping');
      });
      $('.pdf3-upload-wrap').bind('dragleave', function () {
          $('.pdf3-upload-wrap').removeClass('image-dropping');
  });

  
  