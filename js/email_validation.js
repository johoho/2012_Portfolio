// form validation
$(document).ready(function(){
  
  //set variables references for all the various form elements;
  var $name = $("#name"),
  $email = $("#email"),
  $subject = $("#subject"),
  $message = $("#message"),
  $spam = $("#spam"),
  $formFields = $("input:text, textarea"),
  $status = $("#status"),
  $resetBtn = $("input:reset"),
  $contactForm = $(".contact-form");
  
  //initialise
  $status.hide();
  
  /*submit handler for contact form*/
  $contactForm.submit(function(e) { 
      
      //prevent default form submit action
      e.preventDefault();
      
      //clear all error borders from form fields
      $formFields.removeClass("error-focus");
      
      //check required fields are not empty and that the email address is valid
      if($name.val()==""){
        
          setStatusMessage("won't you tell me your name?");
          $name.setFocus();
        
      }else if($email.val()==""){
        
          setStatusMessage("you've forgotten to enter your email address!");
          $email.setFocus();
        
      }else if(!isValidEmail($email.val())){
        
          setStatusMessage("hmmm, would you mind double checking your email address, please?");
          $email.setFocus();
        
      }else if($subject.val()==""){
        
          setStatusMessage("give me a clue on what you're writing me about?");
          $subject.setFocus();
        
      }else if($message.val()==""){
        
          setStatusMessage("you've not told me anything!");
          $message.setFocus();
        
      }else if(!$spam.val()==""){
        
          setStatusMessage("spam Attack!!");

      }else{
        
          //if all fields are valid then send data to the server for processing and display "please wait" message
          setStatusMessage("Email is being sent... please hang tight.");
        
          //serialize all the form field values as a string
          var formData = $(this).serialize();
        
        //send serialized data string to the send mail php via POST method
        
        $.post("send_mail.php",formData,function(sent){
          
          if(sent=="error"){ 
             
                setStatusMessage("ooops, something went wrong and your email hasn't been sent");
               
              } else if(sent=="success"){
                setStatusMessage("cheers "+$name.val()+", your email's been sent");
                
                //clear form fields
                $formFields.val("");
                
              }//end if else
           
          },"html");
        
      }//end else

   });//end submit
  
  //click handler for reset button
  $resetBtn.click(function(){
      $status.slideUp("fast");
      $formFields.removeClass("error-focus");                           
  });
  
  //helper functions
  function setStatusMessage(message){
    $status.html(message).slideDown("fast");
  }
  
  $.fn.setFocus = function(){
    return this.focus().addClass("error-focus");
  }
  
  function isValidEmail(email) {
    var emailRx = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    return  emailRx.test(email);
  }
                           
});