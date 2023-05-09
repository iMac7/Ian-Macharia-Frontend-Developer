import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from './Search'

describe('searchbar', () => {
    test('search inputs render correctly', () => {
        render(<Search />)
        const typeInputs = screen.getAllByRole('textbox')
        expect(typeInputs).toHaveLength(2)
    })
})