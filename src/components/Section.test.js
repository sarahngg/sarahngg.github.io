import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from './Section';

it('Section renders properly', () => {
  const title = "Some topic";
  const description = "Some descriptive words";
  render(
  <Section title={title} description={description} />);
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(description)).toBeInTheDocument();
});

// it('Section displays properly with content list', () => {
//   const title = "Some topic";
//   const description = "Some descriptive words";
//   render(
//   <Section title={title} description={description} />);
//   expect(screen.getByText(title)).toBeInTheDocument();
//   expect(screen.getByText(description)).toBeInTheDocument();
// });