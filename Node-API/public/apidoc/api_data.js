define({ "api": [
  {
    "type": "delete",
    "url": "/contacts/:id",
    "title": "5. How to delete a contact?",
    "group": "Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Contact's UUID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Route Example",
          "content": "/contacts/3bec0bd9-e396-4d85-8996-1a8bdf12f424",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success Example",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 412 Precondition Falied",
          "content": "HTTP/1.1 412 Precondition Falied",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/contacts.js",
    "groupTitle": "Contacts",
    "name": "DeleteContactsId"
  },
  {
    "type": "get",
    "url": "/contacts",
    "title": "1. How to get the Contacts List?",
    "group": "Contacts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "contacts",
            "description": "<p>Returns a JSON Array containing all the contacts</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.id",
            "description": "<p>Returns the contact UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.email",
            "description": "<p>Returns the contact's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.firstName",
            "description": "<p>Returns the contact's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.lastName",
            "description": "<p>Returns the contact's last name or family name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.PhoneNumber",
            "description": "<p>Returns the contact's phone number: It must to match the pattern (99) 99999-9999</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "contact.created_at",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "contact.updated_at",
            "description": "<p>Last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": " HTTP/1.1 200 OK\n{\n \"contacts\": [{\n   \"id\": \"3bec0bd9-e396-4d85-8996-1a8bdf12f424\",\n   \"email\": \"johndoe@mail.com\",\n   \"firstName\": \"john\",\n   \"lastName\": \"doe\",\n   \"phoneNumber\": \"(99)99999-9999\",\n   \"created_at\": \"2018-02-17T01:41:53.683Z\",\n   \"updated_at\": \"2018-02-17T01:41:53.683Z\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 412 Precondition Falied",
          "content": "HTTP/1.1 412 Precondition Falied",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/contacts.js",
    "groupTitle": "Contacts",
    "name": "GetContacts"
  },
  {
    "type": "get",
    "url": "/contacts/:id",
    "title": "3. How to get a specific contact?",
    "group": "Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Contact's UUID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Route Example",
          "content": "/contacts/3bec0bd9-e396-4d85-8996-1a8bdf12f424",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "contact",
            "description": "<p>Returns the new contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.id",
            "description": "<p>Contact UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.email",
            "description": "<p>Contact's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.firstName",
            "description": "<p>Contact's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.lastName",
            "description": "<p>Contact's last name or family name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.PhoneNumber",
            "description": "<p>Contact's phone number: It must to match the pattern (99) 99999-9999</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "contact.created_at",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "contact.updated_at",
            "description": "<p>Last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": " HTTP/1.1 200 OK\n{\n   \"id\": \"3bec0bd9-e396-4d85-8996-1a8bdf12f424\",\n   \"email\": \"johndoe@mail.com\",\n   \"firstName\": \"john\",\n   \"lastName\": \"doe\",\n   \"phoneNumber\": \"(99)99999-9999\",\n   \"created_at\": \"2018-02-17T01:41:53.683Z\",\n   \"updated_at\": \"2018-02-17T01:41:53.683Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 412 Precondition Falied",
          "content": "HTTP/1.1 412 Precondition Falied",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/contacts.js",
    "groupTitle": "Contacts",
    "name": "GetContactsId"
  },
  {
    "type": "post",
    "url": "/contacts",
    "title": "2. How to create a new contact?",
    "group": "Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Contact's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Contact's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Contact's last name or family name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Contact's phone number: It must to match the pattern (99) 99999-9999</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"email\": \"johndoe@mail.com\",\n  \"firstName\": \"john\",\n  \"lastName\": \"doe\",\n  \"phoneNumber\": \"(00) 00000-0000\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "contact",
            "description": "<p>Returns the new contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.id",
            "description": "<p>Contact UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.email",
            "description": "<p>Contact's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.firstName",
            "description": "<p>Contact's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.lastName",
            "description": "<p>Contact's last name or family name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.PhoneNumber",
            "description": "<p>Contact's phone number: It must to match the pattern (99) 99999-9999</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "contact.created_at",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "contact.updated_at",
            "description": "<p>Last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": " HTTP/1.1 200 OK\n{\n   \"id\": \"3bec0bd9-e396-4d85-8996-1a8bdf12f424\",\n   \"email\": \"johndoe@mail.com\",\n   \"firstName\": \"john\",\n   \"lastName\": \"doe\",\n   \"phoneNumber\": \"(99)99999-9999\",\n   \"created_at\": \"2018-02-17T01:41:53.683Z\",\n   \"updated_at\": \"2018-02-17T01:41:53.683Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 412 Precondition Falied",
          "content": "HTTP/1.1 412 Precondition Falied",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/contacts.js",
    "groupTitle": "Contacts",
    "name": "PostContacts"
  },
  {
    "type": "put",
    "url": "/contacts/:id",
    "title": "4. How to update a contact?",
    "group": "Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Contact's UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Contact's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Contact's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Contact's last name or family name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Contact's phone number: It must to match the pattern (99) 99999-9999</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"email\": \"update@mail.com\",\n  \"firstName\": \"update\",\n  \"lastName\": \"update\",\n  \"phoneNumber\": \"(22) 22222-22222\"\n}",
          "type": "JSON"
        },
        {
          "title": "Route Example",
          "content": "/contacts/3bec0bd9-e396-4d85-8996-1a8bdf12f424",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success Example",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error example",
          "content": "HTTP/1.1 412 Precondition Falied",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/contacts.js",
    "groupTitle": "Contacts",
    "name": "PutContactsId"
  },
  {
    "type": "get",
    "url": "/",
    "title": "1. How to get the API Status?",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>API Status Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "HTTP/1.1 200 OK\n{ status: 'Contacts List API' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/root.js",
    "groupTitle": "Status",
    "name": "Get"
  }
] });
