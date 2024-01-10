import { IToolbar } from '../DesktopToolbar/DesktopToolbar';
import ToolbarBtns from '../ToolbarBtns/ToolbarBtns';
import styles from './MobileToolbar.module.scss';
import arrow from '../../assets/OtherAssets/small-arrow.svg';
import { useState } from 'react';

const itemsPerPage = 2;

const MobileToolbar = ({ chosenLook, chosenType, handleOtherType, handleOtherLook, typesList, activeType }: IToolbar) => {
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        const newIndex = startIndex + 1;
        if (newIndex < typesList.length) {
            setStartIndex(newIndex);
        }
    };

    const handlePrev = () => {
        const newIndex = startIndex - 1;
        if (newIndex >= 0) {
            setStartIndex(newIndex);
        }
    };

    const visibleTypes = typesList.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className={styles.container}>
            <div className={styles.toolbar__slider}>
                <button 
                    onClick={handlePrev} 
                    className={`${styles.left__arrow} ${startIndex === 0 ? styles.disabledArrow : ''}`} 
                    disabled={startIndex === 0}
                >
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
                <button 
                    onClick={handleNext} 
                    className={`${styles.right__arrow} ${startIndex + itemsPerPage >= typesList.length ? styles.disabledArrow : ''}`}
                    disabled={startIndex + itemsPerPage >= typesList.length}
                >
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