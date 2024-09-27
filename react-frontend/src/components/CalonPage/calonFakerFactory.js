
import { faker } from "@faker-js/faker";
export default (user,count,latihanIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
pengguna: faker.lorem.sentence(""),
latihan: latihanIds[i % latihanIds.length],
status: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
