import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'

export class Input extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <form>
            <input type="text" placeholder="search a song"></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default (Input)
