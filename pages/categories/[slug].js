import Head from 'next/head'
import Link from 'next/link'
import{withRouter} from 'next/router'
import Layout from '../../components/Layout'
import {useState, useEffect} from 'react'
import {getCategory} from '../../actions/category'
import {API, DOMAIN, APP_NAME} from '../../config'
import { Router } from 'next/router'
import renderHtml from 'react-render-html'
import moment from 'moment'
import Card from '../../components/blog/Card'

const Category = ({category, blogs})=>{
    return (
        <>
            <Layout>
                <main>
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 pt-3">
                                  <div className="display-4 font-weight-bold text-center">{category.name}</div>
                                  {blogs.map((b, i)=>(
                                      <div>
                                          <Card key={i} blog={b}/>
                                          <hr />
                                      </div>

                                  ))}
                            </div>
                        </header>
                    </div>
                </main>
            </Layout>
        </>
    )
}

Category.getInitialProps =({query})=>{
    return getCategory(query.slug).then(data=>{
        if(data.error){
            console.log(data.error)
        }else{
            return {category: data.category, blogs: data.blogs}
        }
    })
}

export default Category

