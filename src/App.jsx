import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

import './global.css';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/euelvisoliveira.png',
			name: 'Elvis Ribeiro',
			role: 'Desenvolvedor Front-end'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '
			},
			{ type: 'link', content: 'jane.design/doctorcare' }
		],
		publishedAt: new Date('2022-05-03 20:00:00')
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/caiovale1921.png',
			name: 'Caio Vale ',
			role: 'Desenvolvedor Back-end'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '
			},
			{ type: 'link', content: 'jane.design/doctorcare' }
		],
		publishedAt: new Date('2022-05-10 20:00:00')
	}
];

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrappe}>
				<Sidebar />
				<main>
					{posts.map(post => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
