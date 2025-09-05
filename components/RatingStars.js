import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function RatingStars({ rating, onRate, readonly }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <View style={styles.ratingContainer}>
      {stars.map((star) => (
        <Pressable
          key={star}
          onPress={() => !readonly && onRate(star)}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <Ionicons
            name={rating >= star ? 'star' : 'star-outline'}
            size={24}
            color="#FFD700"
          />
        </Pressable>
      ))}
    </View>
  );
}

export default RatingStars;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  pressed: {
    opacity: 0.7,
  },
});
