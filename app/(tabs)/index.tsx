import { Image, StyleSheet, Platform, SafeAreaView, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';
import Box from '@/components/Box';

export default function HomeScreen() {
  return (
    <SafeAreaView className="px-5 h-screen bg-zinc-100">
      <View className='px-5 mt-10 py-10'>
        <View className="rounded-lg ">
          <Text className="text-4xl font-bold text-gray-800">How the want to repay your loan</Text>
          <Text>
            something about the loan.
          </Text>
        </View>


        <View className='bg-[#EEECF2] mt-10 rounded-lg p-5 flex flex-col gap-5 items-center justify-between'>
          <View className='flex flex-row items-center gap-5'>
            <View>
              <Text className="text-xl font-bold  text-gray-800">How much do you want to repay?</Text>
             <Text className='text-[#9c9c9c]'>something account things.. </Text>
            </View>
            <View className='bg-[#F2906B] px-4 py-2 rounded-full'>
              <Text className='text-white '>SignUp</Text>
            </View>
          </View>

          <View className='py-2 flex flex-row gap-5 items-center justify-between'>
            <View className='bg-[#1a1919] px-6 py-3 rounded-full'>
              <Text className='text-white font-semibold'>
                SCBIA
              </Text>
            </View>
            <View className='bg-whi px-6 py-3 rounded-full'>
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

        <View className='bg-[#EEECF2] mt-5 rounded-lg p-5 flex flex-col gap-5 items-center justify-between'>
          <View className='flex flex-row items-center gap-5'>
            <View>
              <Text className="text-xl font-bold  text-gray-800">How much do you want to repay?</Text>
              <Text className='text-[#9c9c9c]'>something account things.. </Text>
            </View>
            <View className='bg-[#F2906B] px-4 py-2 rounded-full'>
              <Text className='text-white '>SignUp</Text>
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

        <View className='bg-[#EEECF2] mt-5 rounded-lg p-5 flex flex-col gap-5 items-center justify-between'>
          <View className='flex flex-row items-center gap-5'>
            <View>
              <Text className="text-xl font-bold  text-gray-800">How much do you want to repay?</Text>
              <Text className='text-[#9c9c9c]'>something account things.. </Text>
            </View>
            <View className='bg-[#fffbfa] px-4 py-2 rounded-full'>
              <Text className='text-[] '>SignUp</Text>
            </View>
          </View>
c
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

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
