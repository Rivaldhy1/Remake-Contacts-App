/* eslint-disable no-unused-vars */
import express from 'express'
import ContactModel from '../../models/contact.js'

const router = express.Router()
const contacts = ContactModel

// @route   GET api/contact
// @desc    Get all contact
// @access  Public
router.get('/', (req, res) => {
  contacts.find().then((contact) => {
    res.status(200).send({ status: true, statusCode: 200, data: contact })
  })
})

// @route   GET api/contacts/:id
// @desc    Get single contact by id
// @access  Public
router.get('/:id', (req, res) => {
  contacts
    .findById(req.params.id)
    .then((contact) =>
      res.status(200).send({ status: true, statusCode: 200, data: contact })
    )
    .catch((err) =>
      res.status(404).json({
        status: false,
        statusCode: 404,
        msg: 'data not found!!',
        errMsg: err.message,
        data: {},
      })
    )
})

// @route   POST api/contacts
// @desc    Add/save contact
// @access  Public
router.post('/', (req, res) => {
  contacts
    .create(req.body)
    .then((contact) =>
      res.status(201).send({
        status: true,
        statusCode: 201,
        message: 'Add contact success',
        data: contact,
      })
    )
    .catch((err) =>
      res.status(422).json({
        status: false,
        statusCode: 422,
        error: 'Unable to add this contact',
        msg: err.message,
      })
    )
})

// // @route   PUT api/contacts/:id
// // @desc    Update contact by id
// // @access  Public
// router.put('/:id', (req, res) => {
//   contacts
//     .findByIdAndUpdate(req.params.id, req.body)
//     .then((contact) => res.json({ msg: 'Updated successfully' }))
//     .catch((err) =>
//       res.status(400).json({ error: 'Unable to update the Database' })
//     )
// })

// // @route   DELETE api/contacts/:id
// // @desc    Delete contact by id
// // @access  Public
router.delete('/:id', (req, res) => {
  contacts
    .findByIdAndDelete(req.params.id)
    .then((contact) => res.json({ mgs: 'contact entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a contact' }))
})

export default router
