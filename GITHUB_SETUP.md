# GitHub Pagesでの限定公開手順

## 1. GitHubリポジトリの作成

1. GitHubにログインして、https://github.com/new にアクセス
2. リポジトリ名を入力（例: `okinawa-golf-membership`）
3. **Private** を選択（限定公開のため）
4. 「Initialize this repository with a README」は**チェックしない**
5. 「Create repository」をクリック

## 2. リポジトリをGitHubにプッシュ

ターミナルで以下のコマンドを実行してください：

```bash
# リモートリポジトリを追加（[ユーザー名]と[リポジトリ名]を実際の値に置き換えてください）
git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git

# メインブランチをmainに変更（GitHubのデフォルトに合わせる）
git branch -M main

# GitHubにプッシュ
git push -u origin main
```

## 3. GitHub Pagesの設定

1. GitHubリポジトリのページで「Settings」をクリック
2. 左メニューから「Pages」を選択
3. 「Source」で「Deploy from a branch」を選択
4. 「Branch」で「main」を選択し、「/ (root)」を選択
5. 「Save」をクリック

## 4. サイトへのアクセス

数分後、以下のURLでサイトにアクセスできます：
```
https://[ユーザー名].github.io/[リポジトリ名]/
```

## 限定公開について

- **Privateリポジトリ**: リポジトリ自体は非公開ですが、GitHub Pagesで公開されたサイトは誰でもアクセス可能です
- **より厳密な限定公開**: GitHub Pagesのサイトを限定公開するには、GitHub Proプランが必要です
- **代替案**: 特定の人にのみURLを共有する、またはパスワード保護を実装する

## 認証エラーが発生した場合

GitHubへのプッシュ時に認証が必要な場合：

1. **Personal Access Tokenを使用**:
   - GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
   - 「Generate new token」で新しいトークンを作成
   - パスワードの代わりにトークンを使用

2. **GitHub CLIを使用**:
   ```bash
   gh auth login
   ```

