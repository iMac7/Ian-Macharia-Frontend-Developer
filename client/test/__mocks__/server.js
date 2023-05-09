import { setupServer } from 'msw/node'
import { rest } from 'msw'

const handlers =  [
    rest.get('http://localhost/spacex/server.php', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                docs: [
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
                ],
                page: 1,
                totalPages: 1
            })
        );
    })
]

export const server = setupServer(...handlers)