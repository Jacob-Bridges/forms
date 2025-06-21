    // JavaScript code for form validation

let form = document.getElementById("myForm")
let getInput = document.getElementById("inputField")
 // Regular expression pattern for alphanumeric input
let nameRegex = /^[a-zA-Z0-9]+$/






form.addEventListener("submit", function(){
      // Check if the input value matches the pattern
      if (nameRegex.test(getInput.value)){
        // Valid input: display confirmation and submit the form
        alert("Form Submitted")
      }else if (getInput.value == ''){
        alert("Field Empty. Please Enter Alphanumeric Characters.")
        // Invalid input: display error message
        //This appears to be depretiated, but it still works in all the browsers I tested 
        // Prevent form from submitting
        event.preventDefault()
        
       
      }
      else{
          alert("Invalid! Alphanumeric Characters Only.")
          // Invalid input: display error message
          // Prevent form from submitting
          event.preventDefault()
      }

})

      
      
     

      

        

        