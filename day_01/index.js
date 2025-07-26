
const fs = require('fs');

// Create a file using fs module append means add something to the file and it will not overwrite the file and it will add the new line to the file
fs.writeFile("./notes/page1.txt", "Hello this is my first file I have created using the fs module AND I am using it to write this file", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File created successfully");

    // Append to file after creation
    fs.appendFile("./notes/page1.txt", "\nThis is the second line of the file", (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("File appended successfully");

        // Read file after appending
        fs.readFile("./notes/page1.txt", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("File content:");
            console.log(data);

            // Copy file after reading
            fs.copyFile("./notes/page1.txt", "./notes/page2.txt", (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("File copied successfully");

                // Rename file
                fs.rename("./notes/page2.txt", "./notes/    renamed-page.txt", (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log("page2 File renamed successfully");
                });
            });
            // delete a file
            fs.unlink("./notes/renamed-page.txt",(err)=>{
                if(err){
                    console.log(err);
                }
                console.log("renamed-page File deleted successfully");
            });
        });
    });
});


