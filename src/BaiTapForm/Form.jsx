import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
  render() {
    return (
      <div>
        <h3 className='bg-dark'>Thông tin sinh viên</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(Form)