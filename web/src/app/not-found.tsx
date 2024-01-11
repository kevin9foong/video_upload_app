import Link from 'next/link';

export default function NotFound() {
    return (<>
        <h1> Sorry! This page does not exist. </h1>
        <p>Return to the main page by clicking <Link href="/">here</Link>. </p>
    </>)
}