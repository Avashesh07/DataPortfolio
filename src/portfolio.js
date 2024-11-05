/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import azureLogo from "./assets/images/Azure.svg";
import awsLogo from "./assets/images/AWS.svg";
import bitBucketLogo from "./assets/images/BitBucket.svg";
import dockerLogo from "./assets/images/Docker.svg";
import apacheLogo from "./assets/images/Apache Spark.svg";
import googleCloudLogo from "./assets/images/Google Cloud.svg";
import jiraLogo from "./assets/images/Jira.svg";
import jupyterLogo from "./assets/images/Jupyter.svg";
import mongoDBLogo from "./assets/images/MongoDB.svg";
import mysqlLogo from "./assets/images/MySQL.svg";
import numpyLogo from "./assets/images/numpy.svg";
import openCVLogo from "./assets/images/OpenCV.svg";
import pandasLogo from "./assets/images/Pandas.svg";
import postgresSQLLogo from "./assets/images/PostgresSQL.svg";
import pythonLogo from "./assets/images/Python.svg";
import pytorchLogo from "./assets/images/PyTorch.svg";
import scikitlearLogo from "./assets/images/scikit-learn.svg";
import sQLiteLogo from "./assets/images/SQLite.svg";
import unrealLogo from "./assets/images/Unreal.svg";


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Avashesh Kumar",
  title: "Hi all, I'm AK, short for Avashesh Kumar",
  subTitle: emoji(
    "A Data Nerd 🚀 with experience in building data pipelines and machine learning models with a knack for solving problems using Data."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16IIkSfZv4M00RNTBC7fIr9w6bjhX-BKA/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Avashesh07",
  linkedin: "https://www.linkedin.com/in/avashesh-kumar-x/",
  gmail: "avashesh.work@gmail.com",
  medium: "https://medium.com/@avashesh.work",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATA NERD WHO WANTS TO SOLVE ANY PROBLEM HE LAYS HIS EYES ON",
  skills: [
    emoji(
      "⚡ Develop and maintain data pipelines and ETL processes"
    ),
    emoji("⚡ Build machine learning models for predictive analytics"),
    emoji(
      "⚡ Work with cloud platforms like AWS and Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      svgPath: awsLogo, // Ensure this path is correct
    },
    {
      skillName: "BitBucket",
      svgPath: bitBucketLogo, // Ensure this path is correct
    },
    {
      skillName: "Docker",
      svgPath: dockerLogo, // Ensure this path is correct
    },
    {
      skillName: "Apache Spark",
      svgPath: apacheLogo, // Ensure this path is correct
    },
    {
      skillName: "Google Cloud",
      svgPath: googleCloudLogo, // Ensure this path is correct
    },
    {
      skillName: "Jira",
      svgPath: jiraLogo, // Ensure this path is correct
    },
    {
      skillName: "Jupyter",
      svgPath: jupyterLogo, // Ensure this path is correct
    },
    {
      skillName: "MongoDB",
      svgPath: mongoDBLogo, // Ensure this path is correct
    },
    {
      skillName: "MySQL",
      svgPath: mysqlLogo, // Ensure this path is correct
    },
    {
      skillName: "NumPy",
      svgPath: numpyLogo, // Ensure this path is correct
    },
    {
      skillName: "OpenCV",
      svgPath: openCVLogo, // Ensure this path is correct
    },
    {
      skillName: "Pandas",
      svgPath: pandasLogo, // Ensure this path is correct
    },
    {
      skillName: "PostgreSQL",
      svgPath: postgresSQLLogo, // Ensure this path is correct
    },
    {
      skillName: "Python",
      svgPath: pythonLogo, // Ensure this path is correct
    },
    {
      skillName: "PyTorch",
      svgPath: pytorchLogo, // Ensure this path is correct
    },
    {
      skillName: "Scikit-learn",
      svgPath: scikitlearLogo, // Ensure this path is correct
    },
    {
      skillName: "SQLite",
      svgPath: sQLiteLogo, // Ensure this path is correct
    },
    {
      skillName: "Unreal",
      svgPath: unrealLogo, // Ensure this path is correct
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Aalto University",
      logo: require("./assets/images/aalto.png"),
      subHeader: "Master of Science in Mathematics and Operations Research",
      duration: "August 2021 - December 2023",
      desc: "Attained a full scholarship for 2 years.",
      descBullets: [
         "Developed strong analytical skills through courses like Graph Theory and Number Theory.",
        "Enhanced programming abilities in Python and statistical analysis through practical coursework.",
        "Undertook a comprehensive Master’s thesis, showcasing in-depth research capabilities.",
        "Diversified skill set with electives in Product Development, Filmmaking and even taking the Finnish language course."
      ]
    },
    {
      schoolName: "Loughborough University",
      logo: require("./assets/images/lu.png"),
      subHeader: "Bachelor of Science in Mathematics",
      duration: "September 2018 - July 2021",
      desc: "Ranked top 10% in the program.",
      descBullets: ["Graduated with First Class Honours, showcasing academic excellence with an impressive degree mark of 84.0%.",
                    "Excelled in a broad range of mathematical disciplines, evidenced by high marks in advanced courses like Analysis, Linear Algebra, and Mathematical Methods.",
                    "Developed a solid foundation in Organisational Behaviour and Accounting, reflecting a well-rounded skill set applicable in diverse professional contexts.",
                    "Demonstrated exceptional proficiency in Computer Applications in Mathematics, aligning with current technological demands in data science and analytics.",
                    "Cultivated a deep understanding of Probability and Statistics.",
                    "Engaged in rigorous studies in Vector Calculus, Applied Statistics, and Complex Analysis, ensuring a robust understanding of intricate mathematical concepts."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist Intern",
      company: "Vaisala",
      companylogo: require("./assets/images/vaisalaLogo.png"),
      date: "June 2023 – August 2023",
      desc: "Developed data pipelines and integrated advanced technologies.",
      descBullets: [
        "Improved data accuracy for analytics by automating ETL processes.",
        "Integrated OpenAI's GPT-3.5, AWS SageMaker, and ChromaDB.",
        "Researched several evaluation metrics and processes for LLMs."
      ]
    },
    {
      role: "Innovation Analyst Trainee",
      company: "Fortum",
      companylogo: require("./assets/images/fortumLogo.png"),
      date: "April 2024 – September 2024",
      desc: "Validated advanced AI solutions and developed chatbot demos.",
      descBullets: [
        "Increased response relevance by 15% through optimization.",
        "Delivered AI/ML ideation workshops to over 20 innovators."
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "SAAB",
      companylogo: require("./assets/images/saabLogo.png"),
      date: "Sep 2021 – May 2022",
      desc: "Took the initiative in a challenging environment to develop a cost-effective drone detection system, aiming to produce a viable alternative to existing high-cost solutions.",
      descBullets: [
        "Self-taught Python and machine learning principles to implement a basic YOLOv3 object detection algorithm for real-time detection via webcam.",
        "Collaborated with a multidisciplinary team to achieve project goals without prior experience in necessary tools"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Current Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I AM CURRENTLY HELPING TO BUILD DATA PIPELINES OR ANALYSE HISTORICAL DATA TO GENERATE INSIGHTS.",
  projects: [
    {
      image: require("./assets/images/glidaLogo.jpg"),
      projectName: "Glida",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Azure for Data Engineering",
      subtitle: "Certification in Azure Data Engineering.",
      image: require("./assets/images/microsoft_logo.jpeg"),
      imageAlt: "Azure Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/records/NYF125EG3DE8"
        }
      ]
    },
    {
      title: "Deep Neural Networks with PyTorch",
      subtitle: "Certification in building deep learning models with PyTorch.",
      image: require("./assets/images/ibm_logo.jpeg"),
      imageAlt: "PyTorch Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/records/2MNWJUKISO92"
        }
      ]
    },
    {
      title: "Advanced MySQL",
      subtitle: "Certification in Advanced MySQL Concepts by Meta.",
      image: require("./assets/images/facebook_logo.jpeg"),
      imageAlt: "PyTorch Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/records/80WQ1OH9R2XY"
        }
      ]
    },
    {
      title: "Generative AI and LLMs: Architecture and Data Preparation",
      subtitle: "Certification in Generative AI and LLM Concepts by IBM.",
      image: require("./assets/images/ibm_logo.jpeg"),
      imageAlt: "PyTorch Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/records/DID6S4FV7M0M"
        }
      ]
    },
    {
      title: "Achieving Advanced Insights with BigQuery",
      subtitle: "Certification in BigQuery by Google Cloud Platform.",
      image: require("./assets/images/1656443889325.jpeg"),
      imageAlt: "PyTorch Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/records/F1TW31DEIS2S"
        }
      ]
    },
    {
      title: "Microsoft Power BI for Business Intelligence",
      subtitle: "Certification in Microsoft Power BI by Maven Analytics.",
      image: require("./assets/images/maven_analytics_logo.jpeg"),
      imageAlt: "PyTorch Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.udemy.com/certificate/UC-5652b95c-66a3-4fbc-931b-679eb1494a02/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+358-442425999",
  email_address: "avashesh.work@gmail.com"
};



const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection
};
