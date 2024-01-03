# Makefile for creating XPI file

# Set the add-on name
EXTENSION_NAME = OMSExtensions

# List of files to include in the XPI
FILES = manifest.json popup.html popup.js popup.css fluent.png

# Output directory for the XPI file
OUTPUT_DIR = build

# Final XPI file name (Firefox Extension
XPI_FILE = $(OUTPUT_DIR)/$(EXTENSION_NAME)_firefox.xpi
# Final zip file name (Chrome Extension)
ZIP_FILE = $(OUTPUT_DIR)/$(EXTENSION_NAME)_chrome.zip

all: $(XPI_FILE)

$(XPI_FILE): $(FILES)
	mkdir -p $(OUTPUT_DIR)
	zip -r $(ZIP_FILE) $(FILES)

clean:
	rm -rf $(OUTPUT_DIR)

.PHONY: all clean
