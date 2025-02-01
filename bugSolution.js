```javascript
// bugSolution.js
import React from 'react';

function MyComponent({ isActive }) {
  const className = isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700';

  return (
    <div className={className}>
      This is a component
    </div>
  );
}
export default MyComponent; 
```