# Makefile for creating XPI file

# Set the add-on name
EXTENSION_NAME = OMSExtensions

# List of files to include in the XPI
FILES = manifest.json popup.html popup.js popup.css fluent.png

# Output directory for the XPI file
OUTPUT_DIR = build

# Final zip file name (Chrome Extension)
ZIP_FILE = $(OUTPUT_DIR)/$(EXTENSION_NAME)_chrome.zip

all: clean build

build: build-dir chrome firefox

build-dir:
	@echo "Creating build directory for chrome extension"
	mkdir -p $(OUTPUT_DIR)

chrome:
	@echo "Packing chrome extension"
	zip -r $(ZIP_FILE) $(FILES)

firefox:
	@echo "Moving firefox extension"
	mv web-ext-artifacts/*.xpi $(OUTPUT_DIR)/$(EXTENSION_NAME)_firefox.xpi

clean:
	@echo "Cleaning up"
	rm -rf $(OUTPUT_DIR)

.PHONY: all clean
