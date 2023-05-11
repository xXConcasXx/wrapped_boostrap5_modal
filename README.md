# Wrapped Boostrap 5 Modal
A simple and complete way to use Bootstrap 5.x.x Modals from JS!<br><br>
For the moment this is a basic class, in the future I will implement more features like `asynchronous functions` in **button_click()** listeners and the possibility to add icons in buttons.


## Specifications
### `WrappedModal` object
| Parameter | Description | Optional | Type | Default |
| :-----------: | :-------------: | :-----:| :-----: | :-----: |
| `id`| Your Modal ID in DOM. | **False** | `string` | `undefined` |
| `title` | Your Title of Modal. | **True** | `string` | *"title"* |
| `body` | Your Body of Modal in string format HTML output. | **False** | `string` | `undefined` |
| `options` | Your Modal behavior options. | **True** | `object` | `undefined` |
| `buttons` | Your Buttons in modal-footer. | **True** | `array` | `undefined` |
-  If `options` is not set default Modal behavior will be used.
-  If `buttons` is not set default button in modal-footer will be used.
<br><br>
### `options` parameter
| Parameter | Description | Optional | Type | Default |
| :-----------: | :-------------: | :-----:| :-----: | :-----: |
| `fade`| If `true` Modal effect transition is enabled when **toggle()** is called. | **True** | `boolean` | `undefined` |
| `shadow` | If `true` Modal shadow effect is enabled. | **True** | `boolean` | `undefined` |
| `static` | If `true` Static Backdrop is enabled so Modal will not close when clicking outside of it. | **True** | `boolean` | `undefined` |
| `scrollable` | If `true` modal-body is scrollable. | **True** | `boolean` | `undefined` |
| `centered` | If `true` Modal is centered in screen. | **True** | `boolean` | `undefined` |
| `size` | Defines the size of Modal.<br>You can choose between `sm`, `lg` and `xl`<br><br><i>If no value is set default size will be used</i> | **True** | `string` | `undefined` |
| `reload` | If `true` web page will be reloaded after closing the Modal. | **True** | `boolean` | `undefined` |

<br>

### `buttons` parameter
| Parameter | Description | Optional | Type | Default |
| :-----------: | :-------------: | :-----:| :-----: | :-----: |
| `text`| Label of your Button. | **True** | `string` | `undefined` |
| `class` | `class` attribute of the button. | **True** | `string` | `undefined` |
| `dismiss` | If `true` your Modal will close after **button_click()** event is triggered. | **True** | `boolean` | `undefined` |
| `function` | The function that will be called in your **button_click()** listener. | **True** | `function` | `undefined` |

<br>

## Usage
```javascript
const modalId = 'example-modal';
const modalTitle = 'Modal Example Title';
const modalBody = '<h3>This is the body</h3><p>This is the description</p>';
const modalOptions = {
  fade: true,
  shadow: true,
  static: true,
  scrollable: true,
  centered: true
}
const modalButtons = [
  { text: 'Button 1', dismiss: false, class: 'btn btn-primary', function: () => {
      alert('Button 1 triggered');
    } 
  },
  { text: 'Button 2', dismiss: false, class: 'btn btn-secondary', function: () => {
      alert('Button 2 triggered');
    }
  },
  { text: 'btn3', dismiss: true, class: 'btn btn-success'}
];

new WrappedModal(
  modalId,
  modalTitle,
  modalBody,
  modalOptions,
  modalButtons
).show();
```
