import Layout from '../../components/Layout'
import Admin from '../../components/Auth/Admin'

import Link from 'next/link'

const  AdminIndex =()=> {
    return (
        <Layout>
            <Admin>
                <div className ="row">
                    <div className="col-md-12 pt-5 pb-5">
                         <h1>Admin Dashboard</h1>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link href="/admin/crud/category-tag">
                                    <a>Create category</a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/admin/crud/category-tag">
                                    <a>Create tags</a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/admin/crud/blog">
                                    <a>Create blog</a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/admin/crud/blogs">
                                    <a>Update / Delete Blogs</a>
                                </Link>
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
            </Admin>
        </Layout>
    );
  };
  
  export default AdminIndex;