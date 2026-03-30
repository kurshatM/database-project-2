# Example Documents — FieldFlow MongoDB

technicians:

```json
{
  "firstName": "Mike",
  "lastName": "Rivera",
  "email": "mike.rivera@fieldflow.com",
  "phone": "555-0301",
  "region": { "regionId": 1, "regionName": "Downtown", "city": "Portland", "state": "OR" },
  "skills": [
    { "skillId": 1, "skillName": "HVAC Repair", "category": "Heating & Cooling" },
    { "skillId": 4, "skillName": "Appliance Repair", "category": "General" }
  ],
  "availability": [
    { "dayOfWeek": "Monday", "startTime": "08:00", "endTime": "17:00" },
    { "dayOfWeek": "Tuesday", "startTime": "08:00", "endTime": "17:00" },
    { "dayOfWeek": "Wednesday", "startTime": "08:00", "endTime": "17:00" }
  ],
  "isAvailable": true
}
```

clients:

```json
{
  "firstName": "Alice",
  "lastName": "Johnson",
  "email": "alice.johnson@email.com",
  "phone": "555-0101",
  "address": "123 Oak St",
  "region": { "regionId": 1, "regionName": "Downtown", "city": "Portland", "state": "OR" }
}
```

jobs:

```json
{
  "description": "AC unit not cooling",
  "status": "Completed",
  "scheduledDate": "2026-01-10",
  "completedDate": "2026-01-10",
  "priority": "High",
  "client": { "firstName": "Alice", "lastName": "Johnson", "email": "alice.johnson@email.com", "phone": "555-0101", "address": "123 Oak St" },
  "technician": { "firstName": "Mike", "lastName": "Rivera", "email": "mike.rivera@fieldflow.com" },
  "dispatcher": { "firstName": "Irene", "lastName": "Patel" },
  "region": { "regionId": 1, "regionName": "Downtown", "city": "Portland", "state": "OR" },
  "reviews": [
    { "rating": 5, "comment": "Excellent service, fixed the AC quickly!", "reviewDate": "2026-01-11" }
  ]
}
```
