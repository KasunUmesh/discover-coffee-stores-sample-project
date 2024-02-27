
import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/banner";

export default function Home() {

  const handleOnBannerBtnClick = () => {
    console.log("Working");
  }

  return (
    
    <main className={styles.main}>
      <div>
          <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick}/>
      </div>
    </main>
  );
}
