import React from 'react';
import AppContext from '../AppContext';

export function withAppContext(Component) {
  return function WrapperComponent(props) {
    return <AppContext.Consumer>{(context) => <Component {...props} context={context} />}</AppContext.Consumer>;
  };
}

export default {
  withAppContext,
};
