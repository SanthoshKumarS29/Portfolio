const predefinedResponses = [
    {
      keywords: [
        "hi",
        "how are you",
        "how are you doing",
        "how do you feel"
      ],
      response: "I'm doing great! What details are needed from Santhosh?"
    },
    {
      keywords: [
        "tell about santhosh",
        "can you tell santhosh detail",
        "who is santhosh",
        "santhosh intro",
        "give me a brief about santhosh",
        "what santhosh do",
      ],
      response: "He is a web developer passionate about building interactive web apps using React.js."
    },
    {
      keywords: [
        "santhosh pathi konjam soley",
        "santhosh enna pannran",
        "sk pathi konjam soley",
        "sk enna pannran",
      ],
      response: "Avaru web developer ra irukaru apro avaruku reactjs use panni website la panna theriyum"
    },
    {
      keywords: [
        "what are santhosh's professional skills?",
        "what does santhosh specialize in?",
        "what skills does santhosh have in web development?",
        "what are santhosh's areas of expertise?",
        "tell me about santhosh's technical abilities.",
        "what technologies is santhosh proficient in?",
        "what can you tell me about santhosh's skill set?",
        "what is santhosh skilled at?",
        "Which web development tools is santhosh experienced with?",
        "list your technical skills.",
        "tell me about your frontend and backend skills.",
        "can you tell about santhosh technical skills",
        "technical skills"
      ],
      response: "Santhosh has expertise in React.js, Tailwind CSS, Bootstrap, JavaScript, and has basic knowledge of MERN Stack development."
    },
    {
      keywords: [
        "sk ta enna skills la irukku",
        "santhosh ta enna skills la irukku"
      ],
      response: "Avaru ta frontend da reactjsum tailwindcssum theriyum apro backend da django theriyum vera MERN stack la epdi work pannanum theriyum avalotha"
    },
    {
      keywords: [
        "what are santhosh's school marks",
        "tell me about santhosh's school percentage",
        "how much did santhosh score in school",
        "what were santhosh's college marks",
        "santhosh college cgpa",
        "can you tell santhosh's academic performance",
        "how well did santhosh do in studies",
        "santhosh school marks",
        "santhosh 10th and 12th marks",
        "santhosh's cgpa"
      ],
      response: "Santhosh scored 57% in SSLC, 65% in HSC, and secured a CGPA of 7.92 in college."
    },
    {
      keywords: [
        "santhosh oda school marks enna",
        "santhosh oda schl marks enna",
        "santhosh oda college marks enna",
        "santhosh oda clg marks enna",
        "sk oda school marks enna",
        "sk oda schl marks enna",
        "sk oda college marks enna",
        "sk oda clg marks enna",
      ],
      response: "Avaru school la 51% apro college la 72%"
    },
    {
      keywords: [
        "what projects has santhosh worked on?",
        "tell me about santhosh's projects",
        "can you list santhosh's completed projects?",
        "what are some notable projects by santhosh?",
        "show me santhosh's project portfolio",
        "which projects has santhosh built?",
        "give details about santhosh's past work",
      ],
      response: "Santhosh has worked on several projects including a personal portfolio website, chatbot system, and more. You can explore them on his portfolio!"
    },
    {
      keywords: [
        "santhosh oda projects enna",
        "sk oda projects enna",
        "santhosh built enna projects",
        "sk ta enna project panirukaru",
        "santhosh portfolio la enna projects irukku"
      ],
      response: "Avaru neraya prjocts panirukaru atha pakanum na enna close pannitu avaru website la project section na poi parunga"
    },
    {
      keywords: [
        "what is santhosh doing now?",
        "what is santhosh currently working on?",
        "what is santhosh's current role?",
        "what project is santhosh working on now?",
        "Is santhosh working anywhere currently?",
        "what is santhosh's current job?",
        "Tell me what santhosh is doing these days",
      ],
      response: "Santhosh is currently working at Troniex Technologies in the role of frontend developer."
    },
    {
      keywords: [
        "santhosh ipo enna pannrar",
        "sk ipo enna pannrar",
        "santhosh current work enna",
        "sk current work enna",
        "santhosh oda recent work enna",
        "sk oda recent work enna",
        "sk ippo enna pannitu irukaru"
      ],
      response: "Avaru ipo troniex technologies la frontend developer ra work panraru"
    },
    {
      keywords: [
        "what is santhosh's experience?",
        "how much experience does santhosh have?",
        "tell me about santhosh's work experience",
        "does santhosh have any professional experience?",
        "how experienced is santhosh?",
        "how long has santhosh been working?",
        "can you share santhosh's experience?"
      ],
      response: "Santhosh has a total of seven months of experience and has completed internships at two companies. The first is WizIona, where he learned React.js and Django frameworks during a four-month internship. The second is Servwing, where he worked as a software engineer, focusing on full-stack development for three months."
    },
    {
      keywords: [
        "santhosh experience level enna?",
        "santhosh oda experience enna",
        "sk oda experience enna",
        "santhosh work experience",
        "sk work experience",
        "santhosh evlo years experience irukku"
      ],
      response: "Avaru 2ndu company la intership pannirukaru, total 7months experience irukku, onu vanthu wiziona la anga 4months la reactjs and django skill la learn pannaru apro servwing la 3months software engineer ra intern panriukaru"
    },
    {
      keywords: [
        "what are santhosh's hobbies?",
        "tell me about santhosh's interests?",
        "what does santhosh like doing in free time?",
      ],
      response: "Santhosh enjoys building web projects, learning new technologies, and exploring creative UI designs during his free time and editing the vidoes."
    },
    {
      keywords: [
        "santhosh oda hobby enna",
        "sk oda hobby enna",
      ],
      response: "avaraoda hobby enna na ethachu site ready pannuvaru illa video editing la intrest irukku so athuvum pannuvaru"
    },   
    {
      keywords: [
        "ok"
      ],
      response: "If you want any other details about Santhosh, please feel free to ask questions."
    },
    {
      keywords: [
        "no"
      ],
      response: "ok Bye"
    },
    {
    keywords: [
        "mm",
        "Hmmm",
        "hm"
      ],
      response: "vera ethum detail venum ma avara pathi, vennum na kelunga solrey"
    },
    {
      keywords: [
        "how can i contact Santhosh?",
        "what is santhosh's contact info?",
        "give me santhosh's email address",
        "how do I reach out to santhosh?",
        "can I message santhosh?",
        "tell me how to connect with santhosh",
        "is there a way to contact santhosh?",
        "where can i message santhosh?"
      ],
      response: "You can reach Santhosh via the contact form on his portfolio or directly email him at santhoshvk090@gmail.com."
    },
    {
      patterns: [
        "santhosh oda contact details enna",
        "sk ta epdi contact pannanum",
        "santhosh contact form enga irukku",
        "santhosh available for contact ah?",
        "sk contact form enga irukku",
        "sk available for contact ah?"
      ],
      response: "Avaru contact details website end la irukku once check pannikonga, direct ta contact pannanum na 9751093403 number ku message pannunga replay pannu varu"
    }
    
  ];
  
  export default predefinedResponses;
  