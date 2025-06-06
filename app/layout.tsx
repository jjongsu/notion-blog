import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from 'components/nav';
import Footer from 'components/footer';
import { baseUrl } from './sitemap';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: `Jongsu's notion blog`,
        template: `%s | Jongsu's notion blog`,
    },
    description: 'This is Jongsu Notion blog.',
    openGraph: {
        title: 'My blog',
        description: 'This is Jongsu blog.',
        url: baseUrl,
        siteName: 'My blog',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/profile.png',
                width: 800,
                height: 600,
                alt: '프로필 이미지',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        images: ['/profile.png'],
    },
    icons: {
        icon: '/favicon_io/favicon.ico',
        shortcut: '/favicon_io/favicon-32x32.png',
        apple: '/favicon_io/apple-touch-icon.png',
        other: [
            {
                rel: 'icon',
                url: '/favicon_io/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/favicon_io/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/favicon_io/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/favicon_io/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    },
    manifest: '/favicon_io/site.webmanifest',
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className={cx(GeistSans.variable, GeistMono.variable)}>
            <body className="antialiased max-w-xl mx-4 mt-8 sm:mx-auto text-black bg-white dark:text-white dark:bg-black">
                <ThemeProvider attribute="class" defaultTheme="light">
                    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
