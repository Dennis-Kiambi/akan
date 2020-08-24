
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

    errorElement.innerHTML = 'Eevrything Is Ok';




}
/*

form.addEventListener('submit', (e) => {
    let messages = []
    if (dd.value > 31 || dd.value <= 0) {
        messages.push('Invalid day format')
    }
    if (mm.value > 12 || mm.value <= 0) {
        messages.push('Invalid month format')
    }
    if (yyyy.value > 2020) {
        messages.push('Year cannot be later than 2020')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})*/