import ModalWindow from '../ModalWindow/ModalWindow';
import styles from './ProjectModalWindow.module.scss';
import BehanceLogo from '../../assets/OtherAssets/Behance_logo.svg';
import smallRGB from '../../assets/OtherAssets/smallRGB.svg';
import { IProject } from '../ProjectsList/ProjectsList';
import arrow from '../../assets/OtherAssets/arrow_icon.svg';

interface IModal {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    selectedProject: IProject | null,
}

const ProjectModalWindow = ({ active, setActive, selectedProject }: IModal) => {
    return (
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
                                <a className={styles.modal__link} href={selectedProject.link} target='_blank'>
                                    <img src={BehanceLogo} alt="Link to behance" />
                                </a>
                            </div>
                            <p>{selectedProject.shortDescription}</p>
                            <p>{selectedProject.modalDescription}</p>
                        </div>
                    </div>
                </div>
            )}
        </ModalWindow>
    )
}

export default ProjectModalWindow