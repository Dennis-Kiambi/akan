const form = document.getElementById('form')
function calculateName() {

    const errorElement = document.getElementById('error');
    const divResult = document.getElementById('divResult');
    const txtDay = document.getElementById('dd');
    const txtMonth = document.getElementById('mm');
    const txtYear = document.getElementById('yyyy');
    const selectGender = document.getElementById('gender');

    let day = txtDay.value;
    let month = txtMonth.value;
    let year = txtYear.value;
    let gender = selectGender.value;

    console.log('DAY:', day, ' MONTH: ', month, 'Year: ', year, 'Gender: ', gender);
    errorElement.innerHTML = '';
    divResult.innerHTML = '';

    if (day <= 0 || day > 31) {
        errorElement.innerHTML = 'Day Must be between 1 and 30';
        return false;
    }

    if (month <= 0 || month > 12) {
        errorElement.innerHTML = 'Month Must be between 1 and 12';
        return false;
    }

    if (year.length !== 4) {
        errorElement.innerHTML = 'Year must be 4 digits';
        return false;
    }

    if (year <= 0 || year > 2020) {
        errorElement.innerHTML = 'Year cannot be later than 2020';
        return false;
    }

    if (gender == 0) {
        errorElement.innerHTML = 'Please Select Gender';
        return false;
    }

    let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

    let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    let dob = new Date(year, month - 1, day);

    console.log('DOB: ', dob);
    console.log('DOW:', dob.getDay());

    let daysOfTheweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sarturday'];

    divResult.innerHTML = 'You were born on <b>' + daysOfTheweek[dob.getDay()] + '</b>'
        + '<br/> Your Akan Name is <b>' + (gender == 1 ? femaleNames[dob.getDay()] : maleNames[dob.getDay()]) + '</b>';
}
