import { View, Text } from 'react-native'
import React from 'react'

interface Props {
    heading: string;
    subheading: string;
    color1: string;
    color2: string;
    color3: string;
    buttonText: string
}

const Box = ({heading, subheading , color1, color2 , color3, buttonText} : Props) => {
    return (
        <View>
              <View className='bg-[#EEECF2] mt-10 rounded-lg p-5 flex flex-col gap-5 items-center justify-between'>
          <View className='flex flex-row items-center gap-5'>
            <View>
              <Text className="text-xl font-bold  text-gray-800">{heading ? heading : "How much do you want to repay?"}</Text>
              <Text className='text-[#9c9c9c]'>{subheading ? subheading : "something account things.. "}</Text>
            </View>
            <View className='bg-[#F2906B] px-4 py-2 rounded-full'>
              <Text className='text-white '>{buttonText ? buttonText : "Apply Now"}</Text>
            </View>
          </View>

          <View className='py-2 flex flex-row gap-5 items-center justify-between'>
                <View className={`${color1} px-6 py-3 rounded-full`}>
                    <Text className='text-white font-semibold'>
                        SCBIA
                    </Text>
                </View>
                <View className={` ${color2} px-6 py-3 rounded-full`}>
                    <Text className='text-white font-semibold'>
                        SCBIA
                    </Text>
                </View>
                <View className={`${color3} px-6 py-3 rounded-full`}>
                    <Text className='text-white font-semibold'>
                        SCBIA
                    </Text>
                </View>
            </View>
        </View>

        </View>
    )
}

export default Box