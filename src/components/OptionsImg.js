import styles from "./OptionsImg.module.css"

function OptionsImg({ img, text }) {
    return (
        <div>
            <img className={styles.images} src={img} />
            <p className={styles.my_subtitle}>{text}</p>
        </div>

    )

}

export default OptionsImg;