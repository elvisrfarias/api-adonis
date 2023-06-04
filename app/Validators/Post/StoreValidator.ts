import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor (protected ctx: HttpContextContract) { }

  public schema = schema.create({
    // validando para ser uma string ignorando espaço vazio
    title: schema.string({trim: true},[rules.trim() ,rules.unique({table: 'posts', column: 'title'})]),
    content: schema.string({ trim: true }),
  })

  public messages: CustomMessages = {
    'title.unique': 'Ó titulo precisa ser unico :(',
  }
}
