# FieldFlow: Field Technician Dispatch & Job Tracking System (MongoDB)

Kurshat Muhammet

FieldFlow is a database for managing field service operations and dispatching field technicians to appointments/jobs, tracking job status, and collecting client reviews. This project converts the relational SQL database into a non-SQL MongoDB document database using embedded data.

Walkthrough:

1. Requirements & Conceptual Model

- `diagrams/CS3200 Assignment 4 Requirements Doc.pdf`: problem description, business rules, and user personas (reused from Project 1)

- `diagrams/uml-diagram.png`: UML class diagram showing entities and relationships (reused from Project 1)



2. Hierarchical Logical Model

- `docs/logical-model.md`: explains how the normalized relational tables were restructured into three MongoDB root collections (jobs, technicians, clients) using embedded documents
- `diagrams/logical-erd.png`: ERD showing the document model with embedded sub-documents
- LucidChart: https://lucid.app/lucidchart/5144d978-c9f0-481a-9a63-d3f8a4dadc9e/edit?invitationId=inv_7394e04d-57ff-477f-8e17-d7a6a7e53907



3. Collection Definitions

- `docs/collections.md`: example JSON documents for each collection showing the embedded structure



4. Test Data & Import Instructions

- `data/technicians.json`: 12 technician documents
- `data/clients.json`: 10 client documents
- `data/jobs.json`: 30 job documents with embedded reviews

To import, run from the project root:

```bash
mongoimport --db fieldflow --collection technicians --file data/technicians.json --jsonArray
mongoimport --db fieldflow --collection clients --file data/clients.json --jsonArray
mongoimport --db fieldflow --collection jobs --file data/jobs.json --jsonArray
```



5. Queries

- `queries/queries.js`: five MongoDB queries covering aggregation, complex search with `$or`, counting documents for a specific client, updating a technician's availability, and finding technicians by skill and region

To run, open the mongo shell and paste each query:
```bash
mongosh fieldflow
```