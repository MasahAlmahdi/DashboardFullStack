import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { mockAxios } from '../Utils/mockAxios';

import Login from '../Components/Login';

jest.mock('axios');

describe('Login Component', () => {
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

    render(<Login />);
    
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });
});
