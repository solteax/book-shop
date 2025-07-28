import React from "react"
import { Input, Menu } from "semantic-ui-react"

const Filter = ({ setFilter, filterBy, searchQuery, setQuery }) => {
  return (
    <Menu secondary>
      <Menu.Item
        name="Все"
        active={filterBy === "all"}
        onClick={setFilter.bind(null, "all")}
      />
      <Menu.Item
        name="Дорогие"
        active={filterBy === "price_high"}
        onClick={setFilter.bind(null, "price_high")}
      />
      <Menu.Item
        name="Дешевые"
        active={filterBy === "price_low"}
        onClick={setFilter.bind(null, "price_low")}
      />
      <Menu.Item
        name="Автор"
        active={filterBy === "author"}
        onClick={setFilter.bind(null, "author")}
      />
      <Menu.Item position="right">
        <Input
          icon="search"
          onChange={(e) => setQuery(e.target.value)}
          value={searchQuery}
          placeholder="Поиск по книгам"
        />
      </Menu.Item>
    </Menu>
  )
}

export default Filter
