// script.js

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // หยุดการส่งฟอร์ม
    validateForm();
});

function validateForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let isValid = true;

    // ตรวจสอบ First Name
    if (!firstName) {
        document.getElementById('firstNameError').textContent = "First Name กรุณากรอกข้อมูล.";
        isValid = false;
    } else {
        document.getElementById('firstNameError').textContent = "";
    }

    // ตรวจสอบ Last Name
    if (!lastName) {
        document.getElementById('lastNameError').textContent = "Last Name กรุณากรอกข้อมูล.";
        isValid = false;
    } else {
        document.getElementById('lastNameError').textContent = "";
    }

    // ตรวจสอบ Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email) {
        document.getElementById('emailError').textContent = "Email กรุณากรอกข้อมูล.";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = "กรุณากรอกที่อยู่อีเมล์ที่ถูกต้อง.";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // ตรวจสอบ Password
    if (!password) {
        document.getElementById('passwordError').textContent = "Password กรุณากรอกข้อมูล.";
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = "";
    }

    if (isValid) {
        Swal.fire({
            title: 'Success!',
            text: 'Form submitted successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
}