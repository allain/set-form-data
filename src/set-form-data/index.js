const TYPE_FILTER = [
  'text',
  'textarea',
  'email',
  'password',
  'select-one',
  'checkbox'
]

function setFormData (form, data) {
  if (!form) {
    throw new Error(`A form is required by getFormData, was given form=${form}`)
  }

  for (let elem of Array.from(form.elements)) {
    if (TYPE_FILTER.includes(elem.type) && !elem.disabled) {
      let elemId = elem.name || elem.id
      if (elem.type === 'checkbox' && data[elemId]) {
        elem.checked = true
      } else if (data.hasOwnProperty(elemId)) {
        elem.value = data[elemId]
      } else if (data.hasOwnProperty('*')) {
        elem.value = data['*']
      }
    }
  }
}

module.exports = setFormData
