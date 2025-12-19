UPDATE "Users"
SET balance = '130'
WHERE role = 'customer';


SELECT c."userId", u.role, c."orderId", c."createdAt", u.balance, u.balance*0.1 AS cashback, u.balance*1.1 AS balance_with_cash
FROM "Users" AS u
JOIN "Contests" AS c
ON u."id" = c."userId"
WHERE c."createdAt" >= '2024-12-25'
AND c."createdAt" <= '2025-05-28'