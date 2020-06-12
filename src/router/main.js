import React from 'react';
import { CustomRoute } from 'components';
import { MainPage } from 'containers';

const pathes = [
  {
    path: '*',
    title: 'Main',
    publicRoute: true,
    component: MainPage,
  },
];

export default props => pathes.map(route => (
  <CustomRoute
    {...route}
    {...props}
    key={route.path}
    exact
  />
));
