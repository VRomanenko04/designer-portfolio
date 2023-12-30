import styles from './ProjectsList.module.scss';
import { projects } from '../../projects';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import arrow from '../../assets/arrow_right_icon.svg';

const ProjectsList = () => {
    const chosenType = useSelector((state: RootState) => state.projectsType);
    const chosenLook = useSelector((state: RootState) => state.projectsLook);

    const isChosenType = (projectTypes: string[]) => {
        return projectTypes.includes(chosenType);
    }

    const filteredProjects = projects.filter(project => isChosenType(project.types));

    return (
        <section className={styles.wrapper}>
            <div className={chosenLook === 'small' ? styles.small__container : styles.big__container}>
                {filteredProjects.map((project, index) => (
                    <div key={index} className={styles.project__container}>
                        <img src={project.image} alt={project.imageDescription} className={styles.background__img}/>
                        <div className={styles.content__position}>
                            <h2>{project.title}</h2>
                            <p>{project.shortDescription}</p>
                            <img src={arrow} alt="arrow" className={styles.arrow}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsList;