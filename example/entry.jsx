import React from 'react'
import Modal from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

Modal.open(<div><Modal {...data}><button>This button should not close the modal</button></Modal></div>)
