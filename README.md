# MAKMUR Warmup Project - Book Store App
Book list ![Screenshot 2023-05-29 132239](https://github.com/VionieNovencia/MAKMUR-Warmup-Project/assets/74034061/960be8e4-ed07-4ae3-a113-88db453ab7a0)
Add book modal
![Screenshot 2023-05-29 132333](https://github.com/VionieNovencia/MAKMUR-Warmup-Project/assets/74034061/b70e9f22-caf3-4d7c-8160-1484da787551)

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
├── test <br />
│   ├── App.test.tsx <br />
│   ├── books.test.ts <br />
│   └── countries.test.ts <br />
├── App.tsx <br />
└── index.tsx <br />

## Notes
The input is validated using regular expressions to ensure it matches this pattern `/^[A-Za-z0-9\s]+$/ `.
