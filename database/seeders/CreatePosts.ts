import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Posts from 'App/Models/Post'

export default class CreateUsersSeeders extends BaseSeeder {
  //public static developmentOnly = true

  public async run () {
    // Write your database queries inside the run method
    await Posts.createMany([
      {
        title: 'Avara quebrada',
        // eslint-disable-next-line max-len
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        title: 'Era uma vez um pedacinho de lenha molhada',
        // eslint-disable-next-line max-len
        content: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet',
      },
      {
        title: 'Se eu fosse you versão mil',
        // eslint-disable-next-line max-len
        content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
      },
      {
        title: 'Perolas são vermelhas violetas amarelas',
        // eslint-disable-next-line max-len
        content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
    ])
  }
}
