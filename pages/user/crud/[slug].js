import Layout from '../../../components/Layout'
import Private from '../../../components/Auth/Private'
import BlogUpdate from '../../../components/crud/BlogUpdate.js'


import Link from 'next/link'

const  Blog =()=> {
    return (
        <Layout>
            <Private>
                <div className ="row">
                    <div className="col-md-12 pt-5 pb-5">
                         <h1>Update blogs</h1>
                    </div>
                    <div className="col-md-12">
                        <BlogUpdate />
                        
                    </div>
                </div>
            </Private>
        </Layout>
    );
  };
  
  export default Blog;