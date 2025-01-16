import { SafeAreaView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
      <SafeAreaView className="px-5 flex items-center h-screen bg-zinc-100 relative">
        <View className='px-5 mt-10 py-10 h-full w-full'>
          <View className="rounded-lg">
            <Text className="text-4xl font-bold text-gray-800">How the want to repay your loan</Text>
            <Text className="text-xl p-4 text-zinc-500">
              something about the loan.
            </Text>
          </View>

          <View className='bg-[#EEECF2] mt-10 rounded-lg p-5 flex flex-col gap-5 items-center justify-between'>
            <View className='flex flex-row items-center gap-5'>
              <View>
                <Text className="text-2xl font-bold text-gray-800  ">How much do you want to repay?</Text>
                <Text className='text-[#9c9c9c] text-2xl py-2'>something account things.. </Text>
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

          <View className='bg-[#EEECF2] mt-5 rounded-lg p-5 flex flex-col gap-5 items-center justify-between'>
            <View className='flex flex-row items-center gap-5'>
              <View>
                <Text className="text-2xl font-bold text-gray-800  ">How much do you want to repay?</Text>
                <Text className='text-[#9c9c9c] text-2xl py-2'>something account things.. </Text>
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

          <View className='bg-[#EEECF2] mt-5 rounded-xl p-2 flex flex-col gap-5 items-center justify-between'>
            <View className='flex flex-row items-center gap-5'>
              <View>
                <Text className="text-2xl font-bold text-gray-800  ">How much do you want to repay?</Text>
                <Text className='text-[#9c9c9c] text-2xl py-2'>something account things.. </Text>
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

          <View className="w-full py-8 px-4 rounded-full absolute bottom-12 left-0  bg-zinc-900">
            <Text className="text-white text-center font-semibold">
              Compelete something
            </Text>
          </View>
        </View>
      </SafeAreaView>
  );
}