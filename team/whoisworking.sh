#!/usr/bin/env bash
# Status line Claude Code: nampilin persona yang LAGI kerja (🟡) dari STATUS.md — realtime.
# Portable: cari STATUS.md di folder yang sama dengan script ini (jalan di project manapun).
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
F="$DIR/STATUS.md"
[ -f "$F" ] || { echo "Tim Tata-Eleven"; exit 0; }

line=$(awk -F'|' '
  $3 ~ /🟡/ {
    p=$2; t=$4; s=$5;
    gsub(/^[ \t]+|[ \t]+$/,"",p); gsub(/^[ \t]+|[ \t]+$/,"",t); gsub(/^[ \t]+|[ \t]+$/,"",s);
    if (length(t) > 36) t=substr(t,1,36) "…";
    printf "🟡 %s — %s (sejak %s)   ", p, t, s;
  }
' "$F")

if [ -z "$line" ]; then
  echo "🟢 Tim Tata-Eleven — semua idle"
else
  echo "${line% }"
fi
