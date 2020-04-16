# 6GACOVIDAPI
An API for exploring a database of covid cases by region.

Ever wanted an API that could fetch observation data from regions around the world that track the spread, fatality, and chronology of the COVID 19 Outbreak?

This is my attempt at a RESTful API that does just that with full CRUD functionality. 

## Getting Started

The API is hosted at Heroku here: https://pure-citadel-56709.herokuapp.com/
Repo Github: https://github.com/digitalfences/6GACOVIDAPI

### Prerequisites

A computer, an internet connection, and a dream.

```
Ex. MacBook Pro, Azer laptop, Dell desktop etc.
```

### Installing

A step by step series of examples that tell you how to get a development env running

Through github repository:

```
1. Clone this repo to your computer
2. install dependencies (Node, Express, Body-Parser)
3. run node index.js 
4. Navigate to routes or test with Postman

```

## Running the tests

Documentation in doc folder

### Read

Index of all observations (may cause lagging)

```
/ or /index 
```

Find observations where deaths, confirmed cases, or recovered are equal to or above a certain number

```
/cases/deaths/:number
/cases/confirmed/:number
/cases/recovered/:number
```

Find cases by Serial Number, Date or Country
```
/SNo/:number
/date/:date (format XX/XX/XXXX)
/country/:country
```

### Create, Update and Delete

Create: 

```
/ with the observation data you'd like to add in the body
```

Update:

```
/:Serial_Number with the observation data you'd like to change in the body
```

Delete:

```
/:Serial_Number of the observation you'd like to delete
```


## Deployment

Add additional notes about how to deploy this on a live system

## Versioning

1.0

## Authors

* **Galen Emanuel** - *Full Development* - [digitalfences](https://github.com/digitalfences)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* GA for project guidance and instruction