import React from 'react';

const Title = (props) => {
  return (
    <div className="title-wrap text-xl	font-bold	">
      <h1>{props.name}</h1>
    </div>
  );
};

export default Title;
