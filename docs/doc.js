module.exports = {
    "swagger": "2.0",
    "info": {
        "description": "Design Laundry API Doc",
        "version": "1.0.0",
        "title": "Design Laundry",
        "contact": {
            "email": "gabrielcheung889@gmail.com"
        },
    },
    "host": "localhost:3000",
    "basePath": "/",
    "tags": [
        {
            "name": "user",
            "description": "Operations about user",
            "externalDocs": {
                "description": "Find out more about our store",
                "url": "http://localhost:3000/users"
            }
        }
    ],
    "schemes": [
        "http"
    ],
    "paths": {
        "/users": {
            "post": {
                "tags": [
                    "user"
                ],
                "summary": "Create user",
                "description": "This can only be done by the logged in user.",
                "operationId": "createUser",
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Created user object",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                ],
                "responses": {
                    "default": {
                        "description": "successful operation"
                    }
                }
            },
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "Search users",
                "description": "",
                "operationId": "getUsers",
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "query",
                        "name": "username",
                        "description": "find user by username",
                        "required": false,
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    },
                    "400": {
                        "description": "Invalid"
                    },
                    "401": {
                        "description": "Unauthorized"
                    },
                    "404": {
                        "description": "User not found"
                    }
                }
            },
        },
        "/users/{id}": {
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "Get user by user id",
                "description": "",
                "operationId": "getUserById",
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "The name that needs to be fetched. ",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    },
                    "400": {
                        "description": "Invalid username supplied"
                    },
                    "401": {
                        "description": "Unauthorized"
                    },
                    "404": {
                        "description": "User not found"
                    }
                }
            },
            "put": {
                "tags": [
                    "user"
                ],
                "summary": "Updated user",
                "description": "This can only be done by the logged in user.",
                "operationId": "updateUser",
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "username",
                        "in": "path",
                        "description": "name that need to be updated",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Updated user object",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                ],
                "responses": {
                    "400": {
                        "description": "Invalid user supplied"
                    },
                    "401": {
                        "description": "Unauthorized"
                    },
                    "404": {
                        "description": "User not found"
                    }
                }
            },
            "delete": {
                "tags": [
                    "user"
                ],
                "summary": "Delete user",
                "description": "This can only be done by the logged in user.",
                "operationId": "deleteUser",
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "The name that needs to be fetched. ",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    },
                    "400": {
                        "description": "Invalid username supplied"
                    },
                    "401": {
                        "description": "Unauthorized"
                    },
                    "404": {
                        "description": "User not found"
                    }
                }
            }
        }
    },
    "securityDefinitions": {
        "login": {
            "type": "oauth2",
            "authorizationUrl": "http://localhost:3000/auth",
            "flow": "implicit",
            "scopes": {
            }
        },
        // "api_key": {
        //     "type": "apiKey",
        //     "name": "api_key",
        //     "in": "header"
        // }
    },
    "definitions": {
        "User": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string",
                },
                "username": {
                    "type": "string"
                },
                "firstName": {
                    "type": "string"
                },
                "lastName": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "mobile": {
                    "type": "string"
                },
                "role": {
                    "type": "string"
                },
                "status": {
                    "type": "integer",
                    "format": "int32",
                    "description": "User Status"
                },
            },
            "xml": {
                "name": "User"
            }
        },
        "ApiResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer",
                    "format": "int32"
                },
                "type": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            }
        }
    },
    "externalDocs": {
        "description": "Find out more about Swagger",
        "url": "http://swagger.io"
    }
}