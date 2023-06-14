

const fs = require('fs').promises;

const path = require('node:path');

 const contactsPath = path.join(__dirname, "contacts.json");

 console.log(contactsPath);



function listContacts() {
  
  }
  
  function getContactById(contactId) {
  
  }
  
  function removeContact(contactId) {
  
  }
  
  function addContact(name, email, phone) {
  
  };


  module.exports = {
    listContacts,
  }