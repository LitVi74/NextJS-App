import styles from '../stiles/PopUp.module.scss';
import {useCallback, MouseEvent} from "react";

interface IPopUpComponent {
    isOpen: boolean;
    children: JSX.Element;
    onClose: () => void;
}

const PopUp = ({
    isOpen,
    children,
    onClose,
}: IPopUpComponent) => {

    const handlePopUpClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        if(event.target === event.currentTarget)
            onClose()
    }, [onClose])

    return isOpen && (
        <aside className={styles.pop_up} onClick={handlePopUpClick}>
            <div className={styles.pop_up__container}>
               {children}
            </div>
        </aside>
    );
};

export default PopUp;