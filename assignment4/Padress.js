function validateContact() {
 var valid = true;
 $("#frmContact input[required=true], #frmContact textarea[required=true]").each(function(){
  $(this).removeClass('invalid');
  $(this).attr('title','');
  if(!$(this).val()){
   $(this).addClass('invalid');
   $(this).attr('title','This field is required');
   valid = false;
  }
  if($(this).attr("type")=="email" && !$(this).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)){
   $(this).addClass('invalid');
   $(this).attr('title','Enter valid email');
   valid = false;
  }
 });
 return valid;
 $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });
