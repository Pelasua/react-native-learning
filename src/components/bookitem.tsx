import { Text, View, StyleSheet } from "react-native";
import { Book } from "../../data/data-books";
import TextItem from './TextItem'

type Props = {
  book: Book;
};

const Bookitem = (props: Props) => {
  const book = props.book;
  return (
    <View style={styles.container}>
      <TextItem style={["blue", "text", 'bold']} text={`Title: ${book.title}`}></TextItem>
      <TextItem text={`Author: ${book.author}`}></TextItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  strong: {
    fontWeight: 'bold',
  }
});

export default Bookitem;
