import { render, fireEvent } from '@testing-library/react';
import Grid from './Grid';

describe('Grid', () => {
  it('should display the data passed as props', () => {
    const data = [
      {
        id: 1,
        type: 'testType1',
        status: 'testStatus1'
      },
      {
        id: 2,
        type: 'testType2',
        status: 'testStatus2'
      }
    ];
    const { getByText } = render(<Grid data={data} />);

    expect(getByText('testType1')).toBeInTheDocument();
    expect(getByText('testStatus1')).toBeInTheDocument();
    expect(getByText('testType2')).toBeInTheDocument();
    expect(getByText('testStatus2')).toBeInTheDocument();
  });

  it('should call the toggleModal function with the correct capsule data when a capsule is clicked', () => {
    const data = [
      {
        id: 1,
        type: 'testType1',
        status: 'testStatus1'
      },
      {
        id: 2,
        type: 'testType2',
        status: 'testStatus2'
      }
    ];
    const toggleModal = jest.fn();
    const { getByText } = render(<Grid data={data} toggleModal={toggleModal} />);

    fireEvent.click(getByText('testType1'));
    expect(toggleModal).toHaveBeenCalledWith(data[0]);
  });
});