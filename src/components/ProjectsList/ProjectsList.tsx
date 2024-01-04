import styles from './ProjectsList.module.scss';
import { projects } from '../../projects';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import arrow from '../../assets/arrow_icon.svg';
import smallRGB from '../../assets/smallRGB.svg';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useState } from 'react';

interface IProject {
    title: string,
    types: string[],
    shortDescription: string,
    modalDescription: string,
    image: string,
    imageDescription: string,
    modalImage: string,
    modalImageDescription: string,
    link: string,
    modalBackgroundColor: string,
}


const ProjectsList = () => {
    const [active, setActive] = useState(false);
    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

    const chosenType = useSelector((state: RootState) => state.projectsType);
    const chosenLook = useSelector((state: RootState) => state.projectsLook);

    const isChosenType = (projectTypes: string[]) => {
        return projectTypes.includes(chosenType);
    }

    const filteredProjects = projects.filter(project => isChosenType(project.types));

    const openModal = (project: IProject) => {
        setSelectedProject(project);
        setActive(true);
    }

    return (
        <section className={styles.wrapper}>
            <div className={chosenLook === 'small' ? styles.small__container : styles.big__container}>
                {filteredProjects.map((project, index) => (
                    <div key={index} className={styles.project__container} onClick={() => chosenLook === 'small' && openModal(project)}>
                        <img src={project.image} alt={project.imageDescription} className={styles.background__img}/>
                        <div className={styles.content__position}>
                            <h2>{project.title}</h2>
                            <p className={styles.description}>{project.shortDescription}</p>
                            <img src={arrow} alt="arrow" className={styles.arrow} onClick={() => chosenLook === 'big' && openModal(project)}/>
                        </div>
                    </div>
                ))}
            </div>
            <ModalWindow active={active} setActive={setActive} extendClass={styles.modal__window}>
                {selectedProject && (
                    <div className={styles.modal__wrapper}>
                        <div className={styles.modal__container}>
                            <div className={styles.modal_img__container} style={{ background: selectedProject.modalBackgroundColor }}>
                                <img src={selectedProject.modalImage} alt={selectedProject.modalDescription} />
                            </div>
                            <div className={styles.modal__information}>
                                <img src={arrow} alt="exit button" className={styles.modal__arrow} onClick={() => setActive(false)}/>
                                <div className={styles.modal__title}>
                                    <div>
                                        <img src={smallRGB} alt="RGB icon" />
                                        <h6>{selectedProject.title}</h6>
                                    </div>
                                    <a className={styles.modal__link} href={selectedProject.link} target='_blank'>Be</a>
                                </div>
                                <p>{selectedProject.shortDescription}</p>
                                <p>{selectedProject.modalDescription}</p>
                            </div>
                        </div>
                    </div>
                )}
            </ModalWindow>
        </section>
    )
}

export default ProjectsList;