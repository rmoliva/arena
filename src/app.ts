import * as feathers from 'feathers';
import * as mongodb from 'feathers-mongodb';
import * as bodyParser from 'body-parser';
import * as rest from 'feathers-rest';
import * as socketio from 'feathers-socketio';
// import * as errors from 'feathers-errors';
import {MongoClient} from 'mongodb';


// Create a feathers instance.
const app = feathers()
  // Enable Socket.io
  .configure(socketio())
  // Enable REST services
  .configure(rest())
  // Turn on JSON parser for REST services
  .use(bodyParser.json())
  // Turn on URL-encoded parser for REST services
  .use(bodyParser.urlencoded({extended: true}));


const promise = new Promise(function(resolve) {
  // Connect to your MongoDB instance(s)
  MongoClient.connect('mongodb://localhost:27017/feathers').then(function(db){
    // Connect to the db, create and register a Feathers service.
    app.use('/messages', mongodb({
      Model: db.collection('messages'),
      paginate: {
        default: 2,
        max: 4
      }
    }));

    // A basic error handler, just like Express
    // app.use(errors.handler());

    // Start the server
    var server = app.listen(3030);
    server.on('listening', function() {
      console.log('Feathers Message MongoDB service running on 127.0.0.1:3030');
      resolve(server);
    });
  }).catch(function(error){
    console.error(error);
  });
});

module.exports = promise;
