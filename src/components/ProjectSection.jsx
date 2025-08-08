import 'boxicons/css/boxicons.min.css'


import { BsArrowRight } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';



const projects = [
    {
        id: 1,
        title: " AI-content Generator",
        description: "A web application that generates AI-driven content for blogs and articles.",
        image: "/ai_portfolio.png",
        tags: ["React", "Tailwind CSS", "phi3-mini model"],
        demoURL: "#",
        githubURL: "https://github.com/RajMay/AI-content-marketing-AdSynk-AI-",
    },
    {
        id: 2,
        title: " AI-Chess bot",
        description: " A chess bot that uses AI to play against users, providing a challenging experience.",
        image: "/chess.png",
        tags: ["negamax", "python", "chess engine", "chessboard.js"],
        demoURL: "#",
        githubURL: "https://github.com/RajMay/AI-CHESS-AGENT",
    },
    {
        id: 3,
        title: " Email Automation",
        description: "A tool that automates email sending and management using AI. ",
        image: "/email.png",
        tags: ["react js", "email", "llm"],
        demoURL: "#",
        githubURL: "https://github.com/RajMay/GenAI_mail_generator",
    },
    {
        id: 4,
        title: " AI Chatbot",
        description: "A web application that generates AI-driven responses for user queries.",
        image: "/ai_chatbot.png",
        tags: ["gemini API", "NLP", "React", "Tailwind ", "python"],
        demoURL: "#",
        githubURL: "https://github.com/RajMay/AI-chatBot",
    },
    {
        id: 5,
        title: " Fake News Detector",
        description: "A web application that detects and flags fake news articles using AI.",
        image: "/news.png",
        tags: ["ML", "NLP", "React", "Tailwind CSS", "python"],
        demoURL: "#",
        githubURL: "https://github.com/RajMay/Fake_news_project",
    },
    {
        id: 6,
        title: " AI-Voice-agent",
        description: " A voice assistant that uses AI to respond to user commands and remind them about there meeting ans tasks its made from n8n workflow",
        image: "/Voice.png",
        tags: ["n8n", "google calendar", "gemini model", "retell AI"],
        demoURL: "#",
        githubURL: "#",
    },






]
const ProjectSection = () => {
 
   

    return (
        <section id="projects" 
        className=" pt-24 py-24 px-4 relative">
           

            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">
                    {" "}
                    Feature<span className="text-orange-400"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I have worked on that showcase my skills and expertise in AI and web devs.


                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                    {projects.map((project, key) => (
                        <div data-aos="zoom-out-down"
                            key={key} className="   group bg-card rounded-xl overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">

                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-orange-foreground">{tag}</span>

                                    ))}

                                </div>
                           
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoURL}
                                    target ="_blank"
                                    
                                    className="text-blue-500 hover:text-primary transition-colors duration-300">
                                        <i class='bx  bx-link-external '  ></i>

                                    </a>
                                    <a href={project.githubURL}
                                     target ="_blank"
                                    className="text-blue-500 hover:text-primary transition-colors duration-300">
                                        <FaGithub />

                                    </a>
                                </div>
                                 </div>

                            </div>
                        </div>

                    ))}

                </div>
                <div className="font-semibold w-full flex justify-center text-center mt-12">
                    <a className='w-fit justify-cencosmic-button bg-gradient-to-r from-[#656565] to-[#e99b63] text-white px-3 py-2 rounded-full flex items-center justify-center gap-2 hover:from-[#e99b63] hover:to-[#656565] transition-colors duration-300'
                    target="_blank"
                    href="https://github.com/RajMay"
                    >
                        View All Projects <BsArrowRight size={16}/>
                    </a>
                </div>
            </div>


        </section>
    )
}

export default ProjectSection
