import * as React from 'react';
import {render, screen} from '@testing-library/react-native';
import HomeScreen from '../../../src/screens/HomeScreen/HomeScreen';

describe('Test for HomeScreen', () => {
  it('should be render correctly the screen', async () => {
    render(<HomeScreen />);
    const homeTest = await screen.queryByTestId('homeTest');
    expect(homeTest).toBeDefined();
  });
});
