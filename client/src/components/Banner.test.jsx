import {render, screen} from '@testing-library/react'
import Banner from './Banner'

test('landing page renders', () => {
    render(<Banner />)
    const text = screen.getByText(/spacex/i)
    expect(text).toBeInTheDocument()
})