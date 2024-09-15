import { ProductButtons,ProductCard, ProductImage, ProductTitle } from "../components";


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
        flexWrap: 'wrap'
      }}>
        <ProductCard product= { product } >
          <ProductCard.Image />
          <ProductCard.Title title = {'Hola nacho'} />
          <ProductCard.Buttons />
        </ProductCard>  

        <ProductCard product= { product } >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard> 

      </div>
    </div>
  )
}
