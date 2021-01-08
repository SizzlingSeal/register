//Calculate Age
function handler(e) {
  var birth = new Date(document.getElementById("dt").value);
   	  curr  = new Date();
      diff = curr.getTime() - birth.getTime();
      el = document.getElementById('age');

      el.innerText = "Age:" + Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

}


// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

// Install input filters.
setInputFilter(document.getElementById("contactno"), function(value) {
  return /^-?\d*$/.test(value); });




//register button
function registerfunction(){
	var errors = [];
		infos = [];
		pass = document.getElementById("password").value;
		conpass = document.getElementById("conpassword").value;

	class regInfo{
		constructor(firstname, lastname, dob, age,
		username, contact, email){
				this.firstname = firstname;
				this.lastname = lastname;
				this.dob = dob;
				this.age = age;
				this.username = username;
				this.contact = contact;
				this.email = email;

		}
		
	}
myInfo = new regInfo(document.getElementById("firstname").value, 
					document.getElementById("lastname").value,
					document.getElementById("dt").value,
					document.getElementById("age").textContent.substring(4, 6),
					document.getElementById("username").value,
					document.getElementById("contactno").value,
					document.getElementById("email").value);

	if(myInfo.firstname.length === 0){
		errors.push('First Name Missing');
	}
	if(myInfo.lastname.length === 0){
		errors.push('Last Name Missing');
	}
	if(myInfo.dob == ""){
		errors.push('Date Of Birth Missing');
		
	}
	if(myInfo.username.length === 0){
		errors.push('Username Missing');
	}
	if(myInfo.contact.length < 11){
		errors.push('Contact Missing');
	}
	if(myInfo.email.length === 0 || !myInfo.email.includes("@")){
		errors.push('Email Missing');
	}
	if(pass == "" || conpass == ""){
		errors.push('Password Missing');
	}
	if(pass != conpass){
		errors.push('Password doesnt match');
	}

	if(errors.length == 0){
		infos.push("First Name : " + myInfo.firstname,
					"Last Name : " + myInfo.lastname,
					"Date Of Birth : " + myInfo.dob,
					"Age : " + myInfo.age,
					"Username : " + myInfo.username,
					"Contact no. : " + myInfo.contact,
					"Email : " + myInfo.email);
		alert(infos.join('\n'));
	}else{
		alert(errors.join('\n'));
	}

}



