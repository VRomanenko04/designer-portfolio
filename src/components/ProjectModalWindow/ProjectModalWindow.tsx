import ModalWindow from '../ModalWindow/ModalWindow';
import styles from './ProjectModalWindow.module.scss';
import BehanceLogo from '../../assets/OtherAssets/Behance_logo.svg';
import YTlogo from '../../assets/OtherAssets/YT_logo.svg';
import smallRGB from '../../assets/OtherAssets/smallRGB.svg';
import arrow from '../../assets/OtherAssets/arrow_icon.svg';
import { IProject } from '../../projects';

interface IModal {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    selectedProject: IProject | null,
}

const ProjectModalWindow = ({ active, setActive, selectedProject }: IModal) => {

    let modal__link: string = selectedProject?.showBeLink && selectedProject.showYTLink ? `${styles.small_modal__link}` : `${styles.modal__link}`;


    return (
        <ModalWindow active={active} setActive={setActive} extendClass={styles.modal__window}>
            {selectedProject && (
                <div className={styles.modal__wrapper}>
                    <div className={styles.modal__container}>
                        <div className={styles.modal_img__container} style={{ background: selectedProject.modalBackgroundColor }}>
                            <img src={selectedProject.modalImage} alt={selectedProject.modalDescription} />
                        </div>
                        <div className={styles.modal__information}>
                            <div className={styles.modal__title}>
                                <div>
                                    <img src={arrow} alt="exit button" className={styles.modal__arrow} onClick={() => setActive(false)}/>
                                    <img src={smallRGB} alt="RGB icon" />
                                    <h6>{selectedProject.title}</h6>
                                </div>
                                <div className={styles.links}>
                                    {selectedProject.showBeLink && (
                                        <a className={`${modal__link} ${styles.be__link}`} href={selectedProject.linkBe} target='_blank'>
                                            <img src={BehanceLogo} alt="Link to behance" />
                                        </a>
                                    )}
                                    {selectedProject.showYTLink && (
                                        <a className={`${modal__link} ${styles.yt__link}`} href={selectedProject.linkYT} target='_blank'>
                                            <img className={styles.yt__logo} src={YTlogo} alt="Link to youtube video" />
                                        </a>
                                    )}
                                </div>
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

export default ProjectModalWindow;