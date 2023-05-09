import { render, fireEvent } from '@testing-library/react';
import Bottomnav from './Bottomnav';

describe('Bottomnav', () => {
    it('renders the correct number of page buttons', () => {
      const { getAllByRole } = render(
        <Bottomnav page={1} totalPages={5} setPage={() => {}} />
      )
      const buttons = getAllByRole('button');
      expect(buttons).toHaveLength(7); // 5 page buttons + prev and next buttons
    })
  
    it('sets the active class on the current page button', () => {
      const { getByText } = render(
        <Bottomnav page={3} totalPages={5} setPage={() => {}} />
      )
      const button = getByText('3')
      expect(button).toHaveClass('active')
    })
  
    it('calls the setPage function with the correct argument when a page button is clicked', () => {
      const setPage = jest.fn()
      const { getByText } = render(
        <Bottomnav page={1} totalPages={8} setPage={setPage} />
      )
      const button = getByText('3')
      fireEvent.click(button)
      expect(setPage).toHaveBeenCalledWith(3)
    })
        
  })