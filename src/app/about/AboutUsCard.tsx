import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';  // Import React Icons
import Image from 'next/image';
import styles from './about.module.css';
import Link from 'next/link';

interface AboutUsCardProps {
  name: string;
  title: string;
  quote: string;
  imageUrl: string;
  instagramLink: string;
  linkedinLink: string;
  githubLink: string;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({
  name,
  title,
  quote,
  imageUrl,
  instagramLink,
  linkedinLink,
  githubLink,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={name} width={150} height={150} className={styles.profileImg} />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.title}>{title}</p>
      <p className={styles.title}>ISE-A 3rd Sem</p>
      <p className={styles.quote}>&quot;{quote}&quot;</p> 
      
      <div className={styles.socialMedia}>
        <Link href={instagramLink} target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.socialIcon} />
        </Link>
        <Link href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.socialIcon} />
        </Link>
        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.socialIcon} />
        </Link>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <AboutUsCard
        name="Gulshan Kumar"
        title="President"
        quote="In life and code, the only limit is your creativity."
        imageUrl="/president1.jpeg" // Correct image path
        instagramLink="https://www.instagram.com/jhagk_/"
        linkedinLink="https://www.linkedin.com/in/gulshankumar0/"
        githubLink="https://github.com/GulshanJha00"
      />
      <AboutUsCard
        name="Dipanshu Shaw "
        title="Vice President"
        quote="Code is like humor, when you have to explain it, it's bad."
        imageUrl="/vicepresident.jpeg" // Correct image path
        instagramLink="https://www.instagram.com/dipanshu.shaw01/"
        linkedinLink="https://www.linkedin.com/in/dipanshu-shaw/"
        githubLink="https://github.com/DipanshuShaw"
      />
    </div>
  );
};

export default About;
