import React from 'react';
import GoogleLogin from 'react-google-login';

const GL = () => {

    const cliendID="582192746959-d59ce4ugv22ss4h75i9ugb93oo1pellq.apps.googleusercontent.com"

    const onSuccess=(res)=>{
        console.log("Login Successfully, Res: ",res);
    }
    const onFailure=(res)=>{
        console.log("Login Faild! Res :",res.profileObj);
    }

    return (
        <div>
           <GoogleLogin
           clientId={cliendID}
           buttonText="Login Here"
           onSuccess={onSuccess}
           onFailure={onFailure}
           cookiePolicy={'Single Host Origin'}
           isSignedIn={true}
           />
        </div>
    );
};

export default GL;