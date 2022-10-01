# Example JSON

### /json

```json
{
  "nodes": [
    {
      "id": 0,
      "label": "node 0"
    },
    {
      "id": 1,
      "label": "node 1"
    },
    {
      "id": 2,
      "label": "node 2"
    },
    {
      "id": 3,
      "label": "node 3"
    },
    {
      "id": 4,
      "label": "node 4"
    }
  ],
  "edges": [
    {
      "from": 0,
      "to": 1
    },
    {
      "from": 1,
      "to": 2
    },
    {
      "from": 2,
      "to": 3
    },
    {
      "from": 3,
      "to": 4
    },
    {
      "from": 2,
      "to": 0
    },
    {
      "from": 1,
      "to": 2
    }
  ]
}
```

### dfs
TODO