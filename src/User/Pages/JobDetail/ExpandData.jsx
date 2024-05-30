import React, { useState } from 'react'

const ExpandData = ({ children, initialVisibleCharacters = 100 }) => {
  
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const getDisplayedContent = () => {
    if (isExpanded) return children;

    let totalChars = 0;
    const truncatedChildren = [];

    React.Children.forEach(children, (child) => {
      if (typeof child === 'string') {
        if (totalChars + child.length > initialVisibleCharacters) {
          const remainingChars = initialVisibleCharacters - totalChars;
          truncatedChildren.push(child.slice(0, remainingChars) + '...');
          totalChars = initialVisibleCharacters;
        } else {
          truncatedChildren.push(child);
          totalChars += child.length;
        }
      } else if (React.isValidElement(child)) {
        truncatedChildren.push(child);
      }

      if (totalChars >= initialVisibleCharacters) {
        return;
      }
    });

    return truncatedChildren;
  };
  
    return (
        <>
        

        {/* {getDisplayedContent()}
        <button onClick={toggleContent}>
            {isExpanded ?  'Show Less' : 'Show More'}
        </button> */}

    </>
  )
}

export default ExpandData