import styles from './Header.module.scss';
import bigRGB from '../../assets/bigRGBblur.svg';
import smallRGB from '../../assets/smallRGB.svg';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <motion.img 
                    src={bigRGB} 
                    alt="background" 
                    className={styles.background__img}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                />
                <div className={styles.small__container}>
                    <img src={smallRGB} alt="rgb image" />
                    <h1>Nazar Mukovnyn</h1>
                    <p>Web portfolio</p>
                </div>
            </div>
        </section>
    )
}

export default Header;