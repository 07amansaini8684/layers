import React, { useEffect, useRef } from "react";
import { View, ActivityIndicator, Animated } from "react-native";

const LoadingState = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View style={{ opacity: fadeAnim }} className="flex-1 justify-center items-center bg-white">
            <View className="w-full px-4">
                {/* Placeholder for Header */}
                <View className="rounded-lg px-2 mt-8">
                    <View className="h-10 w-3/4 bg-gray-200 rounded-lg mb-4" />
                    <View className="h-6 w-full bg-gray-200 rounded-lg" />
                </View>

                {/* Placeholder for Credit Card Section */}
                <View className="mt-10 p-4 border-[2px] border-zinc-200 rounded-lg overflow-hidden">
                    <View className="flex-row justify-between items-center mb-8">
                        <View className="flex-row items-center space-x-3">
                            <View className="w-10 h-10 bg-gray-200 rounded-full" />
                            <View className="h-8 w-32 bg-gray-200 rounded-lg" />
                        </View>
                        <View className="w-12 h-12 bg-gray-200 rounded-full" />
                    </View>

                    <View className="mb-8">
                        <View className="h-16 w-48 bg-gray-200 rounded-lg" />
                        <View className="h-6 w-32 bg-gray-200 rounded-lg mt-3" />
                    </View>

                    <View className="bg-orange-50 rounded-2xl p-6">
                        <View className="flex-row justify-between items-start">
                            <View>
                                <View className="h-6 w-24 bg-gray-200 rounded-lg mb-2" />
                                <View className="h-8 w-32 bg-gray-200 rounded-lg" />
                            </View>
                            <View>
                                <View className="h-6 w-24 bg-gray-200 rounded-lg mb-2" />
                                <View className="h-8 w-32 bg-gray-200 rounded-lg" />
                            </View>
                        </View>
                    </View>

                    <View className="mt-8">
                        <View className="flex-row items-center space-x-3">
                            <View className="w-6 h-6 bg-gray-200 rounded-full" />
                            <View className="h-6 w-48 bg-gray-200 rounded-lg" />
                        </View>
                    </View>
                </View>

                {/* Placeholder for Small Cards Grid */}
                <View className="mt-8">
                    <View className="flex-row justify-between">
                        <View className="h-24 w-24 bg-gray-200 rounded-lg" />
                        <View className="h-24 w-24 bg-gray-200 rounded-lg" />
                        <View className="h-24 w-24 bg-gray-200 rounded-lg" />
                    </View>
                </View>

                {/* Placeholder for CTA Button */}
                <View className="w-full mt-8">
                    <View className="h-16 w-full bg-gray-200 rounded-2xl" />
                </View>
            </View>

            {/* Activity Indicator */}
            <ActivityIndicator size="large" color="#ED8936" className="mt-8" />
        </Animated.View>
    );
};

export default LoadingState;