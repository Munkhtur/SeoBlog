import Layout from '../components/Layout'
import SigninComponent from '../components/Auth/SigninComponent'
import {withRouter} from 'next/router'

const  Signin =({router})=> {

    const showRedirectMessage = ()=>{
        if(router.query.message){
        return <div className="alert alert-danger">{router.query.message}</div>
        }
        return
    }

    return (
        <Layout>
            <h2 className ="text-center pt-4 pb-4">Sign in</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                {showRedirectMessage()}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <SigninComponent />
                </div>
            </div>
        </Layout>
    );
  };
  
  export default withRouter(Signin);