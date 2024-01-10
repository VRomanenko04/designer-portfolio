import styles from './ToolbarBtns.module.scss';
import Square from '../../assets/OtherAssets/square.svg';
import FourSquares from '../../assets/OtherAssets/small_four_squares.svg';
import BigFourSquares from '../../assets/OtherAssets/big_four_squares.svg';

interface IToolbarBtns {
    handleOtherLook: (type: string) => void,
    chosenLook: string
}

const ToolbarBtns = ({ handleOtherLook, chosenLook }: IToolbarBtns) => {
    return (
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
    )
}

export default ToolbarBtns;