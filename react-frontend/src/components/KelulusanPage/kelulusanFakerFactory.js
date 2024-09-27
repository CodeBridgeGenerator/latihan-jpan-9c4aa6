
import { faker } from "@faker-js/faker";
export default (user,count,latihanIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
pelulus: faker.lorem.sentence(""),
status: faker.lorem.sentence(""),
komen: faker.lorem.sentence(""),
latihan: latihanIds[i % latihanIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
