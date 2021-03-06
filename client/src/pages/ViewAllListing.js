import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import PropertyCard from '../components/PropertyCard'

export default class ViewAllListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProperties: []
    }
  }
  componentDidMount() {
    this.getAllProperties()
  }

  getAllProperties = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/properties/all`)
      this.setState({ allProperties: res.data.properties })
    } catch (error) {
      throw error
    }
  }

  render() {
    const allProperties = this.state.allProperties.reverse()
    return (
      <div>
        <div className="title">
          <h1>View All Listing</h1>
        </div>

        <section className="container-grid">
          {allProperties.length ? (
            allProperties.map((property, index) => (
              <PropertyCard
                key={property._id}
                image={property.image}
                street={property.street}
                price={property.price}
                createdAt={property.createdAt}
                id={property._id}
                onClick={() =>
                  this.props.history.push(
                    `/view/listing/details/${property._id}`
                  )
                }
              />
            ))
          ) : (
            <h3>LOADING...</h3>
          )}
        </section>
      </div>
    )
  }
}
