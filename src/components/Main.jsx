import React from 'react'
import MessageRecieved from './MessageRecieved';
import MessageSent from './MessageSent';
import Tags from './Tags';
import MessageResponse from './MessageResponse';
import Filter from './Filter';

const Main = () => {
    return (
        <div className='chat-container'>
            <MessageRecieved />
            <MessageSent />
            <Tags />
            <MessageResponse />
            <Filter />
        </div>
    );
};

export default Main;