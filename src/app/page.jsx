"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner/banner";
import Card from "@/components/card/card";
import coffeeStores from "@/lib/data/coffee-stores";
import {useEffect, useState} from "react";
import {fetchCoffeeStores} from "@/lib/coffee-stores"


export default function Home() {
  
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'fsq3dTWcwuSOo9ZLGG5vmiwbwyZrZBZyuGqkJodpMxtQLsk='
      }
    };
    
    fetch('https://api.foursquare.com/v3/places/search?query=coffee&ll=7.199123255674527%2C80.66143377793499&limit=20', options)
      .then(response => response.json())
      .then((data) => {
        setData(data.results)
        setLoading(false)
      })
      .catch(err => console.error(err));

  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  console.log("data",data);

  const handleOnBannerBtnClick = () => {
    console.log("Working");
  };
 

  return (
    <div className={styles.main}>
      <Banner
        buttonText="View stores nearby"
        handleOnClick={handleOnBannerBtnClick}
      />
      <div className={styles.heroImage}>
        <Image
          src="/static/36779986-hero-image.png"
          width={700}
          height={400}
          alt="backgroundImg"
        />
      </div>

      {data.length > 0 && (
        <div>
          <h2 className={styles.heading2}>Toronto stores</h2>
          <div className={styles.cardLayout}>
            {data.map((data) => {
              return (
                <Card
                  key={data.fsq_id}
                  name={data.name}
                  imgUrl={data.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
                  href={`/coffee-store/${data.fsq_id}`}
                  className={styles.card}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
