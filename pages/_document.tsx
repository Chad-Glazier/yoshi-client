import { Html, Head, Main, NextScript } from 'next/document'
import CssBaseline from '@mui/material/CssBaseline';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				{/* favicon site icon */}
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				{/* Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />
				{/* material icon set. For more info, see https://fonts.google.com/icons */}
				<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
				{/* MUI */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
				/>
			</Head>
			<body>
				<CssBaseline />
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
