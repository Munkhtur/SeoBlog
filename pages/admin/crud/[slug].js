import Layout from '../../../components/Layout'
import Admin from '../../../components/Auth/Admin'
import BlogUpdate from '../../../components/crud/BlogUpdate.js'


import Link from 'next/link'

const  Blog =()=> {
    return (
        <Layout>
            <Admin>
                <div className ="row">
                    <div className="col-md-12 pt-5 pb-5">
                         <h1>Update blogs</h1>
                    </div>
                    <div className="col-md-12">
                        <BlogUpdate />
                        
                    </div>
                </div>
            </Admin>
        </Layout>
    );
  };
  
  export default Blog;