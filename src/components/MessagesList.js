import React from 'react';
import PropTypes from 'prop-types';

const MessagesList = ({ message }) => (
  <section id="messages-list">
    <ul>
        {messages.map(message=> (
          <Messages
            key={message.id}
            {...message}
          />
        ))}
    </ul>
  </section>
)

export default
