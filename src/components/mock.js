import faker from "faker";
import chance from "chance";

export const CONTACTS = Array.from({length: 10}).map((_, index) => ({
    id: index + 1,
    name: chance().name(),
    avatar: faker.image.avatar()
}));

export const CHATS = [
    [{ message: chance().sentence(), name: "me" },{ message: chance().sentence(), name: "bot" },{ message: chance().sentence(), name: "me" }],
    [{ message: chance().sentence(), name: "me" }],
    [{ message: chance().sentence(), name: "bot" }],
    [{ message: chance().sentence(), name: "me" }],
    [{ message: chance().sentence(), name: "bot" }],
    [{ message: chance().sentence(), name: "me" }],
    [{ message: chance().sentence(), name: "bot" }],
    [{ message: chance().sentence(), name: "bot" }],
    [{ message: chance().sentence(), name: "bot" }],
    [{ message: chance().sentence(), name: "bot" }],
    [{ message: chance().sentence(), name: "bot"}],
    [{ message: chance().sentence(), name: "bot" }]
]