import * as THREE from 'three';
import { getSwatchesForType } from '../data/furnitureSwatches';
export { getFurnitureFootprint } from './furnitureFootprints';

// Reusable materials to save memory and draw calls
const woodDarkMat = new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.65 });
const woodLightMat = new THREE.MeshStandardMaterial({ color: 0xdeb887, roughness: 0.55 });
const woodOakMat = new THREE.MeshStandardMaterial({ color: 0x8d6e63, roughness: 0.6 });
const fabricBlueMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.85 });
const fabricTealMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.85 });
const fabricBeigeMat = new THREE.MeshStandardMaterial({ color: 0xf5f0ea, roughness: 0.9 });
const fabricCharcoalMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.85 });
const fabricWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75 });
const fabricYellowMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.85 });
const metalChromeMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.9, roughness: 0.15 });
const metalBlackMat = new THREE.MeshStandardMaterial({ color: 0x18181b, metalness: 0.6, roughness: 0.35 });
const metalGoldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.85, roughness: 0.25 });
const ceramicWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.15, metalness: 0.05 });
const marbleMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.2, metalness: 0.1 });
const glassMat = new THREE.MeshPhysicalMaterial({
  color: 0xbfdbfe,
  transmission: 0.85,
  opacity: 0.45,
  transparent: true,
  roughness: 0.08,
  ior: 1.5,
});
const tvScreenMat = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.1, metalness: 0.8 });
const screenOnMat = new THREE.MeshBasicMaterial({ color: 0x1e3a8a });
const plantLeafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.55 });
const plantLeafDarkMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.6 });
const plantPotMat = new THREE.MeshStandardMaterial({ color: 0xca8a04, roughness: 0.7 });
const waterMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, opacity: 0.65, transparent: true, roughness: 0.1 });
const fireEmberMat = new THREE.MeshBasicMaterial({ color: 0xf97316 });

export function createFurnitureMesh(type: string, colorVariant: number = 0): THREE.Group {
  const group = new THREE.Group();

  switch (type) {
    // ----------------------------------------------------
    // SEATING & LIVING ROOM
    // ----------------------------------------------------
    case 'sofa': {
      // Modern 3-seater sofa
      const base = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.28, 0.88), fabricBlueMat);
      base.position.y = 0.24;

      const back = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.55, 0.22), fabricBlueMat);
      back.position.set(0, 0.62, -0.33);

      const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.45, 0.9), fabricBlueMat);
      leftArm.position.set(-1.05, 0.44, 0.01);
      const rightArm = leftArm.clone();
      rightArm.position.x = 1.05;

      // 3 Cushions
      for (let i = -1; i <= 1; i++) {
        const cushion = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.14, 0.65), fabricBlueMat);
        cushion.position.set(i * 0.66, 0.42, 0.04);
        group.add(cushion);
      }

      // 2 Accent Pillows
      const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.32, 0.1), fabricBeigeMat);
      p1.rotation.set(0, 0.25, 0.1);
      p1.position.set(-0.78, 0.56, -0.15);
      const p2 = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.32, 0.1), fabricYellowMat);
      p2.rotation.set(0, -0.25, -0.1);
      p2.position.set(0.78, 0.56, -0.15);

      // Wooden tapered legs
      const legGeo = new THREE.CylinderGeometry(0.035, 0.02, 0.12, 8);
      const l1 = new THREE.Mesh(legGeo, woodOakMat);
      l1.position.set(-0.95, 0.06, 0.35);
      const l2 = l1.clone(); l2.position.set(0.95, 0.06, 0.35);
      const l3 = l1.clone(); l3.position.set(-0.95, 0.06, -0.35);
      const l4 = l1.clone(); l4.position.set(0.95, 0.06, -0.35);

      group.add(base, back, leftArm, rightArm, p1, p2, l1, l2, l3, l4);
      break;
    }

    case 'sofa_corner': {
      // Sectional L-shaped corner couch
      const mainBase = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.28, 0.9), fabricCharcoalMat);
      mainBase.position.set(0, 0.24, 0);

      const mainBack = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.55, 0.22), fabricCharcoalMat);
      mainBack.position.set(0, 0.62, -0.34);

      // Chaise extension
      const chaise = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.28, 1.0), fabricCharcoalMat);
      chaise.position.set(0.75, 0.24, 0.95);

      const chaiseArm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.45, 1.85), fabricCharcoalMat);
      chaiseArm.position.set(1.25, 0.44, 0.45);

      const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.45, 0.9), fabricCharcoalMat);
      leftArm.position.set(-1.25, 0.44, 0);

      // Accent cushions
      const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.12), fabricYellowMat);
      p1.position.set(-0.9, 0.56, -0.15);
      const p2 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.12), fabricWhiteMat);
      p2.position.set(0.75, 0.56, 0.3);

      group.add(mainBase, mainBack, chaise, chaiseArm, leftArm, p1, p2);
      break;
    }

    case 'armchair': {
      // Padded Armchair / Poltrona
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.28, 0.85), fabricTealMat);
      base.position.y = 0.24;

      const back = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.58, 0.2), fabricTealMat);
      back.position.set(0, 0.64, -0.32);

      const lArm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.45, 0.85), fabricTealMat);
      lArm.position.set(-0.48, 0.44, 0);
      const rArm = lArm.clone();
      rArm.position.x = 0.48;

      const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.28, 0.1), fabricBeigeMat);
      pillow.position.set(0, 0.52, -0.18);

      const legGeo = new THREE.CylinderGeometry(0.03, 0.02, 0.14, 8);
      const l1 = new THREE.Mesh(legGeo, woodOakMat);
      l1.position.set(-0.4, 0.07, 0.35);
      const l2 = l1.clone(); l2.position.set(0.4, 0.07, 0.35);
      const l3 = l1.clone(); l3.position.set(-0.4, 0.07, -0.35);
      const l4 = l1.clone(); l4.position.set(0.4, 0.07, -0.35);

      group.add(base, back, lArm, rArm, pillow, l1, l2, l3, l4);
      break;
    }

    case 'chair': {
      // Nordic dining chair
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.48), fabricBeigeMat);
      seat.position.y = 0.46;

      const back = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.42, 0.05), woodLightMat);
      back.position.set(0, 0.68, -0.22);

      const legGeo = new THREE.CylinderGeometry(0.022, 0.016, 0.45, 8);
      const l1 = new THREE.Mesh(legGeo, woodDarkMat);
      l1.position.set(-0.2, 0.22, -0.19);
      const l2 = l1.clone(); l2.position.set(0.2, 0.22, -0.19);
      const l3 = l1.clone(); l3.position.set(-0.2, 0.22, 0.19);
      const l4 = l1.clone(); l4.position.set(0.2, 0.22, 0.19);

      group.add(seat, back, l1, l2, l3, l4);
      break;
    }

    case 'barstool': {
      // High bar stool
      const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.08, 16), fabricCharcoalMat);
      seat.position.y = 0.85;

      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.8, 8), metalChromeMat);
      stem.position.y = 0.42;

      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.04, 16), metalChromeMat);
      base.position.y = 0.02;

      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.015, 8, 16), metalChromeMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.35;

      group.add(seat, stem, base, ring);
      break;
    }

    case 'office_chair': {
      // Ergonomic Swivel Gaming/Office Chair
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.08, 0.52), fabricCharcoalMat);
      seat.position.y = 0.5;

      const back = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.65, 0.08), fabricCharcoalMat);
      back.position.set(0, 0.82, -0.23);

      const headrest = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.16, 0.08), fabricTealMat);
      headrest.position.set(0, 1.18, -0.22);

      const lArm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.25, 0.3), metalBlackMat);
      lArm.position.set(-0.28, 0.65, 0);
      const rArm = lArm.clone(); rArm.position.x = 0.28;

      const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.35, 8), metalChromeMat);
      cylinder.position.y = 0.25;

      const starGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.05, 5);
      const starBase = new THREE.Mesh(starGeo, metalBlackMat);
      starBase.position.y = 0.08;

      group.add(seat, back, headrest, lArm, rArm, cylinder, starBase);
      break;
    }

    // ----------------------------------------------------
    // BEDS & BEDROOM
    // ----------------------------------------------------
    case 'bed': {
      // King Size Double Bed
      const frame = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.28, 2.2), woodDarkMat);
      frame.position.y = 0.16;

      const headboard = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.0, 0.15), woodDarkMat);
      headboard.position.set(0, 0.65, -1.05);

      const headPadding = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.8, 0.08), fabricBeigeMat);
      headPadding.position.set(0, 0.65, -0.97);

      const mattress = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.3, 2.05), fabricWhiteMat);
      mattress.position.set(0, 0.42, 0.03);

      const blanket = new THREE.Mesh(new THREE.BoxGeometry(1.84, 0.06, 1.3), fabricBlueMat);
      blanket.position.set(0, 0.58, 0.45);

      // 2 pairs of pillows
      const pilGeo = new THREE.BoxGeometry(0.65, 0.14, 0.4);
      const pil1 = new THREE.Mesh(pilGeo, fabricBeigeMat);
      pil1.position.set(-0.48, 0.61, -0.68);
      const pil2 = pil1.clone(); pil2.position.x = 0.48;

      const pil3 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.3), fabricYellowMat);
      pil3.position.set(-0.45, 0.66, -0.45);
      const pil4 = pil3.clone(); pil4.position.x = 0.45;

      group.add(frame, headboard, headPadding, mattress, blanket, pil1, pil2, pil3, pil4);
      break;
    }

    case 'bed_single': {
      // Single Modern Bed
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.25, 2.1), woodOakMat);
      frame.position.y = 0.15;

      const head = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 0.12), woodOakMat);
      head.position.set(0, 0.55, -1.0);

      const mattress = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.26, 1.95), fabricWhiteMat);
      mattress.position.set(0, 0.38, 0.02);

      const blanket = new THREE.Mesh(new THREE.BoxGeometry(1.08, 0.06, 1.2), fabricTealMat);
      blanket.position.set(0, 0.52, 0.4);

      const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.12, 0.35), fabricBeigeMat);
      pillow.position.set(0, 0.54, -0.65);

      group.add(frame, head, mattress, blanket, pillow);
      break;
    }

    case 'bunk_bed': {
      // Two-story wooden bunk bed with ladder
      const postGeo = new THREE.BoxGeometry(0.08, 1.85, 0.08);
      const p1 = new THREE.Mesh(postGeo, woodOakMat); p1.position.set(-0.56, 0.92, -1.0);
      const p2 = new THREE.Mesh(postGeo, woodOakMat); p2.position.set(0.56, 0.92, -1.0);
      const p3 = new THREE.Mesh(postGeo, woodOakMat); p3.position.set(-0.56, 0.92, 1.0);
      const p4 = new THREE.Mesh(postGeo, woodOakMat); p4.position.set(0.56, 0.92, 1.0);

      // Lower bunk
      const mat1 = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.22, 1.9), fabricBlueMat);
      mat1.position.set(0, 0.38, 0);
      // Upper bunk
      const mat2 = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.22, 1.9), fabricTealMat);
      mat2.position.set(0, 1.35, 0);

      // Rails
      const railTop = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.25, 1.9), woodOakMat);
      railTop.position.set(0.56, 1.55, 0);

      // Ladder steps
      for (let s = 1; s <= 4; s++) {
        const step = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 8), woodLightMat);
        step.rotation.z = Math.PI / 2;
        step.position.set(-0.56, s * 0.32, 0.6);
        group.add(step);
      }

      group.add(p1, p2, p3, p4, mat1, mat2, railTop);
      break;
    }

    case 'nightstand': {
      // Bedside nightstand table
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.48, 0.44), woodDarkMat);
      body.position.y = 0.28;

      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, 0.02), metalGoldMat);
      handle.position.set(0, 0.32, 0.23);

      // Digital Clock / Lamp on top
      const clock = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.06), metalBlackMat);
      clock.position.set(-0.12, 0.56, 0);

      group.add(body, handle, clock);
      break;
    }

    // ----------------------------------------------------
    // TABLES & WORKSPACES
    // ----------------------------------------------------
    case 'table': {
      // Dining table wood with glass inlay
      const top = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.08, 0.95), woodDarkMat);
      top.position.y = 0.74;

      const glassInlay = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.02, 0.65), glassMat);
      glassInlay.position.y = 0.785;

      const legGeo = new THREE.CylinderGeometry(0.04, 0.03, 0.7, 8);
      const l1 = new THREE.Mesh(legGeo, woodOakMat); l1.position.set(-0.8, 0.35, -0.4);
      const l2 = l1.clone(); l2.position.set(0.8, 0.35, -0.4);
      const l3 = l1.clone(); l3.position.set(-0.8, 0.35, 0.4);
      const l4 = l1.clone(); l4.position.set(0.8, 0.35, 0.4);

      group.add(top, glassInlay, l1, l2, l3, l4);
      break;
    }

    case 'coffee_table': {
      // Living Room Coffee Table
      const top = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.06, 0.65), woodOakMat);
      top.position.y = 0.42;

      const shelf = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.03, 0.55), woodLightMat);
      shelf.position.y = 0.18;

      const legGeo = new THREE.BoxGeometry(0.04, 0.42, 0.04);
      const l1 = new THREE.Mesh(legGeo, metalBlackMat); l1.position.set(-0.52, 0.21, -0.26);
      const l2 = l1.clone(); l2.position.set(0.52, 0.21, -0.26);
      const l3 = l1.clone(); l3.position.set(-0.52, 0.21, 0.26);
      const l4 = l1.clone(); l4.position.set(0.52, 0.21, 0.26);

      // Book / Magazine on top
      const book = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.02, 0.18), fabricTealMat);
      book.rotation.y = 0.2;
      book.position.set(0.2, 0.46, 0);

      group.add(top, shelf, l1, l2, l3, l4, book);
      break;
    }

    case 'desk': {
      // Work Desk with Laptop
      const top = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.06, 0.7), woodOakMat);
      top.position.y = 0.74;

      const frameL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.72, 0.65), metalBlackMat);
      frameL.position.set(-0.65, 0.36, 0);
      const frameR = frameL.clone(); frameR.position.x = 0.65;

      // Drawers unit on right
      const drawer = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.6, 0.6), woodDarkMat);
      drawer.position.set(0.45, 0.4, 0);

      // Laptop
      const laptopBase = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.015, 0.24), metalChromeMat);
      laptopBase.position.set(-0.15, 0.78, 0.05);

      const laptopScreen = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.22, 0.015), metalBlackMat);
      laptopScreen.rotation.x = -0.25;
      laptopScreen.position.set(-0.15, 0.88, -0.06);

      group.add(top, frameL, frameR, drawer, laptopBase, laptopScreen);
      break;
    }

    // ----------------------------------------------------
    // STORAGE & CABINETS
    // ----------------------------------------------------
    case 'cabinet': {
      // Modern Wardrobe with mirror panel
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.95, 0.6), woodDarkMat);
      body.position.y = 0.98;

      const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.75, 0.02), glassMat);
      mirror.position.set(-0.32, 0.98, 0.31);

      const divider = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.9, 0.02), metalGoldMat);
      divider.position.set(0, 0.98, 0.31);

      const h1 = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.2, 8), metalGoldMat);
      h1.position.set(0.08, 0.98, 0.32);

      group.add(body, mirror, divider, h1);
      break;
    }

    case 'bookshelf': {
      // Architectural Open Bookshelf
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.9, 0.38), woodDarkMat);
      frame.position.y = 0.95;

      // 4 Shelves
      for (let i = 1; i <= 4; i++) {
        const y = i * 0.42;
        // Books block
        const bookMat = i % 2 === 0 ? fabricBlueMat : fabricTealMat;
        const books = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.22, 0.22), bookMat);
        books.position.set((i % 2 === 0 ? -0.25 : 0.25), y + 0.12, 0.02);
        group.add(books);
      }

      group.add(frame);
      break;
    }

    // ----------------------------------------------------
    // ELECTRONICS & APPLIANCES
    // ----------------------------------------------------
    case 'tv': {
      // Media Console + 4K TV + Soundbar
      const credenza = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.45, 0.45), woodDarkMat);
      credenza.position.y = 0.225;

      const tvFrame = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.82, 0.05), tvScreenMat);
      tvFrame.position.set(0, 0.92, 0);

      const screen = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.75, 0.01), screenOnMat);
      screen.position.set(0, 0.92, 0.03);

      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.1, 8), metalChromeMat);
      neck.position.set(0, 0.49, 0);

      const soundbar = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.08), metalBlackMat);
      soundbar.position.set(0, 0.48, 0.12);

      group.add(credenza, tvFrame, screen, neck, soundbar);
      break;
    }

    case 'tv_wall': {
      // Wall-mounted OLED 65" TV
      const mount = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.88, 0.04), tvScreenMat);
      mount.position.set(0, 1.4, 0);

      const screen = new THREE.Mesh(new THREE.BoxGeometry(1.44, 0.82, 0.01), screenOnMat);
      screen.position.set(0, 1.4, 0.025);

      group.add(mount, screen);
      break;
    }

    case 'computer': {
      // Desktop Battle-station: Desk, Dual Monitors, RGB Case
      const deskTop = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.05, 0.65), metalBlackMat);
      deskTop.position.y = 0.74;

      const legs = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.72, 0.55), metalBlackMat);
      legs.position.y = 0.36;

      // Dual curved monitors
      const m1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.32, 0.03), tvScreenMat);
      m1.rotation.y = 0.15;
      m1.position.set(-0.26, 0.96, -0.05);

      const m2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.32, 0.03), tvScreenMat);
      m2.rotation.y = -0.15;
      m2.position.set(0.26, 0.96, -0.05);

      // RGB Gaming Tower
      const pcCase = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.4, 0.38), metalBlackMat);
      pcCase.position.set(0.48, 0.96, 0.05);

      const rgbStripe = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.35, 0.02), fireEmberMat);
      rgbStripe.position.set(0.38, 0.96, 0.22);

      group.add(deskTop, legs, m1, m2, pcCase, rgbStripe);
      break;
    }

    case 'speaker': {
      // Hi-Fi Sound Tower
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.32, 1.05, 0.32), woodDarkMat);
      body.position.y = 0.525;

      const c1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.02, 16), metalGoldMat);
      c1.rotation.x = Math.PI / 2;
      c1.position.set(0, 0.78, 0.17);

      const c2 = c1.clone();
      c2.position.y = 0.45;

      group.add(body, c1, c2);
      break;
    }

    case 'fridge': {
      // Stainless Steel Double Door Fridge
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.9, 0.8), metalChromeMat);
      body.position.y = 0.95;

      const slit = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.85, 0.02), metalBlackMat);
      slit.position.set(0, 0.95, 0.41);

      const freezerSplit = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.02, 0.02), metalBlackMat);
      freezerSplit.position.set(0, 0.7, 0.41);

      const dispenser = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.3, 0.02), metalBlackMat);
      dispenser.position.set(-0.25, 1.25, 0.415);

      group.add(body, slit, freezerSplit, dispenser);
      break;
    }

    case 'counter': {
      // Kitchen Sink Counter
      const base = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.86, 0.65), woodOakMat);
      base.position.y = 0.43;

      const top = new THREE.Mesh(new THREE.BoxGeometry(1.04, 0.08, 0.69), marbleMat);
      top.position.y = 0.9;

      const sink = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.02, 0.42), metalChromeMat);
      sink.position.set(0, 0.945, 0.02);

      const faucet = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.22, 8), metalChromeMat);
      faucet.position.set(0, 1.05, -0.16);

      group.add(base, top, sink, faucet);
      break;
    }

    case 'kitchen_island': {
      // Gourmet Kitchen Island with Marble Countertop
      const base = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.85, 0.85), woodDarkMat);
      base.position.y = 0.425;

      const marbleTop = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.08, 0.95), marbleMat);
      marbleTop.position.y = 0.89;

      const fruitBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.1, 0.08, 12), ceramicWhiteMat);
      fruitBowl.position.set(0, 0.97, 0);

      group.add(base, marbleTop, fruitBowl);
      break;
    }

    case 'stove': {
      // Cooktop Stove + Oven + Exhaust Hood
      const oven = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.88, 0.65), metalChromeMat);
      oven.position.y = 0.44;

      const ovenGlass = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.45, 0.02), metalBlackMat);
      ovenGlass.position.set(0, 0.42, 0.33);

      // 4 Burners
      for (let x = -0.22; x <= 0.22; x += 0.44) {
        for (let z = -0.15; z <= 0.15; z += 0.3) {
          const burner = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.02, 12), metalBlackMat);
          burner.position.set(x, 0.89, z);
          group.add(burner);
        }
      }

      // Exhaust Hood
      const hood = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.35, 0.6), metalChromeMat);
      hood.position.set(0, 1.75, 0);

      group.add(oven, ovenGlass, hood);
      break;
    }

    // ----------------------------------------------------
    // BATHROOM & SPA
    // ----------------------------------------------------
    case 'toilet': {
      // Dual-Flush Toilet
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.42, 16), ceramicWhiteMat);
      base.position.set(0, 0.21, 0.08);

      const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.2, 0.16, 16), ceramicWhiteMat);
      bowl.position.set(0, 0.44, 0.12);

      const water = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.02, 16), waterMat);
      water.position.set(0, 0.46, 0.12);

      const tank = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.45, 0.22), ceramicWhiteMat);
      tank.position.set(0, 0.6, -0.18);

      const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.02, 8), metalChromeMat);
      btn.position.set(0, 0.835, -0.18);

      group.add(base, bowl, water, tank, btn);
      break;
    }

    case 'bath': {
      // Luxury Oval Spa Bathtub
      const tub = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.45, 0.58, 24), ceramicWhiteMat);
      tub.scale.set(1.55, 1, 0.9);
      tub.position.y = 0.29;

      const water = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.42, 0.02, 24), waterMat);
      water.scale.set(1.5, 1, 0.85);
      water.position.y = 0.48;

      const faucet = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.35, 8), metalGoldMat);
      faucet.position.set(0.72, 0.6, 0);

      group.add(tub, water, faucet);
      break;
    }

    case 'shower': {
      // Walk-in Glass Shower Enclosure
      const tray = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.06, 1.0), ceramicWhiteMat);
      tray.position.y = 0.03;

      const glassWall1 = new THREE.Mesh(new THREE.BoxGeometry(0.02, 2.0, 1.0), glassMat);
      glassWall1.position.set(-0.49, 1.04, 0);

      const glassWall2 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 2.0, 0.02), glassMat);
      glassWall2.position.set(-0.14, 1.04, 0.49);

      const showerColumn = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.5, 0.04), metalChromeMat);
      showerColumn.position.set(0.46, 1.1, 0);

      const rainfallHead = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.02, 16), metalChromeMat);
      rainfallHead.position.set(0.28, 1.95, 0);

      group.add(tray, glassWall1, glassWall2, showerColumn, rainfallHead);
      break;
    }

    case 'sink_vanity': {
      // Vanity Cabinet + Vessel Sink + Illuminated Mirror
      const vanity = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.75, 0.52), woodDarkMat);
      vanity.position.y = 0.375;

      const marbleTop = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.06, 0.55), marbleMat);
      marbleTop.position.y = 0.77;

      const sink = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.12, 16), ceramicWhiteMat);
      sink.position.set(0, 0.86, 0.02);

      const faucet = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.22, 8), metalGoldMat);
      faucet.position.set(0, 0.97, -0.16);

      const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.85, 0.02), glassMat);
      mirror.position.set(0, 1.45, -0.22);

      group.add(vanity, marbleTop, sink, faucet, mirror);
      break;
    }

    // ----------------------------------------------------
    // LIGHTING & LAMPS (WITH FUNCTIONAL POINT LIGHTS)
    // ----------------------------------------------------
    case 'lamp': {
      // Cozy Bedside Table Lamp
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.04, 12), metalGoldMat);
      base.position.y = 0.02;

      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 8), metalGoldMat);
      stem.position.y = 0.27;

      const shade = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.26, 0.32, 16, 1, true),
        new THREE.MeshStandardMaterial({ color: 0xfffbeb, roughness: 0.35, side: THREE.DoubleSide })
      );
      shade.position.y = 0.48;

      const light = new THREE.PointLight(0xffedd5, 0.8, 6, 2);
      light.position.set(0, 0.48, 0);

      group.add(base, stem, shade, light);
      break;
    }

    case 'floor_lamp': {
      // Scandinavian Tripod Floor Lamp
      const legGeo = new THREE.CylinderGeometry(0.018, 0.014, 1.45, 8);
      const l1 = new THREE.Mesh(legGeo, woodOakMat);
      l1.rotation.set(0.12, 0, 0.12);
      l1.position.set(-0.16, 0.72, 0.16);

      const l2 = new THREE.Mesh(legGeo, woodOakMat);
      l2.rotation.set(0.12, 0, -0.12);
      l2.position.set(0.16, 0.72, 0.16);

      const l3 = new THREE.Mesh(legGeo, woodOakMat);
      l3.rotation.set(-0.16, 0, 0);
      l3.position.set(0, 0.72, -0.2);

      const shade = new THREE.Mesh(
        new THREE.CylinderGeometry(0.28, 0.34, 0.42, 20, 1, true),
        new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.3, side: THREE.DoubleSide })
      );
      shade.position.y = 1.45;

      const light = new THREE.PointLight(0xfef08a, 1.2, 8, 2);
      light.position.set(0, 1.45, 0);

      group.add(l1, l2, l3, shade, light);
      break;
    }

    case 'ceiling_lamp': {
      // Modern Multi-Ring Chandelier
      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.8, 8), metalBlackMat);
      cord.position.y = 2.4;

      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 8, 24), metalGoldMat);
      ring1.position.y = 1.95;
      ring1.rotation.x = Math.PI / 2 + 0.2;

      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.018, 8, 24), metalGoldMat);
      ring2.position.y = 1.85;
      ring2.rotation.x = Math.PI / 2 - 0.2;

      const light = new THREE.PointLight(0xfff7ed, 1.4, 9, 2);
      light.position.set(0, 1.85, 0);

      group.add(cord, ring1, ring2, light);
      break;
    }

    // ----------------------------------------------------
    // DECORATION & GREENERY
    // ----------------------------------------------------
    case 'plant': {
      // Monstera Deliciosa (Costela de Adão) in pot
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.18, 0.45, 16), plantPotMat);
      pot.position.y = 0.225;

      const soil = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.23, 0.04, 16), woodDarkMat);
      soil.position.y = 0.43;

      // Monstera Broad Leaves
      const leafGeo = new THREE.DodecahedronGeometry(0.32, 1);
      const l1 = new THREE.Mesh(leafGeo, plantLeafMat);
      l1.scale.set(1.1, 0.4, 1.1);
      l1.rotation.set(0.3, 0.4, -0.2);
      l1.position.set(0.12, 0.72, 0.1);

      const l2 = new THREE.Mesh(leafGeo, plantLeafDarkMat);
      l2.scale.set(0.9, 0.35, 0.9);
      l2.rotation.set(-0.3, -0.4, 0.2);
      l2.position.set(-0.15, 0.65, -0.08);

      const l3 = new THREE.Mesh(leafGeo, plantLeafMat);
      l3.scale.set(1.0, 0.3, 1.0);
      l3.position.set(0, 0.88, 0);

      group.add(pot, soil, l1, l2, l3);
      break;
    }

    case 'plant_tree': {
      // Ficus Lyrata Statement Tree
      const planter = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.25, 0.55, 16), ceramicWhiteMat);
      planter.position.y = 0.275;

      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.2, 8), woodDarkMat);
      trunk.position.set(0, 0.85, 0);

      // Tree foliage volume
      for (let i = 0; i < 5; i++) {
        const leafBall = new THREE.Mesh(new THREE.DodecahedronGeometry(0.35 - i * 0.03, 1), plantLeafMat);
        leafBall.position.set((Math.sin(i) * 0.18), 1.2 + i * 0.2, (Math.cos(i) * 0.18));
        group.add(leafBall);
      }

      group.add(planter, trunk);
      break;
    }

    case 'fireplace': {
      // Modern Cozy Fireplace with Mantle
      const surround = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.15, 0.45), woodDarkMat);
      surround.position.y = 0.575;

      const cavity = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.65, 0.35), metalBlackMat);
      cavity.position.set(0, 0.45, 0.08);

      const embers = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.12, 0.22), fireEmberMat);
      embers.position.set(0, 0.2, 0.12);

      const fireGlow = new THREE.PointLight(0xf97316, 1.2, 4);
      fireGlow.position.set(0, 0.35, 0.2);

      group.add(surround, cavity, embers, fireGlow);
      break;
    }

    case 'rug': {
      // Moroccan Geometric Area Rug
      const rug = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.02, 1.6), fabricBeigeMat);
      rug.position.y = 0.01;

      const innerPattern = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.025, 1.3), fabricTealMat);
      innerPattern.position.y = 0.012;

      group.add(rug, innerPattern);
      break;
    }

    case 'wall_art': {
      // Framed Gallery Painting
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 0.04), woodDarkMat);
      frame.position.set(0, 1.5, 0);

      const canvas = new THREE.Mesh(new THREE.BoxGeometry(1.12, 0.72, 0.01), fabricYellowMat);
      canvas.position.set(0, 1.5, 0.025);

      group.add(frame, canvas);
      break;
    }

    case 'guitar': {
      // Acoustic Guitar on Stand
      const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.9, 8), metalBlackMat);
      stand.position.set(0, 0.45, 0);

      const gBody = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.55, 0.12), woodOakMat);
      gBody.position.set(0, 0.48, 0.08);

      const neck = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.6, 0.04), woodDarkMat);
      neck.position.set(0, 0.95, 0.08);

      group.add(stand, gBody, neck);
      break;
    }

    case 'cash_register': {
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.42, 0.58), woodDarkMat);
      base.position.y = 0.22;
      const drawer = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.12, 0.5), metalChromeMat);
      drawer.position.set(0, 0.17, 0.04);
      const top = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.06, 0.62), woodOakMat);
      top.position.y = 0.46;
      const terminal = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.18, 0.22), metalBlackMat);
      terminal.position.set(0.1, 0.61, -0.12);
      terminal.rotation.x = -0.2;
      const screen = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.11, 0.018), screenOnMat);
      screen.position.set(0.1, 0.63, -0.005);
      screen.rotation.x = -0.2;
      const scanner = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.018, 0.15), glassMat);
      scanner.position.set(-0.2, 0.51, 0.1);
      const keys = new THREE.MeshStandardMaterial({ color: 0xe5e7eb, roughness: 0.55 });
      for (let row = 0; row < 2; row++) for (let col = 0; col < 3; col++) {
        const key = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.018, 0.05), keys);
        key.position.set(-0.16 + col * 0.075, 0.51, -0.2 + row * 0.08);
        group.add(key);
      }
      group.add(base, drawer, top, terminal, screen, scanner);
      break;
    }

    case 'display_case': {
      const foot = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.18, 0.72), woodDarkMat);
      foot.position.y = 0.09;
      const plinth = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.34, 0.62), woodOakMat);
      plinth.position.y = 0.34;
      const glassSides = new THREE.MeshPhysicalMaterial({
        color: 0xe3f2ff, roughness: 0.1, metalness: 0.05, transmission: 0.72,
        transparent: true, opacity: 0.48, thickness: 0.04,
      });
      const front = new THREE.Mesh(new THREE.BoxGeometry(1.36, 0.63, 0.025), glassSides);
      front.position.set(0, 0.83, 0.29);
      const back = front.clone();
      back.position.z = -0.29;
      const sideGeo = new THREE.BoxGeometry(0.025, 0.63, 0.58);
      const left = new THREE.Mesh(sideGeo, glassSides);
      left.position.set(-0.68, 0.83, 0);
      const right = left.clone();
      right.position.x = 0.68;
      const top = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.055, 0.68), metalChromeMat);
      top.position.y = 1.17;
      const shelf = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.035, 0.55), ceramicWhiteMat);
      shelf.position.y = 0.78;
      const trayMat = new THREE.MeshStandardMaterial({ color: 0xc97943, roughness: 0.78 });
      for (let i = 0; i < 5; i++) {
        const pastry = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.035, 6, 12), trayMat);
        pastry.position.set(-0.48 + i * 0.24, 0.58, 0.02);
        pastry.rotation.x = Math.PI / 2;
        group.add(pastry);
      }
      group.add(foot, plinth, front, back, left, right, top, shelf);
      break;
    }

    case 'menu_board': {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.35, 1.25, 0.09), woodDarkMat);
      frame.position.y = 1.25;
      const boardMat = new THREE.MeshStandardMaterial({ color: 0x26352f, roughness: 0.92 });
      const board = new THREE.Mesh(new THREE.BoxGeometry(1.21, 1.1, 0.025), boardMat);
      board.position.set(0, 1.25, 0.055);
      const chalk = new THREE.MeshStandardMaterial({ color: 0xf4ead2, roughness: 0.88 });
      const heading = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.035, 0.012), chalk);
      heading.position.set(0, 1.62, 0.075);
      group.add(frame, board, heading);
      for (let i = 0; i < 4; i++) {
        const line = new THREE.Mesh(new THREE.BoxGeometry(i % 2 === 0 ? 0.8 : 0.68, 0.018, 0.012), chalk);
        line.position.set(i % 2 === 0 ? -0.03 : 0.04, 1.43 - i * 0.17, 0.075);
        group.add(line);
      }
      break;
    }

    default: {
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), fabricBlueMat);
      box.position.y = 0.4;
      group.add(box);
      break;
    }
  }

  // Apply Swatch Color Variants if available
  const swatches = getSwatchesForType(type);
  if (swatches.length > 0 && colorVariant >= 0) {
    const swatch = swatches[colorVariant % swatches.length];
    const colorA = new THREE.Color(swatch.colorA);
    const colorB = new THREE.Color(swatch.colorB);

    let meshIndex = 0;
    group.traverse((c) => {
      if (c instanceof THREE.Mesh && c.material instanceof THREE.MeshStandardMaterial) {
        if (
          c.material !== plantLeafMat &&
          c.material !== plantLeafDarkMat &&
          c.material !== tvScreenMat
        ) {
          const mat = c.material.clone();
          if (meshIndex % 2 === 0) {
            mat.color.copy(colorA);
          } else {
            mat.color.copy(colorB);
          }
          c.material = mat;
        }
        meshIndex++;
      }
    });
  }

  // Cast and receive shadows across all meshes
  group.traverse((c) => {
    if (c instanceof THREE.Mesh) {
      c.castShadow = true;
      c.receiveShadow = true;
    }
  });

  return group;
}

// Outer Door with Frame, Glass and Doorknob
export function createDoorMesh(): THREE.Group {
  const group = new THREE.Group();

  const frameMat = new THREE.MeshStandardMaterial({ color: 0x4a2e18, roughness: 0.6 });
  const doorMat = new THREE.MeshStandardMaterial({ color: 0x7c4a24, roughness: 0.5 });
  const handleMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });

  // Frame columns
  const colGeo = new THREE.BoxGeometry(0.1, 2.25, 0.24);
  const leftCol = new THREE.Mesh(colGeo, frameMat);
  leftCol.position.set(-0.5, 1.125, 0);
  const rightCol = leftCol.clone();
  rightCol.position.set(0.5, 1.125, 0);

  // Frame header
  const header = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.1, 0.24), frameMat);
  header.position.set(0, 2.25, 0);
  group.add(leftCol, rightCol, header);

  // Door leaf
  const doorLeaf = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.18, 0.08), doorMat);
  doorLeaf.position.set(0, 1.09, 0);
  group.add(doorLeaf);

  // Handle knobs
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), handleMat);
  knob.position.set(0.35, 1.05, 0.06);
  const knobBack = knob.clone();
  knobBack.position.z = -0.06;
  group.add(knob, knobBack);

  group.traverse((c) => {
    if (c instanceof THREE.Mesh) {
      c.castShadow = true;
      c.receiveShadow = true;
    }
  });

  return group;
}

// Window with Sill, Mullions, and Physical Transparent Glass
export function createWindowMesh(): THREE.Group {
  const group = new THREE.Group();

  const frameMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });

  const frameWidth = 1.2;
  const frameHeight = 1.3;
  const frameDepth = 0.24;

  const topPost = new THREE.Mesh(new THREE.BoxGeometry(frameWidth, 0.08, frameDepth), frameMat);
  topPost.position.set(0, 1.9, 0);
  const bottomPost = topPost.clone();
  bottomPost.position.set(0, 0.65, 0);

  const leftPost = new THREE.Mesh(new THREE.BoxGeometry(0.08, frameHeight, frameDepth), frameMat);
  leftPost.position.set(-0.56, 1.275, 0);
  const rightPost = leftPost.clone();
  rightPost.position.set(0.56, 1.275, 0);

  const centerMullion = new THREE.Mesh(new THREE.BoxGeometry(0.05, frameHeight, 0.08), frameMat);
  centerMullion.position.set(0, 1.275, 0);

  // Transparent Physical Glass
  const glass = new THREE.Mesh(new THREE.BoxGeometry(frameWidth - 0.16, frameHeight - 0.16, 0.03), glassMat);
  glass.position.set(0, 1.275, 0);

  // Outer Window Sill
  const sill = new THREE.Mesh(new THREE.BoxGeometry(frameWidth + 0.16, 0.06, frameDepth + 0.08), frameMat);
  sill.position.set(0, 0.62, 0);

  group.add(topPost, bottomPost, leftPost, rightPost, centerMullion, glass, sill);

  group.traverse((c) => {
    if (c instanceof THREE.Mesh) {
      c.castShadow = true;
      c.receiveShadow = true;
    }
  });

  return group;
}
