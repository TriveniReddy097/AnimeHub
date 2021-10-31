import React from 'react';
import {Footer, FooterTab, Button, Icon, Header} from 'native-base';
import {scale} from 'lib/helpers/responsiveScaling';

const AppFooter = ({tab, setTab}) => {
  return (
    <Footer style={{backgroundColor: 'black', height: scale(60)}}>
      <FooterTab style={{backgroundColor: 'black'}}>
        <Button onPress={() => setTab(0)}>
          <Icon name={'home'} style={{color: tab === 0 ? 'orange' : 'white'}} />
        </Button>
      </FooterTab>
      <FooterTab style={{backgroundColor: 'black'}}>
        <Button onPress={() => setTab(1)}>
          <Icon
            name={'search'}
            style={{color: tab === 1 ? 'orange' : 'white'}}
          />
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default AppFooter;
