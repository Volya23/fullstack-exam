//кількість слів "паровоз" в документах
db.messages.aggregate( [
  {
    $match: {
      body: {$regex: /паровоз/i }
    }
  },
  {
    $project: {
      words: { $split: ["$body", " "] }
    }
  },
  {
    $unwind: "$words"
  },
  {
    $count: "words"
  }
])


//кількість документів зі словами "паровоз"
db.messages.aggregate( [
  {
    $match: {
      body: {$regex: /паровоз/i }
    }
  },
  {
    $count: "body"
  }
])