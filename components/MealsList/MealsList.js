import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "./MealItem";

function MealsList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return (
      <MealItem
        // title={itemData.item.title}
        // imageUrl={itemData.item.imageUrl}
        // duration={itemData.item.duration}
        // complexity={itemData.item.complexity}
        // affordability={itemData.item.affordability}
        {...mealItemProps}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={items}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsList;
