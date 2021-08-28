import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
export default class CreateUserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Cleferson Dannylo',
        email: 'cleferson@gmail.com',
        password: 'secret',
        profile: 'Admin',
      },
      {
        name: 'Kâmylla Nyach ',
        email: 'kamylla@gmail.com',
        password: 'secret2',
        profile: 'User',
      },
    ])
  }
}
