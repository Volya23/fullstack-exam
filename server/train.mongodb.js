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