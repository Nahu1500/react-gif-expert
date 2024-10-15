import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid.jsx', () => {

    const category = 'One punch';

    test('Debe de mostrar el loading inicialmente', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={category}/>);

        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('Debe de mostrar items cuando se cargan las imágenes del useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'DEF',
                title: 'Saitama2',
                url: 'https://localhost/saitamaA.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        
        render(<GifGrid category={category}/>);

        // screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});