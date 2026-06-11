const MENU_BOOK_URL = "https://heyzine.com/flip-book/7badf703f1.html";

const content = {
  en: {
    brandSubtitle: "Steak · Thai-Western comfort · Ayutthaya",
    navStory: "Story",
    navMenu: "Menu",
    navExperience: "Experience",
    navVisit: "Visit",
    reserve: "Reserve",
    callNow: "Call now",
    lineChat: "Chat on LINE",
    heroEyebrow: "Dry-aged beef · Thai-Western comfort · family dining",
    heroTitle: "A warm table in Ayutthaya.",
    heroCopy: "X BEEF is a relaxed comfort-dining restaurant for families, couples, friends, and travellers. Come for generous comfort food, dry-aged beef, steaks from around the world, Western favourites like burgers, pasta, BBQ pork ribs and lamb chop, Thai-Western flavours, coffee, dessert, and an easy atmosphere that feels good at any time of day.",
    reserveTable: "Reserve a table",
    viewMenu: "View full menu",
    pillRating: "Rating",
    pillRatingText: "4.8 on Google",
    pillGoodFor: "Good for",
    pillGoodForText: "Family, friends, couples",
    pillMood: "Mood",
    pillMoodText: "Comfortable, warm, stylish",
    heroPhotoTitle: "Comfort food, warm service, relaxed evenings.",
    googleRating: "Google rating",
    ratingCopy: "A comfortable Ayutthaya restaurant for dry-aged beef, global steaks, burgers, pasta, BBQ pork ribs, lamb chop, Thai-Western dishes, drinks, family meals, and relaxed special occasions.",
    storyPhotoOne: "A room for family meals",
    storyPhotoOneCaption: "Generous plates and a calm table for lunch or dinner.",
    storyPhotoTwo: "Cafe comfort, dinner mood",
    storyPhotoTwoCaption: "Coffee, dessert, drinks, and easy evening atmosphere.",
    storyEyebrow: "Brand story",
    storyTitle: "Good food, kind service, and space to slow down.",
    storyCopy: "X BEEF is a polished neighbourhood restaurant in Ayutthaya: stylish enough for a special meal, relaxed enough for everyday comfort. Our promise is simple — welcome people well and serve food everyone at the table can enjoy.",
    signatureEyebrow: "Signatures",
    signatureTitle: "Dry-aged in-house, served without fuss.",
    signatureCopy: "Steak is our craft. We dry-age selected cuts in our own cabinet, grill over real fire, and plate everything to share — premium beef without the stiff steakhouse formality.",
    dryagedNote: "Dry-aging lets time do the work: moisture slowly leaves the beef, concentrating its flavour into something deeper and nuttier while the texture turns tender. Ask our team which cut is at its peak today.",
    menuEyebrow: "Menu",
    menuTitleMain: "Familiar dishes, served with care.",
    menuIntro: "Premium steak and dry-aged beef for steak lovers, Western comfort favourites like burgers, pasta, BBQ pork ribs and lamb chop, Thai-Western dishes for sharing, and coffee, dessert, and drinks for guests who want to stay a little longer.",
    viewFullMenu: "View full menu & prices",
    menuNoteFooter: "A taste of what we serve — browse the full menu with prices in our digital menu book, or ask us on LINE @xbeefth.",
    experienceEyebrow: "Experience",
    experienceTitle: "Relaxed comfort, with a premium steakhouse soul.",
    experienceCopy: "X BEEF is welcoming first: a family-friendly restaurant with warm service, soft lighting, outdoor garden corners, photo-friendly moments, Western comfort dishes, Thai-Western flavours, dry-aged beef, and steaks from around the world.",
    reviewCtaCopy: "Rated 4.8 on Google by our guests. Read what families, friends, and travellers say about their evenings at X BEEF.",
    readReviews: "Read reviews on Google",
    visitEyebrow: "Visit",
    visitTitle: "Easy comfort in Ayutthaya.",
    visitCopy: "Perfect for lunch, dinner, family meals, date nights, casual celebrations, garden photos, and relaxed live-music evenings. Call us, message us on LINE, or open the map — we're easy to find.",
    openMap: "Open map",
    guestRating: "Guest rating",
    footerCopy: "© X BEEF Steak & Comfort Dining, Ayutthaya",
    footerAddress: "22/27 Phai Ling, Phra Nakhon Si Ayutthaya, Ayutthaya 13000",
    actionCall: "Call",
    actionLine: "LINE",
    actionMap: "Map",
    actionMenu: "Menu",
    values: [
      ["Comfort", "Familiar food with a refined finish: steaks, burgers, pasta, BBQ pork ribs, lamb chop, Thai-Western dishes, sides, coffee, and dessert."],
      ["Steak craft", "Dry-aged beef, imported selections, and different cuts bring a premium steakhouse layer to the relaxed dining experience."],
      ["Service", "Welcoming, helpful, and clear from first click to final table booking."]
    ],
    signatures: [
      ["Dry-aged", "Dry-aged ribeye", "Aged in-house for deeper, nuttier flavour and a tender bite — the dish to order first."],
      ["Thai fire", "Grilled beef with jaew", "Steakhouse craft meets Thai flavour: smoky grilled beef with our punchy jaew dipping sauce."],
      ["Slow-cooked", "BBQ pork ribs", "Cooked low and slow until tender, glazed in smoky-sweet barbecue sauce. Made for sharing."],
      ["House favourite", "X BEEF burger", "A generous house burger built on quality beef — the easy choice the whole table agrees on."]
    ],
    menus: [
      { id: "steak", title: "Steak & Dry-Aged Beef", note: "Dry-aged beef, premium steaks, lamb, and selected cuts from Thailand and around the world.", items: ["Dry-aged ribeye", "Australian beef steak", "Black pepper beef steak", "Imported striploin", "Lamb chop"] },
      { id: "western", title: "Western Comfort", note: "Classic Western favourites for families, friends, and easy sharing at the table.", items: ["X BEEF burger", "BBQ pork ribs", "Seafood alfredo pasta", "Tomahawk pork chop", "Garlic bread"] },
      { id: "fusion", title: "Thai-Western Fusion", note: "Comfort dishes that bring steakhouse classics together with familiar Thai flavours.", items: ["Grilled beef with jaew", "Thai-style spicy steak salad", "Seabass steak", "Garlic butter rice", "Spicy Thai-Western pasta"] },
      { id: "sharing", title: "Pasta & Sharing", note: "Creamy, warm, familiar dishes for the center of the table.", items: ["Seafood alfredo spaghetti", "Truffle soup", "Spinach baked cheese", "Potato salad", "Sharing sides"] },
      { id: "drinks", title: "Cafe & Drinks", note: "Coffee, dessert, wine, mocktails, and easy after-meal drinks.", items: ["House coffee", "Seasonal desserts", "Signature mocktails", "Wine selection", "Craft beer & bar snacks"] }
    ],
    experiences: [
      ["01", "Relaxed family atmosphere", "A warm, comfortable room for family meals, couples, tourists, and friends who want good food without formality."],
      ["02", "Dry-aged beef and world steaks", "Dry-aged beef, imported selections, and different steak cuts — premium quality with an approachable spirit."],
      ["03", "Thai-Western comfort", "Steakhouse favourites, Thai flavours, burgers, pasta, BBQ pork ribs, lamb chop, coffee, desserts, and drinks — something for everyone at the table."],
      ["04", "Outdoor garden and photo corners", "A relaxed outdoor garden mood and small photo moments that make an evening memorable for families, couples, and tourists."],
      ["05", "Live music evenings", "Evening drinks, soft lighting, and live music nights that turn a casual dinner into a longer, more social visit."]
    ],
    visit: [
      ["Address", "22/27 Phai Ling, Phra Nakhon Si Ayutthaya District, Ayutthaya 13000"],
      ["Hours", "Daily 11:00–22:00"],
      ["Reserve", `Call <a href="tel:+66811541145">081 154 1145</a> or message <a href="https://line.me/R/ti/p/@xbeefth" target="_blank" rel="noreferrer">LINE @xbeefth</a>`],
      ["Menu", `<a href="${MENU_BOOK_URL}" target="_blank" rel="noreferrer">Browse the full menu &amp; prices</a>`],
      ["Good for", "Family meals, date nights, friends, tourists, garden seating, photo spots, live-music evenings"]
    ]
  },
  th: {
    brandSubtitle: "สเต็ก · ไทย-ตะวันตก · อยุธยา",
    navStory: "เรื่องราว",
    navMenu: "เมนู",
    navExperience: "บรรยากาศ",
    navVisit: "มาที่ร้าน",
    reserve: "จองโต๊ะ",
    callNow: "โทรเลย",
    lineChat: "แชทผ่าน LINE",
    heroEyebrow: "เนื้อดรายเอจ · ไทย-ตะวันตก · มื้ออร่อยของครอบครัว",
    heroTitle: "โต๊ะอุ่น ๆ กลางอยุธยา",
    heroCopy: "X BEEF คือร้านอาหารสไตล์สบาย ๆ สำหรับครอบครัว คู่รัก เพื่อนฝูง และนักเดินทาง มาอร่อยกับคอมฟอร์ตฟู้ดจานโต เนื้อดรายเอจ สเต็กจากทั่วโลก เมนูตะวันตกอย่างเบอร์เกอร์ พาสต้า ซี่โครงหมูบาร์บีคิว และแลมบ์ช็อป รสชาติไทย-ตะวันตก กาแฟ และของหวาน ในบรรยากาศที่นั่งสบายได้ทุกช่วงเวลา",
    reserveTable: "จองโต๊ะ",
    viewMenu: "ดูเมนูทั้งหมด",
    pillRating: "คะแนนรีวิว",
    pillRatingText: "4.8 บน Google",
    pillGoodFor: "เหมาะสำหรับ",
    pillGoodForText: "ครอบครัว เพื่อน คู่รัก",
    pillMood: "บรรยากาศ",
    pillMoodText: "อบอุ่น สบาย มีสไตล์",
    heroPhotoTitle: "อาหารอร่อย บริการอบอุ่น ค่ำคืนสบาย ๆ",
    googleRating: "คะแนน Google",
    ratingCopy: "ร้านอาหารบรรยากาศสบายในอยุธยา กับเนื้อดรายเอจ สเต็กนานาชาติ เบอร์เกอร์ พาสต้า ซี่โครงหมูบาร์บีคิว แลมบ์ช็อป เมนูไทย-ตะวันตก และเครื่องดื่ม เหมาะกับมื้อครอบครัวและโอกาสพิเศษแบบไม่ต้องพิธีรีตอง",
    storyPhotoOne: "ห้องสำหรับมื้อครอบครัว",
    storyPhotoOneCaption: "จานใหญ่แบ่งกันอร่อย กับโต๊ะสงบ ๆ สำหรับมื้อกลางวันหรือมื้อค่ำ",
    storyPhotoTwo: "คาเฟ่สบาย บรรยากาศดินเนอร์",
    storyPhotoTwoCaption: "กาแฟ ของหวาน เครื่องดื่ม และค่ำคืนชิล ๆ",
    storyEyebrow: "เรื่องราวของเรา",
    storyTitle: "อาหารดี บริการใส่ใจ และพื้นที่ให้ใช้เวลาช้าลง",
    storyCopy: "X BEEF คือร้านอาหารประจำย่านที่ตั้งใจทำ มีสไตล์พอสำหรับมื้อพิเศษ และสบายพอสำหรับทุกวัน คำสัญญาของเราเรียบง่าย — ต้อนรับอย่างอบอุ่น และเสิร์ฟอาหารที่ทุกคนบนโต๊ะอร่อยได้",
    signatureEyebrow: "เมนูซิกเนเจอร์",
    signatureTitle: "ดรายเอจเองในร้าน เสิร์ฟแบบเป็นกันเอง",
    signatureCopy: "สเต็กคือสิ่งที่เราใส่ใจที่สุด เราบ่มเนื้อดรายเอจในตู้บ่มของร้านเอง ย่างด้วยไฟจริง และจัดจานให้แบ่งกันอร่อยได้ทั้งโต๊ะ — เนื้อพรีเมียมโดยไม่ต้องมีพิธีรีตองแบบสเต็กเฮาส์หรู",
    dryagedNote: "การดรายเอจคือการให้เวลาทำหน้าที่ของมัน ความชื้นค่อย ๆ ระเหยออกจากเนื้อ รสชาติจึงเข้มข้นและหอมมันยิ่งขึ้น ส่วนเนื้อสัมผัสก็นุ่มลึกขึ้น ลองถามทีมงานว่าวันนี้ส่วนไหนกำลังอร่อยที่สุด",
    menuEyebrow: "เมนู",
    menuTitleMain: "เมนูคุ้นเคย ปรุงอย่างใส่ใจ",
    menuIntro: "สเต็กพรีเมียมและเนื้อดรายเอจสำหรับคนรักสเต็ก เมนูตะวันตกอย่างเบอร์เกอร์ พาสต้า ซี่โครงหมูบาร์บีคิว และแลมบ์ช็อป เมนูไทย-ตะวันตกสำหรับแบ่งกัน พร้อมกาแฟ ของหวาน และเครื่องดื่มสำหรับคนที่อยากนั่งต่ออีกนิด",
    viewFullMenu: "ดูเมนูเต็มพร้อมราคา",
    menuNoteFooter: "นี่เป็นเพียงส่วนหนึ่งของเมนู — ดูเมนูเต็มพร้อมราคาได้ในเมนูบุ๊กดิจิทัล หรือสอบถามทาง LINE @xbeefth",
    experienceEyebrow: "บรรยากาศ",
    experienceTitle: "ความสบายแบบเป็นกันเอง ในจิตวิญญาณสเต็กเฮาส์พรีเมียม",
    experienceCopy: "X BEEF ต้อนรับทุกคนเป็นอันดับแรก ร้านอาหารสำหรับครอบครัวที่บริการอบอุ่น แสงไฟนุ่มนวล มุมสวนกลางแจ้ง มุมถ่ายรูปสวย ๆ เมนูตะวันตก รสชาติไทย-ตะวันตก เนื้อดรายเอจ และสเต็กจากทั่วโลก",
    reviewCtaCopy: "ลูกค้าให้คะแนนเรา 4.8 บน Google อ่านสิ่งที่ครอบครัว เพื่อน และนักเดินทางพูดถึงค่ำคืนของพวกเขาที่ X BEEF",
    readReviews: "อ่านรีวิวบน Google",
    visitEyebrow: "มาที่ร้าน",
    visitTitle: "ความอร่อยสบาย ๆ ในอยุธยา",
    visitCopy: "เหมาะกับมื้อกลางวัน มื้อค่ำ มื้อครอบครัว เดตไนต์ งานฉลองเล็ก ๆ ถ่ายรูปในสวน และค่ำคืนดนตรีสด โทรหาเรา ทัก LINE หรือเปิดแผนที่ — หาเราเจอง่าย ๆ",
    openMap: "เปิดแผนที่",
    guestRating: "คะแนนจากลูกค้า",
    footerCopy: "© X BEEF สเต็กแอนด์คอมฟอร์ตไดนิง อยุธยา",
    footerAddress: "22/27 ไผ่ลิง อ.พระนครศรีอยุธยา จ.พระนครศรีอยุธยา 13000",
    actionCall: "โทร",
    actionLine: "LINE",
    actionMap: "แผนที่",
    actionMenu: "เมนู",
    values: [
      ["ความสบาย", "เมนูคุ้นเคยที่ปรุงอย่างประณีต: สเต็ก เบอร์เกอร์ พาสต้า ซี่โครงหมูบาร์บีคิว แลมบ์ช็อป เมนูไทย-ตะวันตก เครื่องเคียง กาแฟ และของหวาน"],
      ["ศาสตร์แห่งสเต็ก", "เนื้อดรายเอจ เนื้อนำเข้าคัดพิเศษ และส่วนตัดหลากหลาย เพิ่มความพรีเมียมให้มื้ออาหารสบาย ๆ"],
      ["การบริการ", "อบอุ่น ใส่ใจ และชัดเจน ตั้งแต่คลิกแรกจนถึงโต๊ะอาหาร"]
    ],
    signatures: [
      ["ดรายเอจ", "Dry-aged ribeye", "บ่มในร้านจนรสชาติเข้มข้น หอมมัน และนุ่มลึก — จานแรกที่อยากให้ลอง"],
      ["รสไทยแซ่บ", "เนื้อย่างจิ้มแจ่ว", "งานสเต็กเฮาส์พบรสไทย เนื้อย่างหอมควันไฟ กับน้ำจิ้มแจ่วรสจัดของเรา"],
      ["ตุ๋นนุ่ม", "BBQ pork ribs", "ซี่โครงหมูอบช้า ๆ จนนุ่ม เคลือบซอสบาร์บีคิวหวานหอมควัน เหมาะกับการแบ่งกันทั้งโต๊ะ"],
      ["จานโปรดประจำร้าน", "X BEEF burger", "เบอร์เกอร์โฮมเมดชิ้นโต จากเนื้อคุณภาพ — จานง่าย ๆ ที่ทั้งโต๊ะเห็นตรงกัน"]
    ],
    menus: [
      { id: "steak", title: "สเต็กและเนื้อดรายเอจ", note: "เนื้อดรายเอจ สเต็กพรีเมียม แลมบ์ และส่วนตัดคัดพิเศษจากไทยและทั่วโลก", items: ["Dry-aged ribeye", "สเต็กเนื้อออสเตรเลีย", "สเต็กเนื้อพริกไทยดำ", "สตริปลอยน์นำเข้า", "แลมบ์ช็อป"] },
      { id: "western", title: "เวสเทิร์นคอมฟอร์ต", note: "เมนูตะวันตกคลาสสิกสำหรับครอบครัว เพื่อน และการแบ่งกันบนโต๊ะ", items: ["X BEEF เบอร์เกอร์", "ซี่โครงหมูบาร์บีคิว", "พาสต้าอัลเฟรโดซีฟู้ด", "ทอมมาฮอว์กพอร์กช็อป", "ขนมปังกระเทียม"] },
      { id: "fusion", title: "ฟิวชันไทย-ตะวันตก", note: "จานคอมฟอร์ตที่นำสเต็กเฮาส์คลาสสิกมาพบรสชาติไทยที่คุ้นเคย", items: ["เนื้อย่างจิ้มแจ่ว", "ยำสเต็กรสแซ่บ", "สเต็กปลากะพง", "ข้าวผัดเนยกระเทียม", "พาสต้าไทย-ตะวันตกรสเผ็ด"] },
      { id: "sharing", title: "พาสต้าและเมนูแชร์", note: "จานครีมมี่ อุ่น ๆ คุ้นเคย สำหรับวางกลางโต๊ะ", items: ["สปาเกตตีอัลเฟรโดซีฟู้ด", "ซุปทรัฟเฟิล", "ผักโขมอบชีส", "สลัดมันฝรั่ง", "เครื่องเคียงสำหรับแชร์"] },
      { id: "drinks", title: "คาเฟ่และเครื่องดื่ม", note: "กาแฟ ของหวาน ไวน์ ม็อกเทล และเครื่องดื่มสบาย ๆ หลังมื้ออาหาร", items: ["กาแฟของร้าน", "ของหวานตามฤดูกาล", "ม็อกเทลซิกเนเจอร์", "ไวน์คัดสรร", "คราฟต์เบียร์และของทานเล่น"] }
    ],
    experiences: [
      ["01", "บรรยากาศครอบครัวสบาย ๆ", "ห้องอบอุ่นนั่งสบาย สำหรับมื้อครอบครัว คู่รัก นักท่องเที่ยว และเพื่อนที่อยากกินดี ๆ แบบไม่ต้องเป็นทางการ"],
      ["02", "เนื้อดรายเอจและสเต็กนานาชาติ", "เนื้อดรายเอจ เนื้อนำเข้าคัดพิเศษ และส่วนตัดหลากหลาย — คุณภาพพรีเมียมในบรรยากาศเข้าถึงง่าย"],
      ["03", "คอมฟอร์ตไทย-ตะวันตก", "เมนูสเต็กเฮาส์ รสชาติไทย เบอร์เกอร์ พาสต้า ซี่โครงหมูบาร์บีคิว แลมบ์ช็อป กาแฟ ของหวาน และเครื่องดื่ม — มีให้ทุกคนบนโต๊ะ"],
      ["04", "สวนกลางแจ้งและมุมถ่ายรูป", "บรรยากาศสวนกลางแจ้งชิล ๆ และมุมถ่ายรูปเล็ก ๆ ที่ทำให้ค่ำคืนน่าจดจำสำหรับครอบครัว คู่รัก และนักท่องเที่ยว"],
      ["05", "ค่ำคืนดนตรีสด", "เครื่องดื่มยามเย็น แสงไฟนุ่มนวล และคืนดนตรีสด ที่เปลี่ยนมื้อค่ำธรรมดาให้เป็นค่ำคืนยาว ๆ กับคนที่ชอบ"]
    ],
    visit: [
      ["ที่อยู่", "22/27 ไผ่ลิง อ.พระนครศรีอยุธยา จ.พระนครศรีอยุธยา 13000"],
      ["เวลาเปิด", "ทุกวัน 11:00–22:00 น."],
      ["จองโต๊ะ", `โทร <a href="tel:+66811541145">081 154 1145</a> หรือทัก <a href="https://line.me/R/ti/p/@xbeefth" target="_blank" rel="noreferrer">LINE @xbeefth</a>`],
      ["เมนู", `<a href="${MENU_BOOK_URL}" target="_blank" rel="noreferrer">ดูเมนูเต็มพร้อมราคา</a>`],
      ["เหมาะสำหรับ", "มื้อครอบครัว เดตไนต์ เพื่อนฝูง นักท่องเที่ยว ที่นั่งในสวน มุมถ่ายรูป และค่ำคืนดนตรีสด"]
    ]
  }
};

let currentTheme = document.documentElement.getAttribute("data-theme") || "light";
let currentLang = localStorage.getItem("xbeef-lang") || ((navigator.language || "").toLowerCase().startsWith("th") ? "th" : "en");
let activeMenuId = "steak";

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("xbeef-theme", theme); } catch (e) {}
  document.querySelectorAll("[data-theme-toggle]").forEach(button => {
    const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  });
}

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem("xbeef-lang", lang); } catch (e) {}
  document.querySelectorAll("[data-lang-toggle]").forEach(button => {
    button.textContent = lang === "th" ? "EN" : "ไทย";
    button.setAttribute("aria-label", lang === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย");
  });
  renderPage();
}

function renderPage() {
  const data = content[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    if (data[key]) node.textContent = data[key];
  });
  renderValues(data);
  renderSignatures(data);
  renderMenuTabs(data);
  renderMenu(activeMenuId);
  renderExperience(data);
  renderVisit(data);
}

function renderValues(data) {
  document.getElementById("valueGrid").innerHTML = data.values.map(([title, text]) => `
    <article class="value-card">
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

function renderSignatures(data) {
  document.getElementById("signatureGrid").innerHTML = data.signatures.map(([tag, title, text]) => `
    <article class="signature-card">
      <small>${tag}</small>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

const tabArrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

function renderMenuTabs(data) {
  const tabs = document.getElementById("menuTabs");
  tabs.innerHTML = data.menus.map(menu => `
    <button class="menu-tab ${menu.id === activeMenuId ? "is-active" : ""}" type="button" data-menu="${menu.id}" aria-pressed="${menu.id === activeMenuId}">
      <span>${menu.title}</span> ${tabArrow}
    </button>
  `).join("");
  tabs.querySelectorAll(".menu-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      activeMenuId = tab.dataset.menu;
      renderMenuTabs(content[currentLang]);
      renderMenu(activeMenuId);
    });
  });
}

function renderMenu(key) {
  const menus = content[currentLang].menus;
  const menu = menus.find(item => item.id === key) || menus[0];
  document.getElementById("menuTitle").textContent = menu.title;
  document.getElementById("menuNote").textContent = menu.note;
  document.getElementById("menuList").innerHTML = menu.items.map(item => `<div class="menu-item"><span>${item}</span></div>`).join("");
}

function renderExperience(data) {
  document.getElementById("experienceList").innerHTML = data.experiences.map(([number, title, text]) => `
    <article class="experience-item">
      <div class="experience-number">${number}</div>
      <div>
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
    </article>
  `).join("");
}

function renderVisit(data) {
  document.getElementById("visitList").innerHTML = data.visit.map(([label, value]) => `
    <li><strong>${label}</strong><span>${value}</span></li>
  `).join("");
}

const mobilePanel = document.getElementById("mobilePanel");
const menuToggle = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".close-btn");

function openMenu() {
  mobilePanel.classList.add("is-open");
  mobilePanel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeBtn.focus();
}

function closeMenu() {
  if (!mobilePanel.classList.contains("is-open")) return;
  mobilePanel.classList.remove("is-open");
  mobilePanel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  menuToggle.focus();
}

menuToggle.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
mobilePanel.addEventListener("click", event => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
  if (event.key === "Tab" && mobilePanel.classList.contains("is-open")) {
    const focusable = mobilePanel.querySelectorAll("a, button");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
document.querySelectorAll("[data-theme-toggle]").forEach(button => {
  button.addEventListener("click", () => applyTheme(currentTheme === "dark" ? "light" : "dark"));
});
document.querySelectorAll("[data-lang-toggle]").forEach(button => {
  button.addEventListener("click", () => applyLang(currentLang === "th" ? "en" : "th"));
});

applyTheme(currentTheme);
applyLang(currentLang);
