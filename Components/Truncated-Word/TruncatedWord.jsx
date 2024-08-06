import React from 'react'

const TruncatedWord = ({ text, limit }) => {
    const words = text.split(' ');
    const truncatedText = words.length > limit ? `${words.slice(0, limit).join(' ')}...` : text;
  
    return <p className='response-p'>{truncatedText}</p>;
}

export default TruncatedWord


{/*

Put the TruncatedWord component element(<TruncatedWord/>) to any of your component (or) to add this below code compulsary

const para ="This is where you put your truncated para lines"
<TruncatedWord text={para} limit={18} /> 

*/}