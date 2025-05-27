import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    counter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center '
    },
    addButton: {
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '5rem',
        height: '2rem',
        '&:hover':{
            backgroundColor: 'wheat'
        }
    }
})

const Counter = () => {

    const styles = useStyle();

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1)
    }

    return (
        <div className={styles.counter}>
            <button className={styles.addButton} onClick={handleCount}>Dodaj</button>
            <h3>{count}</h3>
        </div>
    )


}

export default Counter;