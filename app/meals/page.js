import Link from 'next/link';

import styles from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

const MealsData = async () =>{
  const meals = await getMeals();

  return (
    <MealsGrid meals={meals} />
  )
}


export default function MealsPage() {
 
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={styles.main}>
        {/* <MealsGrid meals={meals} /> */}
        <Suspense fallback={<p className={styles.loading}>Loading...</p>}>
          <MealsData />
        </Suspense>
        
      </main>
    </>
  );
}