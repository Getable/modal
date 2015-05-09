import test from 'tape'
import React from 'react'
import {addons} from 'react/addons'
import Modal from './index.jsx'
const {TestUtils} = addons
const {Simulate, renderIntoDocument, isElement, createRenderer} = TestUtils
const getReactNode = (dom, node) => TestUtils.findRenderedDOMComponentWithTag(dom, node)
const getDOMNode = (dom, node) => getReactNode(dom, node).getDOMNode()
const getDOMNodes = (dom, type) => TestUtils.scryRenderedDOMComponentsWithTag(dom, type)
const getDOMNodeText = (dom, node) => getDOMNode(dom, node).textContent

test('Modal: constructor', (t) => {
  const modal = React.createElement(Modal)
  t.ok(
    isElement(modal)
    , 'is a valid react component'
  )

  t.end()
})

// TODO: delete me. I'm just an example!
test('Modal rendered DOM', (t) => {
  const name = 'Bert'
  const modal = React.createElement(Modal, {name})
  const dom = renderIntoDocument(modal)

  t.equal(
    getDOMNodeText(dom, 'h1')
    , name
    , 'renders the `name` prop'
  )

  t.end()
})
