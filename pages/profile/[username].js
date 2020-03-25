import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import {userPublicProfile} from '../../actions/user'
import {API, DOMAIN, APP_NAME} from '../../config'
import { Router } from 'next/router'
import moment from 'moment'
import ContactFrom from '../../components/form/ContactForm'

const userProfile = ({user, blogs })=>{

    const showUserBlogs = ()=>{
        return blogs.map((blog, i )=>{ 
            return (
                <div key={i} className="my-4">
                    <Link href={`/blogs/${blog.slug}`}><a className ="lead">{blog.title}</a></Link>
                </div>
            )
        })
    }
    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="row">
                                    <div className ="col-md-8">
                                    <h5>{user.name}</h5>
                                <p className="text-muted">Joined {moment(user.createdAt).fromNow()}</p>
                                    </div>
                                    <div className="col-md-4">
                                    <img 
                                        src={`${API}/user/photo/${user.username}`}
                                        className ="img img-fluid img-thumbnail mb-3 float-right mt-2 mr-2"
                                        style={{maxHeight: '100px', maxWidth: '100%'}}
                                        alt="user profile"
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title bg-primary py-4 px-4">Recent posts by {user.name}</h5>
                                    <br />
                                    {showUserBlogs()}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">

                                <h5 className="card-title bg-primary py-4 px-4">Message {user.name}</h5>
                                <br />
                                <ContactFrom authorEmail={user.email} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

userProfile.getInitialProps =({query})=>{
    return userPublicProfile(query.username).then(data=>{
        if(data.error){
            console.log(data.error)
        }else{
            return {
                user: data.user,
                blogs: data.blogs
            }
        }
    })
}

export default userProfile
