import React, { useState } from 'react'; // Import React explicitly
import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest';
import App from '../App';

test('has red button and changes background color to red on click', () => {
  render(<App />);
  
  // Get the red button
  const redButton = screen.getByText('red');
  
  // Assert the red button is in the document
  expect(redButton).toBeInTheDocument();
  
  // Simulate a click on the red button
  fireEvent.click(redButton);
  
  // Assert that the background color has changed to red
  const background = document.querySelector('div'); // Select the background div
  expect(background).toHaveStyle('background-color: red');
});
