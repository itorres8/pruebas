
import { ProductButtons,ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';



const product ={
  id: '1',
  title: 'Coffe prueba - card',
  img: '../coffee-mug.png',
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <div style = {{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',        
      }}>
        <ProductCard product={ product }
                    className="bg-dark text-white">
          <ProductCard.Image className= 'custom-image'/>
          <ProductCard.Title className= 'text-white' />
          <ProductCard.Buttons className= 'custom-buttons'/>
        </ProductCard>  

        <ProductCard product= { product }
                    className="bg-dark text-white" >
          <ProductImage className = 'custom-image'/>
          <ProductTitle className ='text-white'/>
          <ProductButtons className='custom-buttons'/>
        </ProductCard> 

        <ProductCard product= { product }
                    style = {{
                      background:'red'
                    }} >                     
          <ProductImage />
          <ProductTitle />
          <ProductButtons 
            style={{
              display:'flex',
              justifyContent: 'end',        
            }}
          />
        </ProductCard> 

      </div>
    </div>
  )
}
