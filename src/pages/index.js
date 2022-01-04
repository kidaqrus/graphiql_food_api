import React from "react"
import Layout from "../components/layout"
import { Link,  graphql } from "gatsby"
import * as homeStyles from "../components/home.module.scss"

export default function Home(props) {
  const restaurant = props.data.allMongodbFoodieRestaurant.edges
  return ( 
    <Layout>
      
      <table>
       
       {restaurant.map(rest =>
       <tbody className={homeStyles.tbody}>
         <tr>
       <td>{rest.node.name}</td>
       <td>{rest.node.type_of_food}</td>
       <td>{rest.node.postcode}</td>
      <td>
       <a href="{rest.node.URL}">{rest.node.URL}</a>
        </td>
        <td>{rest.node.address_line_2}</td>
       </tr>
        </tbody>
        )}
       </table>
      
  </Layout>
  )
}

export const query = graphql`
    query {
      allMongodbFoodieRestaurant {
        edges{
          node {
            id
            name
            type_of_food
            postcode
            address_line_2
            URL
          }
        }
      }

    }
  `
