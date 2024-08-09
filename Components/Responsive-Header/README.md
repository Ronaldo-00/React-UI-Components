# Header Component

This project contains a React `Header` component that includes a responsive navigation bar, a logo, and a fixed header that becomes sticky upon scrolling.

## Features

- **Responsive Navigation**: The navigation bar slides in from the left on smaller screens and can be toggled open or closed with buttons.
- **Sticky Header**: The header becomes fixed to the top of the screen when the user scrolls past 100 pixels.
- **Customizable**: Easily customizable navigation links and button.

## Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Usage**:
    - Import the `Header` component into your application.
    - Add the necessary styling by including the `Header.css` file.
    - Add your company logo in the specified path.

## File Structure

- `Header.js`: Main React component.
- `Header.css`: Stylesheet for the header.
- `logo.png`: Company logo (you can replace this with your logo).

## Usage Example

```jsx
import React from 'react';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />
            {/* Other components */}
        </div>
    );
}

export default App;
```