import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, computed } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @computed() // tratando as info para pegar parte do nome
  public get firstName (){
    return this.name.split(' ')[0] // pegando o index zero (o primeiro nome)
  }

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public role: 'admin' | 'normal'

  @column({ serializeAs: null})
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
