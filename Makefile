BIN_DIR = ./bin
TMP_DIR = ./tmp
PUB_DIR = ./dist
SRC_DIR = ./src

NETLIFY_WEBSITE =
NETLIFY_ACCESS_TOKEN =

$(BIN_DIR):
	mkdir -p $@

$(TMP_DIR):
	mkdir -p $@

$(PUB_DIR):
	mkdir -p $@

.PHONY: all
all: | $(PUB_DIR)
	npm run build

.PHONY: deploy
deploy: clean all | $(TMP_DIR)
	cp $(SRC_DIR)/_headers $(PUB_DIR)
	zip --test \
        --recurse-paths \
        --exclude "*.DS_Store" \
        -9 \
        $(TMP_DIR)/website.zip \
        $(PUB_DIR) \
    && wget --quiet \
            --no-verbose \
            --tries=3 \
            --output-document=/dev/null \
            --server-response \
            --post-file=$(TMP_DIR)/website.zip \
            --header "Content-Type: application/zip" \
            --header "Authorization: Bearer $(NETLIFY_ACCESS_TOKEN)" \
            "https://api.netlify.com/api/v1/sites/$(NETLIFY_WEBSITE).netlify.app/deploys"

.PHONY: clean
clean:
	# rm -rf $(BIN_DIR)
	rm -rf $(TMP_DIR)
	rm -rf $(PUB_DIR)

.DEFAULT_GOAL := all
