# Makefile for creating XPI file

# Set the add-on name
ADDON_NAME = OMSExtensions

# List of files to include in the XPI
FILES = manifest.json popup.html popup.js fluent.png

# Output directory for the XPI file
OUTPUT_DIR = build

# Final XPI file name
XPI_FILE = $(OUTPUT_DIR)/$(ADDON_NAME).xpi

all: $(XPI_FILE)

$(XPI_FILE): $(FILES)
	mkdir -p $(OUTPUT_DIR)
	zip -r $(XPI_FILE) $(FILES)

clean:
	rm -rf $(OUTPUT_DIR)

.PHONY: all clean
