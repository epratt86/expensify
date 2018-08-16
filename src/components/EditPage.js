import React from 'react';

const EditPage = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      <p>You are about to edit: {props.match.params.id}</p>
    </div>
  );
};

export default EditPage;