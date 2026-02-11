# 🚀 Deploy na Vercel - Guia Rápido

## ✅ GitHub: CONCLUÍDO

Repositório criado e código enviado com sucesso!

**URL:** https://github.com/b2company/adaflow-site

---

## 🌐 Deploy na Vercel (2 minutos)

### Opção 1: Interface Web (RECOMENDADO - Mais Fácil)

1. **Acesse:** https://vercel.com/new

2. **Importe o Repositório**
   - Clique em "Import Git Repository"
   - Selecione: `b2company/adaflow-site`
   - Se não aparecer, clique em "Adjust GitHub App Permissions" e autorize

3. **Configure o Projeto**
   - **Project Name:** `adaflow-site`
   - **Framework Preset:** Other (deixe como está)
   - **Root Directory:** `./` (raiz)
   - **Build Command:** (deixe vazio)
   - **Output Directory:** (deixe vazio)

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde 30-60 segundos
   - ✅ Site no ar!

5. **URL**
   - Vercel vai gerar: `adaflow-site-xxx.vercel.app`
   - Você pode adicionar domínio customizado depois

---

### Opção 2: CLI (Se preferir terminal)

```bash
cd /Users/odavi.feitosa/adaflow-site

# 1. Fazer login (abrirá o navegador)
npx vercel login

# 2. Deploy
npx vercel --prod

# 3. Seguir as instruções:
# - Set up and deploy? YES
# - Which scope? Selecione sua conta
# - Link to existing project? NO
# - What's your project's name? adaflow-site
# - In which directory is your code located? ./
```

---

## 🔄 Deploys Automáticos

Após o primeiro deploy, **qualquer push no GitHub** vai fazer deploy automático na Vercel!

```bash
# Faça mudanças no código
git add .
git commit -m "Update site"
git push

# Vercel faz deploy automático em ~30 segundos
```

---

## 🌍 Configurar Domínio Customizado (Opcional)

1. **Na Vercel, vá em:** Settings → Domains
2. **Adicione:** `www.adaflow.com` ou `site.adaflow.com`
3. **Configure DNS:** Vercel mostrará as instruções

---

## 📊 O Que Foi Configurado

- ✅ `vercel.json` com otimizações
- ✅ Headers de segurança (X-Frame-Options, etc)
- ✅ Cache de assets (imagens, CSS, JS)
- ✅ Compressão automática
- ✅ HTTPS automático
- ✅ CDN global

---

## 🎯 Checklist Pós-Deploy

Depois que o site subir, verifique:

- [ ] Site carrega corretamente
- [ ] Menu mobile funciona
- [ ] Slider de depoimentos rola
- [ ] Todos os links funcionam
- [ ] Imagens carregam (placeholder por enquanto)
- [ ] Responsivo em mobile
- [ ] Performance no Lighthouse (>90)

---

## 🔧 Problemas Comuns

**"Repository not found"**
- Verifique permissões do GitHub App da Vercel
- Settings → Applications → Vercel → Grant access

**"Build failed"**
- Normal! É um site estático, não precisa build
- Vercel vai servir os arquivos direto

**"Domain not working"**
- DNS leva 24-48h para propagar
- Use a URL `.vercel.app` enquanto isso

---

## 📈 Próximos Passos

1. ✅ Deploy feito
2. ⏳ Adicionar imagens reais
3. ⏳ Configurar RD Station
4. ⏳ Adicionar domínio customizado
5. ⏳ Testar formulários
6. ⏳ Analytics (Google/Vercel)

---

## 🎉 RESUMO

✅ **GitHub:** https://github.com/b2company/adaflow-site
⏳ **Vercel:** Faça login em https://vercel.com/new e importe o repo

**Tempo total:** ~2 minutos após login na Vercel

---

Qualquer dúvida, a documentação da Vercel é excelente: https://vercel.com/docs
