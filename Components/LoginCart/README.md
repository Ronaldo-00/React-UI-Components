#  LoginCart – React Component

A simple and animated login/register popup card built with React. This component features a toggleable login form with email and password fields, animated placeholder text, and password visibility toggling using eye icons.

##  Features

- Toggleable login/register modal
- Animated text messages
- Password visibility toggle (eye icon)
- Responsive layout
- Smooth show/hide transitions

##  Installation

1. Clone the repository or copy the component files.
2. Ensure you have the following structure:


3. Import and use in your project:

```jsx
import LoginCart from './components/LoginCart';

function App() {
  return (
    <div>
      <LoginCart />
    </div>
  );
}

export default App;
```

## Usage

- Click the Login/Register button to open the login card.

- View the animated company tagline.

- Use the eye icon to toggle password visibility.

- Fill in your credentials and click Login.

##  File Structure

- LoginCart.js – Main React component.

- LoginCart.css – Component-specific styles.

- eye-o.png / eye-c.png – Eye icon images for password toggle.

##  Customization

- Update texts array to customize animated messages:

```js
const texts = ["Your Text 1", "Another Message", "Final Line"];
```
- Replace "Write Yours" and "Company Moto" with your branding.

- Customize CSS in LoginCart.css for theming.