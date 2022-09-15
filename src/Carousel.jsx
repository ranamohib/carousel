import { useEffect } from "react"

export default function Carousel({cards}) {
    useEffect(()=>{
        let i = 0;
        const cards = document.querySelectorAll(".card");
        const next = document.querySelector(".btn-next");
        const prev = document.querySelector(".btn-prev");
        next.addEventListener("click", function () {
            i++;
            if(i>4)i=0;
            cards.forEach((card, indx) => {
           card.style.transform = `translateX(${100 * (-i)}%)`;
         });
       });
       prev.addEventListener("click", function () {
            i--;
            if(i<0)i=4;
            cards.forEach((card, indx) => {
            card.style.transform = `translateX(${100 * (-i)}%)`;
        });
   });
    },[])
  return (
    <div className="carousel">
        <button class="btn btn-prev"><i class="fa-solid fa-chevron-left"></i></button>  
        <div className="container">
        {cards.map( card => 
            (<div className="card">
                <img
                src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg"
                alt=""
                />
                <h3 className="product">{card.product}</h3>
                <p className="price">{card.price}</p>
            </div>))}
        </div>
        <button class="btn btn-next"><i class="fa-solid fa-chevron-right"></i></button>    
    </div>
  )
}
