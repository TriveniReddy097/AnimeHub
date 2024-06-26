import {NavigationActions, StackActions} from 'react-navigation';
// import {DrawerActions} from 'react-navigation-drawer';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function replace(routeName, params) {
  _navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    }),
  );
}

function pop() {
  _navigator.dispatch(StackActions.pop());
}

function popToTop() {
  _navigator.dispatch(StackActions.popToTop());
}

// function toggleDrawer() {
//   _navigator.dispatch(DrawerActions.toggleDrawer());
// }

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  // toggleDrawer,
  pop,
  popToTop,
  replace,
};
