# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

<br /><br />
## Your Breakdown Here <br /><br />

### Ticket 1: Update Facilities table to include custom Agent IDs

Description:

The current system generates reports with Agents' internal database IDs. To allow Facilities to use their own custom Agent IDs, we need to update the Facilities table in the database to include a new column for storing these custom IDs.

Acceptance Criteria:

1. The Facilities table in the database has a new column named "custom_agent_id".
2. The "custom_agent_id" column accepts and stores alphanumeric values.
3. The existing data in the Facilities table is not affected by this change.

Effort Estimate: 2 hours

Implementation Details:

1. Identify the database management system being used (e.g., MySQL, PostgreSQL).
Connect to the database using appropriate credentials.
2. Write and execute an SQL query to add a new column "custom_agent_id" to the Facilities table.
3. Validate the column addition by checking the table structure and ensuring the existing data is unaffected. <br /><br />
### Ticket 2: Update Shifts table to associate custom Agent IDs
Description:

Currently, the Shifts table stores Agents' internal database IDs. To associate the custom Agent IDs provided by Facilities, we need to update the Shifts table in the database and replace the internal IDs with the corresponding custom IDs.

Acceptance Criteria:

1. The Shifts table in the database has a new column named "custom_agent_id".
The "custom_agent_id" column is populated with the custom Agent IDs provided by Facilities, based on the internal database IDs.
2. The existing data in the Shifts table is not affected by this change.

Effort Estimate: 3 hours

Implementation Details:

1. Write and execute an SQL query to add a new column "custom_agent_id" to the Shifts table.
2. Retrieve the existing Shifts data and iterate over each record.
3. For each Shift record, query the Facilities table to obtain the custom Agent ID based on the internal Agent ID.
4. Update the "custom_agent_id" column in the Shifts table with the corresponding custom Agent ID.
5. Validate the column addition and data association by querying sample Shift records and ensuring the existing data is unaffected. <br /><br />
### Ticket 3: Update generateReport function to use custom Agent IDs
Description:

Currently, the generateReport function uses the internal database IDs of Agents when generating reports. To incorporate the custom Agent IDs provided by Facilities, we need to modify the generateReport function to retrieve and utilize the custom Agent IDs instead.

Acceptance Criteria:

1. The generateReport function retrieves the custom Agent IDs from the Shifts table instead of internal database IDs.
2. The generated PDF reports display the custom Agent IDs for each Agent in the Shifts.

Effort Estimate: 4 hours

Implementation Details:

1. Identify the programming language and framework used for the generateReport function.
2. Locate the relevant code file or function where the report generation occurs.
Modify the code to retrieve the custom Agent IDs from the Shifts table using the Shifts' internal Agent IDs.
3. Update the report generation logic to include the custom Agent IDs in the appropriate sections.
4. Generate a sample report for verification, ensuring that the custom Agent IDs are correctly displayed. <br /><br />
### Ticket 4: Add custom Agent ID input field to Facilities interface
Description:

To allow Facilities to save their own custom IDs for each Agent, we need to update the Facilities interface by adding an input field for entering and saving the custom Agent IDs.

Acceptance Criteria:

The Facilities interface includes a new input field for custom Agent IDs.
Facilities can enter and save the custom Agent IDs for each
