import { StyleSheet, Text, View, FlatList, } from 'react-native'
import products from '../data/products.json'
import { useEffect, useState } from 'react'

const ProductsScreen = () => {
    const [productsFilteredByCategory,setProductsFilteredByCategory] = useState([])
    useEffect(()=>{
        
    },[])

  return (
    <View>
      <FlatList
      data={products}
      keyExtractor={item=>item.id}
      renderItem={({item})=><Text>{item.title}</Text>}
      />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({})