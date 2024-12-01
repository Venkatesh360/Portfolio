import { FaCss3Alt, FaHtml5, FaKaggle, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango, SiFlask, SiGeopandas, SiJavascript, SiMongodb, SiTypescript, SiVisualstudio } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const techList = [
  { id: 1, tech: 'JavaScript', icon: <SiJavascript size={20} /> },
  { id: 2, tech: 'Python', icon: <FaPython size={20} /> },
  { id: 3, tech: 'C++', icon: <img src="https://img.icons8.com/ios-filled/150/FFFFFF/c-plus-plus-logo.png" alt="c-plus-plus-logo" width={20} /> },
  { id: 4, tech: 'Typescript', icon: <SiTypescript size={20} /> },
  { id: 5, tech: 'React', icon: <FaReact size={20} /> },
  { id: 6, tech: 'NextJs', icon: <RiNextjsFill size={20} /> },
  { id: 15, tech: 'NodeJs', icon: <FaNodeJs size={20} /> },
  { id: 7, tech: 'MongoDB', icon: <SiMongodb size={20} /> },
  { id: 8, tech: 'mySQL', icon: <GrMysql size={20} /> },
  { id: 10, tech: 'Express', icon: <img className="w-4 h-auto" src="https://img.icons8.com/ios/150/FFFFFF/express-js.png" alt="express-js" /> },
  { id: 11, tech: 'Pandas', icon: <SiJavascript size={20} /> },
  { id: 12, tech: 'Geopandas', icon: <SiGeopandas size={20} /> },  // Added Geopandas with icon
  { id: 13, tech: 'HTML5', icon: <FaHtml5 size={20} /> },
  { id: 14, tech: 'CSS3', icon: <FaCss3Alt size={20} /> },
  { id: 16, tech: 'Flask', icon: <SiFlask size={20} /> },
  { id: 17, tech: 'Django', icon: <SiDjango size={20} /> },
];


export const navItems = [
  {
    name: "Home",
    link: "#Home"
  },
  {
    name: "About",
    link: "#about"
  },
  {
    name: "Projects",
    link: "#projects"
  },
  {
    name: "Contact",
    link: "#footer"
  },
]




export const projects = [
  {
    id: 1,
    title: "Good Movies",
    link: "https://github.com/Venkatesh360/good-movies",
    description:
      "Good Movies is a movie recommendation site with a Next.js 14 frontend and a Flask backend. User data, including likes, dislikes, and recommendation details, are stored in Firebase. The backend utilises a content-based recommender system to adjust recommendations based on a user's preferences, ensuring personalized movie suggestions.",
    imgSrc:
      "https://img.freepik.com/free-vector/ballet-dancers-perform-dance-theater-scene_107791-16152.jpg?t=st=1731592445~exp=1731596045~hmac=7459252fd5f82db6a7d2bb7a8658edc97f65fabbf963d6e013d1dd0d6a7e3f26&w=1380",
    icons: [
      { id: 1, icon: <RiNextjsFill color="white" size={"40px"} /> },
      { id: 2, icon: <img src="https://img.icons8.com/color/500/google-firebase-console.png" alt="google-firebase-console" height={"40px"} width={"40px"} /> },
      { id: 3, icon: <img src="https://img.icons8.com/color/500/python--v1.png" alt="python--v1" height={"40px"} width={"40px"} /> },
      { id: 4, icon: <SiTypescript size={"30px"} color="#0972FD" /> },
      { id: 5, icon: <SiFlask size={"35px"} color="white" /> },
    ],
  },
  {
    id: 2,
    title: "Content Based Recommender",
    link: "https://www.kaggle.com/code/venkateshkashyap/content-based-recommender-v2",
    description:
      "A content-based recommender system was developed by filtering data based on runtime, vote count, vote average, and popularity to ensure a high-quality dataset. Feature engineering involved extracting and processing genre and keyword information, which were then combined into a unified 'soup' for each movie. Using CountVectorizer from Scikit-Learn, these feature soups were transformed into a token count matrix. Cosine similarity was calculated between movies based on their token count matrices to recommend similar titles. The tech stack included Python, Pandas, Scikit-Learn, and the TMDB dataset.",
    imgSrc: "https://images5.alphacoders.com/445/445155.jpg",
    icons: [
      { id: 1, icon: <FaKaggle size={"30px"} color="#09ACFD" /> },
      { id: 2, icon: <SiGeopandas size={"35px"} color="white" /> },
      { id: 3, icon: <img src="https://img.icons8.com/color/500/python--v1.png" alt="python--v1" height={"40px"} width={"40px"} /> },
    ],
  },
  {
    id: 3,
    title: "Social Networking Backend",
    link: "https://github.com/Venkatesh360/Social-Networking-Backend",
    description:
      "User registration and authentication were implemented using Firebase Authentication to enable secure signup and login. Discussion posts support CRUD functionality with text, images, and hashtags, allowing users to comment on and like posts, as well as like or reply to comments. Post search functionality was implemented using hashtags to enhance search and discovery. Data security is ensured with tokenized access keys for all API interactions. Specific API routes for user and post-related interactions were defined following REST principles, and API testing was conducted using Postman. The tech stack includes Next.js, Firebase, Firestore, Firebase Authentication, and RESTful APIs.",
    imgSrc: "https://img.freepik.com/free-vector/social-media-network_74855-4575.jpg?t=st=1731591084~exp=1731594684~hmac=423944decad2b21c5e313f8fd42d4647327239f9b2f222972c710d125e8452d0&w=1060",
    icons: [
      { id: 1, icon: <RiNextjsFill size={"40px"} color="white" /> },
      { id: 2, icon: <img src="https://img.icons8.com/color/500/google-firebase-console.png" alt="google-firebase-console" height={"40px"} width={"40px"} /> },
      { id: 3, icon: <SiTypescript size={"30px"} color="#0972FD" /> },
    ],
  },
  {
    id: 4,
    title: "Cryptography DLL",
    link: "https://github.com/Venkatesh360/cryptographyDll_project",
    description:
      "An easy-to-use DLL file made for educational purposes and to simplify working with cryptography algorithms. The DLL is divided into 5 modules, each containing algorithms for specific use.",
    imgSrc: "https://hacklido.com/assets/files/2023-11-21/1700602915-510550-post-quantum-algorithm-sike-broken-by-single-core-cpu.jpg",
    icons: [
      { id: 1, icon: <img src="https://img.icons8.com/fluency/96/c-plus-plus-logo.png" alt="c-plus-plus-logo" height={"40px"} width={"40px"} /> },
      { id: 2, icon: <SiVisualstudio size={"30px"} color="#B94EE4" /> },
    ],
  },
];