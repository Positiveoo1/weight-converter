const input = document.getElementById('inp');
const convert = document.getElementById('convert');
const reset = document.getElementById('reset');
convert.addEventListener('click', function(e) {
    e.preventDefault();
    const inputValue = input.value;
    const result = inputValue * 0.453592;
    document.getElementById('changed').innerHTML = result;
})
reset.addEventListener('click', function(e) {
    e.preventDefault();
    input.value = '';
    document.getElementById('changed').innerHTML = '';
})