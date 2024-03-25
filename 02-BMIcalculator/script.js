const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    // const guide = document.querySelector('#weight-guide')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        let bmiGuide;
        if (bmi < 18.6) {
            bmiGuide = 'Under Weight'
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            bmiGuide = 'Normal Range'
        }
        else if (bmi > 24.9) {
            bmiGuide = 'Over Weight'
        }
        results.innerHTML = `<span>${bmi}</span><br><span>${bmiGuide}</span>`
    }
})

