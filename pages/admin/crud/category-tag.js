import Layout from '../../../components/Layout'
import Admin from '../../../components/Auth/Admin'
import Category from '../../../components/crud/Category'
import Tag from '../../../components/crud/Tag'

import Link from 'next/link'

const  CategoryTag =()=> {
    return (
        <Layout>
            <Admin>
                <div className ="row">
                    <div className="col-md-12 pt-5 pb-5">
                         <h1>Manage Categories and Tags</h1>
                    </div>
                    <div className="col-md-6">
                        <Category />
                        
                    </div>
                    <div className="col-md-6">
                        <Tag />
                    </div>
                </div>
            </Admin>
        </Layout>
    );
  };
  
  export default CategoryTag;