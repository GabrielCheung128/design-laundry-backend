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
            "name": "auth",
            "description": "Operations about auth",
            "externalDocs": {
                "description": "Find out more about our store",
                "url": "http://localhost:3000/auth"
            }
        },
        {
            "name": "user",
            "description": "Operations about user",
            "externalDocs": {
                "description": "Find out more about our store",
                "url": "http://localhost:3000/users"
            }
        },
        {
            "name": "role",
            "description": "Operations about role",
            "externalDocs": {
                "description": "Find out more about our store",
                "url": "http://localhost:3000/roles"
            }
        },
    ],
    "schemes": [
        "http"
    ],
    "paths": {
        "/auth/login": {
            "post": {
                "tags": ["auth"],
                "summary": "Login",
                "description": "To login",
                "operationId": "login",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Created user object",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Auth"
                        }
                    }
                ],
                "responses": {
                    "default": {
                        "description": "successful operation"
                    }
                }
            },
        },
        "/auth/register": {
            "post": {
                "tags": [
                    "auth"
                ],
                "summary": "Register",
                "description": "For register",
                "operationId": "Register",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Register",
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
                },
            }
        },
        "/users": {
            "post": {
                "tags": [
                    "user"
                ],
                "summary": "Create user",
                "description": "This can only be done by the logged in user.",
                "operationId": "createUser",
                "produces": [
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
                },
                "security": [{ "Bearer": [] }],
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
                },
                "security": [{ "Bearer": [] }],
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
                },
                "security": [{ "Bearer": [] }],
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
                        "name": "id",
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
                },
                "security": [{ "Bearer": [] }],
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
                },
                "security": [{ "Bearer": [] }],
            }
        },
        "/roles": {
            "post": {
                "tags": [
                    "role"
                ],
                "summary": "Create role",
                "description": "This can only be done by the logged in user.",
                "operationId": "createRole",
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Created role object",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Role"
                        }
                    }
                ],
                "responses": {
                    "default": {
                        "description": "successful operation"
                    }
                },
                "security": [{ "Bearer": [] }],
            },
            "get": {
                "tags": [
                    "role"
                ],
                "summary": "Search roles",
                "description": "",
                "operationId": "getRole",
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "query",
                        "name": "name",
                        "description": "find user by name",
                        "required": false,
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "$ref": "#/definitions/Role"
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
                },
                "security": [{ "Bearer": [] }],
            },
        },
        "/roles/{id}": {
            "get": {
                "tags": [
                    "role"
                ],
                "summary": "Get user by role id",
                "description": "",
                "operationId": "getRoleById",
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
                            "$ref": "#/definitions/Role"
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
                },
                "security": [{ "Bearer": [] }],
            },
            "put": {
                "tags": [
                    "role"
                ],
                "summary": "Updated role",
                "description": "This can only be done by the logged in user.",
                "operationId": "updateRole",
                "produces": [
                    "application/xml",
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "id",
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
                            "$ref": "#/definitions/Role"
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
                },
                "security": [{ "Bearer": [] }],
            },
            "delete": {
                "tags": [
                    "role"
                ],
                "summary": "Delete role",
                "description": "This can only be done by the logged in user.",
                "operationId": "deleteRole",
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
                            "$ref": "#/definitions/Role"
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
                },
                "security": [{ "Bearer": [] }],
            }
        },
    },
    "securityDefinitions": {
        "Bearer": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header"
        }
    },
    "definitions": {
        "User": {
            "type": "object",
            "properties": {
                "id": {
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
                "roleId": {
                    "type": "integer",
                    "format": "int32",
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
        "Role": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string",
                },
                "name": {
                    "type": "string"
                },
                "permissions": {
                    "type": "string"
                },
            },
            "xml": {
                "name": "Role"
            }
        },
        "Auth": {
            "type": "object",
            "properties": {
                "username": {
                    "type": "string",
                },
                "password": {
                    "type": "string"
                },
            },
            "xml": {
                "name": "Auth"
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