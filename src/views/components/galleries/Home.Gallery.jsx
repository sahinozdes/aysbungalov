import image1 from '../../../assets/images/image1.jpg';
import image3 from '../../../assets/images/image3.jpg';
import image4 from '../../../assets/images/image4.jpg';
import image5 from '../../../assets/images/image5.jpg';
import image10 from '../../../assets/images/10.jpg';
import image11 from '../../../assets/images/11.jpg';
import image12 from '../../../assets/images/12.jpg';
import image13 from '../../../assets/images/13.jpg';
import image14 from '../../../assets/images/14.jpg';
import image15 from '../../../assets/images/15.jpg';
import image16 from '../../../assets/images/16.jpg';
import image17 from '../../../assets/images/17.jpg';
import image18 from '../../../assets/images/18.jpg';
import image19 from '../../../assets/images/19.jpg';
import image100 from '../../../assets/images/100.jpg';
import image101 from '../../../assets/images/101.jpg';
import image102 from '../../../assets/images/102.jpg';
import image103 from '../../../assets/images/103.jpg';
import image104 from '../../../assets/images/104.jpg';
import image105 from '../../../assets/images/105.jpg';
import image106 from '../../../assets/images/106.jpg';
import image107 from '../../../assets/images/107.jpg';
import image108 from '../../../assets/images/108.jpg';
import image109 from '../../../assets/images/109.jpg';
import image110 from '../../../assets/images/110.jpg';
import image111 from '../../../assets/images/111.jpg';
import image112 from '../../../assets/images/112.jpg';
import image113 from '../../../assets/images/113.jpg';
import image114 from '../../../assets/images/114.jpg';
import image115 from '../../../assets/images/115.jpg';
import image116 from '../../../assets/images/116.jpg';
import image117 from '../../../assets/images/117.jpg';
import image118 from '../../../assets/images/118.jpg';
import image119 from '../../../assets/images/119.jpg';
import image120 from '../../../assets/images/120.jpg';
import image121 from '../../../assets/images/121.jpg';
import image122 from '../../../assets/images/122.jpg';
import image123 from '../../../assets/images/123.jpg';
import image124 from '../../../assets/images/124.jpg';
import image125 from '../../../assets/images/125.jpg';
import image126 from '../../../assets/images/126.jpg';
import image127 from '../../../assets/images/127.jpg';
import image128 from '../../../assets/images/128.jpg';
import image129 from '../../../assets/images/129.jpg';
import image130 from '../../../assets/images/130.jpg';

const HomeGallery = () => {
    const sources = [
        image1,
        image3,
        image4,
        image5,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image100,
        image101,
        image102,
        image103,
        image104,
        image105,
        image106,
        image107,
        image108,
        image109,
        image110,
        image111,
        image112,
        image113,
        image114,
        image115,
        image116,
        image117,
        image118,
        image119,
        image120,
        image121,
        image122,
        image123,
        image124,
        image125,
        image126,
        image127,
        image128,
        image129,
        image130,
    ];

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                sources.map((src) => {
                    return (
                        <img className='aspect-square object-cover cursor-pointer hover:scale-110 transition duration-100'
                             src={src}
                             alt={src}/>
                    );
                })
            }
        </div>
    );
};

export default HomeGallery;
