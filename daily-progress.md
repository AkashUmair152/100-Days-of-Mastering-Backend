# Day 1: File System Operations

## Date: july 26, 2025

## What I Learned Today
- Node.js fs module basics
- Reading and writing files
- appendfile
- copyfile
- renamefile
- unlink
- appendfile
- Creating directories
- Error handling

## Key Concepts
- `fs.readFileSync()` and `fs.writeFileSync()`
- `fs.existsSync()` and `fs.mkdirSync()`
- Path manipulation with `path` module

## Challenges Faced


## Code Examples
// Example code snippet
const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello World');