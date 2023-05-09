import { render, fireEvent } from '@testing-library/react'
import Search from './Search'

describe('Search', () => {
  test('should update the type and status values when the inputs change', () => {
    const setType = jest.fn()
    const setStatus = jest.fn()
    const { getByPlaceholderText } = render(<Search setType={setType} setStatus={setStatus} />)

    fireEvent.change(getByPlaceholderText('filter by type'), { target: { value: 'newType' } })
    expect(setType).toHaveBeenCalledWith('newType')

    fireEvent.change(getByPlaceholderText('filter by status'), { target: { value: 'newStatus' } })
    expect(setStatus).toHaveBeenCalledWith('newStatus')
  });
})