import Route from '@ioc:Adonis/Core/Route'

Route.resource('/posts', 'PostsController').apiOnly().middleware({
  index: ['acl:admin,normal'],
  store: ['acl:admin'],
  update: ['acl:admin'],
  destroy: ['acl:admin'],
})
