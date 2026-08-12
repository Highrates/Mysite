#!/usr/bin/env bash
set -euo pipefail

# Override via env: DEPLOY_SERVER, DEPLOY_BRANCH, DEPLOY_APP_DIR, DEPLOY_REMOTE
SERVER="${DEPLOY_SERVER:-root@161.104.18.44}"
REMOTE="${DEPLOY_REMOTE:-origin}"
BRANCH="${DEPLOY_BRANCH:-main}"
APP_DIR="${DEPLOY_APP_DIR:-/var/www/mysite}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "==> Deploy: $ROOT_DIR"
echo "    remote: $REMOTE"
echo "    branch: $BRANCH"
echo "    server: $SERVER"
echo "    app:    $APP_DIR"
echo

if ! git diff-index --quiet HEAD -- 2>/dev/null || [ -n "$(git ls-files --others --exclude-standard)" ]; then
  echo "Warning: есть незакоммиченные изменения — на сервер уйдёт только то, что уже в git."
  echo
fi

echo "==> Push to GitHub"
git push "$REMOTE" "$BRANCH"

echo
echo "==> Deploy on server"
ssh "$SERVER" "bash -s" -- "$APP_DIR" "$BRANCH" <<'REMOTE'
set -euo pipefail

APP_DIR="$1"
BRANCH="$2"

cd "$APP_DIR"

echo "-> git pull"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"
git config core.hooksPath .githooks

echo "-> npm ci"
npm ci

echo "-> npm run build"
NODE_OPTIONS=--max-old-space-size=1536 npm run build

echo "-> pm2 restart"
if pm2 describe mysite >/dev/null 2>&1; then
  pm2 restart mysite
else
  pm2 start npm --name mysite -- start
  pm2 save
fi

pm2 status mysite
REMOTE

echo
echo "Done: https://alekseysite.ru"
