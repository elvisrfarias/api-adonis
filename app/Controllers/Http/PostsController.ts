import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import {StoreValidator, UpdateValidator} from 'App/Validators/Post'

export default class PostsController {
  public async index ({ }: HttpContextContract) {
    const posts = await Post.query().orderBy('id', 'asc').preload('author')

    return posts
  }

  public async store ({ request, auth }: HttpContextContract) {
    // Create
    const data = await request.validate(StoreValidator) // Recebe os dados para jogar no BD
    const user = await auth.authenticate()
    const post = await Post.create({authorId: user.id, ...data})

    await post.preload('author')

    return post
  }

  public async show ({ params }: HttpContextContract) {
    // Read
    const post = await Post.findOrFail(params.id) // pega pelo id para visualizar

    return post
  }

  public async update ({ request, params }: HttpContextContract) {
    // Update
    const post = await Post.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    post.merge(data) // Mescla as info de title e content
    await post.save() // Salva no BD

    //await post.preload('author')

    return post
  }

  public async destroy ({ params }: HttpContextContract) {
    // Delete
    const post = await Post.findOrFail(params.id) // pega pelo id para deletar

    await post.delete()
  }
}
