import Image from "next/image";
import Link from "next/link"
import styles from "@/components/card/card.module.css"

function card(props) {
  return (
    <div className={styles.cardLink}>
        <Link href={props.href} >
        <div className={styles.container}>
            <div className={styles.cardHeaderWrapper}>
                <h2 className={styles.cardHeader}>{props.name}</h2>
            </div>
            
            <div className={styles.cardImageWrapper}>
                <Image className={styles.cardImage} src={props.imgUrl} width={260} height={160} alt="coffee shop"/>
            </div>
            
        </div>
            
        
    </Link>
    </div>
    
  )
}

export default card;