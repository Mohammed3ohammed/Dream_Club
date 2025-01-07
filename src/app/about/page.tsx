import Image from "next/image";
import img1 from"../../../public/Image/img1.jpg";
import img2 from"../../../public/Image/img2.jpg";
import img3 from"../../../public/Image/img3.jpg";
import img4 from"../../../public/Image/img4.jpg";
import img5 from"../../../public/Image/img5.jpg";
import img6 from"../../../public/Image/img6.jpg";
import img7 from"../../../public/Image/img7.jpg";
import img8 from"../../../public/Image/img8.jpg";
import img9 from"../../../public/Image/img9.jpg";
import img10 from"../../../public/Image/img10.jpg";
import img11 from"../../../public/Image/img11.jpg";
import img12 from"../../../public/Image/img12.jpg";
import img13 from"../../../public/Image/img16.jpg";
import img14 from"../../../public/Image/img14.jpg";
import img15 from"../../../public/Image/img15.jpg";

const page = () => {
    const imges = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
  return (

      <div className="grid grid-cols-3">
            {
          imges.map((item, id) => (
    
          <Image src={item} alt="Image" className="w-80 h-96 mt-3 rounded-3xl transform transition duration-300 hover:scale-110 animate-bounceLight"  key={id} />
        ))
        }

          </div>
  )
}

export default page;


