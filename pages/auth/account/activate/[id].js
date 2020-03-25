import {useState, useEffect} from 'react'
import Layout from '../../../../components/Layout'
import {forgotPassword, resetPassword} from '../../../../actions/auth'
import {withRouter} from 'next/router'
import {signup} from '../../../../actions/auth'
import jwt from 'jsonwebtoken'
import Link from 'next/link'


const ActivateAccount  = ({router})=>{
    const [values, setValues] = useState({
        name: '',
        token:'', 
        loading: false,
        error: '',
        success: false,
        showButton: true
    })

    const {name, token, error, loading, success, showButton } = values

    useEffect(()=>{
        let token = router.query.id
        console.log(token)
        if(token){
            const {name}= jwt.decode(token) 
            setValues({...values, name, token})
         }
    }, [router])

    const clickSubmit = e=>{
        e.preventDefault()
        setValues({...values, error: '', loading: true})
        signup({token}).then(data=>{
            if(data.error){
                setValues({...values, error: data.error, loading: false, showButton: false})
            }else{
                setValues({...values, loading: false, success: true, showButton: false})
            }
        })
    }

    const showLoading =()=> (loading ? <h2>Loading</h2> : '')
    const showSuccess = ()=>(success ? <h3>You have signed successfully, please sign in <a href = "/signin">here</a></h3>  : '')

    return (
        <Layout>
            <div className="contain">
                <h3 className="pb-4">Hey {name}, activate your account here </h3>
                {showLoading()}
                {error && error}
                {showSuccess()}
                {showButton && <button className="btn btn-primary" onClick={clickSubmit}>Activate account</button>   }
            </div>
        </Layout>
    )

}

export default withRouter(ActivateAccount)

