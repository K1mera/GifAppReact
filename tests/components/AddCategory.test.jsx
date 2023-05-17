import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'



    describe('Testing AddCategory component', () => { 

        test('should change the value on the textBox', () => { 
            render( <AddCategory onNewCategory={ () => {} } /> );
            const input = screen.getByRole('textbox');

            fireEvent.input( input, { target: { value: 'Jinx' } });
            // screen.debug()
            expect( input.value ).toBe( 'Jinx' )
        })

        test('should call onNewCategory if input has a value', () => { 
            const inputValue = 'Jinx';
            // TODO

            render(<AddCategory onNewCategory={ () => { } } />);
            const input = screen.getByRole('textbox');
            const form = screen.getByRole('form');

            fireEvent.input( input, { target: { value: inputValue } });
            fireEvent.submit( form );

            expect( input.value ).toBe( '' );
                
         })
    })