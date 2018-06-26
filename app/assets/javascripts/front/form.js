$(document).ready(function(){
  // console.log('document is ready!');

  let btn = $('form').find(':submit');

  // Сколько секунд
  let seconds = 5;

  function enable_button () {
    btn.val('Отправить');
    btn.prop('disabled', false);
  }

  btn.on('click', function(){
    console.log('button was clicked');
    btn.prop('disabled', true);
    btn.val('Отправляем...');
    window.setTimeout( enable_button, seconds * 1000 );
  });

  $('#form').submit(function(e){
    e.preventDefault();
    // var valuesToSubmit = $(this).serialize();
    let data = $(this).serialize();
    // console.log('form clicked');
    // console.log('data is: ' + data);

    

    $.ajax({
      url: '/requests',
      method: 'POST',
      dataType: 'script',
      data: data,
      success: function(result){
        // $('#form-popup').toggle();
        // $('#success-popup').toggle();
        // console.log('success: ' + result);
        // console.log('data sent is: ' + data);
        // btn.prop('disabled', false);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        console.log("Status: " + textStatus); 
        console.log("Error: " + errorThrown); 
    }       
    });


    // $.ajax({
    //   type:"GET",
    //   url:"books/test",
    //   dataType:"json",
    //   data: {some_parameter: 'hello'},
    //   success:function(result){
    //     alert(result);
    //   }
    // })
  });

});