import { useState } from 'react';
import styles from './InfoBlock.module.scss';
import ModalWindow from '../ModalWindow/ModalWindow';
import arrow from '../../assets/arrow_right_icon.svg';
import smallRGB from '../../assets/smallRGB.svg';

const InfoBlock = () => {
    const [active, setActive] = useState(false);

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h1>
                    <span className={styles.biggest__span}>H</span>
                    <span className={styles.small__span}>el</span>
                    <span className={styles.big__span}>lo</span>
                </h1>
                <h3 className={styles.info__text}>I`m Nazar - <span>Graphic & Motion designer</span> & sometimes illustrator/animator and a blah blah blah and a bit 3d artist and a great guy</h3>
                <button onClick={() => setActive(true)} className={styles.contacts}>My Contacts</button>
                <p className={styles.infoblock__footer}>here you can see some of my <span className={styles.underline_span}>projects</span> <span>;)</span></p>
            </div>
            <ModalWindow 
                active={active}
                setActive={setActive}
                extendClass={styles.modal__window}
            >
                <div className={styles.modal__wrapper}>
                    <img src={arrow} alt="arrow" className={styles.arrow} onClick={() => setActive(false)}/>
                    <div className={styles.modal__container}>
                        <div className={styles.modal__title}>
                            <img src={smallRGB} alt="rgb icon" />
                            <h3>Nazar Mukovnyn</h3>
                        </div>
                        <div>
                            <p className={styles.email}>Email - nazarmukovnin132@gmail.com</p>
                            <p className={styles.modal__link} >Linkedin - <a target="_blank" href="https://linkedin.com/in/nazarmukovnin">linkedin.com/in/nazarmukovnin</a></p>
                            <p className={styles.modal__link} >Behance - <a target="_blank" href="https://behance.net/N_Muk">behance.net/N_Muk</a></p>
                        </div>
                    </div>
                </div>
            </ModalWindow>
        </section>
    )
}

export default InfoBlock