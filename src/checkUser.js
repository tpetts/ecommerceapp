/**
 * This function will check the current user's information, call the updateUser callback function to update the user. If there is no user, it returns with an empty object. If there is a user, check to see if there are any Cognito groups associated with the user, and if so, check if the user is in the Admin group. IF the user is in the Admin group, then the isAuthorized boolean will be set to true; if not, the Boolean will be set to false;
 */

import { Auth } from 'aws-amplify';

const checkUser = async(updateUser) => {
    const userData = await Auth
    .currentSession()
    .catch(err => console.log('error: ', err)
    )
    if (!userData) {
        console.log('userData: ', userData)
        updateUser({})
        return
    }
    const { idToken: { payload }} = userData
    const isAuthorized =
        payload['cognito:groups'] && 
        payload['cognito:groups'].includes('Admin')
        updateUser({
            username: payload['cognito:username'],
            isAuthorized
        })
}

export default checkUser;