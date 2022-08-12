// import useFetch from 'react-fetch-hook'; 
import styled from 'styled-components';
import Button from './Button';
import data from './ReplaceBananaServer.js';

export default function Shop(props) {
  const {onProductAdd, onProductTake, cart} = props; 

  // TEST SERVER WORKS 
  // const {isLoading, data = []} = useFetch('http://localhost:3000/bananas/', []);
  
  

return (<>


  {data.map((info )=> (
    <ProductContainer 
        key={info.id}
    >
        { info.id === 1 && <Image1 style={imageStyling}></Image1>}
        { info.id === 2 && <Image2 style={imageStyling}></Image2>}
        { info.id === 3 && <Image3 style={imageStyling}></Image3>}
        { info.id === 4 && <Image4 style={imageStyling}></Image4>}
        { info.id === 5 && <Image5 style={imageStyling}></Image5>}
        { info.id === 6 && <Image6 style={imageStyling}></Image6>}
        { info.id === 7 && <Image7 style={imageStyling}></Image7>}
        { info.id === 8 && <Image8 style={imageStyling}></Image8>}
        
      <ProductDetails>
        <h1 style={{height: '50px', whiteSpace: 'nowrap'}}>{info.name}</h1>
        <p style={{height: '10px',}}>Origin:</p>
        <p style={{height: '20px', whiteSpace: 'nowrap'}}>{info.origin}</p>
        <h2  style={{whiteSpace: 'nowrap'}}>${info.price} per kilo</h2>
      </ProductDetails>

        <Button 
          onProductAdd={onProductAdd}
          onProductTake={onProductTake}
          info={info}
          cart={cart}
          >
        </Button>

    </ProductContainer>

      )
    )
  }
</>)
}

const ProductContainer = styled.div`
  width: 250px;
  min-width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  flex: 1 2;
  margin: 1rem;
  padding: 0rem 1rem;
  border-radius: 20px;
  box-shadow: 8px 15px 5px hsla(0, 0%, 20%, 0.22);
  background-color: white;
  overflow: hidden;
  z-index: 1;
`;
const ProductDetails = styled.div`
  width: 40%;
  padding: 1rem;
`;
const imageStyling = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  zIndex: '-1',
  overflow: 'hidden'
}
const Image1 = styled.div`
  background-image: url('https://specialtyproduce.com/sppics/549.png');
`;
const Image2 = styled.div`
  background-image: url('https://img1.exportersindia.com/product_images/bc-small/dir_155/4625850/kathali-banana-1500569441-3166702.jpeg');
`;
const Image3 = styled.div`
  background-image: url('https://5.imimg.com/data5/QY/RI/MY-31885049/karpooravalli-banana-500x500.jpeg');
`;
const Image4 = styled.div`
  background-image: url('https://4.imimg.com/data4/QV/RG/MY-31246828/banana-grand-naine-500x500.jpg');
`;
const Image5 = styled.div`
  background-image: url('https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/09/blue-java-bananas-1296x728-header-1296x728.jpg?w=1155&h=1528');
`;
const Image6 = styled.div`
  background-image: url('https://specialtyproduce.com/sppics/16732.png');
`;
const Image7 = styled.div`
  background-image: url('https://marketwheelsfooddelivery.com/wp-content/uploads/2021/03/Rigo-banana-3-500x299.jpg');
`;
const Image8 = styled.div`
  background-image: url('https://specialtyproduce.com/sppics/11604.png');
`;
