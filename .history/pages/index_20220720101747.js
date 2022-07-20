import Head from 'next/head'
import Link from "next/link"

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
					<Link href='/dashboard'>
						<div>
							<div>Dashboard</div>
						</div>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</div>
  )
}
