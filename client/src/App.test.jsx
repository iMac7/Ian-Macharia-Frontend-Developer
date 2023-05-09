import App from './App'
import { render } from '@testing-library/react'
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

describe('App', () => {
    it('should display the data returned by the API', async () => {
    const { findByText } = render(<App />);

    expect(await findByText('testType1')).toBeInTheDocument();
    expect(await findByText('testStatus1')).toBeInTheDocument();
    expect(await findByText('testType2')).toBeInTheDocument();
    expect(await findByText('testStatus2')).toBeInTheDocument();
});})