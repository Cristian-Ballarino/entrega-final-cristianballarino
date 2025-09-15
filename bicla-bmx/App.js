import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';


export default function App() {
 
  return (
    <>
      <StatusBar style="light" />
      <Header title="Bicla Bmx" />
      <ProductsScreen />
    </>
      
  );
}
      

const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#fff',
    
  //},
});
//clase 4_1:05:00