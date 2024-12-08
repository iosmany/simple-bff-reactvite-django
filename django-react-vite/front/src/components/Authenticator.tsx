import { Suspense, useEffect, useState } from "react"


function Authenticated() {
    return (
        <div>
            
        </div>
    )
}

export const Authenticator = () => {

    const [user, setUser] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const login = async () => {
            const response = await fetch('/account/claims?slice=false', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setUser(data.claims)
                setIsAuthenticated(true)
                setLoading(false)
            } else {
                console.log('Login failed')
                setLoading(false)
                window.location.href = '/account/login'
            }
        }
        login()
    },[]);


    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {loading ? <div>Loading...</div> : isAuthenticated ? <Authenticated /> : <div>Not authenticated</div>}
            </Suspense>
        </div>
    )

}