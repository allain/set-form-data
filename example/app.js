import setFormData from 'set-form-data';

let clearButton = document.getElementById('clear-sample-form');
clearButton.addEventListener('click', function () {
    let form = document.getElementById('sample-form');
    setFormData(form, {'field1': 'YOLO'});
});
