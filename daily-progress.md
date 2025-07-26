# Day 1: File System Operations

## Date: July 26, 2025

## What I Learned Today
- Node.js fs module basics
- Reading and writing files
- Appending to files with `appendFile`
- Copying files with `copyFile`
- Renaming files with `rename`
- Deleting files with `unlink`
- Creating directories
- Error handling in Node.js

## Key Concepts
- `fs.readFileSync()` and `fs.writeFileSync()`
- `fs.appendFile()` and `fs.copyFile()`
- `fs.existsSync()` and `fs.mkdirSync()`
- Path manipulation with `path` module
- Asynchronous vs Synchronous operations

## Challenges Faced
- Understanding async operations and proper sequencing
- Handling file paths correctly
- Managing callback chains

## Code Examples
```javascript
// Example code snippet
const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello World');

// Copy file example
fs.copyFile('source.txt', 'destination.txt', (err) => {
    if (err) throw err;
    console.log('File copied successfully!');
});