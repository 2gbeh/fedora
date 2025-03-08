import React from 'react';
import {ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {API_BASE_URL} from '@env';
//
import Highlight from '@/components/atoms/Highlight';
import {Section} from '@/components/organisms/home';
import {homeStyles as s} from './styles';

function HomeScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // RENDER
  return (
    <View style={s.dynamic({isDarkMode}).container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      <ScrollView style={s.dynamic({isDarkMode}).content}>
        <View style={s.static.header}>
          <Header />
        </View>
        <View style={s.dynamic({isDarkMode}).main}>
          <Section title="Step One">
            Edit <Highlight>{API_BASE_URL}</Highlight> to change this screen and
            then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
