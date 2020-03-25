import Head from 'next/head'
import Link from 'next/link'
import{withRouter} from 'next/router'
import Layout from '../../components/Layout'
import {useState} from 'react'
import {listBlogsCatsTags} from '../../actions/blog'
import Card from '../../components/blog/Card'
import {API, DOMAIN, APP_NAME} from '../../config'
import { Router } from 'next/router'
import { Button, ListGroup } from 'reactstrap'

const Blogs = ({blogs, tags, categories, totalBlogs, blogLimit, blogSkip, router})=>{

    const head =()=>(
        <Head>
            <title>Programming blog | {APP_NAME}</title>
            <meta name="description" content="descriptionof the blog"/>
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>
            <meta property="og:title" content={`${APP_NAME}`} />
            <meta property="og:description" content="description of the blog" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            {/* <meta property="og:image" content={} />
            <meta property="og:iamge:secure_url" content={} />
            <meta property="og:image:type" content={} /> */}
        </Head>
    )

    const [limit, setLimit] = useState(blogLimit)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(totalBlogs)
    const [loadedBlogs, setLoadedBlogs] = useState([])

    const loadMore =()=>{
        let toSkip = skip + limit
        listBlogsCatsTags(toSkip, limit).then(data =>{
            if(data.error){
                console.log(data.error)
            }else{
                setLoadedBlogs([...loadedBlogs, ...data.blogs])
                setSize(data.size)
                setSkip(toSkip)
            }
        })
    } 

    const loadMoreButton =()=>{
        return (
         size > 0 && size >= limit && (<button onClick={loadMore} className="btn btn-outline-primary btn-lg">Load More</button>) 
        )
    }
     const showLoadedBlogs = () =>{
        return loadedBlogs.map((blog, i)=>{
            return <article key={i}>
                <Card blog={blog}/>
                <hr />
            </article>
        }) 
    }


    const showAllBlogs = () =>{
        return blogs.map((blog, i)=>{
            return <article key={i}>
                <Card blog={blog}/>
                <hr />
            </article>
        }) 
    }

    const showAllCats = ()=>{
        return categories.map((c, i)=>(
            <Link href={`categories/${c.slug}`} key={i}>
                <a className = "btn btn-primary mx-1 mt-3">{c.name}</a>
            </Link>
        ))
    }
    const showAllTags = ()=>{
        return tags.map((t, i)=>(
            <Link href={`tags/${t.slug}`} key={i}>
                <a className = "btn btn-outline-primary mx-1 mt-3">{t.name}</a>
            </Link>
        ))
    }

   


    return (
        <>
            {head()}
            <Layout>
            <main>
                <div className="container-fluid">
                    <header>
                        <div className="col-md-12 pt-3">
                            <h1 className="display-4 font-weight-bold text-center">Blog</h1>
                        </div>
                        <section>
                            <div className ="mb-3">
                                {showAllCats()}
                                <br />
                                {showAllTags()}
                            </div>
                        </section>
                    </header>
                </div>
                <div className="container-fluid">{showAllBlogs()} </div>
                <div className="container-fluid">{showLoadedBlogs()} </div>
                <div className="text-center py-5">{loadMoreButton()} </div>
            </main>
        </Layout>
        </>
    )
};

Blogs.getInitialProps = ()=> {
    let skip = 0;
    let limit = 2;
    return listBlogsCatsTags(skip, limit).then(data =>{
        if(data.error){
            console.log(data.error)
        }else{
            return {
                blogs: data.blogs, 
                categories:data.categories, 
                tags: data.tags, 
                totalBlogs: data.size,
                blogLimit: limit,
                blogSkip: skip

            }
        }
    })
}

export default withRouter(Blogs)

