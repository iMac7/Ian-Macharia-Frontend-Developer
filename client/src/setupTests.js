import '@testing-library/jest-dom';

import { server } from '../test/__mocks__/server'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
