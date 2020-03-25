import Layout from '../../components/Layout'
import Private from '../../components/Auth/Private'
import Link from 'next/link'

const  UserIndex =()=> {
    return (
        <Layout>
            <Private>
            <div className ="row">
                    <div className="col-md-12 pt-5 pb-5">
                         <h1>User Dashboard</h1>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-group">
                            <li className="list-group-item">
                                    <a href="/user/crud/blog">Create blog</a>
                            </li>
                            <li className="list-group-item">
                            
                                    <a href="/user/crud/blogs">Update / Delete Blogs</a>
                             
                            </li>

                            <li className="list-group-item">
                                <Link href="/user/update">
                                    <a>Update profile</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8">
                            right
                    </div>
                </div>
            </Private>
        </Layout>
    );
  };
  
  export default UserIndex;