import React from 'react'
import Modal from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

const appEl = document.getElementById('app')
const modal = (
  <Modal {...data}>
    <button>This button should not close the modal</button>
    <button onClick={Modal.close}>Close modal</button>
  </Modal>
)
const openModal = () => Modal.open(modal)
// override the server render
React.render(
  <div>
    <button onClick={openModal}>Open modal</button>
    {new Array(1e4).join('content ')}
  </div>
, appEl)

// open the modal to start
openModal()
