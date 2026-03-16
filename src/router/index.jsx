// React Router Configuration > createBrowserRouter setup

import { createBrowserRouter } from 'react-router-dom'
import App from '@/App.jsx'
import HomePage from '@/pages/HomePage.jsx'

const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/restaurants',
                element: <RestaurantsPage />
            }
        ]
    }





])

export default router;