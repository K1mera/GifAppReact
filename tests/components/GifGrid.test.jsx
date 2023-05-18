import { GifGrid } from "../../src/components/gifGrid";
import { render, screen } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs'); 

describe('testing GifGrid component', () => { 

    const category = 'League of Legends';

    test('sould show the loading first', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            loading: true,
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getByText('Loading...') )
        expect( screen.getByText( category ) );
 }); 

 test('should show items when get loads from use fetch gifs', () => { 
    //  render(<GifGrid category={category} />);
        const gifs = [{ 
                id: 'ABC',
                title: 'Jinx',
                url: 'https://localhost:3000'
            },
                {
                    id: 'AB D',
                    title: 'Vi',
                    url: 'https://localhost:3000'
                },
        ]; 
    
    useFetchGifs.mockReturnValue({
         images: gifs,
         loading: false,
     });

     render(<GifGrid category={category} />);
     expect( screen.getAllByRole('img').length ).toBe(2);

  })
});

