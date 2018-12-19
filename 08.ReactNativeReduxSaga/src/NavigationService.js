// https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
import { NavigationActions } from 'react-navigation';

let _navigator;

setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
}

navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
}