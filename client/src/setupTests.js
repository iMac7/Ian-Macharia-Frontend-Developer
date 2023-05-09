import '@testing-library/jest-dom';
// import fetch from 'node-fetch'
// const fetch = require('node-fetch')

// global.fetch = fetch

import { server } from '../test/__mocks__/server'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
