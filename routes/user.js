import express from 'express'
import passport from 'passport'
import { logout, refresh } from '../controllers/userController.js'

const router = express.Router()

router.post('/logout', logout)
router.get('/refresh', refresh)
router.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
)
router.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: process.env.CLIENT_URL,
    })
)

export default router
