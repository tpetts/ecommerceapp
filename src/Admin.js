/**
 * Admin Component will contain a form that will allow us to create new items in the inventory...
 */

import React, { useState } from 'react';
import './App.css';
import { Input, Button } from 'antd';

import { API } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

const initialState = {
    name: '', price: ''
}

const Admin = () => {
    const [itemInfo, updateItemInfo] = useState(initialState)
    function updateForm(e) {
        const formData = {
            ...itemInfo, [e.target.name]: e.target.value
        }
        updateItemInfo(formData)
    }
    const addItem = async() => {
        try {
            const data = {
                body: { ...itemInfo, price: parseInt(itemInfo.price) }
            }
            updateItemInfo(initialState)
            await API.post('ecommerceapi', '/products', data)
        } catch (err) {
            console.log('error adding item...')
        }
    }

    return (
        <div style={constainerStyle}>
            <Input
                name='name'
                onChange={updateForm}
                value={itemInfo.name}
                placeholder='Item Name'
                style={inputStyle}
            />
            <Input
                name='price'
                onChange={updateForm}
                value={itemInfo.price}
                style={inputStyle}
                placeholder='Item Price'
            />
            <Button
                style={buttonStyle}
                onClick={addItem}
            >
                Add Product
            </Button>
        </div>
    )
}

const constainerStyle = { width: 400, margin: '20px auto' }
const inputStyle = { marginTop: 10 }
const buttonStyle = { marginTop: 10 }

export default withAuthenticator(Admin)