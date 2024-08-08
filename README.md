
# Notes API
- A simple Rest API using express framework to store , save and fetch users note data on any android mobile device.
- Used JWT for Authentication , Mongoose for MongDB with     deployment using Render.



## Features

User can :
- Signup/Signin.
Users can create an account or log in to access their personalized dashboard.
- Add Notes
Users can easily create and format new notes with text.
- Save/Delete Notes
Notes can be saved securely, organized, and deleted when no longer needed.
- Edit Notes
Users can edit existing notes, update content, and save changes seamlessly.       


## API Server

```http
https://notes-api-1140.onrender.com/
```



#### Signup

```http
POST/users/signup
```
Returns a user with unique id and token.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`| `string` | **Required**. username      |
| `email`   | `string` | **Required**. email id      |
| `password`| `string` | **Required**. password      |

Response
```http
  {
     user: {
        username: string
        password: string
        email: string
        _id: string
        createdAt: string
        updatedAt: string
        __v: number
    },
    token: string
}
```


#### Signin

```http
POST/users/signin
```
Returns a user with unique id and token.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`   | `string` | **Required**. email id     |
| `password`| `string` | **Required**. password      |

Response
```http
  {
    user: {
        username: string
        password: string
        email: string
        _id: string
        createdAt: string
        updatedAt: string
        __v: number
    },
    token: string
}
```

#### View all notes
```http
GET/note
```
Returns list of notes. 

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`   | `string` | **Required**. token for authentication and authorization to fetch the data of user|

Response
```http
// list containing one or more notes
  [{
        _id: string
        title: string
        description: string
        userId: string
        createdAt: string
        updatedAt: string
        __v: number
    }]
```
#### Add Notes
```http
POST/note
```
Rturns new added notes.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`   | `string` | **Required**. token for authentication and authorization to fetch the data of user|
| `title`| `string` | **Required**. title of the new notes      |
| `description`| `string` | **Required**. description of the notes.      |

Response
```http
  {
      _id: string
        title: string
        description: string
        userId: string
        createdAt: string
        updatedAt: string
        __v: number
}
```
#### Edit Notes
```http
PUT/note/{noteId}
```
Returns updated note.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `noteId`   | `string` | **Required**. unique note id which is generate for each note when created     |
| `title`| `string` | **Optional**. updated title of the new notes      |
| `description`| `string` | **Optional**. updated description of the notes.      |

Response
```http
  {
       _id: string
        title: string
        description: string
        userId: string
        createdAt: date time
        updatedAt: date time
        __v: number
}
```


#### Delete Notes
```http
DELETE/note/{noteId}
```
Returns deleted note
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `noteId`   | `string` | **Required**. unique note id which is generate for each note when created     |

Response
```http
{
 _id: string
        title: string
        description: string
        userId: string
        createdAt: date time
        updatedAt: date time
        __v: number
}
```

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/HOBOCo0)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aman-srivastava-129080201/)


