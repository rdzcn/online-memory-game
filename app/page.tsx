import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.grid}>
        <a href="./authentication" className={styles.card}>
          <h2>Token Authentication &rarr;</h2>
          <p>
            Token Authentication is the recommeded approach for auth with Ably.
          </p>
        </a>

        <a href="./pub-sub" className={styles.card}>
          <h2>Pub/Sub &rarr;</h2>
          <p>
            Pub/Sub (Publish/Subscribe) with Ably lets you publish messages on
            channels and subscribe to channels to receive messages.
          </p>
        </a>

        <a href="./presence" className={styles.card}>
          <h2>Presence &rarr;</h2>
          <p>
            Presence with Ably allows you to keep track of devices that are
            present on a channel. This is great for tracking if a device is
            online or offline or indicating if a user is in a chat room when
            using Ably for Chat.
          </p>
        </a>

        <a href="./history" className={styles.card}>
          <h2>History &rarr;</h2>
          <p>
            Retrieve a history of messages that have been published to a
            channel.
          </p>
        </a>
      </div>
    </>
  );
}
