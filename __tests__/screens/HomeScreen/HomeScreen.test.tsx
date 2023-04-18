import React from 'react';
import {render, screen} from '@testing-library/react-native';
import HomeScreen from '../../../src/screens/homeScreen/homeScreen';

describe('Test for HomeScreen', () => {
  it('should be render correctly the screen', () => {
    render(<HomeScreen />);
    const homeTest = screen.queryByTestId('homeTest');
    expect(homeTest).toBeDefined();
  });
});
