// const form = document.getElementById("fname");
// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const dob = document.getElementById("dob");
// const nic = document.getElementById("nic");
// const email = document.getElementById("email");
// const cemail = document.getElementById("cemail");
// const phone = document.getElementById("phone");

// form.addEventListener("submit", e => {
//     e.preventDefault();
//     checkInputs();
// });

// function checkInputs() {
//     // trim to remove the whitespaces
//     const fnameValue = fname.value.trim();
//     const lnameValue = lname.value.trim();
//     const dobValue = dob.value.trim();
//     const nicValue = nic.value.trim();
//     const emailValue = email.value.trim();
//     const cemailValue = cemail.value.trim();
//     const phoneValue = phone.value.trim();

//     if (fnameValue === "") {
//         setErrorFor(fname, "First name cannot be blank");
//     } else {
//         setSuccessFor(fname);
//     }

//     if (lnameValue === "") {
//         setErrorFor(lname, "Last name cannot be blank");
//     } else {
//         setSuccessFor(lname);
//     }

//     if (dobValue === "") {
//         setErrorFor(dob, "Date of birth cannot be blank");
//     } else {
//         setSuccessFor(dob);
//     }

//     if (nicValue === "") {
//         setErrorFor(nic, "NIC cannot be blank");
//     } else {
//         setSuccessFor(nic);
//     }

//     if (emailValue === "") {
//         setErrorFor(email, "Email cannot be blank");
//     } else if (!isEmail(emailValue)) {
//         setErrorFor(email, "Not a valid email");
//     } else {
//         setSuccessFor(email);
//     }

//     if (cemailValue === "") {
//         setErrorFor(cemail, "Confirm email cannot be blank");
//     } else if (cemailValue !== emailValue) {
//         setErrorFor(cemail, "Email does not match");
//     } else {
//         setSuccessFor(cemail);
//     }

//     if (phoneValue === "") {
//         setErrorFor(phone, "Phone number cannot be blank");
//     } else if (!isPhone(phoneValue)) {
//         setErrorFor(phone, "Not a valid phone number");
//     } else {
//         setSuccessFor(phone);
//     }
// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small");
//     formControl.className = "footer";
//     small.innerText = message;
// }

// function setSuccessFor(input) {
//     const formControl = input.parentElement;
//     formControl.className = "footer";
// }

// function isEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         email.value
//     );
// }

function formValidation() {
    var fname = document.registration.fname;
    var lname = document.registration.lname;
    var dob = document.registration.dob;
    var nic = document.registration.nic;
    var email = document.registration.email;
    var cemail = document.registration.cemail;
    var phone = document.registration.phone;


    if (fname_validation(fname)) {
        if (lname_validation(lname)) {
            if (dob_validation(dob)) {
                if (nic_validation(nic)) {
                    if (email_validation(email)) {
                        if (cemail_validation(cemail)) {
                            if (phone_validation(phone)) {
                                window.location = "index.html";
                            }
                        }
                    }
                }
            }
        }
        return false;


        function fname_validation(fname) {
            if (/[^a-zA-Z0-9]/.test(fname.value)) {
                return true;
            } else {
                alert('Names should have only alpha-numeric characters');
                fname.focus();
                return false;
            }
        }

        function lname_validation(lname) {
            if (/[^a-zA-Z0-9]/.test(lname.value)) {
                return true;
            } else {
                alert('Names should have only alpha-numeric characters');
                lname.focus();
                return false;
            }
        }

        function dob_validation(dob) {
            if (dob.setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)) {
                alert('DOB shouldn\’t be a future date');
                dob.focus();
                return false;

            } else if (getAge(dob) < 30) {
                return true;
            } else {
                alert('You are not eligible for the competition');
                dob.focus();
                return false;
            }
        }

        function getAge(birthYear) {
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            age = currentYear - birthYear;
            return age;
        }

        function nic_validation(nic) {
            if ((nic.Count(char.IsDigit) == 9) && // only 9 digits
                (nic.EndsWith("X", StringComparison.OrdinalIgnoreCase) ||
                    nic.EndsWith("V", StringComparison.OrdinalIgnoreCase)) || //a letter at the end 'x' or 'v'
                (nic.Count(char.IsDigit) == 12)) { // 12 digits
                return true;
            } else {
                alert('NIC should be 9 numbers with one letter or 12 numbers');
                nic.focus();
                return false;
            }
        }

        function email_validation(email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
                return true;
            } else {
                alert("Email should be in the proper email format!")
                return false;
            }
        }

        function cemail_validation(cemail) {
            if (cemail.value != email.value) {
                alert("Email addresses do not match!");
                return false;
            } else {
                return true;
            }
        }

        function phone_validation(phone) {
            if (/^\d{10}$/.test(phone)) {
                return true;
            } else {
                alert("Invalid number; must be ten digits")
                number.focus()
                return false;
            }
        }
    }
}