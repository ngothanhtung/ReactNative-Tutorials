# Step 1

## Get rider by id

- Url https://training.softech.cloud/api/riders/6079678f2acd793445f939cd
- Method: GET
- Response:

```
{
    "ok": true,
    "result": {
        "_id": "6079678f2acd793445f939cd",
        "name": "William Adams",
        "imageUrl": "https://training.softech.cloud/images/riders/1.png"
    }
}
```

# Step 2

## Send a review

- Url: https://training.softech.cloud/api/riders/6079678f2acd793445f939cd/review
- Method: PUT
- Body:

```
 {
    "star": 5,
    "tip": 0,
    "comment": "",
    "reviewUserId": "123456789"
 }
```

- Response:

```
{
    "ok": true,
    "result": {
        "riderId": "6079678f2acd793445f939cd",
        "star": 5,
        "tip": 0,
        "comment": "",
        "reviewUserId": "123456789",
        "_id": "60796a1dc6c1bfff700faaa4"
    }
}
```

# Step 3:

## Thank you

- Go to thank you screen
