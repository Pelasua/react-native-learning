import { Text, StyleSheet, TextStyle } from "react-native";
import { Component } from "react";
import theme from "../themes/basic"

type Props = {
  style?: Array<string>;
  text: string
};

interface Style {
  [key: string]: TextStyle;
}

const textStyles = StyleSheet.create<Style>({
  text: {
    fontSize: theme.fontSizes.body,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  blue: {
    color: theme.colors.secondary,
  },
});

export default class TextItem extends Component<Props> {
  state = {};


  getStyle = (props: Props): Array<TextStyle> | undefined => {
    return props.style && [...props.style].map((style) => textStyles[style]);
  
  };

  render() {
    return <Text style={this.getStyle(this.props)}>{this.props.text}</Text>;
  }
}
