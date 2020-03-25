import Layout from '../../../components/Layout'
import Private from '../../../components/Auth/Private'
import CreateBlog from '../../../components/crud/CreateBlog.js'


import Link from 'next/link'

const  createBlog =()=> {
    return (
        <Layout>
            <Private>
                <div className ="row">
                    <div className="col-md-12 pt-5 pb-5">
                         <h1>Manage blogs</h1>
                    </div>
                    <div className="col-md-12">
                        <CreateBlog />
                        
                    </div>
                </div>
            </Private>
        </Layout>
    );
  };
  
  export default createBlog;