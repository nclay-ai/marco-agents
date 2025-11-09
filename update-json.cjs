const fs = require('fs');
const path = require('path');

// The value you want to set for the "model" key.
const MODEL_VALUE = "gpt-4o";

// The relative path to the folder containing the JSON files.
const SRC_DIR = path.join(__dirname, 'src');

// Read the contents of the src directory
fs.readdir(SRC_DIR, (err, files) => {
    if (err) {
        console.error("Error reading src directory:", err);
        return;
    }

    files.forEach(file => {
        // Only process .json files
        if (path.extname(file) === '.json') {
            const filePath = path.join(SRC_DIR, file);

            // Read and parse the JSON file
            const content = fs.readFileSync(filePath, 'utf8');
            let data;
            try {
                data = JSON.parse(content);
            } catch (parseError) {
                console.error(`Error parsing JSON in file ${file}:`, parseError);
                return;
            }

            // Check if "model" key exists and overwrite it, or add if missing
            if ("model" in data) {
                console.log(`"model" key exists in ${file}, overwriting.`);
            } else {
                console.log(`"model" key does not exist in ${file}, adding.`);
            }

            data.model = MODEL_VALUE;

            // Convert back to JSON string (pretty-printed with 2 spaces)
            const updatedJSON = JSON.stringify(data, null, 2);

            // Write the updated JSON back to the file
            fs.writeFileSync(filePath, updatedJSON, 'utf8');
            console.log(`Updated file: ${file}`);
        }
    });
});
