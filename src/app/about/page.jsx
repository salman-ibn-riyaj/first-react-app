import Image from "next/image";
import aboutImg from '../../assets/images/salman2.jpg'

export const metadata = {
  title: 'about',
  description: '...',
}


const AboutPage = () => {
    return (
        <div className="">
            <Image width={500} height={500} alt="Virat" src='https://i.ibb.co.com/Gf6BtHNN/virat-kohli.avif'></Image>
            <Image src='https://images.unsplash.com/photo-1774270905958-86e7eaeae23d' alt="nature" width={500} height={600}></Image>

            <Image width='400' height='500' src='/salman.JPG' alt="Salman pic"></Image>

            <Image src={aboutImg} alt="" width='300' height='500'></Image>
        </div>
    );
};

export default AboutPage;