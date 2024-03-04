"use client";
import Link from "next/link";
import coffeeStoresData from "@/lib/data/coffee-stores";
import styles from "@/app/coffee-store/[id]/coffee-stores.module.css";
import Image from "next/image";



function page() {

  const handleUpVoteButton = () => {
    console.log("Working Vote");
  }

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>StrangeLove Coffee</h1>
          </div>
          
          <div className={styles.storeImgWrapper}>
            <Image
              src="/static/36779986-hero-image.png"
              width={600}
              height={360}
              className={styles.storeImg}
              alt="storeImg"
            />
          </div>
          
        </div>

        <div className={styles.col2}>
          <div className={styles.iconWrapper}>
            <Image src="/static/icon/location_on.svg" width="24" height="24" alt="icon"/>
            <p className={styles.text}>983 Queen St E, Toronto, ON M4M 1K2</p>
          </div>

          <div className={styles.iconWrapper}>
            <Image src="/static/icon/near_me.svg" width="24" height="24" alt="icon"/>
            <p className={styles.text}>at King and Spadina</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icon/star.svg" width="24" height="24" alt="icon"/>
            <p className={styles.text}>1</p>
          </div>

          <button className={styles.upVoteButton} onClick={handleUpVoteButton}>Up vote!</button>
          
        </div>
      </div>

     
    </div>
  );
}

export default page;
