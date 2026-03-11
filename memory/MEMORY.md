# Portfolio Aleson Estevam - Memória do Projeto

## Stack
- Next.js 15.1.0 + React 19, TypeScript, Tailwind CSS 3.4.1
- Static export (`output: "export"`) hospedado no GitHub Pages (domínio: alesonestevam.com)
- Package manager: npm

## Otimizações de Performance (Março 2026)
- Criado `scripts/optimize-images.mjs` com sharp para converter SVG/PNG → WebP
- 57 imagens convertidas: 87.9 MB → 4.5 MB (-94.9%)
- Adicionado `images: { unoptimized: true }` no next.config.ts (necessário para static export)
- CardPortifolio.tsx: `priority` agora é prop opcional (antes era hardcoded em todos os cards)
- Páginas de detalhe: primeiro Image tem `priority`, demais têm `loading="lazy"`
- Referências de imagem atualizadas para .webp em todos os pages

## Arquivos Não Convertidos (mantém .svg)
- `lygia-clark.svg` (thumbnail, < 50KB - vetor simples)
- `lygia-clark/lygia-2.svg` (falhou conversão - SVG muito complexo/grande para librsvg)
- `defensoria/defensoria-2,3,4,8.svg` (< 50KB)
- `midr/midr-3.svg` (< 50KB)
- `britney/britney-1.svg` (< 50KB)
- `velho-chico/velho-chico-sonho-realizado.svg` (< 50KB)
- Ícones e logos: arrow_outward-2.svg, logo-soft-lime.svg, etc.

## Atenção: Smart Quotes no Editor
- macOS pode converter aspas retas `"` para tipográficas `"` `"` (U+201C/201D)
- Isso quebra a compilação TypeScript (curly quotes não são delimitadores JS válidos)
- Solução: rodar `python3 -c "..."` para substituir U+201C/201D → U+0022 se necessário
