
import Carousel from './Carousel';

function App() {
  const cards = [
    {
      img: 'https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg',
      price: 800,
      product: 'Dress 1'
    },
    {
      img: 'https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg',
      price: 800,
      product: 'Dress 2'
    },
    {
      img: 'https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg',
      price: 800,
      product: 'Dress 3'
    },
    {
      img: 'https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg',
      price: 800,
      product: 'Dress 4'
    },
    {
      img: 'https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg',
      price: 800,
      product: 'Dress 5'
    },
    {
      img: 'https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg',
      price: 800,
      product: 'Dress 6'
    },
    {
      img: 'https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg',
      price: 800,
      product: 'Dress 7'
    },
    {
      img: 'https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg',
      price: 800,
      product: 'Dress 8'
    },
  ]
  return (
    <div className="App">
      <Carousel cards={cards}/>
    </div>
  );
}

export default App;
