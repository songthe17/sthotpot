import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [count, setCount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleOptionPress = option => {
    setSelectedOption(option);
    setCount(0);
  };

  const handleIncrease = () => {
    if (selectedOption === '1') {
      setCount(count + 1);
    } else if (selectedOption === '2') {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (selectedOption === '1') {
      setCount(count - 1);
    } else if (selectedOption === '2') {
      setCount(count - 1);
    }
  };

  const handleOrder = () => {
    if (selectedOption !== '' && count > 0) {
      const item = {
        option: selectedOption,
        quantity: count,
        value: selectedOption === '1' ? 20 : 10,
      };
      setSelectedItems([...selectedItems, item]);
      setSelectedOption('');
      setCount(0);
    }
  };

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={() => handleOptionPress('1')}>
          <Text>Option 1 (Value: 20)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionPress('2')}>
          <Text>Option 2 (Value: 10)</Text>
        </TouchableOpacity>
      </View>
      {selectedOption !== '' && (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={handleDecrease}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity onPress={handleIncrease}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      )}
      {selectedOption !== '' && (
        <View>
          <TouchableOpacity onPress={handleOrder}>
            <Text>Order</Text>
          </TouchableOpacity>
        </View>
      )}
      {selectedItems.length > 0 && (
        <View>
          <Text>Order Summary:</Text>
          {selectedItems.map((item, index) => (
            <Text key={index}>
              {item.option} x {item.quantity} = {item.value * item.quantity}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Menu;
