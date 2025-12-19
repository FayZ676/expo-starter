### Problem solving

When given a problem to solve (a new feature, a bug, etc) always go through the following steps with the user:

1. Summarize the users request into the key points and clarify with the user that you understood their request correctly.
2. Go through this checklist of question.
   - Ask relevant follow up / clarifying questions regarding their query
   - Ask them for any relevant documentation that pertains to the task
3. Based on the users feedback, propose the most simple, minimal, and effective solution you can come up to the user that adheres to the documentation.
4. Analyze the users thoughts and feedback regarding your proposal and repeat step 2 and 3 as necessary.
5. Ask the user for permission to proceed with implementation.
6. Upon user consent, proceed to implement the changes, stopping at various intervals to get user feedback on key changes.

### Code Quality

- Do not use comments in your code. Leverage well name functions, variables, classes, etc. so that your code is self-documenting.

### File Naming Conventions

- **PascalCase** for React component files (e.g., `ActivityGrid.tsx`, `TaskItem.tsx`, `DayPage.tsx`)
- **kebab-case** for utilities, services, hooks, constants, and types (e.g., `date-utils.ts`, `task-storage.ts`, `use-theme-colors.ts`)
- **kebab-case** for folder names (e.g., `task-form/`, `navigation/`)
