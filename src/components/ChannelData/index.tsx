import React, { useRef, useEffect } from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
      <Container>
          <Messages ref={messagesRef}>
            <ChannelMessage 
              author="Andy"
              date="24/06/2020"
              content="Fala galerinha"
            />

            <ChannelMessage 
              author="Yuri Ziemba"
              date="24/06/2020"
              isBot
              hasMention
              content={
                <>
                  Olá <Mention>@Andy</Mention>, eu sou um bot. 
                </>
              }
            />

            <ChannelMessage 
              author="Andy"
              date="24/06/2020"
              content="Fala galerinha"
            />

            <ChannelMessage 
              author="Yuri Ziemba"
              date="24/06/2020"
              isBot
              hasMention
              content={
                <>
                  Olá <Mention>@Andy</Mention>, eu sou um bot. 
                </>
              }
            />

            <ChannelMessage 
              author="Andy"
              date="24/06/2020"
              content="Fala galerinha"
            />

            <ChannelMessage 
              author="Yuri Ziemba"
              date="24/06/2020"
              isBot
              hasMention
              content={
                <>
                  Olá <Mention>@Andy</Mention>, eu sou um bot. 
                </>
              }
            />

            <ChannelMessage 
              author="Andy"
              date="24/06/2020"
              content="Fala galerinha"
            />

            <ChannelMessage 
              author="Yuri Ziemba"
              date="24/06/2020"
              isBot
              hasMention
              content={
                <>
                  Olá <Mention>@Andy</Mention>, eu sou um bot. 
                </>
              }
            />

            <ChannelMessage 
              author="Andy"
              date="24/06/2020"
              content="Fala galerinha"
            />

            <ChannelMessage 
              author="Yuri Ziemba"
              date="24/06/2020"
              isBot
              hasMention
              content={
                <>
                  Olá <Mention>@Andy</Mention>, eu sou um bot. 
                </>
              }
            />
          </Messages>

          <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre"/>
            <InputIcon />
          </InputWrapper>
      </Container>
  )
}

export default ChannelData;