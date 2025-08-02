
# ================================
# ⚠️ Exception Handling Example
# ================================

print("=== Exception Handling Example ===")

try:
    print("Start of try block")
    num = int(input("Enter a number to divide 100: "))
    result = 100 / num
    print(f"Result: {result}")
except ZeroDivisionError:
    print("❌ Error: You can't divide by zero!")
except ValueError:
    print("❌ Error: Please enter a valid number!")
else:
    print("✅ Division successful!")
finally:
    print("📌 This block runs no matter what.")

print("\n")


# ================================
# 📁 File Handling Examples
# ================================

print("=== File Handling Example ===")

# 1. Write to a file
with open("sample.txt", "w") as file:
    file.write("This is a test file.\n")
    file.write("Written using Python's write mode.\n")

print("✅ File created and written.")

# 2. Append to the same file
with open("sample.txt", "a") as file:
    file.write("This line is appended at the end.\n")

print("✅ New line appended.")

# 3. Read the file content
try:
    with open("sample.txt", "r") as file:
        content = file.read()
        print("\n📄 File Content:\n")
        print(content)
except FileNotFoundError:
    print("❌ The file was not found.")

# 4. Raise custom exception (optional)
def check_file_extension(filename):
    if not filename.endswith(".txt"):
        raise ValueError("Only .txt files are allowed!")

try:
    check_file_extension("data.csv")
except ValueError as e:
    print(f"❌ Custom Error: {e}")

