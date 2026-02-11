# Adaflow - Site Institucional

Site recriado do zero com código limpo e moderno, mantendo o design e funcionalidades do site original.

## 🚀 Estrutura do Projeto

```
adaflow-site/
├── index.html                    # Página principal
├── css/
│   └── styles.css               # Estilos CSS modernos
├── js/
│   └── script.js                # JavaScript interativo
├── assets/
│   ├── images/                  # Imagens e ilustrações
│   └── fonts/                   # Fontes (se necessário)
├── rdstation-integration.html   # Integração com RD Station
└── README.md                    # Este arquivo
```

## ✨ Características

- **HTML Semântico**: Estrutura limpa e acessível
- **CSS Moderno**: Variáveis CSS, Grid, Flexbox
- **JavaScript Vanilla**: Sem dependências externas
- **Responsivo**: Mobile-first design
- **Performance**: Lazy loading, smooth scroll, animações otimizadas
- **Integração RD Station**: Formulários de captura de leads

## 🎨 Tecnologias Utilizadas

- HTML5
- CSS3 (CSS Variables, Grid, Flexbox)
- JavaScript ES6+
- RD Station (Marketing Automation)

## 🔧 Como Usar

### 1. Abrir Localmente

Simplesmente abra o arquivo `index.html` em um navegador moderno.

### 2. Com Servidor Local (Recomendado)

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (npx)
npx serve

# PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

### 3. Hospedagem

Faça upload de todos os arquivos para:
- **Netlify**: Arraste a pasta no netlify.com/drop
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Commit e ative nas configurações
- **Servidor Web**: Upload via FTP/SFTP

## 🎯 Integração RD Station

### Configurar Formulários

1. Abra `rdstation-integration.html`
2. Substitua `SEU_TOKEN_RDSTATION_AQUI` pelo seu token
3. Copie o código e cole no `index.html` antes de `</body>`

### Obter Token RD Station

1. Acesse: https://app.rdstation.com.br/configuracoes/conversoes
2. Copie seu "Token Público"
3. Cole no formulário

### Ativar Popups

No arquivo `rdstation-integration.html`, descomente:

```javascript
// Popup após 30 segundos
showRDPopupAfterDelay('rd-popup-central-wrapper', 30);

// Popup ao sair da página (exit intent)
enableExitIntent('rd-popup-central-wrapper');
```

## 📱 Seções do Site

1. **Hero** - Headline principal + CTA
2. **Easy, Fast, Simple & Flow** - Proposta de valor
3. **All-in-One** - Serviços completos
4. **Economize R$ 1.600** - Benefício financeiro
5. **Check-up Fiscal** - Recuperação de impostos
6. **Transparência** - Sem surpresas
7. **Abertura Gratuita** - Abertura em 24h
8. **Dev pra Dev** - Posicionamento
9. **Depoimentos** - Wall of Ada Friends (slider)
10. **CTA Final** - Conversão
11. **Footer** - Links e contato

## 🎨 Customização

### Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --primary: #FF3944;
    --secondary: #009080;
    --accent: #2a80ff;
    /* ... */
}
```

### Fontes

Substitua a fonte Inter no `<head>` do `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet">
```

E atualize as variáveis CSS:

```css
:root {
    --font-primary: 'SuaFonte', sans-serif;
}
```

### Imagens

Substitua os placeholders em `assets/images/`:
- `logo-adaflow.svg` - Logo principal
- `hero-illustration.svg` - Ilustração do hero
- `allinone-illustration.svg`
- `economia-illustration.svg`
- `checkup-illustration.svg`
- `transparencia-illustration.svg`
- `abertura-illustration.svg`

## 📊 Analytics (Opcional)

Adicionar Google Analytics no `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX-X');
</script>
```

## 🔍 SEO

### Meta Tags Configuradas

- Title e Description
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Google Site Verification

### Melhorias Adicionais

1. **robots.txt**:
```
User-agent: *
Allow: /
Sitemap: https://seusite.com/sitemap.xml
```

2. **sitemap.xml**: Gere em https://www.xml-sitemaps.com/

3. **Schema.org**: Adicionar markup estruturado

## 🚀 Performance

### Otimizações Implementadas

- ✅ CSS minificado (em produção)
- ✅ Lazy loading de imagens
- ✅ Smooth scroll nativo
- ✅ Transições CSS hardware-accelerated
- ✅ Sem bibliotecas externas pesadas

### Checklist de Deploy

- [ ] Minificar CSS (`cssnano` ou similar)
- [ ] Minificar JS (`terser` ou similar)
- [ ] Otimizar imagens (TinyPNG, ImageOptim)
- [ ] Converter imagens para WebP
- [ ] Configurar cache no servidor
- [ ] Habilitar compressão Gzip/Brotli
- [ ] Adicionar favicon completo (16x16, 32x32, 180x180)

## 📄 Licença

© 2026 Adaflow. Todos os direitos reservados.

---

## 📞 Suporte

- **Email**: friends@adaflow.com
- **Site**: https://www.adaflow.com
- **Help Center**: https://help.adaflow.com/pt-BR/

## 🛠️ Desenvolvimento

Desenvolvido com ❤️ para profissionais de tecnologia.

### Próximos Passos

- [ ] Adicionar imagens reais
- [ ] Configurar token RD Station
- [ ] Testar formulários
- [ ] Deploy em produção
- [ ] Configurar domínio
- [ ] Testar em diferentes dispositivos
- [ ] Validar HTML/CSS (W3C)
- [ ] Testar performance (Lighthouse)
