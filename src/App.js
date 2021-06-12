import * as React from "react";

import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { PostCreate, PostEdit, OrderEdit, UserList } from './edit';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import arabicMessages from 'ra-language-arabic';
import { createMuiTheme } from '@material-ui/core/styles';
import authProvider from "./auth";
import {   Filter, TextInput } from 'react-admin';



const dataProvider = jsonServerProvider('https://ondemand.soluspay.net/admin');
// const App = () => <Admin dataProvider={dataProvider} />;


const i18nProvider = polyglotI18nProvider(() => arabicMessages, 'ar');

const App = () => (
      <Admin authProvider={authProvider} dataProvider={dataProvider} i18nProvider={i18nProvider}>
          <Resource name="providers" list={UserList} edit={PostEdit} create={PostCreate}/>
          <Resource name="users" list={UserList} edit={PostEdit} create={PostCreate}/>
          <Resource name="count" list={ListGuesser} />
          <Resource name="devices" list={ListGuesser} />
          <Resource name="orders" list={ListGuesser} edit={OrderEdit} filters={<SearchFilter/>} />
      </Admin>
  );

  export const SearchFilter = props => (
    <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
    </Filter>
  )

export default App;