# 📱 Guia: Gerar APK Android via GitHub Actions

## Visão geral do processo

```
Você (push para GitHub)
        ↓
GitHub Actions (deploy-pages.yml)
        ↓
App online em https://usuario.github.io/repo/
        ↓
GitHub Actions (build-apk.yml) — automático ou manual
        ↓
APK disponível para download na aba Artifacts
```

---

## ⚙️ Pré-requisitos

- Conta no GitHub (gratuita)
- Git instalado no seu PC → https://git-scm.com/download/win

---

## 🚀 Passo a Passo

### 1. Criar repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `treino-calistenia` (ou qualquer nome)
3. Marque como **Public** *(necessário para GitHub Pages gratuito)*
4. **Não** marque "Initialize this repository" — vai ficar vazio
5. Clique em **Create repository**

---

### 2. Enviar o projeto para o GitHub

Abra o **PowerShell** (ou Prompt de Comando) na pasta do projeto e execute:

```powershell
# Inicializar o Git na pasta do projeto
cd "C:\Users\CLIENTE\Desktop\Exercicio"
git init
git add .
git commit -m "feat: setup inicial com PWA + GitHub Actions para APK"

# Conectar ao seu repositório (substitua SEU_USUARIO e NOME_DO_REPO)
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git branch -M main
git push -u origin main
```

---

### 3. Ativar GitHub Pages

1. No GitHub, vá em **Settings** (⚙️) do repositório
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione: **GitHub Actions**
4. Salve

---

### 4. Acompanhar o primeiro deploy

1. Clique na aba **Actions** do repositório
2. Você verá o workflow **"🚀 Deploy → GitHub Pages"** rodando
3. Aguarde ficar verde (✅) — demora ~1-2 minutos
4. Após o deploy, o **APK será gerado automaticamente** pelo workflow **"📱 Build Android APK"**

---

### 5. Baixar o APK

1. Na aba **Actions**, clique no workflow **"📱 Build Android APK"**
2. Clique na execução mais recente
3. Role para baixo até a seção **Artifacts**
4. Clique em **calistenia-apk-N** para baixar o `.zip` com o APK

---

### 6. Instalar o APK no Android

1. Transfira o arquivo `.apk` para o celular (WhatsApp, cabo USB, Google Drive, etc.)
2. No Android, vá em **Configurações → Segurança → Fontes Desconhecidas** e ative
   *(Ou em versões mais novas: ao abrir o APK, toque em "Instalar de outras fontes")*
3. Abra o arquivo `.apk` e toque em **Instalar**
4. O app aparecerá no seu menu de aplicativos como **"Calistenia"**

---

## ♻️ Gerar novo APK (após atualizações)

Toda vez que fizer `git push`, o deploy + build do APK acontecem automaticamente.

Para acionar o build do APK manualmente sem fazer push:
1. Aba **Actions** → **"📱 Build Android APK"**
2. Botão **Run workflow** (canto superior direito)
3. *(Opcional)* informe a URL do Pages se diferente do padrão
4. Clique em **Run workflow**

---

## 🔧 Personalizar o app

| O que mudar | Arquivo |
|---|---|
| Nome e cores do app | `manifest.json` |
| Ícone do app | `generate-icons.js` (altere as cores `#0f172a` e `#10b981`) |
| Nome do pacote Android | Edite `packageId` no step `create twa-manifest.json` do workflow |
| Versão do app | Edite `appVersion` e `appVersionCode` no workflow |

---

## ❓ Problemas comuns

### ❌ "No APK found" nos Artifacts
- Verifique se o app está acessível na URL do GitHub Pages
- Execute o workflow manualmente fornecendo a URL completa

### ❌ Erro de Java/Gradle
- Geralmente é auto-resolvido pelo `android-actions/setup-android`
- Tente re-executar o workflow (às vezes é instabilidade temporária do GitHub)

### ❌ App abre o Chrome em vez do TWA
- Isso acontece se o `assetlinks.json` não estiver configurado
- Para fins de teste, o app funciona via Custom Chrome Tab igualmente
- Para produção com TWA puro, é necessário adicionar Digital Asset Links
