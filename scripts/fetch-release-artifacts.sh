#!/usr/bin/env bash
set -euo pipefail

OUT_DIR="${OUT_DIR:-dist}"
mkdir -p "$OUT_DIR"

jq -c '.[]' "releases/manifest.json" | while read -r item; do
  desc=$(jq -r '.desc' <<<"$item")
  name=$(jq -r '.name' <<<"$item")
  url=$(jq -r  '.url'  <<<"$item")
  echo "Downloading $desc"
  if [[ -n "${PRIVATE_REPO_PAT:-}" ]]; then
    curl -fL \
      -H "Authorization: token $PRIVATE_REPO_PAT" \
      -H "Accept: application/octet-stream" \
      -o "$OUT_DIR/$name" "$url"
  else
    echo "Downloading without an authorization token"
    curl -v -fsSL -o "$OUT_DIR/$name" "$url"
  fi
done
