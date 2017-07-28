# fiddle-mediator-express

[![Greenkeeper badge](https://badges.greenkeeper.io/saibotsivad/fiddle-mediator-express.svg)](https://greenkeeper.io/)

> Note: This is just a draft, it won't run as-is.

Thinking about how to use the mediator pattern with express routes.

The gist is that each ExpressJS route *only* calls a service, and it doesn't do any business logic.

Services are instantiated as mediator providers, so that a service can use some other service.

By convention, the service names follow the folder structure, so [service/team/create](https://github.com/saibotsivad/fiddle-mediator-express/blob/master/service/team/create.js) is named `service/team/create`. In theory that naming could be enforced, but here I just named them manually.

Another thing that's kind of nice is putting the test file next to the file it tests. Next to [service/team/create.js](https://github.com/saibotsivad/fiddle-mediator-express/blob/master/service/team/create.js) is [service/team/create.spec.js](https://github.com/saibotsivad/fiddle-mediator-express/blob/master/service/team/create.spec.js).

Files that are "fixtures" would probably go inside some fixtures folder at the project root.

I used the ExpressJS `render` call, but didn't put in a render engine.
