import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';

describe ('App', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

  const AddButton = screen.getByText("Add +");
  expect(AddButton).toBeInTheDocument();

  fireEvent.click(AddButton);

  const AddBookText = screen.getByText("Add Book");
  expect(AddBookText).toBeInTheDocument();
  });

});
