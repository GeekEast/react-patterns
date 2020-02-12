import React from 'react';

export default (props) => {
  return (
    <div>
      {true && <span>hello</span>} <br/>
      {true || <span>world true</span>}
      {false || <span>world false </span>}
    </div>
  )
}