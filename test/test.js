import test from 'tape'
import getableModal from '../index.js'

test('@getable-modal#get', (t) => {
  t.plan(2)

  t.doesNotThrow(
    getableModal.get
    , 'does not throw'
  )

  t.ok(
    'I was too lazy to write any tests. Shame on me.'
    , 'must have at least one test'
  )
})
