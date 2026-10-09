import * as THREE from 'three';

// Texture cache to prevent redundant canvas operations
const textureCache = new Map<string, THREE.CanvasTexture>();

/**
 * Creates high-fidelity procedural canvas textures with detailed architectural relief.
 */
function createAdvancedTexture(
  width: number,
  height: number,
  type:
    | 'roof_shingle_dark'
    | 'roof_terracotta'
    | 'roof_slate'
    | 'roof_metal'
    | 'roof_wood_shake'
    | 'wood_oak'
    | 'wood_dark'
    | 'tile_ceramic'
    | 'marble_luxury'
    | 'stone_slate'
    | 'carpet_blue'
    | 'brick'
    | 'brick_white'
    | 'wall_wood'
    | 'wallpaper_striped'
    | 'plaster_stucco'
    | 'grass'
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  switch (type) {
    // -------------------------------------------------------------
    // ROOF TEXTURES (The Sims 4 style, matching image.png #2)
    // -------------------------------------------------------------
    case 'roof_shingle_dark': {
      // The Sims 4 iconic dark charcoal asphalt shingles
      ctx.fillStyle = '#22262d';
      ctx.fillRect(0, 0, width, height);

      const shingleH = 32;
      const shingleW = 48;
      let row = 0;

      for (let y = 0; y < height; y += shingleH) {
        const offset = (row % 2) * (shingleW / 2);

        // Horizontal lap drop shadow for 3D depth
        const grad = ctx.createLinearGradient(0, y, 0, y + shingleH);
        grad.addColorStop(0, '#16191f');
        grad.addColorStop(0.12, '#313740');
        grad.addColorStop(0.85, '#282d35');
        grad.addColorStop(1, '#181b20');
        ctx.fillStyle = grad;
        ctx.fillRect(0, y, width, shingleH);

        // Vertical slots between individual shingle tabs
        for (let x = -shingleW + offset; x < width + shingleW; x += shingleW) {
          // Deep slot gap
          ctx.fillStyle = 'rgba(10, 12, 16, 0.9)';
          ctx.fillRect(x - 1, y, 3, shingleH);

          // Top highlight on the shingle tab bottom edge
          ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.fillRect(x + 2, y + shingleH - 3, shingleW - 4, 1.5);

          // Granular slate specks
          ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.fillRect(x + 8, y + 6, 4, 3);
          ctx.fillRect(x + 22, y + 14, 5, 2.5);
        }

        // Shingle lap bottom heavy shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
        ctx.fillRect(0, y + shingleH - 2, width, 2);

        row++;
      }
      break;
    }

    case 'roof_terracotta': {
      // Mediterranean Spanish curved barrel tiles
      ctx.fillStyle = '#b44a2b';
      ctx.fillRect(0, 0, width, height);

      const tileW = 40;
      const tileH = 64;

      for (let x = 0; x < width; x += tileW) {
        // Cylindrical barrel curve gradient
        const grad = ctx.createLinearGradient(x, 0, x + tileW, 0);
        grad.addColorStop(0, '#662210');
        grad.addColorStop(0.2, '#aa3e22');
        grad.addColorStop(0.5, '#dc633e');
        grad.addColorStop(0.8, '#c24f2e');
        grad.addColorStop(1, '#531b0c');
        ctx.fillStyle = grad;
        ctx.fillRect(x, 0, tileW, height);

        // Tile overlap horizontal lines
        for (let y = 0; y < height; y += tileH) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
          ctx.fillRect(x, y + tileH - 3, tileW, 4);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.fillRect(x + 4, y + 2, tileW - 8, 2);
        }
      }
      break;
    }

    case 'roof_slate': {
      // European blue-gray chiseled slate tiles
      ctx.fillStyle = '#334155';
      ctx.fillRect(0, 0, width, height);

      const slateH = 36;
      const slateW = 56;
      let row = 0;

      for (let y = 0; y < height; y += slateH) {
        const offset = (row % 2) * (slateW / 2);
        for (let x = -slateW + offset; x < width + slateW; x += slateW) {
          const varTone = ((x * 13 + y * 7) % 25) - 12;
          ctx.fillStyle = `rgb(${51 + varTone}, ${65 + varTone}, ${85 + varTone})`;
          ctx.fillRect(x + 1, y + 1, slateW - 2, slateH - 2);

          // Chiseled edges
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.fillRect(x + 2, y + 2, slateW - 4, 1.5);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
          ctx.fillRect(x + 1, y + slateH - 2, slateW - 2, 2);
        }
        row++;
      }
      break;
    }

    case 'roof_metal': {
      // Standing-seam architectural metal panels
      ctx.fillStyle = '#475569';
      ctx.fillRect(0, 0, width, height);

      const ribSpacing = 48;
      for (let x = 0; x < width; x += ribSpacing) {
        const grad = ctx.createLinearGradient(x, 0, x + ribSpacing, 0);
        grad.addColorStop(0, '#334155');
        grad.addColorStop(0.06, '#64748b');
        grad.addColorStop(0.12, '#475569');
        grad.addColorStop(0.9, '#3f4e61');
        grad.addColorStop(1, '#1e293b');
        ctx.fillStyle = grad;
        ctx.fillRect(x, 0, ribSpacing, height);

        // Raised standing rib
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(x, 0, 2, height);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(x + 2, 0, 3, height);
      }
      break;
    }

    case 'roof_wood_shake': {
      // Rustic cedar wood shakes
      ctx.fillStyle = '#855b38';
      ctx.fillRect(0, 0, width, height);

      const shakeH = 40;
      let row = 0;
      for (let y = 0; y < height; y += shakeH) {
        let x = 0;
        while (x < width) {
          const sw = 30 + ((x * 19 + y * 11) % 28);
          const tone = ((x + y * 3) % 20) - 10;
          ctx.fillStyle = `rgb(${133 + tone}, ${91 + tone}, ${56 + tone})`;
          ctx.fillRect(x + 1, y + 1, sw - 2, shakeH - 2);

          // Wood grain lines
          ctx.fillStyle = 'rgba(40, 20, 10, 0.2)';
          ctx.fillRect(x + 6, y, 1.5, shakeH);
          ctx.fillRect(x + sw / 2, y, 1.5, shakeH);

          // Bottom shadow
          ctx.fillStyle = 'rgba(0,0,0,0.4)';
          ctx.fillRect(x, y + shakeH - 3, sw, 3);

          x += sw;
        }
        row++;
      }
      break;
    }

    // -------------------------------------------------------------
    // FLOOR TEXTURES (Rich Parquet, Marble, Slate, Tile, Carpet)
    // -------------------------------------------------------------
    case 'wood_oak': {
      // Warm Natural French Oak Parquet Planks
      ctx.fillStyle = '#c79860';
      ctx.fillRect(0, 0, width, height);

      const plankH = 32;
      const plankW = 128;
      let row = 0;

      for (let y = 0; y < height; y += plankH) {
        const offset = (row % 2) * (plankW / 2);
        for (let x = -plankW + offset; x < width + plankW; x += plankW) {
          const varTone = ((x * 17 + y * 31) % 20) - 10;
          const grad = ctx.createLinearGradient(x, y, x, y + plankH);
          grad.addColorStop(0, `rgb(${210 + varTone}, ${162 + varTone}, ${108 + varTone})`);
          grad.addColorStop(0.5, `rgb(${199 + varTone}, ${152 + varTone}, ${96 + varTone})`);
          grad.addColorStop(1, `rgb(${185 + varTone}, ${138 + varTone}, ${85 + varTone})`);
          ctx.fillStyle = grad;
          ctx.fillRect(x + 1, y + 1, plankW - 2, plankH - 2);

          // Fine wood grain lines
          ctx.fillStyle = 'rgba(100, 65, 25, 0.12)';
          for (let g = 4; g < plankH - 4; g += 6) {
            ctx.fillRect(x + 2, y + g, plankW - 4, 1.2);
          }

          // Plank edge bevel highlight & shadow gap
          ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
          ctx.fillRect(x + 1, y + 1, plankW - 2, 1.2);
          ctx.fillStyle = 'rgba(40, 25, 10, 0.4)';
          ctx.fillRect(x, y + plankH - 1.5, plankW, 1.8);
          ctx.fillRect(x + plankW - 1.5, y, 1.8, plankH);
        }
        row++;
      }
      break;
    }

    case 'wood_dark': {
      // Rich Dark Brazilian Walnut / Espresso Planks
      ctx.fillStyle = '#422818';
      ctx.fillRect(0, 0, width, height);

      const plankH = 32;
      const plankW = 128;
      let row = 0;

      for (let y = 0; y < height; y += plankH) {
        const offset = (row % 2) * (plankW / 2);
        for (let x = -plankW + offset; x < width + plankW; x += plankW) {
          const varTone = ((x * 19 + y * 23) % 18) - 9;
          ctx.fillStyle = `rgb(${72 + varTone}, ${44 + varTone}, ${28 + varTone})`;
          ctx.fillRect(x + 1, y + 1, plankW - 2, plankH - 2);

          // Deep wood grain lines
          ctx.fillStyle = 'rgba(20, 10, 5, 0.3)';
          for (let g = 5; g < plankH - 4; g += 7) {
            ctx.fillRect(x + 2, y + g, plankW - 4, 1.5);
          }

          // Chamfer highlight
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.fillRect(x + 1, y + 1, plankW - 2, 1);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
          ctx.fillRect(x, y + plankH - 1.5, plankW, 1.8);
          ctx.fillRect(x + plankW - 1.5, y, 1.8, plankH);
        }
        row++;
      }
      break;
    }

    case 'tile_ceramic': {
      // Large format modern porcelain ceramic tiles with clean grout
      ctx.fillStyle = '#d1d5db'; // Grout color
      ctx.fillRect(0, 0, width, height);

      const tileSize = 64;
      for (let x = 0; x < width; x += tileSize) {
        for (let y = 0; y < height; y += tileSize) {
          // Tile surface with soft radial sheen
          const grad = ctx.createRadialGradient(
            x + tileSize * 0.4,
            y + tileSize * 0.4,
            4,
            x + tileSize * 0.5,
            y + tileSize * 0.5,
            tileSize * 0.7
          );
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(0.7, '#f3f4f6');
          grad.addColorStop(1, '#e5e7eb');
          ctx.fillStyle = grad;
          ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);

          // Subtle glossy top reflection
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.fillRect(x + 3, y + 3, tileSize - 6, 2);
          ctx.fillRect(x + 3, y + 3, 2, tileSize - 6);
        }
      }
      break;
    }

    case 'marble_luxury': {
      // White Carrara marble with subtle soft gray organic veins
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      // Veins using smooth curves
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.2);
      ctx.bezierCurveTo(width * 0.3, height * 0.1, width * 0.6, height * 0.7, width, height * 0.5);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(100, 116, 139, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(width * 0.2, 0);
      ctx.bezierCurveTo(width * 0.5, height * 0.4, width * 0.8, height * 0.8, width * 0.7, height);
      ctx.stroke();

      // Polished tile grid border
      const tileSize = 128;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.lineWidth = 2;
      for (let x = 0; x <= width; x += tileSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += tileSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      break;
    }

    case 'stone_slate': {
      // Natural dark charcoal flagstone slate
      ctx.fillStyle = '#27272a';
      ctx.fillRect(0, 0, width, height);

      const step = 64;
      for (let x = 0; x < width; x += step) {
        for (let y = 0; y < height; y += step) {
          const varTone = ((x * 13 + y * 29) % 24) - 12;
          ctx.fillStyle = `rgb(${63 + varTone}, ${63 + varTone}, ${70 + varTone})`;
          ctx.fillRect(x + 2, y + 2, step - 4, step - 4);

          // Rock grain
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.fillRect(x + 4, y + 4, step - 8, 2);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
          ctx.fillRect(x + 2, y + step - 3, step - 4, 2);
        }
      }
      break;
    }

    case 'carpet_blue': {
      // Plush cozy blue woven carpet
      ctx.fillStyle = '#1e40af';
      ctx.fillRect(0, 0, width, height);

      // Micro-fiber noise
      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const n = (Math.random() - 0.5) * 35;
        data[i] = Math.min(255, Math.max(0, data[i] + n * 0.3));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + n * 0.5));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + n));
      }
      ctx.putImageData(imgData, 0, 0);
      break;
    }

    // -------------------------------------------------------------
    // WALL TEXTURES (Realistic Brick, Siding, Stucco, Wallpaper)
    // -------------------------------------------------------------
    case 'brick': {
      // Photorealistic Crimson/Terracotta Brick with Recessed Mortar
      ctx.fillStyle = '#d4d4d8'; // Realistic cement mortar
      ctx.fillRect(0, 0, width, height);

      const bh = 24;
      const bw = 52;
      let row = 0;

      for (let y = 0; y < height; y += bh) {
        const shift = (row % 2) * (bw / 2);
        for (let x = -bw + shift; x < width + bw; x += bw) {
          const varTone = ((x * 19 + y * 31) % 30) - 15;
          const r = Math.min(255, Math.max(0, 185 + varTone));
          const g = Math.min(255, Math.max(0, 75 + varTone * 0.8));
          const b = Math.min(255, Math.max(0, 50 + varTone * 0.6));

          // Brick face
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fillRect(x + 2, y + 2, bw - 4, bh - 4);

          // Subtle baked clay highlight and mortar shadow
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.fillRect(x + 3, y + 3, bw - 6, 1.5);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
          ctx.fillRect(x + 2, y + bh - 3, bw - 4, 1.5);
        }
        row++;
      }
      break;
    }

    case 'brick_white': {
      // Modern Painted White Brick
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(0, 0, width, height);

      const bh = 24;
      const bw = 52;
      let row = 0;

      for (let y = 0; y < height; y += bh) {
        const shift = (row % 2) * (bw / 2);
        for (let x = -bw + shift; x < width + bw; x += bw) {
          const varTone = ((x * 13 + y * 17) % 12) - 6;
          const v = 245 + varTone;
          ctx.fillStyle = `rgb(${v}, ${v}, ${v})`;
          ctx.fillRect(x + 2, y + 2, bw - 4, bh - 4);

          ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
          ctx.fillRect(x + 2, y + bh - 3, bw - 4, 1.5);
        }
        row++;
      }
      break;
    }

    case 'wall_wood': {
      // Horizontal Timber Shiplap / Weatherboard Siding
      ctx.fillStyle = '#ba8c5b';
      ctx.fillRect(0, 0, width, height);

      const boardH = 28;
      for (let y = 0; y < height; y += boardH) {
        const grad = ctx.createLinearGradient(0, y, 0, y + boardH);
        grad.addColorStop(0, '#d4a373');
        grad.addColorStop(0.7, '#c29060');
        grad.addColorStop(1, '#a37446');
        ctx.fillStyle = grad;
        ctx.fillRect(0, y + 1, width, boardH - 2);

        // Deep overlap shadow
        ctx.fillStyle = 'rgba(40, 20, 5, 0.45)';
        ctx.fillRect(0, y + boardH - 2, width, 2);
        // Bevel highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fillRect(0, y + 1, width, 1.2);
      }
      break;
    }

    case 'wallpaper_striped': {
      // Classic The Sims Victorian / Contemporary striped wallpaper
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      const stripeW = 24;
      for (let x = 0; x < width; x += stripeW * 2) {
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(x, 0, stripeW, height);

        // Fine gold pinstripe accent
        ctx.fillStyle = '#eab308';
        ctx.fillRect(x + stripeW - 2, 0, 1.5, height);
      }
      break;
    }

    case 'plaster_stucco': {
      // Fine Venetian stucco micro-grain
      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(0, 0, width, height);

      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const n = (Math.random() - 0.5) * 16;
        data[i] = Math.min(255, Math.max(0, data[i] + n));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + n));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + n));
      }
      ctx.putImageData(imgData, 0, 0);
      break;
    }

    case 'grass': {
      // Lush green lawn grass with fine blades
      ctx.fillStyle = '#529b35';
      ctx.fillRect(0, 0, width, height);

      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 32;
        data[i] = Math.min(255, Math.max(0, data[i] + noise * 0.4));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise * 0.2));
      }
      ctx.putImageData(imgData, 0, 0);
      break;
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

/**
 * Returns floor material with enhanced textures.
 */
export function getFloorMaterial(materialKey: string): THREE.Material {
  const commonProps = {
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  };

  switch (materialKey) {
    case 'wood_oak': {
      if (!textureCache.has('wood_oak')) {
        textureCache.set('wood_oak', createAdvancedTexture(512, 512, 'wood_oak'));
      }
      const tex = textureCache.get('wood_oak')!;
      tex.repeat.set(1.5, 1.5);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.35,
        metalness: 0.05,
        ...commonProps,
      });
    }
    case 'wood_dark': {
      if (!textureCache.has('wood_dark')) {
        textureCache.set('wood_dark', createAdvancedTexture(512, 512, 'wood_dark'));
      }
      const tex = textureCache.get('wood_dark')!;
      tex.repeat.set(1.5, 1.5);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.3,
        metalness: 0.05,
        ...commonProps,
      });
    }
    case 'tile_ceramic': {
      if (!textureCache.has('tile_ceramic')) {
        textureCache.set('tile_ceramic', createAdvancedTexture(512, 512, 'tile_ceramic'));
      }
      const tex = textureCache.get('tile_ceramic')!;
      tex.repeat.set(2, 2);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.15,
        metalness: 0.08,
        ...commonProps,
      });
    }
    case 'marble_luxury': {
      if (!textureCache.has('marble_luxury')) {
        textureCache.set('marble_luxury', createAdvancedTexture(512, 512, 'marble_luxury'));
      }
      const tex = textureCache.get('marble_luxury')!;
      tex.repeat.set(1, 1);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.1,
        metalness: 0.12,
        ...commonProps,
      });
    }
    case 'stone_slate': {
      if (!textureCache.has('stone_slate')) {
        textureCache.set('stone_slate', createAdvancedTexture(512, 512, 'stone_slate'));
      }
      const tex = textureCache.get('stone_slate')!;
      tex.repeat.set(1.5, 1.5);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.8,
        metalness: 0.0,
        ...commonProps,
      });
    }
    case 'carpet_blue': {
      if (!textureCache.has('carpet_blue')) {
        textureCache.set('carpet_blue', createAdvancedTexture(512, 512, 'carpet_blue'));
      }
      const tex = textureCache.get('carpet_blue')!;
      tex.repeat.set(2, 2);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.95,
        metalness: 0.0,
        ...commonProps,
      });
    }
    default: {
      return new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        roughness: 0.45,
        ...commonProps,
      });
    }
  }
}

/**
 * Returns wall material with enhanced textures.
 */
export function getWallMaterial(colorKey: string): THREE.Material {
  switch (colorKey) {
    case 'brick': {
      if (!textureCache.has('brick')) {
        textureCache.set('brick', createAdvancedTexture(512, 512, 'brick'));
      }
      const tex = textureCache.get('brick')!;
      tex.repeat.set(1, 1);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.75,
        metalness: 0.02,
      });
    }
    case 'brick_white': {
      if (!textureCache.has('brick_white')) {
        textureCache.set('brick_white', createAdvancedTexture(512, 512, 'brick_white'));
      }
      const tex = textureCache.get('brick_white')!;
      tex.repeat.set(1, 1);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.6,
        metalness: 0.02,
      });
    }
    case 'wood': {
      if (!textureCache.has('wall_wood')) {
        textureCache.set('wall_wood', createAdvancedTexture(512, 512, 'wall_wood'));
      }
      const tex = textureCache.get('wall_wood')!;
      tex.repeat.set(1, 1);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.45,
        metalness: 0.05,
      });
    }
    case 'wallpaper_striped': {
      if (!textureCache.has('wallpaper_striped')) {
        textureCache.set('wallpaper_striped', createAdvancedTexture(512, 512, 'wallpaper_striped'));
      }
      const tex = textureCache.get('wallpaper_striped')!;
      tex.repeat.set(2, 1);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.4,
      });
    }
    case 'beige': {
      if (!textureCache.has('stucco_beige')) {
        textureCache.set('stucco_beige', createAdvancedTexture(256, 256, 'plaster_stucco'));
      }
      return new THREE.MeshStandardMaterial({
        color: 0xf5eedc,
        map: textureCache.get('stucco_beige'),
        roughness: 0.55,
      });
    }
    case 'gray': {
      if (!textureCache.has('stucco_gray')) {
        textureCache.set('stucco_gray', createAdvancedTexture(256, 256, 'plaster_stucco'));
      }
      return new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        map: textureCache.get('stucco_gray'),
        roughness: 0.55,
      });
    }
    case 'blue': {
      if (!textureCache.has('stucco_blue')) {
        textureCache.set('stucco_blue', createAdvancedTexture(256, 256, 'plaster_stucco'));
      }
      return new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        map: textureCache.get('stucco_blue'),
        roughness: 0.5,
      });
    }
    case 'green': {
      if (!textureCache.has('stucco_green')) {
        textureCache.set('stucco_green', createAdvancedTexture(256, 256, 'plaster_stucco'));
      }
      return new THREE.MeshStandardMaterial({
        color: 0x86efac,
        map: textureCache.get('stucco_green'),
        roughness: 0.5,
      });
    }
    case 'white':
    default: {
      if (!textureCache.has('stucco_white')) {
        textureCache.set('stucco_white', createAdvancedTexture(256, 256, 'plaster_stucco'));
      }
      return new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        map: textureCache.get('stucco_white'),
        roughness: 0.45,
      });
    }
  }
}

/**
 * Returns roof material matching The Sims 4 roof aesthetics (Image 2).
 */
export function getRoofMaterial(materialKey: string): THREE.Material {
  switch (materialKey) {
    case 'roof_terracotta': {
      if (!textureCache.has('roof_terracotta')) {
        textureCache.set('roof_terracotta', createAdvancedTexture(512, 512, 'roof_terracotta'));
      }
      const tex = textureCache.get('roof_terracotta')!;
      tex.repeat.set(2, 2);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.65,
        metalness: 0.05,
        side: THREE.DoubleSide,
      });
    }
    case 'roof_slate': {
      if (!textureCache.has('roof_slate')) {
        textureCache.set('roof_slate', createAdvancedTexture(512, 512, 'roof_slate'));
      }
      const tex = textureCache.get('roof_slate')!;
      tex.repeat.set(2, 2);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.5,
        metalness: 0.1,
        side: THREE.DoubleSide,
      });
    }
    case 'roof_metal': {
      if (!textureCache.has('roof_metal')) {
        textureCache.set('roof_metal', createAdvancedTexture(512, 512, 'roof_metal'));
      }
      const tex = textureCache.get('roof_metal')!;
      tex.repeat.set(2, 2);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.35,
        metalness: 0.4,
        side: THREE.DoubleSide,
      });
    }
    case 'roof_wood_shake': {
      if (!textureCache.has('roof_wood_shake')) {
        textureCache.set('roof_wood_shake', createAdvancedTexture(512, 512, 'roof_wood_shake'));
      }
      const tex = textureCache.get('roof_wood_shake')!;
      tex.repeat.set(2, 2);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.7,
        metalness: 0.02,
        side: THREE.DoubleSide,
      });
    }
    case 'roof_shingle_dark':
    default: {
      // Iconic dark asphalt shingles matching image.png #2
      if (!textureCache.has('roof_shingle_dark')) {
        textureCache.set('roof_shingle_dark', createAdvancedTexture(512, 512, 'roof_shingle_dark'));
      }
      const tex = textureCache.get('roof_shingle_dark')!;
      tex.repeat.set(2, 2);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.6,
        metalness: 0.05,
        side: THREE.DoubleSide,
      });
    }
  }
}

/**
 * Returns lush grass ground texture.
 */
export function getGrassTexture(): THREE.CanvasTexture {
  if (!textureCache.has('grass')) {
    const tex = createAdvancedTexture(512, 512, 'grass');
    tex.repeat.set(12, 12);
    textureCache.set('grass', tex);
  }
  return textureCache.get('grass')!;
}

