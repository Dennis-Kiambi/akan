
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