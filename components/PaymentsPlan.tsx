import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Define TypeScript interfaces
interface PaymentPlanItem {
  emi: string;
  duration: string;
  title: string;
  subtitle: string;
  tag?: 'recommended'; // Optional field for recommended plans
}

interface PaymentPlansBody {
  title: string;
  subtitle: string;
  items: PaymentPlanItem[];
  footer: string;
}

interface OpenState {
  body: PaymentPlansBody;
}

interface ClosedState {
  body: {
    key1: string;
    key2: string;
  };
}

interface Item {
  open_state: OpenState;
  closed_state: ClosedState;
  cta_text: string;
}

interface PaymentPlansProps {
  data: Item;
  buttonFunction: () => void; // Add buttonFunction to props
}

// Define styles
const styles = StyleSheet.create({
  recommendedContainer: {
    position: 'absolute',
    top: -12,
    right: 16,
  },
  recommendedBadge: {
    backgroundColor: '#f97316',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
  },
  recommendedText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  planContainer: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  planContainerRecommended: {
    borderColor: '#fb923c',
    backgroundColor: '#ffedd5',
  },
  planContainerDefault: {
    borderColor: '#e5e7eb',
    backgroundColor: '#fff',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  emiText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  durationText: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  subtitleText: {
    fontSize: 14,
    color: '#4b5563',
  },
  footerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 24,
  },
  noPlansText: {
    color: '#6b7280',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  footerButton: {
    backgroundColor: '#1f2937',
    alignItems: 'center',
    paddingVertical: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 8,
  },
  footerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

const PaymentPlans: React.FC<PaymentPlansProps> = ({ data, buttonFunction }) => {
  const { open_state } = data;
  const { body } = open_state;

  const handlePlanPress = (item: PaymentPlanItem) => {
    console.log('Selected plan:', item);
    // Add your logic here
  };

  const renderItem = ({ item }: { item: PaymentPlanItem }) => (
    <TouchableOpacity
      onPress={() => handlePlanPress(item)}
      accessible={true}
      accessibilityLabel={`Payment plan: ${item.emi} for ${item.duration}`}
      accessibilityRole="button"
      style={[
        styles.planContainer,
        item.tag === 'recommended'
          ? styles.planContainerRecommended
          : styles.planContainerDefault,
      ]}
    >
      {item.tag === 'recommended' && (
        <View style={styles.recommendedContainer}>
          <View style={styles.recommendedBadge}>
            <Text style={styles.recommendedText}>Recommended</Text>
          </View>
        </View>
      )}

      <View style={styles.planHeader}>
        <Text style={styles.emiText}>{item.emi}</Text>
        <Text style={styles.durationText}>{item.duration}</Text>
      </View>

      <Text style={styles.subtitleText}>{item.subtitle}</Text>
    </TouchableOpacity>
  );

  const renderFooter = () => (
    <TouchableOpacity onPress={buttonFunction} style={styles.footerButton}>
      <Text style={styles.footerButtonText}>{body.footer}</Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={{ marginBottom: 24 }}>
      <Text style={styles.headerTitle}>{body.title}</Text>
      <Text style={styles.subtitleText}>{body.subtitle}</Text>
    </View>
  );

  if (!data || !body.items || body.items.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.noPlansText}>No payment plans available.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <FlatList
        contentContainerStyle={{ padding: 16 }}
        data={body.items}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.emi}-${item.duration}`}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PaymentPlans;