
const express = require('express');
const router = express.Router();
const cntrlContacts = require('../controllers/contact');

// contact items
router
  .route('/contact')
  .get(cntrlContacts.contactListAll)
  .post(cntrlContacts.contactListCreate);
router
  .route('/contact/:contactid')
  .get(cntrlContacts.contactListReadOne)
  .put(cntrlContacts.contactListUpdateOne)
  .delete(cntrlContacts.contactListDeleteOne);

module.exports = router;