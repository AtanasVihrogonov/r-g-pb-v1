import React from 'react'
import Layout from '../components/Layout'

// News Letter Page is the layout page
const NewsLetter = () => {
  return (
    <Layout>
      <section className='newsletter-page'>
        <div className="page-center">
          <h2>Get all latest stories to your inbox</h2>
          <h4>I write to my digital friends every few weeks.</h4>
          <form className='contact-form'>
            <input type="text" name='name' placeholder='Your name' className='form-control' />
            <input type="email" name='email' placeholder='Your email' className='form-control' />
            <button type='submit' className='btn form-control submit-btn'>subscribe</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
