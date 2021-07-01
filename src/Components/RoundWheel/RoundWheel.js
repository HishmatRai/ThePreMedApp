// import React, { Component } from 'react'
// import WheelOfFortune from 'react-native-wheel-of-fortune'
// import { View, Text, TouchableOpacity } from 'react-native';

// const RoundWheel = () => {
//   const rewards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   return (
//     <View>
//       <WheelOfFortune
//         onRef={ref => (this.child = ref)}
//         rewards={rewards}
//         knobSize={20}
//         borderWidth={3}
//         borderColor={"#FFF"}
//         winner={3}
//         innerRadius={50}
//         backgroundColor={"#c0392b"}
//         getWinner={(value, index) => this.setState({ winnerValue: value, winnerIndex: index })}
//       />
//       <TouchableOpacity onPress={() => { this.child._onPress() }}>
//         <Text>Click</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default RoundWheel;