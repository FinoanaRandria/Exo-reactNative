import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import data from "../data";



const ProductListScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {data.map((item) => {
          
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate("Details", { product: item })}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 20,
                  width: 390,
                  height: 150,
                  borderWidth: 1,
                  borderColor: "#ddd",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    backgroundColor: item.couleur,
                    width: 170,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                   <Image source={item.images}
                      style={{width:100, height:100}}
                    />
                </View>
                <View style={{ width: 220, padding: 10 }}>
                  <Text style={{ fontSize: 20, textAlign: "center" }}>{item.model}</Text>
                  <Text style={{ textAlign: "center" }}>{item.marque}</Text>
                  <Text style={{ fontSize: 10, textAlign: "center" }}>{item.description}</Text>
                  <Text style={{ textAlign: "center" }}>Price: {item.prix}$</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "auto",
    backgroundColor: "white",
  },
});

export default ProductListScreen;
