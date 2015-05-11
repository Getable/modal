import React, {PropTypes, Component} from 'react'
import {addons} from 'react/addons'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'modal'

export default class Modal extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  static open (modalInstance){
    if (process.browser){
      if (!document.getElementById('modal-container')){
        let container = document.createElement('div')
        let app = document.getElementById('app')
        container.id = 'modal-container'
        document.body.appendChild(container, app)
      }
      React.render(modalInstance, document.getElementById('modal-container'))
    }
  }
  static close (){
    if (process.browser){
      React.unmountComponentAtNode(document.getElementById('modal-container'))
    }
  }

  render (){
    return (
      <div className='modal-container' onClick={ Modal.close }>
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
