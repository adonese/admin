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

const choices = [
    {id: 1, name: "vehicle"},
    {id: 2, name: "ac"},
    {id: 3, name: "flies"},
    {id: 4, name: "disinfectant"},
    {id: 5, name: "sink"},
    {id: 6, name: "electricity"},
    {id: 7, name: "delivery"},
    {id: 8, name: "carpenter"},
    {id: 9, name: "colors"},
    {id: 10, name: "ceramics"},
    {id: 11, name: "smith"},
    {id: 12, name: "alumnuim"},
    {id: 13, name: "kitchen"},
    {id: 14, name: "electronics"},
    {id: 15, name: "mobile_fix"},
    {id: 16, name: "cctv"},
    {id: 17, name: "parties"},
    {id: 18, name: "safari"},
    {id: 19, name: "sweets"},
    {id: 20, name: "family_biz"},
    {id: 21, name: "taxi"},
    {id:22, name: "wiw"},
    {id: 23, name: "barber"},
    {id: 24, name: "wash"},
    {id: 25, name: "coop"},
    {id: 26, name: "vegan"},
    {id: 27, name: "meat"},
    {id: 28, name: "coffee"},
    {id: 29, name: "cook"},
    {id: 30, name: "pencils"},
    {id: 31, name: "teachers"},
    {id: 32, name: "students"},
    {id: 33, name: "car_ele"},
    {id: 34, name: "car_mech"},
    {id: 35, name: "batteries"},
    {id: 36, name: "car_mech"},
    {id: 37, name: "long_vehicle"},
    {id: 38, name: "soccer"},
    {id: 39, name: "marriage"},
    {id: 40, name: "car_wash"},
 ];

export const PostEdit = (props) => (
    <Edit {...props}>
            <SimpleForm>        
            <TextInput disabled label="Id" source="id" />
            <TextInput source="fullname" />
            <RichTextInput source="description" />
            <BooleanInput source="is_provider" />
            <BooleanInput source="is_active"/>
            <BooleanInput source="mobile_checked"/>
            
            <TextInput source="latitude" />
            <TextInput source="longitude" />

            <SelectInput multiple helperText="Set the service provider rating" source="score" choices={[
            { id: 1, name: '1' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' },
            { id: 5, name: '5' },
            
            ]} 
            />


<ImageInput source="image"/>
<AutocompleteArrayInput source="services" choices={choices} translateChoice={false}/>

        
{/* <SelectInput source="services" multiple /> */}


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



