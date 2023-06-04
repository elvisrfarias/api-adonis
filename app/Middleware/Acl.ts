import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle ({auth, response}: HttpContextContract, next: () => Promise<void>, cargorPermitidos: string[]) {
    const user = await auth.authenticate() // tentando altenticar pelo token

    if(!cargorPermitidos.includes(user.role)){
      return response.unauthorized({erro: {message: 'Acesso negado!'}})
    }

    await next()
  }
}
