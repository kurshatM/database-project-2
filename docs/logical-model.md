# Hierarchical Logical Model — FieldFlow (MongoDB)

## Overview

This document explains how the relational schema from Project 1 was restructured into a document model for MongoDB. Instead of normalized tables with foreign keys, we use embedded documents so that related data lives together in a single document.

## Root Collections

We chose three root collections based on how the data is most commonly accessed:

- **jobs** — the main collection. Dispatchers are constantly looking up, filtering, and updating jobs, so everything related to a job (client info, technician info, reviews) is embedded directly in the job document.
- **technicians** — stores technician profiles. Skills and availability are embedded as arrays instead of being in separate tables.
- **clients** — stores client profiles with their region info embedded.

## Jobs Collection

In the relational model, showing a single job meant joining the Job, Person, Client, Technician, Dispatcher, Region, and Review tables. In MongoDB, all of that is embedded in one document.

What gets embedded:
- **client** — name, email, phone, address are copied into the job document when the job is created
- **technician** — name and email of the assigned technician (or null if unassigned)
- **dispatcher** — name of the dispatcher who assigned the job
- **region** — region name, city, state
- **reviews** — array of review objects with rating, comment, and date

This means reading a job is a single document lookup with no joins.

## Technicians Collection

Each technician document combines what used to be in the Person, Technician, TechnicianSkill, Skill, and Region tables.

What gets embedded:
- **skills** — array of skill objects. In the relational model this was a many-to-many relationship with a junction table (TechnicianSkill). In MongoDB we just put the skills directly in the technician document.
- **availability** — array of day/time objects showing when the technician works
- **region** — embedded region object

The Person supertype from the relational model is gone — firstName, lastName, email, and phone are just fields directly on the technician document since MongoDB doesn't have table inheritance.

## Clients Collection

Each client document combines Person, Client, and Region.

What gets embedded:
- **region** — embedded region object with regionName, city, state

Same as technicians, the Person supertype fields are flattened directly into the document.

## What Changed from the Relational Model

- The **Person** supertype table is eliminated. Its fields (name, email, phone) are copied into both technicians and clients.
- The **TechnicianSkill** junction table is eliminated. Skills are now an embedded array inside each technician.
- The **Review** table is eliminated. Reviews are embedded inside the job they belong to.
- The **Region** table is eliminated as a standalone table. Region data is embedded inside technicians, clients, and jobs.
- **Dispatcher** is no longer its own table. Dispatcher info is just embedded in the job document.
- Client and technician info in jobs are snapshots — if a client updates their phone number, old jobs keep the original info. This is fine since job records are historical.
