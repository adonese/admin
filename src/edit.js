// in src/posts.js
import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {   ReferenceArrayInput, AutocompleteArrayInput, ImageInput, SelectInput, BooleanField, Create, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, PasswordInput, LongTextInput , EditButton , BooleanInput } from 'react-admin';
// import { DualListInput } from '@react-admin/ra-relationships';

import { List, Datagrid, TextField } from 'react-admin';

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="fullname" />
            <TextInput source="mobile" />
            <TextInput source="username" />
            <BooleanInput source="is_provider" />
            <BooleanInput source="mobile_checked" />
            <BooleanInput source="is_active" />
            <RichTextInput  source="description" />
            <TextInput source="latitude" />
            <TextInput source="longitude" />
        </SimpleForm>
    </Create>
);


export const PostEdit = (props) => (
    <Edit {...props}>
                <SimpleForm>
                    
            <TextInput disabled label="Id" source="id" />
            <TextInput source="fullname" />
            <RichTextInput  source="description" />
            <BooleanInput source="is_provider" />
            <BooleanInput source="is_active"/>
            <SelectInput helperText="Set the service provider rating" source="score" choices={[
            { id: 1, name: '1' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' },
            { id: 5, name: '5' },

   
]} 
/>


<ImageInput source="image"/>

        
<SelectInput source="services" multiple />


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
            <BooleanField source="mobile_checked" />
        </Datagrid>
    </List>
);



