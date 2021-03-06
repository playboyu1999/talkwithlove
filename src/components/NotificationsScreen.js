import * as React from 'react';
import { 
    View, 
    Text,
    Image,
    Component ,
    StyleSheet
  } from 'react-native';
  import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail} from 'native-base';
  
export default function ListChatScreen() {
    return (
      <Container style={styles.container}>
        <Content>
          <List style={styles.list}>
            <ListItem avatar>
              <Thumbnail source={require('../assets/m13.jpg')} />
              <Body>
                <Text>Rowoon</Text>
                <Text note>ส่งข้อความหาคุณ</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List style={styles.list}>
            <ListItem avatar>
              <Thumbnail source={require('../assets/m9.jpg')} />
              <Body>
                <Text>Eun-woo</Text>
                <Text note>ส่งข้อความหาคุณ</Text>
              </Body>
              <Right>
                <Text note>9:43 am</Text>
              </Right>
            </ListItem>
          </List>
          <List style={styles.list}>
            <ListItem avatar>
              <Thumbnail source={require('../assets/m10.jpg')} />
              <Body>
                <Text>ChangMin</Text>
                <Text note>ส่งข้อความหาคุณ</Text>
              </Body>
              <Right>
                <Text note>8:00 am</Text>
              </Right>
            </ListItem>
          </List>
          <List style={styles.list}>
            <ListItem avatar>
              <Thumbnail source={require('../assets/m6.jpg')} />
              <Body>
                <Text>Inyoup</Text>
                <Text note>กดติดตามคุณ</Text>
              </Body>
              <Right>
                <Text note>12/01/2021</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      
    },
    list:{
      paddingTop:10
    }
    
  })