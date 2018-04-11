# server v0.0.0



- [Author](#author)
	- [Create author](#create-author)
	- [Delete author](#delete-author)
	- [Retrieve author](#retrieve-author)
	- [Retrieve authors](#retrieve-authors)
	- [Update author](#update-author)
	
- [Book](#book)
	- [Create book](#create-book)
	- [Delete book](#delete-book)
	- [Retrieve book](#retrieve-book)
	- [Retrieve books](#retrieve-books)
	- [Update book](#update-book)
	
- [Genre](#genre)
	- [Create genre](#create-genre)
	- [Delete genre](#delete-genre)
	- [Retrieve genre](#retrieve-genre)
	- [Retrieve genres](#retrieve-genres)
	- [Update genre](#update-genre)
	


# Author

## Create author



	POST /authors


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Author's name.</p>							|
| content			| 			|  <p>Author's content.</p>							|
| years			| 			|  <p>Author's years.</p>							|
| photo			| 			|  <p>Author's photo.</p>							|

## Delete author



	DELETE /authors/:id


## Retrieve author



	GET /authors/:id


## Retrieve authors



	GET /authors


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update author



	PUT /authors/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Author's name.</p>							|
| content			| 			|  <p>Author's content.</p>							|
| years			| 			|  <p>Author's years.</p>							|
| photo			| 			|  <p>Author's photo.</p>							|

# Book

## Create book



	POST /books


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Book's name.</p>							|
| content			| 			|  <p>Book's content.</p>							|
| genreId			| 			|  <p>Book's genreId.</p>							|
| authorId			| 			|  <p>Book's authorId.</p>							|
| rating			| 			|  <p>Book's rating.</p>							|
| photo			| 			|  <p>Book's photo.</p>							|

## Delete book



	DELETE /books/:id


## Retrieve book



	GET /books/:id


## Retrieve books



	GET /books


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update book



	PUT /books/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Book's name.</p>							|
| content			| 			|  <p>Book's content.</p>							|
| genreId			| 			|  <p>Book's genreId.</p>							|
| authorId			| 			|  <p>Book's authorId.</p>							|
| rating			| 			|  <p>Book's rating.</p>							|
| photo			| 			|  <p>Book's photo.</p>							|

# Genre

## Create genre



	POST /genres


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Genre's name.</p>							|
| content			| 			|  <p>Genre's content.</p>							|

## Delete genre



	DELETE /genres/:id


## Retrieve genre



	GET /genres/:id


## Retrieve genres



	GET /genres


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update genre



	PUT /genres/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Genre's name.</p>							|
| content			| 			|  <p>Genre's content.</p>							|


