import React, { Component } from 'react'
import PropTypes from 'prop-types'
import loading from './loading.gif'

const Spinner = () => {
 
    return (
      <div className='text-center d-flex justify-content-center align-items-center'>
       <img src={loading} alt="" />
      </div>
    )
}
export default Spinner
