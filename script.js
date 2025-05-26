// checking the phone number corect or not
function numberchecker(no){
  return ((no.length===10 && /^\d+$/.test(no)))
}
//cheching and validate email address

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// checking for valid and strong password
function validatePassword(pw) {

    return /[A-Z]/       .test(pw) &&
           /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           pw.length > 5;

}
// checking for same password
function same_password(re_password,pw){
  return (pw==re_password)
}

//work when click on submit
$("#Submit").click(function(){
  $("#Submit").css("background-color","white");
  var useremail=$("#email").val().trim();
  var userphone=$("#phone").val().trim();
  var userpassword=$("#password").val().trim();
  var user_repassword=$("#rePassword").val().trim();
  if(!(isValidEmail(useremail))){
    alert(" Please Enter a valid email address");
    $("#error").html(" Please Enter a valid email address");
  }
  else if(!(numberchecker(userphone))){
    alert("Please enter valid phone number :");
    $("#error").html(" Please Enter a valid Phone number");
  }
  else if(!(validatePassword(userpassword))){
    alert("Please enter a valid password");
        $("#error").html(" Please Enter a valid Password");
  }
  else if(!(same_password(user_repassword,userpassword))){
    alert("Re-Password doesn't match with password")
    $("#error").html("Re-Password doesn't match with password ");
  }
  else{
    alert("Congratulations You registerd successfully ");
    $("#error").html("Congratulations You registerd successfully ");
    $("#error").css("color","green")

  }
})
$("#togglePassword").click(function () {
  const passwordInput = $("#password");
  const type = passwordInput.attr("type") === "password" ? "text" : "password";
  passwordInput.attr("type", type);

  // Optional: Change the icon
  $(this).text(type === "password" ? "👁️" : "🙈");
});
