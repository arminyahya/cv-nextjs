import "./page.css";
import { Metadata , Viewport} from "next";
import Page from './[lang]/page';

export const metadata: Metadata = {
  title: 'Armin Yahya Resume',
  description: `Discover Armin Yahya's professional background, skills, and accomplishments in their online resume. Get a glimpse of their qualifications and experience in Frontend`,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function Home() {
	return <Page params={{lang: 'fa'}}  />
}
