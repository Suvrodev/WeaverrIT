import React, { useEffect, useRef, useState } from 'react';
import './test.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import Swal from 'sweetalert2';
const Test = () => {



  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      setIsAtEnd(scrolledToBottom);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if(isAtEnd){
    console.log("end point");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "End Point",
      showConfirmButton: false,
      timer: 1500
    });
  }



  /////After
  // const [isAtEnd, setIsAtEnd] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
  //     const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
  //     const clientHeight = document.documentElement.clientHeight || window.innerHeight;
  //     const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

  //     setIsAtEnd(scrolledToBottom);
  //   };

  //   const handleTouchMove = () => {
  //     handleScroll();
  //   };

  //   // Add scroll event listener
  //   window.addEventListener('scroll', handleScroll);
  //   window.addEventListener('touchmove', handleTouchMove);

  //   // Clean up the event listeners
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     window.removeEventListener('touchmove', handleTouchMove);
  //   };
  // }, []);

  // if (isAtEnd) {
  //   console.log('end point');

  //   Swal.fire({
  //     position: "top-end",
  //     icon: "success",
  //     title: "Your work has been saved",
  //     showConfirmButton: false,
  //     timer: 1500
  //   });
  // }
   
    

    return (
      <div>
        <div className=''>QSN: if I will go bottom of screen then show in end point 
give me code in react</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eveniet dicta harum eligendi deserunt odit, vel, temporibus quos quod dolore explicabo voluptatum repudiandae enim magnam, autem commodi repellat! Sapiente dicta architecto nihil aliquid, officia itaque ullam cupiditate aspernatur fugit culpa possimus nesciunt tenetur quae suscipit velit incidunt corrupti iusto tempora exercitationem. Dolorum, voluptatibus. Eaque blanditiis atque sit cum doloribus veritatis distinctio voluptate neque ipsam necessitatibus quos aut, beatae illum iste voluptatum mollitia ipsa. Quia cum adipisci qui perferendis laboriosam architecto quaerat est recusandae distinctio maiores. Perspiciatis est incidunt reiciendis, hic eligendi repudiandae perferendis illum architecto facere beatae error recusandae et debitis doloremque, enim quo vero. Optio corrupti dolorem odit a, tempore totam fuga eligendi, libero modi doloribus et deleniti assumenda aut qui fugiat voluptas accusamus dolorum adipisci inventore corporis vero. Rerum aliquid magnam cumque libero facilis doloremque harum mollitia modi in? Est facere quaerat, nihil voluptatum necessitatibus distinctio repudiandae molestias, eveniet exercitationem quam, dicta aliquid placeat sed nemo incidunt itaque laborum! Esse temporibus ipsum voluptates eveniet dolores vel officiis sapiente sunt necessitatibus sint, autem maiores, minus neque adipisci tenetur repudiandae aperiam. Aliquid culpa ex perspiciatis, consequuntur nobis blanditiis, libero saepe voluptatibus ut voluptas ipsa temporibus officia explicabo laudantium non aut obcaecati natus. Reprehenderit voluptatem debitis ab dolor sapiente iusto dicta officia! Sit eum ratione non dicta veritatis laboriosam explicabo aspernatur voluptatibus, quos quod aliquid deserunt harum error suscipit adipisci at dignissimos fugiat! Voluptatum placeat odit, obcaecati fugiat enim facere harum quam eius corporis voluptatem. Itaque cumque, dolor asperiores molestiae atque ratione adipisci quas temporibus id voluptas ab animi fugiat iure nam aliquid impedit molestias velit esse vero tempora odio reprehenderit aut! Atque in aliquam ab perferendis illo adipisci at possimus quis? Ipsa, perspiciatis totam! Sapiente consequatur ex hic rem rerum consequuntur quod modi error, neque in necessitatibus ratione odio illum eos beatae exercitationem at ipsum atque. Aliquam voluptatem eius minima necessitatibus mollitia nam ducimus unde libero fugit soluta sunt atque explicabo magnam, excepturi exercitationem eaque similique. Quam, inventore aperiam eius assumenda esse, nemo veritatis illum officiis maiores tenetur adipisci asperiores libero, eveniet iste accusantium enim maxime voluptatum. Fugiat, ut! Accusamus nemo nisi, voluptate sequi ab recusandae excepturi rerum voluptates officia nulla aut eligendi non tempore at laudantium iure maiores explicabo nesciunt! Impedit, eius quo a quaerat delectus expedita cum. Magnam omnis eligendi explicabo maiores? Possimus qui repellendus repudiandae atque a dolores quia excepturi molestiae harum ducimus quas vero cumque facilis tempora reprehenderit alias, soluta assumenda? Rem sint tempora architecto illum consequatur id rerum magni maxime illo cum voluptatibus eligendi recusandae, enim ducimus dolor suscipit ut? Dolor laudantium commodi perspiciatis fuga optio sapiente, aspernatur necessitatibus consequuntur odit illum ratione sint dolore totam vitae eos nihil aliquid ea quam reprehenderit quia odio dolorum quasi tempore animi. Numquam nulla libero voluptates, perferendis velit expedita distinctio quam cupiditate vitae illo accusamus esse totam sit ratione autem optio harum eaque eligendi error, quaerat laudantium tempora molestiae quibusdam dignissimos? Quae, vitae officia. Nobis consequuntur debitis ipsum molestiae ratione voluptatem illo necessitatibus laboriosam veritatis reiciendis molestias, cum consequatur culpa saepe, inventore quo eligendi temporibus. Cumque error facilis amet ab illum cupiditate sequi, officiis, provident velit vero corporis unde numquam sint sunt, possimus pariatur autem neque commodi architecto odit consequatur tempore. Ipsam adipisci veritatis quaerat aut modi est nulla eveniet natus unde dolorem magni iure laudantium laborum ut suscipit repudiandae exercitationem tenetur, facilis nemo aperiam magnam numquam recusandae officia totam? Quae aliquam laudantium tenetur natus rem, amet architecto aliquid accusamus velit alias illum modi expedita delectus atque temporibus aspernatur voluptatibus assumenda ullam error officia voluptates enim? Optio suscipit architecto aut quam sequi commodi necessitatibus obcaecati incidunt magni natus voluptatum enim voluptate, eum eius excepturi fugit ex accusantium sunt pariatur, aliquid id maiores, qui nisi? Accusamus exercitationem iusto officia corrupti repellat laudantium, maxime, vitae ipsum pariatur perferendis, praesentium illo. Voluptatem distinctio architecto cupiditate voluptate eveniet nesciunt a odio ducimus ut sapiente sit quod exercitationem itaque nobis suscipit nulla, commodi ullam molestiae quibusdam. Quas magnam unde sequi temporibus nobis nisi numquam soluta maxime, reiciendis nostrum! Commodi dignissimos, ipsum necessitatibus placeat sed expedita, natus rerum minus assumenda eius officiis ut tempora? Cupiditate voluptates, adipisci sit similique eos alias culpa quod. Obcaecati blanditiis consectetur sit accusamus aspernatur sint repellendus quaerat eligendi, reiciendis laboriosam, accusantium molestias. Tempora, obcaecati aspernatur recusandae ratione debitis nesciunt aliquid illo est maxime exercitationem? Facere repudiandae architecto nam reprehenderit deserunt asperiores sapiente fugit ea odit. Exercitationem laborum deleniti nam facere praesentium totam nesciunt harum cupiditate provident odit? Quia ad necessitatibus maiores vel. Porro qui reiciendis accusantium, iure deleniti corporis natus in dolores ipsum quaerat laborum, officiis, sint aut harum. Neque magnam eum earum reprehenderit, laudantium magni perspiciatis, iure dolorem sunt odit, similique maiores pariatur deleniti autem voluptatem obcaecati beatae aperiam consequatur nobis voluptas error. Laudantium nobis ea illum laborum autem nisi tempore minus? Consequatur odit voluptatibus esse magnam perferendis eligendi sed quis odio unde exercitationem aliquid quam itaque aliquam, excepturi nobis ullam mollitia, doloremque porro nihil soluta, ipsa ratione beatae maxime necessitatibus. Labore explicabo ipsum tenetur adipisci! Nesciunt aliquam ipsa voluptatibus provident neque, debitis, repudiandae reiciendis sunt quam officia excepturi! Culpa quam voluptatum inventore laudantium consequuntur sunt at tempore, doloribus fugit? Voluptate, inventore? Sit tenetur maxime minima, nisi, possimus facere culpa illo laborum a sed nesciunt. Possimus, nisi hic ducimus harum dolore cumque porro fuga, dignissimos rerum amet, doloremque aperiam? Illum voluptatem pariatur totam non, provident odit magni dignissimos inventore, excepturi consectetur exercitationem omnis iste asperiores harum, laborum iusto quidem corporis ab impedit. Quae maxime deserunt aliquid debitis eaque quas sapiente recusandae excepturi id quos ducimus vitae nobis suscipit, nam labore expedita itaque deleniti ad. Rem suscipit optio sunt odit eos dolore saepe mollitia explicabo ut voluptatibus, tenetur, tempore nam vitae aperiam reprehenderit quidem, aspernatur non voluptatum veritatis nostrum excepturi animi amet. Id, cupiditate maxime soluta similique quas temporibus at fuga quisquam asperiores natus non facere reprehenderit quos, tempore dignissimos eum vitae tenetur consequuntur quod vel nesciunt totam optio? Commodi ipsum asperiores quas pariatur aliquam dicta fuga et harum eius quibusdam, sequi debitis non officia delectus aspernatur enim. Cumque.</p>
      {isAtEnd && <div className='text-4xl text-red-600'>You have reached the bottom of the screen</div>}

     
    </div>

    );
};

export default Test;