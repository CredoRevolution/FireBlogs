const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp()

exports.addAdminRole = functions.https.onCall(async (data, context) => {
    return admin.auth().getUserByEmail(data.data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        })
    }).then(() => {
        return {
            message: `Successfully added admin role to ${data.data.email}`
        }
    }).catch (err => {
        console.log(err)
        return {
            message: `Error: ${err.message || 'Could not add admin. Please check if the email is valid and try again.'}`
        }
    })
})
