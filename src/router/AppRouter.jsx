import React from 'react'
import { PublicRoute } from './PublicRoute'
import { LoginPage } from '../auth/pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { AdminRoutes } from '../kardex/admin/routes/AdminRoutes'
import { AlumnosPage } from '../kardex/admin/pages/AlumnosPage'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute/>
                } />

            </Routes>
        </>
    )
}
