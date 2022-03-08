import styles from "./Options.module.css"

function Options({ link, text }) {
    return (
        <a className={styles.my_header} href={link}>{text}</a>
    )
}

export default Options;

