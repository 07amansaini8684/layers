import React, { useCallback, useRef, useMemo, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PaymentPlans from "@/components/PaymentsPlan";
import { RenderSmallCards } from "@/components/SmallCards";
import LoadingState from "@/components/LoadingState";

// Define types for the API response
type CardDetails = {
    header: string;
    description: string;
    max_range: number;
    min_range: number;
};

type OpenStateBody = {
    title: string;
    subtitle: string;
    card?: CardDetails;
    footer?: string;
    items?: Array<{
        emi?: string;
        duration?: string;
        title?: string;
        subtitle?: string;
        tag?: string;
        icon?: string;
    }>;
};

type ClosedStateBody = {
    key1?: string;
    key2?: string;
};

type Item = {
    open_state: {
        body: OpenStateBody;
    };
    closed_state: {
        body: ClosedStateBody;
    };
    cta_text: string;
};

type ApiResponse = {
    items: Item[];
};

const App: React.FC = () => {
    // State to store fetched data
    const [apiData, setApiData] = useState<ApiResponse | null>(null);

    // Refs for bottom sheets
    const firstSheetRef = useRef<BottomSheet>(null);
    const secondSheetRef = useRef<BottomSheet>(null);

    // Snap points for bottom sheets
    const snapPoints = useMemo(() => ["10%", "25%", "50%", "60%"], []);
    const secondSnapPoints = useMemo(() => ["20%", "40%", "50%"], []);

    // Callbacks for opening/closing bottom sheets
    const handleFirstOpenPress = useCallback(() => {
        firstSheetRef.current?.snapToIndex(3);
    }, []);

    const handleSecondOpenPress = useCallback(() => {
        secondSheetRef.current?.snapToIndex(3);
    }, []);

    const handleSecondClosePress = useCallback(() => {
        secondSheetRef.current?.close();
    }, []);

    // Backdrop for bottom sheets
    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
            />
        ),
        []
    );

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.mocklets.com/p6764/test_mint');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: ApiResponse = await response.json();
                setApiData(data); // Store fetched data in state
            } catch (error) {
                console.error('Error while fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Render loading state if data is not yet fetched
    if (!apiData) {
        return (
           <LoadingState/>
        );
    }

    return (
        <GestureHandlerRootView className="flex-1 bg-white h-screen w-full items-center flex-col">
            <View className="flex-1 bg-white">
                <View className="mt-5 py-6 h-full w-full px-4">
                    {/* Header Section */}
                    <View className="rounded-lg px-2 mt-8">
                        <Text className="text-3xl font-bold text-gray-800 capitalize leading-tight">
                            {apiData.items[0].open_state.body.title}
                        </Text>
                        <Text className="text-lg mt-3 text-gray-500 leading-relaxed">
                            {apiData.items[0].open_state.body.subtitle}
                        </Text>
                    </View>

                    {/* Credit Card Section */}
                    <View className="mb-8 mx-4">
                        <LinearGradient
                            colors={['#ffffff', '#f8f8f8']}
                            className="mt-10 p-4 border-[2px] border-zinc-200 rounded-lg overflow-hidden"
                        >
                            {/* Header Section */}
                            <View className="flex-row justify-between items-center mb-8">
                                <View className="flex-row items-center space-x-3">
                                    <Icon name="credit-card" size={28} color="#4A5568" />
                                    <Text className="text-gray-700 text-2xl font-semibold">
                                        Credit Amount
                                    </Text>
                                </View>
                                <View className="bg-orange-50 rounded-full p-3 w-12 h-12 items-center justify-center">
                                    <Icon name="attach-money" size={24} color="#ED8936" />
                                </View>
                            </View>

                            {/* Range Section */}
                            <View className="mb-8">
                                <Text className="text-5xl font-bold text-gray-800">
                                    {formatCurrency(apiData.items[0].open_state.body.card?.max_range || 0)}
                                </Text>
                                <Text className="text-orange-500 font-semibold mt-3 text-lg">
                                    Maximum Available
                                </Text>
                            </View>

                            {/* Details Section */}
                            <View className="bg-orange-50 rounded-2xl p-6">
                                <View className="flex-row justify-between items-start">
                                    <View>
                                        <Text className="text-gray-600 font-medium mb-2 text-lg">
                                            Interest Rate
                                        </Text>
                                        <Text className="text-orange-500 font-bold text-2xl">
                                            {apiData.items[0].open_state.body.card?.description}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text className="text-gray-600 font-medium mb-2 text-lg">
                                            Min Amount
                                        </Text>
                                        <Text className="text-gray-800 font-bold text-2xl">
                                            {formatCurrency(apiData.items[0].open_state.body.card?.min_range || 0)}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* Additional Info Section */}
                            <View className="mt-8">
                                <View className="flex-row items-center space-x-3">
                                    <Icon name="info" size={24} color="#4A5568" />
                                    <View className="flex-row items-center w-full flex-wrap">
                                        <Text className="text-gray-600 text-lg">
                                            {apiData.items[0].open_state.body?.footer}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>

                    {/* Small Cards Grid */}
                    <View className="mt-2">
                        <RenderSmallCards />
                    </View>

                    {/* CTA Button */}
                    <View className="w-full mt-auto mb-8">
                        <TouchableOpacity
                            onPress={handleFirstOpenPress}
                            className="py-5 rounded-2xl w-full bg-gray-900 active:bg-gray-800"
                        >
                            <Text className="text-white text-xl text-center font-bold">
                                {apiData.items[0].cta_text}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* First Bottom Sheet */}
            <BottomSheet
                ref={firstSheetRef}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <View className="w-full h-full flex flex-col gap-5 p-2">
                        <PaymentPlans data={apiData.items[1]} buttonFunction={handleSecondOpenPress} />
                    </View>
                </BottomSheetView>
            </BottomSheet>

            {/* Second Bottom Sheet */}
            <BottomSheet
                ref={secondSheetRef}
                index={-1}
                snapPoints={secondSnapPoints}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <View className="w-full flex flex-col gap-5 p-2">
                        {/* Render bank account selection */}
                        {apiData.items.map((item, index) => {
                            if (index === 2) {
                                return (
                                    <View key={index} className="p-4">
                                        <View>
                                            <Text className="text-2xl font-bold text-zinc-900">{item.open_state.body.title}</Text>
                                            <Text className="text-lg text-zinc-600 mt-2">{item.open_state.body.subtitle}</Text>

                                            {/* Render bank account options */}
                                            {item.open_state.body.items?.map((account, accountIndex) => (
                                                <View key={accountIndex} className="flex flex-row items-center my-4">
                                                    <View className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center">
                                                        <Text className="text-lg">{"🏦"}</Text>
                                                    </View>
                                                    <View className="ml-4">
                                                        <Text className="text-lg font-semibold text-zinc-900">{account.title}</Text>
                                                        <Text className="text-zinc-600">{account.subtitle}</Text>
                                                    </View>
                                                </View>
                                            ))}

                                            {/* Footer */}
                                            <Text className="text-zinc-600 text-lg mt-4 text-center border-[1px] py-4 p-2 rounded-full">{item.open_state.body.footer}</Text>
                                        </View>

                                        {/* Button to close the second bottom sheet */}
                                        <View className="w-full flex flex-row items-center justify-center mt-10">
                                            <TouchableOpacity
                                                onPress={handleSecondClosePress}
                                                className="w-full py-4 px-2 flex items-center justify-center rounded-xl bg-zinc-900"
                                            >
                                                <Text className="text-white text-2xl font-semibold">
                                                    {apiData.items[2].cta_text}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                );
                            }
                            return null;
                        })}
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 36,
        alignItems: 'center',
    },
});

export default App;