## Prepare project

Install dependencies:

    npm i

Create config:

    cp src/config.example.js src/config.js
    
Modify config:

    const config = {
        // api url
        apiServer: 'http://kovalenko.test:8081/api',
        rest: {
            // rest api of entity
            user: 'users'
        }
    };
     

## Run

    npm start
    