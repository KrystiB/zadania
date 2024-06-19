import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Shopping Cart', () => {
    test('renders initial cart state', () => {
        render(<App />);
        expect(screen.getByText('Koszyk sklepowy')).toBeInTheDocument();
        expect(
            screen.getByText('Słonecznik - Cena: 10 zł - Ilość: 1 - Suma: 10')
        ).toBeInTheDocument();
        expect(screen.getByText('Suma wartości w koszyku: 10 zł')).toBeInTheDocument();
    });
});
