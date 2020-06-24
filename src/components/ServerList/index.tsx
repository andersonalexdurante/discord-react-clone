import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton' 

const ServerList: React.FC = () => {
  return (
      <Container>
          <ServerButton isHome/>

          <Separator />

          <ServerButton mentions={33}/>
          <ServerButton hasNotifications/>
          <ServerButton />
          <ServerButton mentions={5}/>
          <ServerButton />
          <ServerButton />
          <ServerButton hasNotifications/>
          <ServerButton mentions={3}/>
      </Container>
  )
}

export default ServerList;