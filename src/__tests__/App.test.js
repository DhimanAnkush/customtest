import { render, screen } from "@testing-library/react";
import App from '../App'

test("Fake assertion", () => {
  expect(1).toBe(1);
});

describe('<App/>', () => {
  test('render input', () => {

    const inputEl = screen.getAllByTestId('input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'text')
  });

  
})

