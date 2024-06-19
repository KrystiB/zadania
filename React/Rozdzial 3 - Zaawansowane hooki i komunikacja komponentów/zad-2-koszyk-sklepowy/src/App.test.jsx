import React from 'react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest'
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Shopping Cart', () => {
    it('renders initial cart state', () => {
        render(<App />);
        expect(screen.getByText('Koszyk sklepowy')).toBeInTheDocument();
        expect(
            screen.getByText('Słonecznik - Cena: 10 zł - Ilość: 1 - Suma: 10')
        ).toBeInTheDocument();
        expect(screen.getByText('Suma wartości w koszyku: 10 zł')).toBeInTheDocument();
    });
    it('adds an item to the cart', () => {
        render(<App/>);

        fireEvent.change(screen.getByPlaceholderText('Nazwa przedmiotu'), {target: {value: 'Jabłko'}})
        fireEvent.change(screen.getByPlaceholderText('Cena produktu'), {target: {value: '5'}})
        fireEvent.change(screen.getByPlaceholderText('Ilość produktu'), {target: {value: '3'}})

        fireEvent.click(screen.getByText('Dodaj przedmiot'));

        expect(screen.getByText('Jabłko - Cena: 5 zł - Ilość: 3 - Suma: 15')).toBeInTheDocument();
        expect(screen.getByText('Suma wartości w koszyku: 25 zł')).toBeInTheDocument();
    })
});
