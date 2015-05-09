import React from 'react'
import Modal from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

React.render(<Modal {...data} />, document.getElementById('app'))
