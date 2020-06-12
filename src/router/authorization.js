import React from 'react';
import { CustomRoute } from 'components';
import { Authorization } from 'containers';
import { LANG_DICTIONARY } from 'consts';

const { AUTHORIZATION } = LANG_DICTIONARY;

const pathes = [
  {
    path: '/',
    title: AUTHORIZATION,
    publicRoute: true,
    component: Authorization,
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
