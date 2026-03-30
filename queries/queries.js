// fieldflow queries
// paste each query into mongosh (run: mongosh fieldflow)

// Q1 aggregation, avg rating per technician
db.jobs.aggregate([
  { $unwind: "$reviews" },
  { $group: {
      _id: "$technician.firstName",
      avgRating: { $avg: "$reviews.rating" },
      numReviews: { $sum: 1 }
  }},
  { $sort: { avgRating: -1 } }
])

// Q2 complex search, high priority pending or overdue jobs
db.jobs.find({
  $or: [
    { status: "Pending", priority: "High" },
    { scheduledDate: { $lt: "2026-03-29" }, status: { $nin: ["Completed"] } }
  ]
})

// Q3 count documents for a specific client
db.jobs.countDocuments({ "client.firstName": "Emily", "client.lastName": "Davis" })

// Q4 disable a technician
db.technicians.updateOne(
  { firstName: "Oscar", lastName: "Nguyen" },
  { $set: { isAvailable: false } }
)

// Q5 find available technicians with a specific skill in a region
db.technicians.find({
  isAvailable: true,
  "region.city": "Portland",
  "skills.skillName": "HVAC Repair"
})