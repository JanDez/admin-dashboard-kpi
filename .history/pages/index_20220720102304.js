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
					<Link href='/dashboard'>
						<center h='100px' w='30px' bgGradient='linear(to-r, green.200, pink.500)'>
							<a>Dashboard</a>
						</center>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</div>
  )
}
