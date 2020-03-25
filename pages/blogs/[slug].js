import Head from 'next/head'
import Link from 'next/link'
import{withRouter} from 'next/router'
import Layout from '../../components/Layout'
import {useState, useEffect} from 'react'
import {singleBlog, listRelated} from '../../actions/blog'
import {API, DOMAIN, APP_NAME} from '../../config'
import { Router } from 'next/router'
import renderHtml from 'react-render-html'
import moment from 'moment'
import SmallCard from '../../components/blog/SmallCard'
import DisqusThread from '../../components/DisqusThread'

const SingleBlog = ({blog, query}) =>{
    const [related, setRelated] = useState([])

    const loadRelated = ()=>{
        listRelated({ blog }).then(data =>{
            if(data.error){
                console.log(data.error)
            }else{
                setRelated(data)
            }
        })
    }

    useEffect (()=>{
        loadRelated()
    },[])
    const head =()=>(
        <Head>
            <title>{blog.title} | {APP_NAME}</title>
            <meta name="description" content={blog.mdesc}/>
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`}/>
            <meta property="og:title" content={`${blog.title} | ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            {/* <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:iamge:secure_url" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="image/jpg" /> */}
        </Head>
    )
    const showBlogCategories = blog =>
        blog.categories.map((c, i)=>(
        <Link key={i} href={`/categories/${c.slug}`}>
            <a className ="btn btn-primary mx-1 mt-3">{c.name}</a>
        </Link>
        ));
    

    const showBlogTags = blog =>
        blog.tags.map((t, i)=>(
        <Link key={i} href={`/tags/${t.slug}`}>
            <a className ="btn btn-outline-primary mx-1 mt-3">{t.name}</a>
        </Link>
        ));

    const showRelatedBlogs = () =>{
        return related.map((r, i ) =>(
            <div className="col-md-4" key={i}>
                <article>
                    <SmallCard blog = {r}/>
                </article>
            </div>
        ))
    }

    const showComments =()=>{
        return(
            <div>
                <DisqusThread id={blog._id} title={blog.title} path={`/blogs/${blog.slug}`} />
            </div>
        )
    }
    return <>
        {head()}
        <Layout>
            <main>
                <article>
                    <div className="container-fluid">
                        <section className ="section1">
                            <div className="row" style={{marginTop: '-30px'}}>
                                <img src ={`${API}/blog/photo/${blog.slug}`} alt ={blog.title} className = "img img-fluid featured-image" />
                            </div>
                        </section>
                        <section>
                        <div className="container">
                            <h1 className="display-2 py-3 text-center font-weight-bold">{blog.title}</h1>
                            <p className ="lead mt-3 mark">
                            Written by <Link href={`profile/${blog.postedBy.username}`}><a>{blog.postedBy.username} </a></Link>| Published {moment(blog.updatedAt).fromNow()}
                            </p>

                            <div className="pt-3">
                            {showBlogCategories(blog)}
                             {showBlogTags(blog)}
                        <br/>
                            </div>
                        </div>
                        </section>
                    </div>
                    <div className="container ">
                        <section>
                          <div className="col-md-12 lead">{renderHtml(blog.body)}</div>
                        </section>
                    </div>

                    <div className="container pb-5">
                        <h4 className ="text-center py-5 h2">Related Blogs</h4>
                        <hr />
                        <div className="row">{showRelatedBlogs()}</div>
                    </div>
                    <div className="container pb-5">
                        {showComments()}
                    </div>
                </article>
            </main>
        </Layout>
    </>
}

SingleBlog.getInitialProps=({query})=>{
    return singleBlog(query.slug).then(data =>{
        if(data.error){
            console.log(data.error)
        }else{
            return {blog: data, query}
        }
    })
}
export default SingleBlog