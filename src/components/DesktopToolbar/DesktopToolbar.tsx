import ToolbarBtns from '../ToolbarBtns/ToolbarBtns';
import styles from './DesktopToolbar.module.scss';

interface IToolbar {
    chosenLook: string,
    chosenType: string,
    handleOtherType: (type: string) => void,
    handleOtherLook: (value: string) => void,
    typesList: string[],
    activeType: string
}


const DesktopToolbar = ({ chosenLook, chosenType, handleOtherType, handleOtherLook, typesList, activeType }: IToolbar) => {

    return (
        <section className={styles.container}>
            <div>
                {typesList.map((type, index) => (
                    <button 
                        onClick={() => handleOtherType(type)} 
                        key={index}
                        className={type === chosenType ? activeType : styles.typeBtn}
                    >{type}</button>
                ))}
            </div>
            <ToolbarBtns 
                handleOtherLook={handleOtherLook}
                chosenLook={chosenLook}
            />
        </section>
    )
}

export default DesktopToolbar;