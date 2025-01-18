import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';

// Format currency in USD
const formatCurrency = (amount: number | any) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(amount);
};

// Render small cards in a grid
export const RenderSmallCards = () => {
    // Dummy data filled directly based on the provided JSON
    const cardData = [
        {
            title: "Interest Rate",
            value: "@1.04% monthly", // Using description from card data
            icon: "percent",
            color: "#ED8936",
        },
        {
            title: "Min Amount",
            value: formatCurrency(500), // Using min_range from card data
            icon: "attach-money",
            color: "#4A5568",
        },
        {
            title: "Max Amount",
            value: formatCurrency(487891), // Using max_range from card data
            icon: "credit-card",
            color: "#38A169",
        },
        {
            title: "Instant Transfer",
            value: "Within seconds", // Using footer text
            icon: "flash-on",
            color: "#4299E1",
        },
        {
            title: "EMI Plan 1",
            value: "₹4,247 /mo for 12 months", // Using the first EMI plan
            icon: "payment",
            color: "#D53F8C",
        },
        {
            title: "EMI Plan 2",
            value: "₹5,580 /mo for 9 months", // Using the second EMI plan
            icon: "payment",
            color: "#38A169",
        }
    ];

    return (
        <FlatList
            data={cardData}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View className="flex-1 m-2 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                    <View className="flex-row items-center space-x-3">
                        <Icon name={item.icon} size={24} color={item.color} />
                        <Text className="text-lg font-semibold text-gray-800">{item.title}</Text>
                    </View>
                    <Text className="text-2xl font-bold text-gray-900 mt-2">{item.value}</Text>
                </View>
            )}
        />
    );
};
