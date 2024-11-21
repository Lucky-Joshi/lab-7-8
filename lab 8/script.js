function validateForm() {
    let isValid = true;

    // Roll Number Validation
    const rollNumber = document.getElementById('rollNumber').value;
    const rollNumberError = document.getElementById('rollNumberError');
    if (!/^\d{7}$/.test(rollNumber)) {
        rollNumberError.textContent = "Roll number must be a 7-digit numeric value.";
        isValid = false;
    } else {
        rollNumberError.textContent = "";
    }

    // Name Validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (!/^[A-Za-z\s]+$/.test(name)) {
        nameError.textContent = "Name should contain only alphabets.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Date of Birth Validation
    const dob = document.getElementById('dob').value;
    const dobError = document.getElementById('dobError');
    if (dob === "") {
        dobError.textContent = "Please select a valid date.";
        isValid = false;
    } else {
        dobError.textContent = "";
    }

    // Gender Validation
    const genderError = document.getElementById('genderError');
    if (!document.querySelector('input[name="gender"]:checked')) {
        genderError.textContent = "Please select a gender.";
        isValid = false;
    } else {
        genderError.textContent = "";
    }

    // Courses Validation
    const coursesError = document.getElementById('coursesError');
    if (!document.querySelector('input[name="courses"]:checked')) {
        coursesError.textContent = "Please select at least one course.";
        isValid = false;
    } else {
        coursesError.textContent = "";
    }

    // Department Validation
    const department = document.getElementById('department').value;
    const departmentError = document.getElementById('departmentError');
    if (department === "") {
        departmentError.textContent = "Please select a department.";
        isValid = false;
    } else {
        departmentError.textContent = "";
    }

    return isValid;
}