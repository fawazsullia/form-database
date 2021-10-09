# Form Database API

### About
Form database API is a 3rd party api for you to post your form responses. Suppose you build a simple static app with a form. 
Instead of building a backend just to collect the response, you can make use of this API

### How it works
You can make use of the endpoint mentioned below and send a PUT request for every form entry

### Endpoints and data format

PUT request using fetch

`
fetch("formdatabase.herokuapp.com/data/entries", {
    method : 'PUT',
    headers : {
        'content-type' : 'application/json
    },
    body : JSON.stringify({
        apiKey : Your API KEY here,
        entry : { Form entry in key value pairs ( example : { name : "testuser"  })   }
    })
})

`

### Important links and how to start

To start, head over to [this site](https://formdatabase.netlify.app/login) and create an account.
You'll get your apiKey there.