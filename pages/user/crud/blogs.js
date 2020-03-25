import Layout from '../../../components/Layout'
import Private from '../../../components/Auth/Private'
import BlogRead from '../../../components/crud/BlogRead.js'
import {isAuth} from '../../../actions/auth'


import Link from 'next/link'
let username = isAuth() && isAuth().username

const  Blog =()=> {
    return (
        <Layout>
            <Private>
                <div className ="row">
                    <div className="col-md-12 pt-5 pb-5">
                         <h1>Manage blogs</h1>
                    </div>
                    <div className="col-md-12">
                        <BlogRead username ={username}/>
                        
                    </div>
                </div>
            </Private>
        </Layout>
    );
  };
  
  export default Blog;