import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import travel from '/public/image/travel.jpg';
import realEstate from '/public/image/real-estate.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Parcel Management System [Tawssil]',
        description: "I contributed to improving the parcel management system within the Tawssil web application. My main focus was backend development using Java and Spring Boot, where I enhanced the authentication system with Spring Security and JWT. I also automated fee management by integrating Camunda to streamline business processes. The system was tested thoroughly with Junit5 and Mockito to ensure reliability.",
        tools: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Junit5', 'Mockito', 'Camunda', 'MySQL', 'GitHub'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,  
    }
    ,
   
    {
        id: 2,
        name: "Vehicle Geolocation System",
        description: "During my internship, I worked on enhancing the Vehicle Geolocation System. My primary role was backend development using Java and Spring Boot, where I implemented robust security features with Spring Security and integrated Keycloak for user authentication. I also contributed to the database design with MySQL to ensure efficient data storage and retrieval. The system was rigorously tested using Junit5 and Mockito to guarantee performance and reliability.",
        tools: ["Java", "Spring Boot", "Spring Security", "Keycloak", "MySQL", "Junit5", "Mockito", "GitHub"],
        role: "Java Spring Developer",
        code: "",
        demo: "",
        image: travel
    }
    ,
    {
        id: 3,
        name: 'Airbnb Clone',
        description: " I developed a comprehensive Airbnb clone featuring booking management, landlord reservation systems, and advanced search functionalities. The application supports secure user authentication and authorization. It includes a detailed reservation system, personalized user dashboards, and efficient listing management. This project provides a fully functional platform mimicking Airbnb's core features, offering a valuable learning experience in building complex, scalable applications ",
        tools: ['Spring Boot 3', 'Angular 17',, 'Angular Material', 'PrimeNG', 'PostgreSQL', 'Liquibase','Trello'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
  
    {
        id: 4,
        name: 'Spotify Clone',
        description: " I developed a comprehensive music streaming application that allows users to upload and stream music, manage playlists, and search for songs. The platform features secure user authentication, a responsive user interface, and personalized favorite management. This project provides a fully functional platform simulating core features of a music streaming service, offering a valuable learning experience in building a complete and scalable application.",
        tools: ['Spring Boot 3', 'Angular 17', 'Bootstrap 5', 'PostgreSQL', 'Keycloak', 'Liquibase'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ayla,
       
    },
    {
        id: 5,
        name: "Web Chat Bot Application",
        description: "I developed a web chat bot application using Spring AI and Vaadin, providing automated and intelligent interactions with users. My main responsibilities included backend development with Spring Boot, integrating Spring AI for natural language processing, and implementing a user-friendly interface with Vaadin. The application leverages MySQL for data storage and ensures smooth user experiences through effective design.",
        tools: ["Spring Boot", "Spring AI", "Vaadin", "JavaScript", "MySQL"],
        role: "Backend Developer",
        code: "",
        demo: "",
        image: realEstate,
    }
    
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },