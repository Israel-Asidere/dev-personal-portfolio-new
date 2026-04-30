import { GitHub } from "@mui/icons-material"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

const projects = [{
    title: "Predicting Higher Education Student Dropout and Academic Performance Using ML Techniques",
    description: "Developed machine learning models to predict student dropout and academic success in UK higher education. Using the CRISP-DM framework, I built logistic regression, random forest, and ensemble models, achieving an AUC-ROC of 0.95 and F1 score of 0.91. The project highlights how data can be used to identify at-risk students and support early intervention.",
    image: "/projects/project1.jpg",
    tags: ["Python", "Machine Learning", "Crisp DM"],
    link: "#",
    github: "#",

},
{
    title: "Shopsphere EDA",
    description: "Performed an end-to-end exploratory data analysis on 385,314 e-commerce transactions for Shopshere Inc, an online retail platform struggling with low conversion rates across multiple customer segments. Using RFM analysis and K-Means clustering, I identified four distinct customer groups and built a cohort retention heatmap revealing that only 25 to 30% of customers return after their first month. The project delivers segment-level recommendations to help Shopshere reduce churn, improve conversion, and grow customer lifetime value.",
    image: "/projects/shopsphere.jpg",
    tags: ["Python", "Exploratory Data Analysis",],
    link: "https://github.com/Israel-Asidere/Amdari-Shopsphere",
    github: "https://github.com/Israel-Asidere/Amdari-Shopsphere",

}, {
    title: "MIG Cement - Demand Forecasting",
    description: "Built a demand forecasting system for Midlands Infrastructure Group (MIG), a UK construction company facing costly stockouts and overstocking across multiple sites. I engineered lag, rolling, weather interaction, and inventory features before training and comparing a SARIMAX time series model and a Random Forest regression model, evaluated using MAPE and RMSE. The project provides site-level forecast visibility to support proactive supply chain decisions, reduce waste, and improve operational efficiency across MIG's UK network.",
    image: "/projects/cementimg.jpg",
    tags: ["Python", "Machine Learning", "Sarimax"],
    link: "https://github.com/Israel-Asidere/Amdari-MIGCement",
    github: "https://github.com/Israel-Asidere/Amdari-MIGCement",

},

]
export const Projects = () => {
    return <section id="projects" className="py-32 relative overflow-hidden">
        {/* BG GLOWS */}
        <div  className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Workd</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that
                    <span className="font-serif italic font-normal text-white">{""} make an impact</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of my recent work, combining data science and development to create intelligent, user-focused solutions
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div
                                className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                            />
                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={project.link}
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                                <a
                                    href={project.github}
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <GitHub className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight
                                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                                />
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* View ALl CTA */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton>
                    View All Projects
                    <ArrowRight className="w-5 h-5"/>
                </AnimatedBorderButton>
            </div>
        </div>
    </section>
}