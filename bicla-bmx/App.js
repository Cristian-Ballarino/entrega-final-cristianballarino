import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import { useState } from 'react';


export default function App() {
  const [categorySelected, setCategorySelected] = useState("")
 
  return (
    <>
       <StatusBar style="light" />
      {
        categorySelected
        ?
     <>
       <Header title="Bicla Bmx" subtitle="Productos" />
       <ProductsScreen category={categorySelected} />
     </>
    :  
     <>
      <Header title="Bicla Bmx" subtitle="Categorias" />
      <CategoriesScreen setCategorySelected={setCategorySelected} />
    </>
     }

    </>
  );
}
      

const styles = StyleSheet.create({
});

//clase 4_1:05:00