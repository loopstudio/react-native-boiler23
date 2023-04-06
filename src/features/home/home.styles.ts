import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fontSizes.xlarge,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default styles;
