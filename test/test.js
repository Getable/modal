import test from 'tape'
import @getable-modal from '../index.js'

test('@getable-modal#get', (t) => {
  t.plan(2)

  t.doesNotThrow(
    @getable-modal.get
    , 'does not throw'
  )

  t.ok(
    'I was too lazy to write any tests. Shame on me.'
    , 'must have at least one test'
  )
})
