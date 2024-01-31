import styles from "./styles.module.css"

function SeparatorLine({ color = "orange" }) {
    return (
        <div style={{ backgroundColor: color }} className={styles.line}>
        </div>
    );  
}

export default SeparatorLine