import Card from "./Card"
import styles from './RestaurentCard.module.css'
const RestaurantCard = (props) => {
  console.log(props)
  if(props.sortType === 'L2H') {
    props.data.sort((a,b) => a.total_cost - b.total_cost)
  }
  if(props.sortType === 'H2L') {
    props.data.sort((a,b) => b.total_cost - a.total_cost)
  }
  return (
    <div className={styles.card}>
      {props.data.map(({name,url,rating,category,total_cost,total_reviews,total_votes}) => <Card
        name = {name}
        url = {url}
        rating = {rating}
        category = {category}
        total_cost = {total_cost}
        total_reviews = {total_reviews}
        total_votes = {total_votes}
        key = {Math.random().toString()}
      />)}
    </div>
  )
}

export default RestaurantCard