import React, { FunctionComponent, useEffect, useRef } from 'react';

import { MessageWrapper, CloseButton } from './floatingMessagesStyled';
import { Divider } from 'semantic-ui-react';
import TextCustom from '../TextCustom';

const FloatingMessage: FunctionComponent<any> = ({ message, resetMessage }) => {
  const floatingMessageRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        floatingMessageRef &&
        floatingMessageRef.current &&
        //@ts-ignore
        !floatingMessageRef.current.contains(event.target)
      )
        handleClose();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [floatingMessageRef]);

  const handleClose = () => resetMessage();

  return (
    <MessageWrapper ref={floatingMessageRef} error={message.error}>
      <CloseButton error={message.error} onClick={handleClose} />
      <TextCustom fontWeight='bold'>
        {(!message.error && 'Success') || 'Error'}
      </TextCustom>

      {message && message.message.length > 1 && (
        <>
          <Divider />
          <p>{message.message}</p>
        </>
      )}
    </MessageWrapper>
  );
};

export default FloatingMessage;
