import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { mockAxios } from '../Utils/mockAxios';

import Register from '../Components/Register';

jest.mock('axios');

describe('Register Component', () => {
  it('handles form submission', async () => {
    const mockNavigate = jest.fn();
    (axios.post as jest.Mock).mockResolvedValue(
      mockAxios(200, {}, {
        Server: 'mock-server',
        'Content-Type': 'application/json',
        'Content-Length': '0',
        'Cache-Control': 'no-cache',
        'Content-Encoding': 'gzip',
      })
    );

    render(<Register />);
    
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText('Register'));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });
});
