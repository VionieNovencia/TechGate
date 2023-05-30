# MAKMUR Warmup Project - Book Store App
Book list
![Screenshot 2023-05-29 131926](https://github.com/VionieNovencia/MAKMUR-Warmup-Project/assets/74034061/b5f78c01-f384-4d49-966e-e708e858f305)

Add book modal

![Screenshot 2023-05-29 132333](https://github.com/VionieNovencia/MAKMUR-Warmup-Project/assets/74034061/9e2c55fd-aa99-4f91-9407-f3a7fb940351)

## How To Run
1. Clone this repository
2. Install the dependencies by running the following command: `yarn`
3. Start the development server by running the following command: `yarn start`

To run the unit tests, use the following command: `yarn test `

## Project Structure
src <br />
├── components <br />
│   ├── AddBook.tsx <br />
│   ├── BookList.tsx <br />
│   ├── Card.tsx <br />
│   └── Header.tsx <br />
├── store <br />
│   ├── models <br />
│   │   ├── books.ts <br />
│   │   └── countries.ts <br />
│   └── index.ts <br />
├── style <br />
│   ├── BookList.tsx <br />
│   ├── Card.tsx <br />
│   ├── Form.tsx <br />
│   ├── Header.tsx <br />
│   └── Modal.tsx <br />
├── test <br />
│   ├── App.test.tsx <br />
│   ├── books.test.ts <br />
│   └── countries.test.ts <br />
├── App.tsx <br />
└── index.tsx <br />

## Assumption
1. The title and author for this project should only contain a combination of alphabets (both lowercase and uppercase) and numbers. No special characters or spaces are allowed.
2. The ISBN for this project should only contain a combination of alphabets (both lowercase and uppercase), numbers and '-'
