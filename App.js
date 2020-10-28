import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.border}>
          <View style={styles.title}>
            <Text>CV</Text>
          </View>
          <View style={styles.body1}>
            <View>
              <Image
                style={styles.image}
                source={require('../AwesomeProject/assist/img.jpg')}
              />
            </View>
          </View>
          <View style={styles.text1}>
            <Text>personal information:</Text>
            <View style={styles.content}>
              <Text style={styles.textFont}>
                - Name : Mustafa Mohammed Ba'abad.
              </Text>
              <Text style={styles.textFont}>- Birth : 2/2/1997. </Text>
              <Text style={styles.textFont}>- Address: Yemen/Aden.</Text>
              <Text style={styles.textFont}>- +966734267636/+96771250082.</Text>
              <Text style={styles.textFont}>
                - E-mail : st.e734267636@gmail.com .
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text>Academic Qualifications:</Text>
            <View style={styles.content}>
              <Text style={styles.textFont}>
                -Bachelor's degree in "information technology"fromuniversity of
                science and technology.
              </Text>
              <Text style={styles.textFont}>
                -High school science section"AL-HAMZA high school 2014".
              </Text>
            </View>
          </View>
          <View style={styles.text1}>
            <Text>oprtional skills: </Text>
            <View style={styles.content}>
              <Text style={styles.textFont}>- ICDL </Text>
              <Text style={styles.textFont}>- Java,c++</Text>
              <Text style={styles.textFont}>
                - Programing web Applications by using PHP
              </Text>
              <Text style={styles.textFont}>
                - Programing Applications by using C#
              </Text>
              <Text style={styles.textFont}>- Sql server,Mysql</Text>
              <Text style={styles.textFont}>- Oracle server</Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text>Personal skills:</Text>
            <View style={styles.content}>
              <Text style={styles.textFont}>- Communication skills.</Text>
              <Text style={styles.textFont}>- Teamwork skills.</Text>
              <Text style={styles.textFont}>- Emotional smartness. </Text>
              <Text style={styles.textFont}>- Working under pressure. </Text>
              <Text style={styles.textFont}>- Quickly adaptive.</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    flex:1,
  },
  body: {
    padding: 10,
  },
  body1: {
    padding: 30,
  },
  image: {
    borderRadius: 7,
    height: 300,
    width: 250,
    alignItems: 'center',
  },
  text1: {
    padding: 10,
  },
  textFont: {
    fontSize: 9,
    fontFamily: 'Comic Sans MS',
  },
  border: {
    borderStyle: 'solid',
    borderColor: 'rgba(70,70,70,.1)',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'rgba(0,191,255,.2)',
    margin: 30,
    padding: 10,
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 'auto',
  },
  content: {
    margin: 20,
  },
});

export default App;
