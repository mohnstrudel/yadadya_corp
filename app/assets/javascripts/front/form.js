$(document).ready(function(){
  // console.log('document is ready!');

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
        console.log('data sent is: ' + data);
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