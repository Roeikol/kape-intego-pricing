const { IntegoLogo } = require("../IntegoLogo/IntegoLogo")
import styles from "./footer.module.scss"

export const Footer = () => {
    return(<div className={styles.mainContainer}>
            <div className={styles.footerBackground}></div>
            <IntegoLogo width={225} height={63} className={styles.logoStyle} />
    </div>
    )
}