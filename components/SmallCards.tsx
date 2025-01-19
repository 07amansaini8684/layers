import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Format currency in USD
const formatCurrency = (amount: number | any) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
};

// Styles
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginLeft: 8,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 8,
  },
});

// Render small cards in a grid
export const RenderSmallCards = () => {
  // Dummy data filled directly based on the provided JSON
  const cardData = [
    {
      title: 'Interest Rate',
      value: '@1.04% monthly', // Using description from card data
      icon: 'percent',
      color: '#ED8936',
    },
    {
      title: 'Min Amount',
      value: formatCurrency(500), // Using min_range from card data
      icon: 'attach-money',
      color: '#4A5568',
    },
    {
      title: 'EMI Plan 1',
      value: '₹4,247 /mo for 12 months', // Using the first EMI plan
      icon: 'payment',
      color: '#D53F8C',
    },
  

  ];

  return (
    <FlatList
      data={cardData}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Icon name={item.icon} size={24} color={item.color} />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
          <Text style={styles.cardValue}>{item.value}</Text>
        </View>
      )}
    />
  );
};