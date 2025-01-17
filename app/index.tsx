import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import walletImg from "../assets/images/wallet.png";

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

    return (
        <GestureHandlerRootView className="flex-1 bg-white h-screen w-full items-center flex-col">
            <View className='px-2 mt-10 py-10 h-full w-full'>
                <View className="rounded-lg px-4">
                    <Text className="text-4xl font-bold text-gray-800">How you want to repay your loan</Text>
                    <Text className="text-xl p-4 text-zinc-500">
                        something about the loan.
                    </Text>
                </View>

                <View className='bg-[#EEECF2] mt-10 rounded-2xl p-5 flex flex-col gap-5 items-center justify-between'>
                    <View className='flex flex-row items-center gap-5'>
                        <View>
                            <Text className="text-xl font-bold text-gray-800  ">How much do you want to repay?</Text>
                            <Text className='text-[#9c9c9c] text-xl py-2'>something account things.. </Text>
                        </View>
                        <View className='bg-[#F2906B] px-4 py-2 rounded-full'>
                            <Text className='text-white'>SignUp</Text>
                        </View>
                    </View>

                    <View className='py-2 flex flex-row gap-5 items-center justify-between'>
                        <View className='bg-[#1a1919] px-6 py-3 rounded-full'>
                            <Text className='text-white font-semibold'>
                                SCBIA
                            </Text>
                        </View>
                        <View className='bg-white px-6 py-3 rounded-full'>
                            <Text className='text-black font-semibold'>
                                SCBIA
                            </Text>
                        </View>
                        <View className='bg-[#F2906B] px-6 py-3 rounded-full'>
                            <Text className='text-black font-semibold'>
                                SCBIA
                            </Text>
                        </View>
                    </View>
                </View>

                <View className='bg-[#EEECF2] mt-5 rounded-2xl p-5 flex flex-col gap-5 items-center justify-between'>
                    <View className='flex flex-row items-center gap-5'>
                        <View>
                            <Text className="text-xl font-bold text-gray-800  ">How much do you want to repay?</Text>
                            <Text className='text-[#9c9c9c] text-xl py-2'>something account things.. </Text>
                        </View>
                        <View className='bg-[#F2906B] px-4 py-2 rounded-full'>
                            <Text className='text-white'>SignUp</Text>
                        </View>
                    </View>

                    <View className='py-2 flex flex-row gap-5 items-center justify-between'>
                        <View className='bg-[#F2906B] px-6 py-3 rounded-full'>
                            <Text className='text-white font-semibold'>
                                SCBIA
                            </Text>
                        </View>
                        <View className='bg-white px-6 py-3 rounded-full'>
                            <Text className='text-black font-semibold'>
                                SCBIA
                            </Text>
                        </View>
                        <View className='bg-white px-6 py-3 rounded-full'>
                            <Text className='text-black font-semibold'>
                                SCBIA
                            </Text>
                        </View>
                    </View>
                </View>

                <View className='bg-[#EEECF2] mt-5 rounded-2xl p-2 flex flex-col gap-5 items-center justify-between'>
                    <View className='flex flex-row items-center gap-5'>
                        <View>
                            <Text className="text-xl font-bold text-gray-800  ">How much do you want to repay?</Text>
                            <Text className='text-[#9c9c9c] text-xl py-2'>something account things.. </Text>
                        </View>
                        <View className='bg-[#fffbfa] px-4 py-2 rounded-full'>
                            <Text className='text-[#F2906B]'>SignUp</Text>
                        </View>
                    </View>

                    <View className='py-2 flex flex-row gap-5 items-center justify-between'>
                        <View className='bg-white px-6 py-3 rounded-full'>
                            <Text className='text-black text-2xl font-semibold'>
                                +
                            </Text>
                        </View>
                        <View className='bg-white px-6 py-3  rounded-full'>
                            <Text className='text-black text-2xl font-semibold'>
                                +
                            </Text>
                        </View>
                        <View className='bg-white px-6 py-3  rounded-full'>
                            <Text className='text-black text-2xl font-semibold'>
                                +
                            </Text>
                        </View>
                        <View className='bg-white px-6 py-3 rounded-full'>
                            <Text className='text-black font-semibold'>
                                SCBIA
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="w-full flex mt-10 items-center justify-center">
                    <TouchableOpacity onPress={handleFirstOpenPress} className="py-4 px-8 rounded-full bg-zinc-900">
                        <Text className="text-white text-3xl text-center font-semibold">
                            Complete something
                        </Text>
                    </TouchableOpacity>
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
                    <View className="w-full flex flex-col gap-5 p-2">
                        {/* Content for the first bottom sheet */}
                        <View className="flex flex-row items-center justify-between gap-2 bg-[#F4F5F5] p-4 rounded-xl">
                            <View className="flex flex-row items-center gap-5">
                                <View className="bg-[#E57183] rounded-full p-4 flex items-center justify-center">
                                    <Text className="text-lg text-white font-semibold">SBI</Text>
                                </View>
                                <View className="flex flex-col items-start p-1">
                                    <Text className="text-xl text-zinc-900 font-semibold">Some bank name.. idk</Text>
                                    <Text className="text-zinc-600 text-md">Entry in the bank idk.. </Text>
                                </View>
                            </View>
                            <View className="">
                                <Image source={walletImg} resizeMode="contain" className="w-6 h-6 " />
                            </View>
                        </View>
                        <View className="flex flex-row items-center justify-between gap-2 bg-[#F4F5F5] p-4 rounded-xl">
                            <View className="flex flex-row items-center gap-5">
                                <View className="bg-[#6A75D1] rounded-full p-4 flex items-center justify-center">
                                    <Text className="text-lg text-white font-semibold">SBI</Text>
                                </View>
                                <View className="flex flex-col items-start p-1">
                                    <Text className="text-xl text-zinc-900 font-semibold">Some bank name.. idk</Text>
                                    <Text className="text-zinc-600 text-md">Entry in the bank idk.. </Text>
                                </View>
                            </View>
                            <View className="">
                                <Image source={walletImg} resizeMode="contain" className="w-6 h-6 " />
                            </View>
                        </View>
                        <View className="flex flex-row items-center justify-between gap-2 bg-[#F4F5F5] p-4 rounded-xl">
                            <View className="flex flex-row items-center gap-5">
                                <View className="bg-[#6A75D1] rounded-full p-4 flex items-center justify-center">
                                    <Text className="text-lg text-white font-semibold">SBI</Text>
                                </View>
                                <View className="flex flex-col items-start p-1">
                                    <Text className="text-xl text-zinc-900 font-semibold">Some bank name.. idk</Text>
                                    <Text className="text-zinc-600 text-md">Entry in the bank idk.. </Text>
                                </View>
                            </View>
                            <View className="">
                                <Image source={walletImg} resizeMode="contain" className="w-6 h-6 " />
                            </View>
                        </View>

                        {/* Button to open the second bottom sheet */}
                        <View className="w-full flex flex-row items-center justify-center mt-10">
                            <TouchableOpacity onPress={handleSecondOpenPress} className="w-full py-4 px-2 flex items-center justify-center rounded-xl bg-zinc-900">
                                <Text className="text-zinc-100 text-2xl font-semibold">
                                    Choose your bank
                                </Text>
                            </TouchableOpacity>
                        </View>
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