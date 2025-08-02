
---

# 📘 Python Notes: Exception Handling & File Handling

## ⚠️ Exceptions in Python

**Exceptions** are unexpected errors that occur during the execution of a program. These errors disrupt the normal flow of the program.

### ❌ Example:

```python
print("Start")
print(10 / 0)  # ❌ Raises ZeroDivisionError
print("End")   # ❌ This line will never run
```

In the above code:

* The line `10 / 0` raises a **ZeroDivisionError**
* Because of this, the program crashes and the next line does not execute

> **Note:** This is just one type of exception. There are many others such as:

* `NameError`
* `TypeError`
* `ValueError`
* `IndexError`
* `KeyError`
  ...and more.

But don't worry — the good news is that **we can handle these exceptions** using Python's built-in features.

---

## 🛡️ Exception Handling

Python provides several **keywords** to handle exceptions gracefully:

| Keyword   | Purpose                                                   |
| --------- | --------------------------------------------------------- |
| `try`     | Wraps the block of code that might raise an exception     |
| `except`  | Handles the exception if it occurs                        |
| `else`    | Runs if no exception occurs                               |
| `finally` | Runs no matter what (whether there's an exception or not) |
| `raise`   | Manually throw an exception                               |

### ✅ Example:

```python
try:
    print("Start")
    result = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
else:
    print("Division successful.")
finally:
    print("This block always runs.")
```

### 🔍 Output:

```
Start
You can't divide by zero!
This block always runs.
```

> 🎯 These keywords help make your code more robust and less likely to crash unexpectedly.

---

## 📁 File Handling in Python

### 📄 What Are Files?

A **file** is a named location on your system that stores data. It can have any extension like:

* `.py` (Python)
* `.txt` (Text)
* `.mp3` (Audio)
* `.csv` (Comma-separated values)

---

## 🔧 What is File Handling?

**File Handling** refers to performing **CRUD** operations:

* **C**reate
* **R**ead
* **U**pdate
* **D**elete

### 📂 Common File Modes:

| Mode  | Description                                      |
| ----- | ------------------------------------------------ |
| `'r'` | Read (default). File must exist                  |
| `'w'` | Write. Creates a new file or overwrites existing |
| `'a'` | Append. Adds content to the end of file          |
| `'x'` | Create. Fails if file already exists             |

---

## ✍️ Reading a File (Basic Syntax)

```python
file = open("myfile.txt", "r")
print(file.read())
file.close()
```

* Here, `"r"` means read mode.
* Always remember to **close the file** after reading.

---

## ✅ Recommended: Using `with` Statement (Auto-close)

```python
with open("data.txt", "r") as f:
    content = f.read()
    print(content)
```

* Using `with` ensures the file is automatically closed after reading.
* This is the **recommended way** to handle files in Python.

---

## 📌 Summary

* Use **exception handling** to prevent your program from crashing.
* Use **file handling** to create, read, update, and delete files.
* Always handle exceptions using `try-except`.
* Use `with open(...)` for cleaner and safer file access.

---

