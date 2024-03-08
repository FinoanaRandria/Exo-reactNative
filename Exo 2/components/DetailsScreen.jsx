import React from "react";
import { View, Text ,Image} from "react-native";

const DetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View >
       <View style={{backgroundColor:product.couleur , height:340, justifyContent:'center', alignItems:'center'}}>
            
       <Image source={product.images}
                      style={{width:150, height:150}}
                    />
       </View>
         <View style={{justifyContent: "center", alignItems:'center', backgroundColor:"white", borderRadius:20, position:'relative', bottom:15}}>
         <Text style={{fontSize:20, fontWeight:'200'}}>Details Screen</Text>
      <Text>Model: {product.model}</Text>
      <Text>Marque: {product.marque}</Text>
      <Text style={{margin:20}}>Description: {product.description}</Text>
      <Text>Price: {product.prix}$</Text>
      
         </View>
    </View>
  );
};

export default DetailsScreen;
