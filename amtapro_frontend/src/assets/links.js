const dataA = [
  { id: "1", name: "Saad FC", location: "Nigeria", email: "example@gmail.com", socialLink: "socialLink" },
  { id: "2", name: "Seiko Academy", location: "Nigeria", email: "example@gmail.com", socialLink: "socialLink" },
  { id: "3", name: "Foot demy", location: "Nigeria", email: "example@gmail.com", socialLink: "socialLink" },
];


const data = [
  { id: 1, username: "Tunde", height: "18", gender: "male", location: "Benin", age: "23", position: "forward" },
  { id: 2, username: "Amina", height: "15", gender: "female", location: "Sudan", age: "22", position: "defender" },
  { id: 3, username: "Olu", height: "17", gender: "male", location: "Togo", age: "21", position: "keeper" },
  { id: 4, username: "Fatima", height: "19", gender: "female", location: "Somalia", age: "24", position: "midfielder" },
  { id: 5, username: "Kofi", height: "16", gender: "male", location: "Ghana", age: "20", position: "attacking" },
  { id: 6, username: "Esther", height: "18", gender: "female", location: "Uganda", age: "23", position: "defender" },
  { id: 7, username: "Chinedu", height: "18", gender: "male", location: "Nigeria", age: "23", position: "winger" },
  { id: 8, username: "Joy", height: "17", gender: "female", location: "Tanzania", age: "21", position: "midfielder" },
  { id: 9, username: "Obinna", height: "17", gender: "male", location: "Nigeria", age: "21", position: "striker" },
  { id: 10, username: "Deborah", height: "16", gender: "female", location: "Rwanda", age: "20", position: "striker" },
  { id: 11, username: "Femi", height: "16", gender: "male", location: "Nigeria", age: "20", position: "forward" },
  { id: 12, username: "Ruth", height: "16", gender: "female", location: "Côte d'Ivoire", age: "20", position: "defender" },
  { id: 13, username: "Janet", height: "15", gender: "female", location: "Senegal", age: "22", position: "midfielder" },
  { id: 14, username: "Patience", height: "19", gender: "female", location: "Gabon", age: "24", position: "striker" },
  { id: 15, username: "Hope", height: "18", gender: "female", location: "Equatorial Guinea", age: "23", position: "forward" },
  { id: 16, username: "Rose", height: "17", gender: "female", location: "Mozambique", age: "21", position: "keeper" }
];


const headerLinks = [
    { name: "Field", to: "/" },
    { name: "News", to: "/news" },
    { name: "About", to: "/about" },
    { name: "Support", to: "/support" },
    { name: "Contact", to: "/contact" },
];

const email = "amtapro@gmail.com"

const login = "/auth/login"
const register = "/auth/register"
const forgotPassword = "/auth/forgot-password"

const quickLinks = [
    { name: "News", to: "/news" },
    { name: "About", to: "/about" },
    { name: "Support", to: "/support" },
    { name: "Contact", to: "/contact" },
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

export {
    headerLinks,
    quickLinks,
    socialLinks,
    legalLinks,
    email,
    data,
    dataA,
    login,
    register,
    forgotPassword
}