# learning-prisma

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

> This project was created using `bun init` in bun v1.3.13. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.


---

# Prisma + Bun MERN Setup Guide

A quick reference guide for setting up and using Prisma ORM with the Bun runtime, TypeScript, and PostgreSQL (Neon).

# Quick Command Lookup

| Action | Command | What it does |
|---|---|---|
| Initialize | `bunx --bun prisma init` | Creates the `prisma/` folder, `schema.prisma`, and `.env` file. |
| Migrate (Standard) | `bunx --bun prisma migrate dev --name <migration_name>` | Syncs your database with the Prisma schema and creates a migration history file. |
| Migrate (Manual) | `bunx --bun prisma migrate dev --create-only` | Creates a migration SQL file without applying it to the database. Useful for manual edits or custom casting. |
| Generate Client | `bunx --bun prisma generate` | Regenerates the `@prisma/client` with updated TypeScript types and autocomplete support. |
| Push (Prototyping) | `bunx --bun prisma db push` | Directly syncs the schema with the database without creating migration files. Best for rapid prototyping. |
| Studio | `bunx --bun prisma studio` | Opens Prisma Studio, a browser UI for viewing and editing database records. |

# 1. Project Architecture

To maintain a clean separation between source code and configuration:

- Keep application logic in the src/ directory.

- Keep compiled code in the dist/ directory.

- Keep configuration (prisma.config.ts, tsconfig.json) in the root directory.


# 2. The "Handshake" Workflow

Every time you update schema.prisma, you must complete the handshake:

1. Database update: Run migrate dev so Postgres gets the new columns.

2. Code update: Run generate so TypeScript gets the new types.

# 3. Prisma Client Basics

Always keep your database operations in async functions and cleanly disconnect when finished.

## Creating a Record

```typescript
const newUser = await prisma.user.create({
    data: {
        username: "Pritam",
        password: "secure_password",
        age: 23,
        gender: "MALE" // Using Enum
    }
});
```

Finding Records

Use where to filter rows. Use include to fetch relations (like a user's posts).

```typescript
const adults = await prisma.user.findMany({
    where: {
        age: { gte: 18 }, // gte = Greater Than or Equal
        gender: "MALE"
    }
});
```

## Updating Records

update requires a unique field (like id or username). To update multiple non-unique records, use updateMany.

```typescript
const updatedUser = await prisma.user.update({
    where: { username: "Pritam" },
    data: { age: 24 }
});
```

## 4. Advanced: Manual Migrations & Enums

If you change a String column to an Enum on a table that already has data, Prisma will try to drop the column. To save your data:

1. Run: bunx prisma migrate dev --create-only --name manual_enum_cast

2. Open the generated migration.sql file and replace the drop code with a USING cast:

```sql
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

ALTER TABLE "User" 
ALTER COLUMN "gender" TYPE "Gender" 
USING (
  CASE 
    WHEN "gender" = 'M' THEN 'MALE'::"Gender"
    WHEN "gender" = 'F' THEN 'FEMALE'::"Gender"
    ELSE 'OTHER'::"Gender"
  END
);

```

3. Apply it: bunx prisma migrate dev

---

#### Docs

1. https://www.prisma.io/docs/prisma-orm/quickstart/
2. https://console.neon.tech/
3. https://ipritam.notion.site/Prisma-35e3934632d280318e35ea0d4a17d366