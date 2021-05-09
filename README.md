
# Basic CRUD NodeJS

Setting up a nodejs server with persistency in data using NodeJS, Express and MongoDB which will perform the basic crud operations; which are:
Create a new user record 
Read all records 
Read a single record
Update a single user record 
Delete a single record 

The finished app would be deployed on heroku


## Run Locally

Clone the project

```bash
  git clone https://github.com/samspecial/basic-crud-nodejs.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Launch Postman

```Postman
  Use the API reference below to test the various endpoints in Postman
```

  
## API Reference

#### Create a new user

```http
  POST https://app-directory.herokuapp.com/users/
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `name`    | `string` | **Required**.  name of user to create    |
| `email`   | `string` | **Required**.  email of user to create   |
| `country` | `string` | **Required**.  country of user to create |

#### Get all users

```http
  GET https://app-directory.herokuapp.com/users/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Not Required**.          |

#### Get a single user

```http
  GET https://app-directory.herokuapp.com/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Update a single user
```http
  PUT https://app-directory.herokuapp.com/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to update |

#### Delete a single user
```http
  DELETE https://app-directory.herokuapp.com/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to delete |



  
## Feedback

If you have any feedback, please reach out to me at psalmueloye@gmail.com

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  