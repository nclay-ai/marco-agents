#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * We use these utilities so we can replicate __dirname in an ES Module.
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * The source directory where JSON files are located.
 */
const SRC_DIR = path.join(__dirname, 'src');

/**
 * Output CSV file name and path.
 */
const OUTPUT_CSV = path.join(__dirname, 'agentDetailsExport.csv');

/**
 * Safely escapes a value for CSV output by handling special characters:
 *  - Double quotes
 *  - Commas
 *  - Newlines
 *
 * @param {any} value - The data to be escaped for CSV.
 * @returns {string}   - Properly escaped CSV string.
 */
function csvSafe(value) {
    if (value == null) return '';
    let val = String(value).trim();
    // Escape any existing double quotes
    val = val.replace(/"/g, '""');
    // If the value contains comma, newline, or double-quote, wrap in quotes
    if (/[",\r\n]/.test(val)) {
        val = `"${val}"`;
    }
    return val;
}

/**
 * Reads and parses all JSON files from the SRC_DIR into an array of objects.
 * Each returned object includes the agent's core properties.
 *
 * @returns {Array} - An array of objects { title, description, systemRole, category, identifier }.
 */
function readAndParseAllJson() {
    console.info(`Reading JSON files from: ${SRC_DIR}`);

    // Get all files that end with .json
    let fileNames;
    try {
        fileNames = fs.readdirSync(SRC_DIR).filter(file => file.endsWith('.json'));
    } catch (err) {
        console.error(`Failed to read directory: ${SRC_DIR}`);
        throw err;
    }

    if (fileNames.length === 0) {
        console.warn('No JSON files found in the src directory.');
        return [];
    }

    const agentsData = [];

    fileNames.forEach(fileName => {
        const filePath = path.join(SRC_DIR, fileName);
        console.debug(`Processing file: ${filePath}`);

        try {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const jsonData = JSON.parse(fileContent);

            // Extract fields with optional chaining to avoid runtime errors
            const title = jsonData?.meta?.title || '';
            const description = jsonData?.meta?.description || '';
            const systemRole = jsonData?.config?.systemRole || '';
            const category = jsonData?.meta?.category || '';
            const identifier = jsonData?.identifier || '';

            agentsData.push({ title, description, systemRole, category, identifier });
        } catch (error) {
            console.error(`Error parsing file "${fileName}": ${error.message}`);
        }
    });

    console.info(`Successfully parsed ${agentsData.length} agent record(s).`);
    return agentsData;
}

/**
 * Groups agent records by their 'category' property and returns a single
 * flattened array in alphabetical order of categories. This ensures all
 * agents with the same category appear together in the final CSV output.
 *
 * @param {Array} agentsData - Array of agent objects.
 * @returns {Array} - A category-grouped (and sorted) array of agent objects.
 */
function groupByCategory(agentsData) {
    console.info('Grouping agent data by category...');

    // Build a map of { category: [agents] }
    const categoryMap = new Map();

    agentsData.forEach(agent => {
        const cat = agent.category;
        if (!categoryMap.has(cat)) {
            categoryMap.set(cat, []);
        }
        categoryMap.get(cat).push(agent);
    });

    // Sort categories alphabetically
    const sortedCategories = [...categoryMap.keys()].sort();

    // Flatten data in the order of sorted categories
    const groupedAgents = [];
    sortedCategories.forEach(cat => {
        groupedAgents.push(...categoryMap.get(cat));
    });

    console.info(`Completed grouping. Found ${sortedCategories.length} unique categories.`);
    return groupedAgents;
}

/**
 * Converts an array of agent objects into CSV lines in the following order:
 * title, description, systemRole, category, identifier
 *
 * @param {Array} groupedAgents - Array of agent objects, already grouped by category.
 * @returns {string} - The final CSV string.
 */
function buildCsvString(groupedAgents) {
    console.info('Building CSV string from grouped agent data...');

    // Define CSV header
    const header = ['title', 'description', 'systemRole', 'category', 'identifier'];
    const lines = [header.join(',')];

    // Append each agent as a CSV row
    groupedAgents.forEach(agent => {
        const row = [
            csvSafe(agent.title),
            csvSafe(agent.description),
            csvSafe(agent.systemRole),
            csvSafe(agent.category),
            csvSafe(agent.identifier)
        ].join(',');
        lines.push(row);
    });

    console.info(`CSV string built successfully with ${groupedAgents.length} data row(s).`);
    return lines.join('\n');
}

/**
 * Writes the CSV string to the specified output file.
 *
 * @param {string} csvData - The CSV data to be written.
 */
function writeCsvToFile(csvData) {
    console.info(`Writing CSV data to file: ${OUTPUT_CSV}`);
    try {
        fs.writeFileSync(OUTPUT_CSV, csvData, 'utf-8');
        console.info(`CSV has been generated successfully at: ${OUTPUT_CSV}`);
    } catch (err) {
        console.error(`Failed to write CSV to file: ${err.message}`);
        throw err;
    }
}

/**
 * Main execution flow:
 * 1. Read and parse all agent details from JSON.
 * 2. Group them by category.
 * 3. Convert grouped data to CSV.
 * 4. Write CSV to output file.
 */
function exportAgentDetailsToCSV() {
    console.info('Starting agent details export to CSV...');

    const agentsData = readAndParseAllJson();
    if (agentsData.length === 0) {
        console.warn('No agent data found to export. Process terminated.');
        return;
    }

    const groupedAgents = groupByCategory(agentsData);
    const csvData = buildCsvString(groupedAgents);
    writeCsvToFile(csvData);

    console.info('Agent details export complete.');
}

// Execute the main function
exportAgentDetailsToCSV();
