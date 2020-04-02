import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
// import Footer from './components/Footer';

const App = () => {
  return (
    <Container>
      <Content />
      <Footer>
        <FooterTab>
          <Button style={{backgroundColor: 'teal'}} onPress={() =>alert('Add payment')}>
            <Icon name="speedometer" style={{color: 'white'}}/>
          </Button>
          <Button>
            <Icon name="apps" color="red" />
          </Button>
          <Button>
            <Icon name="paper-plane" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 25,
    justifyContent: 'flex-end',
  },
});

export default App;
