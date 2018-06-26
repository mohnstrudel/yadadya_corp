$(document).ready(function(){
  // console.log('document is ready!');

  let btn = $('form').find(':submit');

  // Сколько секунд
  let seconds = 5;

  function enable_button () {
    btn.val('Отправить');
    btn.prop('disabled', false);
  }

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
        btn.prop('disabled', true);
        btn.val('Отправляем...');
        window.setTimeout( enable_button, seconds * 1000 );
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