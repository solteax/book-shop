import React from 'react'
import {Menu, List, Popup, Button, Image, Label} from 'semantic-ui-react'

const CartComponent = ({amount, title, id, image, removeFromCart, incrementAmount, decrementAmount})=>{

  console.log(amount)

  return (
  <List selection divided verticalAlign="middle">
    <List.Item className="list-item">
      <List.Content>{title}</List.Content>
        {/* <Image avatar src={image} /> */}
      <List.Content className="amount-controller">
        <Button basic onClick={()=>{amount>1?decrementAmount(id):removeFromCart(id)}}>-</Button>
        <Label>{amount}</Label>
        <Button basic onClick={()=>{incrementAmount({id,amount})}}>+</Button>
      </List.Content>
      <List.Content>
        <Button onClick={removeFromCart.bind(null, id)} color="red">Удалить</Button>
      </List.Content>
    </List.Item>
  </List>
)};

const MenuComponent = ({totalPrice, totalBooks, items, amountItems}) => {

  return (
    <Menu>
      <Menu.Item>
        Магазин книг
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          Итого: &nbsp; <b>{totalPrice}</b> руб.
        </Menu.Item>

        <Popup
          className="main-popup-container"
          trigger={
            <Menu.Item>
              Корзина(<b>{totalBooks}</b>)
            </Menu.Item> 
          }
          content = {
            items.length? 
              items.map(book=><CartComponent 
                key={book.id} 
                {...book}
                amount={amountItems.length&&amountItems.find(item=>item.id===book.id).amount}
              />)
            : 'Корзина пустая.'
          }
          on="click"
          hideOnScroll
        />
      </Menu.Menu>
    </Menu>
  )
}

export default MenuComponent