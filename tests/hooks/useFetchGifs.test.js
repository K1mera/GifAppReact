import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { waitFor, renderHook } from '@testing-library/react';


describe('testing useFetchGifs ', () => { 
    test('should return initial state', () => {
        const { result } = renderHook( () => useFetchGifs( 'League of Legends' ) );
        const { images, loading } = result.current; // { images: [], loading: true }

        expect( images ).toEqual( [] );
        expect( loading ).toBeTruthy();
    })
    
    test('should return an array of images and loading false', async() => {
        const { result } = renderHook(() => useFetchGifs('League of Legends'));

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, loading } = result.current; // { images: [], loading: true }

        expect( images.length ).toBeGreaterThan( 0 );
        expect( loading ).toBeFalsy();
    
    });

})