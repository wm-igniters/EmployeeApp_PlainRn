import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Avatar, Card } from 'react-native-paper';

const Profile = ({ route }) => {

  const { employee } = route.params || {};

  
  const defaultProfile = {
    picurl: 'data:image/jpeg;base64,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',
    firstname: 'John',
    lastname: 'Doe',
    department: { name: 'Engineering' },
  };
 
  const profileData = employee || defaultProfile;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Avatar.Image size={100} source={{ uri: profileData.picurl }} />
            <Text style={styles.profileName}>{profileData.firstname+" "+profileData.lastname}</Text>
            <Text style={styles.profilePosition}>{profileData.department.name}</Text>
          </Card.Content>
          <Card.Actions style={styles.action}>
            <Button style={styles.editButton} mode="contained" onPress={() => alert('Edit Profile')}>
              Edit Profile
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    padding: 20,
    minWidth:300,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  cardContent: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profilePosition: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  action:{
    flexDirection:'column'
  },


 
});

export default Profile;
