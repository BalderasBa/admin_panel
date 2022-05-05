import userpnj from "./assets/user.png";
import productjpg from "./assets/product.jpg";
import productpng2 from "./assets/product2.png";
import productpng3 from "./assets/product3.png";

export const userData = [
  {
    name: "Jan",
    "active user": 4000,
  },
  {
    name: "Feb",
    "active user": 3000,
  },
  {
    name: "Mar",
    "active user": 2000,
  },
  {
    name: "Apr",
    "active user": 2780,
  },
  {
    name: "May",
    "active user": 1890,
  },
  {
    name: "Jun",
    "active user": 2390,
  },
  {
    name: "Jul",
    "active user": 2490,
  },
  {
    name: "Agu",
    "active user": 4190,
  },
  {
    name: "Sep",
    "active user": 3490,
  },
  {
    name: "Oct",
    "active user": 2490,
  },
  {
    name: "Nov",
    "active user": 1490,
  },
  {
    name: "Dec",
    "active user": 5000,
  },
];
export const productData = [
  {
    name: "Jan",
    Sales: 1000,
  },
  {
    name: "Feb",
    Sales: 3000,
  },
  {
    name: "Mar",
    Sales: 2000,
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow Jon",
    avatar: `${userpnj}`,
    email: "got1@mail.com",
    status: "active",
    transaction: "$123.00",
  },
  {
    id: 2,
    username: "Lannister Cersei",
    avatar: `${userpnj}`,
    email: "got2@mail.com",
    status: "active",
    transaction: "$123.00",
  },
  {
    id: 3,
    username: "Lannister Jaime",
    avatar: `${userpnj}`,
    email: "got3@mail.com",
    status: "active",
    transaction: "$123.00",
  },
  {
    id: 4,
    username: "Stark Arya",
    avatar: `${userpnj}`,
    email: "got4@mail.com",
    status: "active",
    transaction: "$123.00",
  },
  {
    id: 5,
    username: "Targaryen Daenerys",
    avatar: `${userpnj}`,
    email: "got5@mail.com",
    status: "active",
    transaction: "$123.00",
  },
  {
    id: 6,
    username: "Melisandre ull",
    avatar: `${userpnj}`,
    email: "got6@mail.com",
    status: "active",
    transaction: "$123.00",
  },
  {
    id: 7,
    username: "Clifford Ferrara",
    avatar: `${userpnj}`,
    email: "got7@mail.com",
    status: "active",
    transaction: "$123.00",
  },
  {
    id: 8,
    username: "Frances Rossini",
    avatar: `${userpnj}`,
    email: "got8@mail.com",
    status: "active",
    transaction: "$123.00",
  },
  {
    id: 9,
    username: "Roxie Harvey",
    avatar: `${userpnj}`,
    email: "got9@mail.com",
    status: "active",
    transaction: "$123.00",
  },
];

export const productRows = [
  {
    id: 1,
    name: "Apple Watch",
    desc: "description here",
    img: `${productjpg}`,
    stock: 13,
    status: "active",
    price: "$623.00",
  },
  {
    id: 2,
    name: "Apple Watch2",
    desc: "description here",
    img: `${productpng2}`,
    stock: 8,
    status: "active",
    price: "$123.40",
  },
  {
    id: 3,
    name: "Apple Watch3",
    desc: "description here",
    img: `${productpng3}`,
    stock: 29,
    status: "active",
    price: "$4123.00",
  },
  {
    id: 4,
    name: "Apple Watch",
    desc: "description here",
    img: `${productjpg}`,
    stock: 212,
    status: "active",
    price: "$1523.00",
  },
  {
    id: 5,
    name: "Apple Watch5",
    desc: "description here",
    img: `${productpng2}`,
    stock: 12,
    status: "active",
    price: "$123.00",
  },
  {
    id: 6,
    name: "Apple Watch",
    desc: "description here",
    img: `${productpng3}`,
    stock: 41,
    status: "active",
    price: "$1263.00",
  },
  {
    id: 7,
    name: "Apple Watch",
    desc: "description here",
    img: `${productjpg}`,
    stock: 0,
    status: "active",
    price: "$1223.00",
  },
  {
    id: 8,
    name: "Apple Watch8",
    desc: "description here",
    img: `${productpng3}`,
    stock: 120,
    status: "active",
    price: "$123.00",
  },
  {
    id: 9,
    name: "Apple Watch",
    desc: "description here",
    img: `${productpng2}`,
    stock: 33,
    status: "active",
    price: "$123.00",
  },
];
export const orders = [
  {
    id: 10,
    userId: 8,
    username: "Frances Rossini",
    createdAt: "Now",
    amount: 423.5,
    status: "pending",
  },
  {
    id: 1,
    userId: 7,
    username: "Clifford Ferrara",
    createdAt: "11 Jan 2022",
    amount: 123.45,
    status: "approved",
  },
  {
    id: 2,
    userId: 2,
    username: "Lannister Cersei",
    createdAt: "11 Dec 2021",
    amount: 536.0,
    status: "approved",
  },
  {
    id: 3,
    userId: 5,
    username: "Targaryen Daenerys",
    createdAt: "3 Dec 2021",
    amount: 22.0,
    status: "approved",
  },
  {
    id: 4,
    userId: 3,
    username: "Lannister Jaime",
    createdAt: "11 Nov 2021",
    amount: 98.0,
    status: "approved",
  },
  {
    id: 5,
    userId: 7,
    username: "Clifford Ferrara",
    createdAt: "11 Oct 2021",
    amount: 102.5,
    status: "approved",
  },
  {
    id: 6,
    userId: 2,
    username: "Lannister Cersei",
    createdAt: "11 Aug 2021",
    amount: 56.8,
    status: "declined",
  },
  {
    id: 7,
    userId: 1,
    username: "Snow Jon",
    createdAt: "11 May 2021",
    amount: 14.66,
    status: "approved",
  },
];
