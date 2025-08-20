import logo from './logo.png'

import mechseiko from '../assets/mechseiko.png'

import amta from '../assets/amta.jpg'

import bime from '../assets/bime.jpg'

import saad from '../assets/saad.png'


const dataA = [
  { id: "1", name: "Saad FC", location: "Nigeria", email: "example@gmail.com", socialLink: "saad-fc.io" },
  { id: "2", name: "Seiko Academy", location: "Nigeria", email: "example@gmail.com", socialLink: "seiko-academy.com" },
  { id: "3", name: "Nad Academy", location: "Nigeria", email: "example@gmail.com", socialLink: "nadac.ball" },
];

const data = [
  { id: 1, username: "Tunde", height: "18", gender: "male", location: "Benin", age: "23", position: "forward" },
  { id: 2, username: "Amina", height: "15", gender: "female", location: "Sudan", age: "22", position: "defender" },
  { id: 3, username: "Olu", height: "17", gender: "male", location: "Togo", age: "21", position: "keeper" },
  { id: 4, username: "Fatima", height: "19", gender: "female", location: "Somalia", age: "24", position: "midfielder" },
  { id: 5, username: "Kofi", height: "16", gender: "male", location: "Ghana", age: "20", position: "attacking" },
  { id: 6, username: "Esther", height: "18", gender: "female", location: "Uganda", age: "23", position: "defender" },
];


const headerLinks = [
    { name: "Field", to: "/" },
    { name: "News", to: "/news" },
    { name: "About", to: "/about" },
    { name: "Team", to: "/team" },
    { name: "Support", to: "/support" },
    { name: "Contact", to: "/contact" },
];

const email = "amtapro@gmail.com"

const login = "/auth/login"

const register = "/auth/register"

const forgotPassword = "/auth/forgot-password"

const team = [
  {name:"Amta", src: amta, href:"https://wa.me/+2348109976317", role:"Founder"},
  {name:"MECHSEIKO", src: mechseiko, href:"https://devseiko.vercel.app", role:"Front-End Developer"},
  {name:"Simply saad", src: saad, href:"https://simplysaad.github.io", role:"Back-End Developer"},
  {name:"Dev Bime", src: bime, href:"https://tech-ink.vercel.app", role:"Designer"},
];
  
const quickLinks = [
    { name: "News", to: "/news" },
    { name: "About", to: "/about" },
    { name: "Support", to: "/support" },
    { name: "Contact", to: "/contact" },
    { name: "Team", to: "/team" },
    { name: "Back to top", to: "/" },
];

const socialLinks = [
    { name: "Whatsapp", to: "https://chat.whatsapp.com/JOzPp9sQ9XCAMkk9METGws?mode=ac_t" },
    { name: "X", to: "https://x.com/mechseiko" },
];

const legalLinks = [
    { name: "Terms and Conditions", to: "/terms-of-service" },
    { name: "Privacy Policy", to: "/privacy-policy" },
];

const testimonials = [
  {
    name: "Samuel Adewale",
    role: "Youth Player",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, cupiditate voluptatum. Explicabo voluptatibus accusamus eius repellat exercitationem vitae dicta sed aliquid sapiente.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Coach Fatima Bello",
    role: "Technical Coach",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, cupiditate voluptatum. Explicabo voluptatibus accusamus eius repellat exercitationem vitae dicta sed aliquid sapiente.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Linda Okafor",
    role: "Parent",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, cupiditate voluptatum. Explicabo voluptatibus accusamus eius repellat exercitationem vitae dicta sed aliquid sapiente.",
    image: "https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
    name: "Chinedu Nwosu",
    role: "Scout",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, cupiditate voluptatum. Explicabo voluptatibus accusamus eius repellat exercitationem vitae dicta sed aliquid sapiente.",
    image: "https://randomuser.me/api/portraits/men/40.jpg"
  }
];


export {
    logo,
    headerLinks,
    quickLinks,
    socialLinks,
    legalLinks,
    email,
    data,
    dataA,
    login,
    register,
    forgotPassword,
    team,
    testimonials,
}