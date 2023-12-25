import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { types } from '../../projects';
import { actions } from '../../store/ProjectsTypeFilter/ProjectsTypeFilter.slice';

import styles from './Toolbar.module.scss';
import Square from '../../assets/square.svg';
import FourSquares from '../../assets/small_four_squares.svg';
import BigFourSquares from '../../assets/big_four_squares.svg';


const Toolbar = () => {
    const chosenType = useSelector((state: RootState) => state.projectsType);
    const chosenLook = useSelector((state: RootState) => state.projectsLook);
    const dispatch = useDispatch();

    const activeType = `${styles.selectedType } ${styles.typeBtn}`;

    const handleOtherType = (type: string) => {
        dispatch(actions.changeType(type));
    }
    
    const handleOtherLook = (value: string) => {
        dispatch(actions.changeLook(value));
    }

    return (
        <section className={styles.container}>
            <div>
                {types.map((type, index) => (
                    <button 
                        onClick={() => handleOtherType(type)} 
                        key={index}
                        className={type === chosenType ? activeType : styles.typeBtn}
                    >{type}</button>
                ))}
            </div>
            <div>
                <button onClick={() => handleOtherLook('small')} >
                    <img 
                        className={chosenLook === 'small' ? styles.bigSquares__btn : styles.smallSquares__btn} 
                        src={chosenLook === 'small' ? BigFourSquares : FourSquares} 
                        alt="to small format" 
                    />
                </button>
                <button onClick={() => handleOtherLook('big')} >
                    <img 
                        className={chosenLook === 'big' ? styles.squareBig__btn : styles.squareSmall__btn} 
                        src={Square} 
                        alt="to big format" 
                    />
                </button>
            </div>
        </section>
    )
}

export default Toolbar;