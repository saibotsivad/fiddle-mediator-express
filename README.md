# fiddle-mediator-express

Thinking about how to use the mediator pattern with express routes.

The gist is that each ExpressJS route *only* calls a service, and
it doesn't do any business logic.

Services are instantiated as mediator providers, so that a service
can use some other service.
