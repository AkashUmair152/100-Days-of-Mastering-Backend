# Day 01: File System Operations with Node.js

## Overview

This project demonstrates fundamental file system operations using Node.js's built-in `fs` (File System) module. The application showcases creating, reading, writing, appending, copying, and renaming files.

## Features

- ✅ **File Creation**: Create new files with custom content
- ✅ **File Reading**: Read and display file contents
- ✅ **File Appending**: Add content to existing files
- ✅ **File Copying**: Duplicate files with different names
- ✅ **File Renaming**: Change file names while preserving content
- ✅ **Error Handling**: Comprehensive error handling for all operations

## Prerequisites

- Node.js installed on your system
- Basic understanding of JavaScript and Node.js

## Installation & Setup

1. **Clone or navigate to the project directory**

   bash
   cd day_01

2. **Run the application**

   bash
   node index.js
   ```

## Code Structure

### Main File: `index.js`

The main application file that demonstrates various file system operations in sequence:

1. **File Creation** (`fs.writeFile`)
   - Creates `page1.txt` with initial content
   - Uses callback-based error handling

2. **File Appending** (`fs.appendFile`)
   - Adds a second line to the existing file
   - Demonstrates modifying existing files

3. **File Reading** (`fs.readFile`)
   - Reads and displays the complete file content
   - Uses UTF-8 encoding for proper text handling

4. **File Copying** (`fs.copyFile`)
   - Creates a copy of `page1.txt` as `page2.txt`
   - Preserves original file

5. **File Renaming** (`fs.rename`)
   - Renames `page2.txt` to `renamed-page.txt`
   - Demonstrates file name modification

## File Operations Demonstrated

| Operation | Method | Description |
|-----------|--------|-------------|
| Create | `fs.writeFile()` | Creates a new file with specified content |
| Append | `fs.appendFile()` | Adds content to the end of existing file |
| Read | `fs.readFile()` | Reads and returns file content |
| Copy | `fs.copyFile()` | Creates a duplicate of the file |
| Rename | `fs.rename()` | Changes the file name |

<!-- ## Expected Output -->
When you run `node index.js`, you should see:

File created successfully
File appended successfully
File content:
Hello this is my first file I have created using the fs module AND I am using it to write this file
This is the second line of the file
File copied successfully
File renamed successfully

## Generated Files

After running the application, you'll find these files in the directory:

- `page1.txt` - Original file with two lines of content
- `renamed-page.txt` - Copy of the original file (renamed from page2.txt)

## Key Learning Points

### 1. **Asynchronous Operations**

All file system operations are asynchronous and use callback functions for handling completion and errors.

### 2. **Error Handling**

Each operation includes proper error handling:

```javascript
if (err) {
    console.log(err);
    return;
}
```

### 3. **Callback Chaining**

Operations are chained using nested callbacks to ensure proper execution order.

### 4. **File Encoding**

Reading files with UTF-8 encoding ensures proper handling of text content.

## Common Use Cases

- **Logging**: Creating and appending to log files
- **Configuration**: Reading and writing configuration files
- **Data Processing**: Processing text files and creating backups
- **File Management**: Organizing and renaming files programmatically

## Next Steps

- Explore synchronous file operations (`fs.writeFileSync`, `fs.readFileSync`)
- Implement file deletion operations
- Add directory operations (creating, reading, removing directories)
- Implement file watching for real-time file changes

## Resources

- [Node.js fs Module Documentation](https://nodejs.org/api/fs.html)
- [File System Best Practices](https://nodejs.org/en/docs/guides/working-with-different-filesystems/)

@Part of the 100 Days of Mastering Backend challenge*

## What I Learned

- How to use Node.js's `fs` module for basic file operations such as creating, reading, appending, copying, and renaming files.
- The importance of asynchronous operations and how callbacks are used to handle the sequence and errors in file system tasks.
- How to handle errors gracefully in each file operation to prevent the application from crashing.
- The structure and flow of chaining file operations using nested callbacks.
- The difference between file encodings and why using `"utf-8"` is important when reading text files.
- Practical use cases for file system operations, such as logging, configuration management, and data processing.
- The basics of project setup and running Node.js scripts from the command line.
- The significance of reading documentation and best practices for working with the file system in Node.js.
