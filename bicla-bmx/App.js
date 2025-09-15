import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';


export default function App() {
 
  return (
    <>
      <StatusBar style="light" />
      <Header title="Bicla Bmx" />
      <CategoriesScreen />
    </>
  );
}
      

const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#fff',
    
  //},
});
//clase 4_0:55:00