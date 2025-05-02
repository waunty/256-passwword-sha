import { faker } from '@faker-js/faker';
import { emailPassword } from './emailPassworld';


describe('Перевірка паролю та його хешування', function(){
    const password = {
        password: faker.password,
        repeat_password: faker.repeat_password,
    }
})