import { render, screen } from '@testing-library/react'
import { GifItem } from "../../src/components/GifItem"




describe('gifItem test', () => { 

    const title = 'Menudo title'
    const url = 'https://melasuda/todo.jpg'

    test('should match the snapshot', () => { 
        const { container } = render(<GifItem title={ title } url={ url } /> )
        expect( container ).toMatchSnapshot();
     })

    test('should return the img src and the alt attributes', () => {
        render(<GifItem title={ title } url={url} />);
        // expect(screen.getByRole('img').src).toBe( url );
        // expect(screen.getByRole('img').alt).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(src);
        expect(alt).toBe(alt);  
    });

    test('should return the proper title given as prop', () => { 
        render(<GifItem title={ title } url={ url }/>);
        expect( screen.getByText( title )).toBeTruthy;
     });
     
 })

