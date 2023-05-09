import {render, screen} from '@testing-library/react'
import Search from './Search'

// describe('searchbar', () => {
    test('two search inputs render correctly', () => {
        render(<Search />)
        const typeInputs = screen.getAllByRole('textbox')
        expect(typeInputs).toHaveLength(2)
    })
// })