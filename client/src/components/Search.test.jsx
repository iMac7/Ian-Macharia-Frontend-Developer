import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from './Search'

describe('searchbar', () => {
    test('type renders correctly', () => {
        render(<Search />)
        const typeInput = screen.getByPlaceholderText('filter by type')
        expect(typeInput).toBeInTheDocument()
    })
    test('status renders correctly', () => {
        render(<Search />)
        const statusInput = screen.getByPlaceholderText('filter by status')
        expect(statusInput).toBeInTheDocument()
    })
})