# @getable-modal [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Build Status][travis-image]][travis-url]

A simple barebones wrapper modal written in React.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Install](#install)
- [Usage](#usage)
- [Methods](#methods)
  - [get `(<String> string)`](#get-string-string)
- [Events](#events)
  - [myEvent `(<String> myString)`](#myevent-string-mystring)
- [Tests](#tests)
- [Developing](#developing)
  - [Requirements](#requirements)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i -S @getable/modal
```


## Usage

```js
import Modal from '@getable/modal'

onClick (){
  Modal.open(
    <Modal>
      <Subview/>
    </Modal>
  )
}
```

## Methods
### get `(<String> string)`
Returns the string passed to it.

## Events
### myEvent `(<String> myString)`
Emitted when x happens. Passes `myString` which is a y.

## Tests
Tests are in [tape](https://github.com/substack/tape).


* `npm test` will run the tests in a browser
* `npm run tdd` will run the tests in a browser on every file change.


## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [Christopher Stumph](christopherstumph.me)


[npm-url]: https://npmjs.org/package/@getable/modal
[npm-image]: https://badge.fury.io/js/@getable/modal.svg
[travis-url]: https://travis-ci.org/Getable/modal
[travis-image]: https://travis-ci.org/Getable/modal.svg?branch=master
[daviddm-url]: https://david-dm.org/Getable/modal.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/Getable/modal
