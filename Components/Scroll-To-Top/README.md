
# Scroll-To-Top

In this components for the button with click for scroll to top functionality..


## Usage/Examples

- First download the Scroll-To-Top folder.
- Then import ScrollToTop components to any of your components or to add this below code compulsary

```javascript
<ScrollToTop></ScrollToTop> 
```

## Explanation

1. State and Event Handlers

```javascript
const [isVisible, setIsVisible] = useState(false); //to set visiblity of the scroll-to-top buton
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const toggleVisibility = () => {
  if (window.scrollY > 40) {
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }
};
```

The component uses the useState hook to create a state variable isVisible with an initial value of false. This state variable determines whether the scroll-to-top button is visible or not.

Two event handlers are defined:

- scrollTop: scrolls the window to the top of the page with a smooth animation when the button is clicked.
- toggleVisibility: checks the current scroll position of the window and updates the isVisible state variable accordingly. If the scroll position is greater than 40 pixels, the button becomes visible.

2. useEffect Hook

```javascript
useEffect(() => {
  window.addEventListener('scroll', toggleVisibility);
  return () => {
    window.removeEventListener('scroll', toggleVisibility);
  };
}, []);
```
The useEffect hook is used to add an event listener to the window's scroll event. When the component mounts, the toggleVisibility function is called whenever the user scrolls the window. The event listener is removed when the component unmounts.

The empty dependency array [] ensures that the effect is only run once, when the component mounts.
