export const logout = async (req, res) => {
    try {
        if (req.user) {
            req.logout((err) => {
                if (err) {
                    throw Error('Error occured while logging out')
                }
                res.end()
            })
        } else {
            res.end()
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const refresh = async (req, res) => {
    try {
        if (req.user) {
            console.log(req.user)
            res.end()
        } else {
            throw Error('User is not authorized')
        }
    } catch (error) {
        res.status(401).json({
            error: error?.message ? error.message : 'Error occured',
        })
    }
}
