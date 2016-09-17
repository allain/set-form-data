# set-form-data

Sets form data - or data for a named form element - via `form.elements`.

This project is meant to be the counterpart to `get-form-data` by `insin`, and heavily borrows from its
codebase; the project should be considered almost a fork.

Currently works in an ES6/webpack setting. Will make browser bundles later if there's interest in the
project. Please open an issue!

## Install

```
npm install set-form-data
```

## Usage

### Setting form data

To set data for an entire form, use the `setFormData()` function:

```html
<form id="productForm">
  ...
  <label>Product:</label>
  <select name="product">
    <option value="1" selected>T-shirt</option>
    <option value="2">Hat</option>
    <option value="3">Shoes</option>
  </select>

  <label>Quantity:</label>
  <input type="number" name="quantity" min="0" step="1" value="9">

  <label>Express shipping</label>
  <p>Do you want to use <a href="/shipping#express">Express Shipping</a>?</p>
  <div class="radios">
    <label><input type="radio" name="shipping" value="express" checked> Yes</label>
    <label><input type="radio" name="shipping" value="regular"> No</label>
  </div>

  <label>Terms of Service:</label>
  <p>I have read and agree to the <a href="/">Terms of Service</a>.</p>
  <label class="checkbox"><input type="checkbox" name="tos" value="Y" checked> Yes</label>
  ...
</form>
```
```javascript
var form = document.querySelector('#productForm')

setFormData(form, {
    'shipping': 'express',
    'product': 1,
    'quantity': 9
})

var data = getFormData(form);
console.log(JSON.stringify(data))
```
```
{"product": "1", "quantity": "9", "shipping": "express", "tos": "Y"}
```

## MIT Licensed
