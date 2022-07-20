import Head from 'next/head'
import Link from "next/link"
import { Center, Square, Circle } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
		<div className={styles.container}>
			<Head>
				<title>Admin Dashboard Cuenta-Nombre</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<div>
					<div>
						<h1 className={styles.title}>
							LogIn Dashboard Cuenta-Nombre
						</h1>
					</div>
				</div>
			</main>
      <div className={styles.container}>
        <Link href='/dashboard'>
          <center h='100px' w='30px' bg='tomato'>
            <div className={styles.button}>Dashboard</div>
          </center>
        </Link>
      </div>

			<footer className={styles.footer}></footer>
		</div>
  )
}
