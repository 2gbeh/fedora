import React, {PropsWithChildren} from 'react';
import {View, Text, Button} from 'react-native';

type PropsType = PropsWithChildren<{
  next?: () => void;
}>;

const Temp: React.FC<PropsType> = ({children, next}) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      flex: 1,
    }}>
    <Text>{children}</Text>
    {next ? <Button title="Next" onPress={next} /> : null}
  </View>
);

export default React.memo(Temp);
