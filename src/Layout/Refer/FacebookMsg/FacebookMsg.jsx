"use client";
import React from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const FacebookMsg = () => {
    return (
        <div className='bg-yellow-500 w-full '>
            <FacebookProvider appId="1075271563728941" chatSupport>
                <CustomChat pageId="116230144849047" minimized="false"/>
            </FacebookProvider>
            
        </div>
    );
};

export default FacebookMsg;