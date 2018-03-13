$(document).ready(function(){
  $('#data_1 .input-group.date').datepicker({
    weekStart: 1,
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    format: "dd/mm/yyyy"
  });  
});
