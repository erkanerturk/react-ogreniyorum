import React from 'react';

import { HashLoader } from 'react-spinners';

const LoaderHOC = (WrappedComponent, field) => {
  return (props) => {
    return props[field] ? (
      <HashLoader size={40} color="#36bdb3" loading />
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

export default LoaderHOC;
