import React, {Component} from 'react'
import {addons} from 'react/addons'
import injectTapEventPlugin from 'react-tap-event-plugin'
import mousetrap from '@getable/mousetrap'
injectTapEventPlugin()
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'modal'
const container = `${namespace}-container`

// turn on touch events
React.initializeTouchEvents(true)

export default class Modal extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  componentDidMount () {
    if (process.browser) mousetrap.bind('esc', Modal.close)
  }

  componentWillUnmount () {
    if (process.browser) mousetrap.unbind('esc', Modal.close)
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

  static close () {
    if (process.browser){
      const containerEl = document.getElementById(container)

      if (containerEl) {
        // NOTE: there is a React bug that can cause this to throw
        // https://github.com/facebook/react/issues/2605
        // sucks, but it's safe to ignore. Things still work.
        React.unmountComponentAtNode(containerEl)
        containerEl.parentElement.removeChild(containerEl)
      }
    }
  }

  isContainer (e) {
    if (process.browser){
      return e.target.classList.contains(container)
    }
  }

  onContainerClick (e) {
    if (this.isContainer(e)) Modal.close()
  }

  // the wheel event comes before the scroll event, cancel it instead of the
  // scroll because scroll isn't cancelable. http://codepen.io/somethingkindawierd/blog/react-mixin-scroll-lock
  onWheel (e) {
    if (this.isContainer(e)) e.preventDefault()
  }

  render () {
    return (
      <div className={container}
        onClick={this.onContainerClick.bind(this)}
        onWheel={this.onWheel.bind(this)}
        onTouchMove={this.onWheel.bind(this)}
        onTouchTap={this.onContainerClick.bind(this)}
      >
        <div className={namespace} role="alertdialog" aria-describedby="removed">
          {/* eslint-disable react/prop-types */}
          {this.props.children}
          {/* eslint-enable react/prop-types */}
        </div>
      </div>
    )
  }
}

