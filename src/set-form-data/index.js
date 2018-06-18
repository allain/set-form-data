var TYPE_FILTER = [
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

  // Assumes Array.from has been polyfilled
  var elements = Array.from(form.elements)

  elements.forEach(function (elem) {
    if (TYPE_FILTER.indexOf(elem.type) !== -1 && !elem.disabled) {
      var elemId = elem.name || elem.id
      if (elem.type === 'checkbox' && data[elemId]) {
        elem.checked = true
      } else if (data.hasOwnProperty(elemId)) {
        elem.value = data[elemId]
      } else if (data.hasOwnProperty('*')) {
        elem.value = data['*']
      }
    }
  })
}

module.exports = setFormData
