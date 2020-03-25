import Layout from '../../components/Layout'
import Private from '../../components/Auth/Private'
import Link from 'next/link'
import ProfileUpdate from '../../components/Auth/ProfileUpdate'

const  UserProfileUpdate =()=> {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className ="row">
                        <ProfileUpdate />
                    </div>
                </div>
            </Private>
        </Layout>
    );
  };
  
  export default UserProfileUpdate;