var TYPE_FILTER = [
    'text',
    'email',
    'password',
    'select'
];

function setFormData(form, data) {
  if (!form) {
    throw new Error(`A form is required by getFormData, was given form=${form}`)
  }

  for (let i = 0, l = form.elements.length; i < l; i++) {
      let elem = form.elements[i]
      if (TYPE_FILTER.indexOf(elem.type) < 0 || elem.disabled) {
          continue
      }

      let elemId = elem.name || elem.id
      if (data.hasOwnProperty(elemId)) {
          elem.value = data[elemId]
      } else if (data.hasOwnProperty('*')) {
          elem.value = data['*']
      }
  }
}

export default setFormData
