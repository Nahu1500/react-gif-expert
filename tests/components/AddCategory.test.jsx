import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory.jsx', () => {
    
    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Hola'}});
    
        // screen.debug();

        expect(input.value).toBe('Hola');
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Hola';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
    
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        // screen.debug();
        fireEvent.submit(form);
        // screen.debug();

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar el OnNewCategory si el input esta vacío', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
    
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: ''}});
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});