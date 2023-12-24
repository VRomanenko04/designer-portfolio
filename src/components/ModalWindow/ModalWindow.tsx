import styles from './ModalWindow.module.scss';

interface IModal {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
    extendClass?: string
}

const ModalWindow = ({active, setActive, children, extendClass}: IModal) => {

    const ExtendClass = `${extendClass ? extendClass : ''}`

    return (
        <div className={`${styles.modal} ${active ? styles.active : ''}`} onClick={() => setActive(false)}>
            <div className={`${styles.modal__content} ${ExtendClass} ${active ? styles.active : ''}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow;