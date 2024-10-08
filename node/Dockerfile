# ベースイメージを指定（特定のバージョンを使用）
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# パッケージファイルをコピー
COPY package*.json ./

# パッケージをインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# ポートを指定
EXPOSE 3000

# サーバーを起動
CMD ["npm", "start"]
