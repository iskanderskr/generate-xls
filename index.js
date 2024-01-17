const XLSX = require('xlsx');
const { faker } = require('@faker-js/faker');

function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}

const USERS = faker.helpers.multiple(createRandomUser, {
    count: 2410,
});

const workSheet = XLSX.utils.json_to_sheet(USERS);
const workBook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
XLSX.writeFile(workBook, "./temp/sample.xlsx");