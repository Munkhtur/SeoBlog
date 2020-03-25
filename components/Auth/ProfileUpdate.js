import Link from 'next/link'
import {useState, useEffect} from 'react'
import Router from 'next/router'
import {getCookie, isAuth, updateUser} from '../../actions/auth'
import {getProfile, update } from '../../actions/user'
import {API} from '../../config'

const ProfileUpdate = () =>{
    const [values, setValues] = useState({
        username: '',
        email:'',
        name:'',
        password:'',
        error: false,
        success: false,
        loading : false,
        photo: '',
        userData: '',
        about: ''
    })

    const token = getCookie('token')
    const {username, email, name, password, error, success, loading, photo, userData, about} = values

    const init = () =>{
        getProfile(token).then(data =>{
            if(data.error){
                setValues({...values, error: data.error})
            }else{
                setValues({...values, username: data.username, name:data.name, email: data.email, about: data.about})
            }

        })
    }
    useEffect(()=>{
        init()
    },[])

    const handleChange = name => e =>{
        // console.log(e.target.value)
        let value = name === 'photo' ? e.target.files[0] : e.target.value 
       let userFormData = new FormData()
        userFormData.set(name, value)
        setValues({...values, [name]: value, userData: userFormData, error: false, success:false})

    }
    const handleSubmit = e =>{
        e.preventDefault()
        setValues({...values, loading: true})
        update(token, userData).then(data =>{
            if(data.error){
                setValues({...values, error: data.error, success:false, loading:false})
            }else{
                updateUser(data, ()=>{
                    setValues({...values, name: data.name, username: data.username, email: data.email, about: data.about, success:true, loading:false})
                })
            }
        })
    }

    const profileUpdateForm = () =>{
        return (

            <form onSubmit={handleSubmit}>
            <div className="form-group">
                     <label className="btn btn-outline-info">Profile Photo
                            <input onChange={handleChange('photo')}type="file" accept="image/*" hidden/>
                         </label>
                            </div>
            <div className="form-group">
                <lable className="text-muted">Username</lable>
                <input onChange={handleChange('username')} value={username} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">Name</lable>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">email</lable>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">About</lable>
                <input onChange={handleChange('about')} value={about} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">Password</lable>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control"/>
            </div>
            <div>
                <button type="submit"className="btn btn-primary">Submit</button>
            </div>
        </form>
            )
    }
    const showLoading = () =>(
        <div className ="alert alert-info" style={{display: loading? '' : 'none'}}>Loading ... </div>
        );
        const showError = () =>(
         <div className ="alert alert-danger" style={{display: error? '' : 'none'}}>{error}</div>
            );
        const showSuccess = () =>(
         <div className ="alert alert-info" style={{display: success? '' : 'none'}}>Profile updated</div>
            );

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img 
                            src={`${API}/user/photo/${username}`}
                            className ="img img-fluid img-thumbnail mb-3"
                            style={{maxHeight: 'auto', maxWidth: '100%'}}
                            alt="user profile"
                        />

                   
                    </div>

                    <div className="col-md-8">
                        {showError()}
                        {showLoading()}
                        {showSuccess()}
                        {profileUpdateForm()}
                    </div>
                </div>
            </div>
        </>
    )


}

export default ProfileUpdate