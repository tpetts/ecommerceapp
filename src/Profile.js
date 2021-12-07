/**
 * IF the user is signed in, render the componenet and a sign-out button. If the user is not signed in, the withAuthenticator component will render sign-up and sign-in flows for a user.
 */

import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Profile = () => {
    return (
        <div style={containerStyle}>
            <AmplifySignOut />
        </div>
    );
}

const containerStyle = {
    width: 400,
    margin: '20px auto' 
}

export default withAuthenticator(Profile)