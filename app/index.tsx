import React, { useCallback, useRef, useMemo, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import walletImg from "@/assets/images/wallet.png";
import { data } from "../constants/dummyData"
import { LinearGradient } from 'expo-linear-gradient';
import { CreditCard, DollarSign } from 'lucide-react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PaymentPlans from "@/components/PaymentsPlan";
const App = () => {
    // hooks
    const firstSheetRef = useRef<BottomSheet>(null);
    const secondSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ["10%", "25%", "50%"], []);
    const secondSnapPoints = useMemo(() => ["20%", "40%"], []);

    // callbacks for the first bottom sheet
    const handleFirstSheetChange = useCallback((index: string) => {
        console.log("First Sheet Index:", index);
    }, []);
    const handleFirstOpenPress = useCallback(() => {
        firstSheetRef.current?.snapToIndex(2); // Open the first bottom sheet
    }, []);
    const handleFirstClosePress = useCallback(() => {
        firstSheetRef.current?.close(); // Close the first bottom sheet
    }, []);

    // callbacks for the second bottom sheet
    const handleSecondSheetChange = useCallback((index: string) => {
        console.log("Second Sheet Index:", index);
    }, []);
    const handleSecondOpenPress = useCallback(() => {
        secondSheetRef.current?.snapToIndex(2); // Open the second bottom sheet
    }, []);
    const handleSecondClosePress = useCallback(() => {
        secondSheetRef.current?.close(); // Close the second bottom sheet
    }, []);

    // backdrop for both sheets
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


    useEffect(() => {
        // console.log("data", data)
        console.log("data.items", data.items[2]);

    }, [])

    const formatCurrency = (amount: number | any) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(amount);
    };



    return (
        <GestureHandlerRootView className="flex-1 bg-white h-screen w-full items-center flex-col">
            <View className="flex-1 bg-white">
                <View className="mt-10 py-6 h-full w-full px-4">
                    {/* Header Section */}
                    <View className="rounded-lg px-2 mt-8">
                        <Text className="text-3xl font-bold text-gray-800 capitalize leading-tight">
                            {data.items[0].open_state.body.title}
                        </Text>
                        <Text className="text-lg mt-3 text-gray-500 leading-relaxed">
                            {data.items[0].open_state.body.subtitle}
                        </Text>
                    </View>

                    {/* Credit Card Section */}
                    <View className="mb-8 mx-4">
                        <LinearGradient
                            colors={['#ffffff', '#f8f8f8']}
                            className="mt-10 p-4 border-[2px] border-zinc-300 rounded-lg overflow-hidden"
                        // style={{
                        //     shadowColor: '#000',
                        //     shadowOffset: { width: 0, height: 6 },
                        //     shadowOpacity: 0.12,
                        //     shadowRadius: 16,
                        //     elevation: 8,
                        // }}
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
                                    {formatCurrency(data.items[0].open_state.body.card?.max_range)}
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
                                            {data.items[0].open_state.body.card?.description}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text className="text-gray-600 font-medium mb-2 text-lg">
                                            Min Amount
                                        </Text>
                                        <Text className="text-gray-800 font-bold text-2xl">
                                            {formatCurrency(data.items[0].open_state.body.card?.min_range)}
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
                                            {data.items[0].open_state.body?.footer}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>

                    {/* CTA Button */}
                    <View className="w-full mt-auto mb-8">
                        <TouchableOpacity
                            onPress={handleFirstOpenPress}
                            className="py-5 rounded-2xl w-full bg-gray-900 active:bg-gray-800"
                        >
                            <Text className="text-white text-xl text-center font-bold">
                                {data.items[0].cta_text}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* First Bottom Sheet */}
            <BottomSheet
                ref={firstSheetRef}
                index={-1} // Initially closed
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <View className="w-full h-full flex flex-col gap-5 p-2">
                        <PaymentPlans data={data?.items[1]} buttonFunction={handleSecondOpenPress} />
                    </View>
                </BottomSheetView>
            </BottomSheet>

            {/* Second Bottom Sheet */}
            <BottomSheet
                ref={secondSheetRef}
                index={-1} // Initially closed
                snapPoints={secondSnapPoints}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <View className="w-full flex flex-col gap-5 p-2">
                        {/* Content for the second bottom sheet */}
                        <View className="flex flex-row items-center justify-between gap-2 bg-[#F4F5F5] p-4 rounded-xl">
                            <View className="flex flex-row items-center gap-5">
                                <View className="bg-[#6A75D1] rounded-full p-4 flex items-center justify-center">
                                    <Text className="text-lg text-white font-semibold">SBI</Text>
                                </View>
                                <View className="flex flex-col items-start p-1">
                                    <Text className="text-xl text-zinc-900 font-semibold">Another bank name.. idk</Text>
                                    <Text className="text-zinc-600 text-md">Another entry in the bank idk.. </Text>
                                </View>
                            </View>
                            <View className="">
                                <Image source={walletImg} resizeMode="contain" className="w-6 h-6 " />
                            </View>
                        </View>

                        {/* Button to close the second bottom sheet */}
                        <View className="w-full flex flex-row items-center justify-center mt-10">
                            <TouchableOpacity onPress={handleSecondClosePress} className="w-full py-4 px-2 flex items-center justify-center rounded-xl bg-zinc-900">
                                <Text className="text-zinc-100 text-2xl font-semibold">
                                    Close Second Bottom Sheet
                                </Text>
                            </TouchableOpacity>
                        </View>
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