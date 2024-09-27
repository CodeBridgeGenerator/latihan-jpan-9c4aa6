
import { faker } from "@faker-js/faker";
export default (user,count,kategoriIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
nomborRuj: faker.lorem.sentence(""),
tajuk: faker.lorem.sentence(""),
kategori: kategoriIds[i % kategoriIds.length],
status: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
