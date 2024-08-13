const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if(bmi <18.5) {
        description = 'You are underweight!';
    }else if(bmi > 18.5 && bmi < 25) {
        description = 'Your weight is normal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    }else if(bmi > 24.9 && bmi < 30) {
        description = 'You are overweight!';
    }else if(bmi > 29.9 && bmi < 35) {
        description = 'You are obese!';
    }else {
        description = 'You are extremely obese!';
    }


    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});