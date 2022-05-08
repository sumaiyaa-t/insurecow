function readpdfURL2(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.pdf2-upload-wrap').hide();
        $('.pdf2-upload-image').attr('src', e.target.result);
        $('.pdf2-upload-content').show();
  
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removepdfUpload2();
    }
  }
  
  function removepdfUpload2() {
    $('.pdf2-upload-input').replaceWith($('.pdf2-upload-input').clone());
    $('.pdf2-upload-content').hide();
    $('.pdf2-upload-wrap').show();
  }
  $('.pdf2-upload-wrap').bind('dragover', function () {
          $('.pdf2-upload-wrap').addClass('image-dropping');
      });
      $('.pdf2-upload-wrap').bind('dragleave', function () {
          $('.pdf2-upload-wrap').removeClass('image-dropping');
  });

  
  