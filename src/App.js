import * as React from "react";

import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { PostCreate, PostEdit, Providers } from './edit';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import arabicMessages from 'ra-language-arabic';
import { createMuiTheme } from '@material-ui/core/styles';
import authProvider from "./auth";

const theme = createMuiTheme({
  direction: 'rtl',
});

const dataProvider = jsonServerProvider('https://ondemand.soluspay.net/admin');
// const App = () => <Admin dataProvider={dataProvider} />;


const i18nProvider = polyglotI18nProvider(() => arabicMessages, 'ar');

const App = () => (
      <Admin authProvider={authProvider} dataProvider={dataProvider} i18nProvider={i18nProvider}>
          <Resource name="providers" list={ListGuesser} edit={PostEdit} create={PostCreate}/>
          <Resource name="count" list={ListGuesser} />
          <Resource name="orders" list={ListGuesser} />
      </Admin>
  );

export default App;