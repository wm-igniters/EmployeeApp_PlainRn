import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const API_URL = 'https://cloud.wavemakeronline.com/pk358d539nf7/EmployeePortal/services/hrdb/Employee?page=01&size=20';

const EmployeeList = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(API_URL);
        setEmployees(response.data.content); 
      } catch (err) {
        setError('Failed to load employee data');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Profile', { employee: item })}
    >
      <Image source={{ uri: item.picurl || 'https://via.placeholder.com/50' }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.firstname}>{`${item.firstname} ${item.lastname}`}</Text>
        <Text style={styles.department}>{item.department ? item.department.name : 'No Department'}</Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={24} color="#6200ee" />
    </TouchableOpacity>
  );


  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        renderItem={renderItem}
        keyExtractor={(item) => item.empId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical:12,
  },
  itemContainer: {
    padding:20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical:8,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  firstname: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  department: {
    fontSize: 14,
    color: '#777',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});

export default EmployeeList;
