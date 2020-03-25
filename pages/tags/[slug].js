import Head from 'next/head'
import Link from 'next/link'
import{withRouter} from 'next/router'
import Layout from '../../components/Layout'
import {useState, useEffect} from 'react'
import {getTag} from '../../actions/tag'
import {API, DOMAIN, APP_NAME} from '../../config'
import { Router } from 'next/router'
import renderHtml from 'react-render-html'
import moment from 'moment'
import Card from '../../components/blog/Card'

const Tag = ({tag, blogs})=>{
    return (
        <>
            <Layout>
                <main>
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 pt-3">
                                  <div className="display-4 font-weight-bold text-center">{tag.name}</div>
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

Tag.getInitialProps =({query})=>{
    return getTag(query.slug).then(data=>{
        if(data.error){
            console.log(data.error)
        }else{
            return {tag: data.tag, blogs: data.blogs}
        }
    })
}

export default Tag

