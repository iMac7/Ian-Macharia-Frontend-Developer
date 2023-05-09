import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal'

describe('Modal', () => {

  test('should call the toggleModal function when the modal is clicked', () => {
    const toggleModal = jest.fn()
    const { getByTestId } = render(<Modal toggleModal={toggleModal} />)

    fireEvent.click(getByTestId('modal'))
    expect(toggleModal).toHaveBeenCalled()
  })
})