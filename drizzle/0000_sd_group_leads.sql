CREATE TABLE `leads` (
  `id` text PRIMARY KEY NOT NULL,
  `name` text NOT NULL,
  `company` text,
  `phone` text NOT NULL,
  `email` text NOT NULL,
  `need` text,
  `message` text NOT NULL,
  `created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_leads_created_at` ON `leads` (`created_at`);
