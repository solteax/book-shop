import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const BookCard = (props) => {

  const {id, title, author, price, image, addToCart, incrementAmount, amount} = props

  const handleClick = ()=>{
    addToCart(props);
    incrementAmount({id, amount:amount?amount:1});
  }

  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='rub' />
          {price}
        </a>
      </Card.Content>
      <Button onClick={handleClick}>Добавить в корзину{amount>0 && `(${amount})`}</Button>
    </Card>
  )
}

export default BookCard