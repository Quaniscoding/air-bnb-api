module.exports = {
    "/api/createComment": {
        post: {
            tags: ["Bình Luận"],
            "operationId": "createComment",
            "consumes": [
                "application/json-patch+json",
                "application/json",
                "text/json",
                "application/*+json"
            ],
            "parameters": [{
                "name": "token",
                "in": "header",
                "description": "Nhập token",
                "required": true,
                "type": "string"
            }
            ],
            "requestBody": {
                "description": "Post bình luận",
                "require": "true",
                "content": {
                    " application/json": {
                        schema: {
                            $ref: "#/components/schemas/BinhLuanViewModel",
                        },

                    }
                },
            },
            "responses": {
                "200": {
                    "description": "Success"
                }
            }
        },
    }
};