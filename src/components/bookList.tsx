import { FlatList, Text, View } from "react-native";
import { BookData } from "../../data/data-books";
import Bookitem from "./bookitem";
type Props = {};

const BookList = (props: Props) => {
  const bookData = new BookData();
  return (
    <FlatList
      data={bookData.books}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: book }) => <Bookitem book={book}></Bookitem>}
    ></FlatList>
  );
};

export default BookList;
