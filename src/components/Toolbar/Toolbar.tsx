import { useDispatch, useSelector } from 'react-redux';
import DesktopToolbar from '../DesktopToolbar/DesktopToolbar';
import MobileToolbar from '../MobileToolbar/MobileToolbar';
import styles from './Toolbar.module.scss'
import { RootState } from '../../store/store';
import { actions } from '../../store/ProjectsTypeFilter/ProjectsTypeFilter.slice';
import { types } from '../../projects';

const Toolbar = () => {
    const chosenType = useSelector((state: RootState) => state.projectsType);
    const chosenLook = useSelector((state: RootState) => state.projectsLook);
    const dispatch = useDispatch();

    const handleOtherType = (type: string) => {
        dispatch(actions.changeType(type));
    }
    
    const handleOtherLook = (value: string) => {
        dispatch(actions.changeLook(value));
    }

    const activeTypeStyle = `${styles.selectedType } ${styles.typeBtn}`;

    return (
        <>
            <section className={styles.desktop}>
                <DesktopToolbar 
                    typesList={types}
                    chosenLook={chosenLook}
                    chosenType={chosenType}
                    handleOtherLook={handleOtherLook}
                    handleOtherType={handleOtherType}
                    activeType={activeTypeStyle}
                />
            </section>
            <section className={styles.mobile}>
                <MobileToolbar /> 
            </section>
        </>
    )
}

export default Toolbar;