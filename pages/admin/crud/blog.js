import Layout from '../../../components/Layout'
import Admin from '../../../components/Auth/Admin'
import CreateBlog from '../../../components/crud/CreateBlog.js'


import Link from 'next/link'

const  Blog =()=> {
    return (
        <Layout>
            <Admin>
                <div className ="row">
                    <div className="col-md-12 pt-5 pb-5">
                         <h1>Manage blogs</h1>
                    </div>
                    <div className="col-md-12">
                        <CreateBlog />
                        
                    </div>
                </div>
            </Admin>
        </Layout>
    );
  };
  
  export default Blog;