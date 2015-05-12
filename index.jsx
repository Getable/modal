import React, {Component} from 'react'
import {addons} from 'react/addons'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'modal'
const container = `${namespace}-container`

export default class Modal extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  static open (modalInstance) {
    if (process.browser){
      if (!document.getElementById(container)){
        const containerEl = document.createElement('div')
        containerEl.id = container
        document.body.appendChild(containerEl)
      }
      React.render(modalInstance, document.getElementById(container))
    }
  }
  static close (e) {
    if (process.browser){
      const isModalContainer = e
        ? e.target.classList.contains(container)
        : true

      if (isModalContainer){
        React.unmountComponentAtNode(document.getElementById(container))
      }
    }
  }

  render () {
    return (
      <div className={container} onClick={ Modal.close }>
        <div className={namespace} role="alertdialog" aria-describedby="removed">
          {/* eslint-disable react/prop-types */}
          {this.props.children}
          {/* eslint-enable react/prop-types */}
        </div>
      </div>
    )
  }
}

