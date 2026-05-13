/*
  Warnings:

  - Changed the type of `gender` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/


-- Create the Enum Type
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- Alter the column and map old values
ALTER TABLE "User" 
ALTER COLUMN "gender" TYPE "Gender" 
USING (
  CASE 
    WHEN "gender" = 'M' THEN 'MALE'::"Gender"
    WHEN "gender" = 'F' THEN 'FEMALE'::"Gender"
  END
);
