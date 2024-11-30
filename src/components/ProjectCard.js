import './ProjectCard.css'

function ProjectCard({ title, description, link, image }) {
    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    )
}

export default ProjectCard;