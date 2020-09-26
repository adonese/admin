// in src/posts.js
import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {  BooleanField, Create, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, PasswordInput, LongTextInput , EditButton , BooleanInput } from 'react-admin';

import { List, Datagrid, TextField } from 'react-admin';

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
                    
       
            <TextInput source="fullname" />
            <TextInput source="mobile" />
            <PasswordInput source="password"/>
            <TextInput source="username" />
            <BooleanInput source="is_provider" />
            <BooleanInput source="is_active" />
            <RichTextInput  source="description" />
        </SimpleForm>
    </Create>
);

export const PostEdit = (props) => (
    <Edit {...props}>
                <SimpleForm>
                    
            <TextInput disabled label="Id" source="id" />
            <TextInput source="fullname" />
            <RichTextInput  source="description" />
            <BooleanInput source="is_active"/>
        
        </SimpleForm>
    </Edit>
);



export const Providers = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="fullname" />
            <TextField source="username" />
            <BooleanField source="is_active" />
            <BooleanField source="is_provider" />
        </Datagrid>
    </List>
);