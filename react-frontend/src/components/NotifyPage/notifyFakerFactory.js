
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
tajuk: faker.lorem.sentence(1),
venue: faker.lorem.sentence(1),
tarikh: faker.lorem.sentence(1),
pengajar: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
