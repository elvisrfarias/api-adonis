import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async store ({ request, auth }: HttpContextContract) {
    const {email, password} = request.all() // recebe email e senha

    const token = await auth.attempt(email, password, { // Tenta autenticar com tempo de expiracao
      expiresIn: '30 days',
    })
    return token // Se tudo certo, vai dar o token
  }

  public async destroy ({auth}: HttpContextContract) {
    return auth.logout() // Api deleta o token existente
  }
}
