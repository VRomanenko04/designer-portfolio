import { IToolbar } from '../DesktopToolbar/DesktopToolbar';
import ToolbarBtns from '../ToolbarBtns/ToolbarBtns';
import styles from './MobileToolbar.module.scss';
import arrow from '../../assets/small-arrow.svg';
import { useState } from 'react';

const itemsPerPage = 2;

const MobileToolbar = ({ chosenLook, chosenType, handleOtherType, handleOtherLook, typesList, activeType }: IToolbar) => {
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex((prevIndex: number) => (prevIndex + 1) % typesList.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex: number) => (prevIndex - 1 + typesList.length) % typesList.length);
    };

    const visibleTypes = typesList.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className={styles.container}>
            <div className={styles.toolbar__slider}>
                <button onClick={handlePrev} className={styles.left__arrow}>
                    <img src={arrow} alt="left arrow" />
                </button>
                <div>
                    {visibleTypes.map((type, index) => (
                        <button
                            onClick={() => handleOtherType(type)} 
                            key={index}
                                className={type === chosenType ? activeType : styles.typeBtn}
                        >
                            {type}
                        </button>
                    ))}
                </div>
                <button onClick={handleNext} className={styles.right__arrow}>
                    <img src={arrow} alt="right arrow" />
                </button>
            </div>
            <ToolbarBtns 
                handleOtherLook={handleOtherLook}
                chosenLook={chosenLook}
            />
        </section>
    )
}

export default MobileToolbar;