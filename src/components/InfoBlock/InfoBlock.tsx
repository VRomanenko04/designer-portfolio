import styles from './InfoBlock.module.scss';

const InfoBlock = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h1>
                    <span className={styles.biggest__span}>H</span>
                    <span className={styles.small__span}>el</span>
                    <span className={styles.big__span}>lo</span>
                </h1>
                <h3 className={styles.info__text}>I`m Nazar - <span>Graphic & Motion designer</span> & sometimes illustrator/animator and a blah blah blah and a bit 3d artist and a great guy</h3>
                <button className={styles.contacts}>My Contacts</button>
                <p className={styles.infoblock__footer}>here you can see some of my <span className={styles.underline_span}>projects</span> <span>;)</span></p>
            </div>
        </section>
    )
}

export default InfoBlock