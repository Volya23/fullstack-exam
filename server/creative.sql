WITH rating_users AS (
   SELECT "id" FROM "Users"
   WHERE role = 'creator'
   ORDER BY rating DESC LIMIT 3
  )
  UPDATE "Users" AS u
  SET balance = u.balance + 10
  FROM rating_users AS r
  WHERE u."id" = r."id"