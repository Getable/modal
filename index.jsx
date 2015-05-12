import React, {PropTypes, Component} from 'react'
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

  static open (modalInstance){
    if (process.browser){
      if (!document.getElementById('modal-container')){
        const container = document.createElement('div')
        container.id = container
        document.body.appendChild(container)
      }
      React.render(modalInstance, document.getElementById(container))
    }
  }
  static close (e){
    if (process.browser){
      if (e.target.classList.contains('modal-container')){
        React.unmountComponentAtNode(document.getElementById(container))
      }
    }
  }

  render (){
    return (
      <div className={container} onClick={ Modal.close }>
        <div className={namespace} role="alertdialog" aria-describedby="removed">
          {this.props.children}
        </div>
      </div>
    )
  }

}

Modal.propTypes = {
  // code to make the linter stfu ._.
  children: PropTypes.any
}
