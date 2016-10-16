import * as feathers from 'feathers';
import * as mongodb from 'feathers-mongodb';
import * as bodyParser from'body-parser';

let app = feathers();

// On MongoDB use the `feathers-demo` database
// and the `todos` collection
let todoService = mongodb({
  db: 'feathers-demo',
  collection: 'todos'
});

// Set up REST and SocketIO APIs
app.configure(feathers.rest());
app.configure(feathers.socketio());

// Parse JSON and form HTTP bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the Todo service
app.use('/todos', todoService);

// Start the application on port 3030
app.listen(3030);
