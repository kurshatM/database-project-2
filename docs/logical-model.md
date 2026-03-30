# Hierarchical Logical Model — FieldFlow (MongoDB)

This document explains how the relational schema from Project 1 was restructured into a MongoDB document model using embedded data.

## Root Collections

- **jobs** — embeds client info, technician info, dispatcher info, region, and reviews
- **technicians** — embeds skills, availability, and region
- **clients** — embeds region

- **Person** supertype is gone. Name, email, and phone are now fields directly on technician and client documents.
- **TechnicianSkill** junction table is gone. Skills are an embedded array inside each technician.
- **Review** table is gone. Reviews are an embedded array inside each job.
- **Region** is no longer a separate table. It's embedded inside technicians, clients, and jobs.
- **Dispatcher** is no longer a separate table. Dispatcher info is embedded in the job document.
- Client and technician info in jobs are copies from when the job was created, not live references.
