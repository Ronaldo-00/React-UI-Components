
# TruncatedWord

To display only the first 18 words of a para and replace the rest with "..." in React, you can modify the component to split the text into words and truncate accordingly.

## Usage/Examples

First download the TruncatedWord folder. 
```javascript
import React from 'react'

const TruncatedWord = ({ text, limit }) => {
    const words = text.split(' ');
    const truncatedText = words.length > limit ? `${words.slice(0, limit).join(' ')}...` : text;
  
    return <p className='response-p'>{truncatedText}</p>;
}

export default TruncatedWord
```

Put the TruncatedWord component element```<TruncatedWord/>``` to any of your component (or) to add this below code compulsary

```javascript
const para ="GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. "
<TruncatedWord text={para} limit={18} /> 
```

## Explanation

- The TruncatedText component receives the text and limit as props.
- It splits the text into an array of words.
- It checks if the number of words exceeds the specified limit.
- If it does, it joins the first limit words and appends "...". If not, it displays the full text.
- The component uses the TruncatedText component to display the truncated paragraph
