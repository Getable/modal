import test from 'tape'
import React from 'react'
import {addons} from 'react/addons'
import Modal from '../index.jsx'
const {TestUtils} = addons
const {isElement} = TestUtils

test('Modal: constructor', (t) => {
  const modal = React.createElement(Modal)
  t.ok(
    isElement(modal)
    , 'is a valid react component'
  )

  t.end()
})
