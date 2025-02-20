import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const API_URL = 'https://cloud.wavemakeronline.com/pk358d539nf7/EmployeePortal/services/hrdb/Department?page=01&size=20'; 

const DepartmentList = ({ navigation }) => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch departments on component mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(API_URL);
        setDepartments(response.data.content); 
      } catch (err) {
        setError('Failed to load department data');
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
    >
      <View style={styles.textContainer}>
        <Text style={styles.departmentName}>{item.name}</Text>
        <Text style={styles.departmentDescription}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  // Handle loading state
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Text>Loading...</Text>
      </View>
    );
  }

  // Handle error state
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
        data={departments}
        renderItem={renderItem}
        keyExtractor={(item) => item.deptId} 
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
  textContainer: {
    flex: 1,
  },
  departmentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  departmentDescription: {
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

export default DepartmentList;
