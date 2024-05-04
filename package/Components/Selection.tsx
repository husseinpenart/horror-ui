import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Layout from '../../components/Global-Horror/Global/Views/Layout';
import CheckBox from '../../components/Global-Horror/Global/selections/CheckBox';
import Radio from '../../components/Global-Horror/Global/selections/Radio';
import RadioButtons from '../../components/Global-Horror/Global/selections/RadioButtons';
import RadioButton from '../../components/Global-Horror/Global/selections/RadioButtons';
import Toggle from '../../components/Global-Horror/Global/selections/Toggle';

const Selection = () => {
  const [music, setMusic] = useState(false);
  const [dancing, setDancing] = useState(false);
  const [reading, setReading] = useState(false);
  const [pricing , setPricing] = useState(0)

  const price = [
    {
      name: 100,
      id: 1,
    },
    {
      name: 200,
      id: 2,
    },
    {
      name: 300,
      id: 3,
    },
  ];
  return (
    <>
    <Layout style={{flexDirection: 'row' ,flexWrap:'wrap'}}>
      <CheckBox
        onPress={() => setMusic(!music)}
        title="Music"
        isChecked={music}
        icons={<Text>icon</Text>}
      />
      <CheckBox
        onPress={() => setDancing(!dancing)}
        title="Dancing"
        isChecked={dancing}
        size={25}
        color="red"
      />
      <CheckBox
        onPress={() => setReading(!reading)}
        title="Reading"
        isChecked={reading}
        size={25}
        color="red"
      />
      {price.map((e, i) => (
        <Radio
        key={i}
        title={e.name}
        onPress={() => setPricing(e.id)}
        selected={e.id === pricing}
        />
      ))}
   
    </Layout>
      {price.map((e, i) => (
        <RadioButton
        label={e.name}
        key={i}
        selected={pricing === e.id}
        onSelect={() => setPricing(e.id)}
        />
      ))}
      <Toggle 
      trackColor={{false:'red', true:'green'}}
      thumbColor='red'
      value={'huuu'}
      
      />
    </>
  );
};

export default Selection;
