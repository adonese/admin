// in src/posts.js
import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {  AutocompleteArrayInput, ImageInput, SelectInput, BooleanField, Create, Edit, SimpleForm, TextInput , BooleanInput } from 'react-admin';
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
    {id: 40, name: "vehicle"},
    {id: 39, name: "ac"},
    {id: 38, name: "flies"},
    {id: 37, name: "disinfectant"},
    {id: 36, name: "sink"},
    {id: 35, name: "electricity"},
    {id: 34, name: "delivery"},
    {id: 33, name: "carpenter"},
    {id: 32, name: "colors"},
    {id: 31, name: "ceramics"},
    {id: 30, name: "smith"},
    {id: 29, name: "alumnuim"},
    {id: 28, name: "kitchen"},
    {id: 27, name: "electronics"},
    {id: 26, name: "mobile_fix"},
    {id: 25, name: "cctv"},
    {id: 24, name: "parties"},
    {id: 23, name: "safari"},
    {id: 22, name: "sweets"},
    {id: 21, name: "family_biz"},
    {id: 20, name: "taxi"},
    {id: 19, name: "wiw"},
    {id: 18, name: "barber"},
    {id: 17, name: "wash"},
    {id: 16, name: "coop"},
    {id: 15, name: "vegan"},
    {id: 14, name: "meat"},
    {id: 13, name: "coffee"},
    {id: 12, name: "cook"},
    {id: 11, name: "pencils"},
    {id: 10, name: "teachers"},
    {id: 9, name: "students"},
    {id: 8, name: "car_ele"},
    {id: 7, name: "car_mech"},
    {id: 6, name: "batteries"},
    {id: 5, name: "car_mech"},
    {id: 4, name: "long_vehicle"},
    {id: 3, name: "soccer"},
    {id: 2, name: "marriage"},
    {id: 1, name: "car_wash"},
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
            <BooleanInput source="is_disabled"/>
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


export const OrderEdit = (props) => (
    <Edit {...props}>
    <SimpleForm>        
            <TextField disabled label="Id" source="id" />
            <TextField source="user_id" />
            <TextField source="provider_id" />
            <TextField source="uuid" />
            <SelectInput multiple helperText="Service ID" source="category" choices={choices} />
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



