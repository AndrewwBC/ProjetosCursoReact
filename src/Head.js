import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    console.log(props);
    document.title = props.title;
  }, [props]);

  return <></>;
};

export default Head;
