import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeders extends BaseSeeder {
  //public static developmentOnly = true

  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        name: 'admin',
        email: 'admin@admin.com',
        password: '123456',
        role: 'admin',
      },
      {
        name: 'normal',
        email: 'normal@normal.com',
        password: '123456',
        role: 'normal',
      },
    ])
  }
}
