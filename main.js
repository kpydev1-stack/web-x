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
      ["Dry-aged", "Dry-aged ribeye", "Aged in-house for deeper, nuttier flavour and a tender bite — the dish to order first.", "images/wagyu.webp"],
      ["Thai fire", "Grilled beef with jaew", "Steakhouse craft meets Thai flavour: smoky grilled beef with our punchy jaew dipping sauce.", "images/grill.webp"],
      ["Slow-cooked", "BBQ pork ribs", "Cooked low and slow until tender, glazed in smoky-sweet barbecue sauce. Made for sharing.", "images/duck.webp"],
      ["House favourite", "X BEEF burger", "A generous house burger built on quality beef — the easy choice the whole table agrees on.", "images/burger.webp"]
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
    brandSubtitle: "สเต็กเฮาส์ · คอมฟอร์ตไดนิง · อยุธยา",
    navStory: "เรื่องของเรา",
    navMenu: "สำรวจเมนู",
    navExperience: "บรรยากาศร้าน",
    navVisit: "แวะมาหาเรา",
    reserve: "สำรองโต๊ะ",
    callNow: "โทรหาร้าน",
    lineChat: "คุยกับเราทาง LINE",
    heroEyebrow: "สเต็กเฮาส์ในอยุธยา · เนื้อบ่มดรายเอจ · มื้ออบอุ่นสำหรับทุกคน",
    heroTitle: "มื้อพิเศษใจกลางอยุธยา",
    heroCopy: "X BEEF คือสเต็กเฮาส์บรรยากาศอบอุ่นในอยุธยา ที่ทำให้มื้อธรรมดารู้สึกพิเศษได้ง่าย ๆ พบเมนูเนื้อบ่มดรายเอจ สเต็กนำเข้า เบอร์เกอร์ พาสต้า ซี่โครงหมูบาร์บีคิว แลมบ์ช็อป จานไทยร่วมสมัย กาแฟ และของหวาน เหมาะทั้งครอบครัว คู่รัก กลุ่มเพื่อน และนักเดินทางที่อยากนั่งกินดี ๆ แบบไม่ต้องเกร็ง",
    reserveTable: "สำรองโต๊ะ",
    viewMenu: "เปิดดูเมนู",
    pillRating: "รีวิวจากลูกค้า",
    pillRatingText: "4.8 บน Google",
    pillGoodFor: "มากับใครก็ลงตัว",
    pillGoodForText: "ครอบครัว เพื่อน คู่รัก",
    pillMood: "โทนร้าน",
    pillMoodText: "อบอุ่น สบาย มีสไตล์",
    heroPhotoTitle: "จานโปรด บริการจริงใจ และค่ำคืนที่นั่งได้นานขึ้น",
    googleRating: "คะแนนบน Google",
    ratingCopy: "ร้านสเต็กบรรยากาศอบอุ่นในอยุธยา เสิร์ฟเนื้อบ่มดรายเอจ สเต็กคัดพิเศษ เบอร์เกอร์ พาสต้า ซี่โครงหมูบาร์บีคิว แลมบ์ช็อป เมนูไทยร่วมสมัย และเครื่องดื่มครบ เหมาะกับมื้อครอบครัว เดตไนต์ หรือวันฉลองเล็ก ๆ ที่ไม่ต้องเป็นทางการ",
    storyPhotoOne: "อาหารมื้อพิเศษสำหรับครอบครัว",
    storyPhotoOneCaption: "จานใหญ่ แชร์ง่าย นั่งคุยได้ยาวทั้งมื้อกลางวันและมื้อค่ำ",
    storyPhotoTwo: "มุมคาเฟ่ที่ต่อยอดถึงดินเนอร์",
    storyPhotoTwoCaption: "กาแฟ เครื่องดื่ม ของหวาน สำหรับวันชิล",
    storyEyebrow: "เรื่องราวของ X BEEF",
    storyTitle: "พื้นที่ของอาหารอร่อย และช่วงเวลาดี ๆ",
    storyCopy: "เราอยากให้ X BEEF เป็นร้านประจำที่กลับมาได้เรื่อย ๆ วันสบายก็แวะได้ วันพิเศษก็ไว้ใจได้ ทุกจานตั้งใจทำอย่างประณีต พร้อมการต้อนรับเป็นกันเอง เพื่อให้ทุกคนบนโต๊ะมีเมนูที่ชอบและโมเมนต์ที่อยากจดจำ",
    signatureEyebrow: "ซิกเนเจอร์ของร้าน",
    signatureTitle: "เนื้อบ่มในร้าน ย่างจริง เสิร์ฟให้แชร์ได้",
    signatureCopy: "หัวใจของเราคือสเต็กที่ทำอย่างตั้งใจ เนื้อดรายเอจบ่มในตู้ของ X BEEF ย่างด้วยไฟจริง แล้วจัดเสิร์ฟในแบบที่เข้าถึงง่าย อร่อยได้ทั้งโต๊ะ ไม่ต้องรอวาระใหญ่ก็สัมผัสคุณภาพดี ๆ ได้",
    dryagedNote: "การดรายเอจคือการปล่อยให้เวลาเปลี่ยนเนื้อให้มีมิติขึ้น ความชื้นลดลง กลิ่นและรสชัดเจนขึ้น พร้อมเนื้อสัมผัสที่นุ่มลึกกว่าเดิม วันนี้อยากลองส่วนไหน ถามทีมงานได้เลย",
    menuEyebrow: "สำรวจเมนู",
    menuTitleMain: "จานโปรดหลากสไตล์ ทำด้วยรายละเอียด",
    menuIntro: "เลือกได้ตั้งแต่สเต็กคัดพิเศษและเนื้อบ่มดรายเอจ ไปจนถึงเบอร์เกอร์ พาสต้า ซี่โครงหมูบาร์บีคิว แลมบ์ช็อป จานไทยร่วมสมัย กาแฟ ของหวาน และเครื่องดื่มสำหรับคนที่อยากนั่งต่อแบบไม่รีบ",
    viewFullMenu: "ดูเมนูเต็มและราคา",
    menuNoteFooter: "รายการนี้เป็นตัวอย่างบางส่วน สามารถเปิดเมนูบุ๊กดิจิทัลเพื่อดูราคาเต็ม หรือทัก LINE @xbeefth ให้ทีมงานช่วยแนะนำได้",
    experienceEyebrow: "ประสบการณ์ในร้าน",
    experienceTitle: "สบายแบบเข้าถึงง่าย พร้อมกลิ่นอายสเต็กเฮาส์",
    experienceCopy: "X BEEF ออกแบบให้เป็นพื้นที่ที่ทุกคนรู้สึกต้อนรับ ตั้งแต่โต๊ะด้านใน แสงไฟนุ่ม มุมสวน ไปจนถึงจุดถ่ายรูปเล็ก ๆ พร้อมเมนูตะวันตก เนื้อบ่ม สเต็กคัดพิเศษ จานไทยร่วมสมัย และเครื่องดื่มครบสำหรับทั้งวันธรรมดาและโอกาสพิเศษ",
    reviewCtaCopy: "ลูกค้าให้คะแนน X BEEF 4.8 บน Google ลองอ่านเสียงจริงจากคนที่มาทานกับครอบครัว เพื่อน และคนพิเศษ",
    readReviews: "อ่านรีวิว Google",
    visitEyebrow: "แวะมาหาเรา",
    visitTitle: "มื้อดี ๆ รออยู่ที่อยุธยา",
    visitCopy: "แวะมาได้ทั้งมื้อกลางวัน มื้อค่ำ เดตไนต์ วันรวมเพื่อน งานฉลองเล็ก ๆ หรือวันที่อยากถ่ายรูปในสวน โทรจอง ทัก LINE หรือเปิดแผนที่ แล้วมาพบกันที่ X BEEF",
    openMap: "นำทางไป X BEEF",
    guestRating: "รีวิวจากลูกค้า",
    footerCopy: "© X BEEF Steak & Comfort Dining, Ayutthaya",
    footerAddress: "22/27 ต.ไผ่ลิง อ.พระนครศรีอยุธยา จ.พระนครศรีอยุธยา 13000",
    actionCall: "โทรหาร้าน",
    actionLine: "ทัก LINE",
    actionMap: "เปิดแผนที่",
    actionMenu: "ดูเมนู",
    values: [
      ["ความสบาย", "สเต็ก เบอร์เกอร์ พาสต้า ริบส์ แลมบ์ช็อป จานไทยร่วมสมัย เครื่องเคียง กาแฟ และของหวาน จัดมาให้เลือกครบในมื้อเดียว"],
      ["ศาสตร์แห่งสเต็ก", "คัดเนื้อคุณภาพ บ่มอย่างใจเย็น และย่างให้ได้รสสัมผัสที่เหมาะกับแต่ละส่วน"],
      ["การบริการ", "ดูแลอย่างจริงใจ ตั้งแต่เริ่มทัก จองโต๊ะ เลือกเมนู จนถึงจานสุดท้าย"]
    ],
    signatures: [
      ["ดรายเอจ", "Dry-aged ribeye", "ริบอายบ่มจนกลิ่นหอมชัด รสนุ่มลึก ไขมันละมุน เป็นจานเปิดประสบการณ์ที่แนะนำให้ลอง", "images/wagyu.webp"],
      ["รสไทยแซ่บ", "เนื้อย่างจิ้มแจ่ว", "กลิ่นย่างหอม ๆ ของเนื้อคุณภาพ จับคู่น้ำจิ้มแจ่วรสจัดแบบไทย กินง่ายแต่มีคาแรกเตอร์", "images/grill.webp"],
      ["ตุ๋นนุ่ม", "BBQ pork ribs", "ซี่โครงหมูอบช้าให้หลุดกระดูก เคลือบซอสบาร์บีคิวหอมหวาน เหมาะวางกลางโต๊ะ", "images/duck.webp"],
      ["จานโปรดประจำร้าน", "X BEEF burger", "เบอร์เกอร์ชิ้นใหญ่จากวัตถุดิบคัดดี กัดเต็มคำ เป็นเมนูที่ทั้งโต๊ะตกลงกันได้ไม่ยาก", "images/burger.webp"]
    ],
    menus: [
      { id: "steak", title: "สเต็กและเนื้อบ่ม", note: "เนื้อคุณภาพ สเต็กพรีเมียม แลมบ์ และส่วนตัดพิเศษจากไทยและต่างประเทศ", items: ["Dry-aged ribeye", "สเต็กเนื้อออสเตรเลีย", "สเต็กพริกไทยดำ", "สตริปลอยน์นำเข้า", "แลมบ์ช็อป"] },
      { id: "western", title: "จานตะวันตกแสนคุ้นเคย", note: "เมนูคลาสสิกที่เหมาะกับการสั่งหลายจาน แบ่งกันกิน และคุยกันยาว ๆ", items: ["X BEEF เบอร์เกอร์", "ซี่โครงหมูบาร์บีคิว", "พาสต้าอัลเฟรโดซีฟู้ด", "ทอมมาฮอว์กพอร์กช็อป", "ขนมปังกระเทียม"] },
      { id: "fusion", title: "ไทยร่วมสมัยสไตล์สเต็กเฮาส์", note: "รสจัดจ้านแบบไทย จับคู่เทคนิคและวัตถุดิบในแบบตะวันตก", items: ["เนื้อย่างจิ้มแจ่ว", "ยำสเต็กรสแซ่บ", "สเต็กปลากะพง", "ข้าวผัดเนยกระเทียม", "พาสต้าไทยรสเผ็ด"] },
      { id: "sharing", title: "พาสต้า ซุป และจานกลาง", note: "จานนุ่ม ครีมมี่ และเครื่องเคียงที่ช่วยให้มื้อบนโต๊ะสมบูรณ์ขึ้น", items: ["สปาเกตตีอัลเฟรโดซีฟู้ด", "ซุปทรัฟเฟิล", "ผักโขมอบชีส", "สลัดมันฝรั่ง", "เครื่องเคียงสำหรับแบ่ง"] },
      { id: "drinks", title: "กาแฟ ของหวาน และเครื่องดื่ม", note: "ปิดมื้อด้วยกาแฟ ขนมหวาน ม็อกเทล ไวน์ หรือเครื่องดื่มเย็น ๆ ในบรรยากาศผ่อนคลาย", items: ["กาแฟซิกเนเจอร์", "ของหวานตามฤดูกาล", "ม็อกเทลของร้าน", "ไวน์คัดสรร", "คราฟต์เบียร์และของทานเล่น"] }
    ],
    experiences: [
      ["01", "บรรยากาศครอบครัวสบาย ๆ", "โต๊ะนั่งสบาย เหมาะกับครอบครัว คู่รัก เพื่อน นักท่องเที่ยว หรือใครที่อยากกินดีโดยไม่ต้องแต่งตัวเป็นทางการ"],
      ["02", "เนื้อดรายเอจและสเต็กนานาชาติ", "คัดส่วนตัดหลายสไตล์ ทั้งเนื้อบ่มและเนื้อนำเข้า ให้คุณภาพแบบพรีเมียมในบรรยากาศที่ไม่เกร็ง"],
      ["03", "คอมฟอร์ตไทย-ตะวันตก", "จากสเต็ก เบอร์เกอร์ พาสต้า ริบส์ แลมบ์ช็อป ไปจนถึงรสไทยจัดจ้าน กาแฟ ของหวาน และเครื่องดื่ม ทุกคนบนโต๊ะมีตัวเลือกของตัวเอง"],
      ["04", "สวนกลางแจ้งและมุมถ่ายรูป", "สวนเล็ก ๆ และมุมถ่ายภาพช่วยให้มื้อเย็นมีเสน่ห์ขึ้น เหมาะกับครอบครัว คู่รัก และนักเดินทางที่อยากเก็บภาพสวย ๆ"],
      ["05", "ค่ำคืนดนตรีสด", "แสงไฟยามค่ำ เครื่องดื่มดี ๆ และดนตรีสดบางคืน ทำให้มื้อเย็นกลายเป็นช่วงเวลาที่อยากนั่งต่อ"]
    ],
    visit: [
      ["ที่อยู่", "22/27 ต.ไผ่ลิง อ.พระนครศรีอยุธยา จ.พระนครศรีอยุธยา 13000"],
      ["เวลาเปิด", "เปิดทุกวัน 11:00–22:00 น."],
      ["จองโต๊ะ", `โทร <a href="tel:+66811541145">081 154 1145</a> หรือทัก <a href="https://line.me/R/ti/p/@xbeefth" target="_blank" rel="noreferrer">LINE @xbeefth</a> เพื่อสำรองโต๊ะ`],
      ["เมนู", `<a href="${MENU_BOOK_URL}" target="_blank" rel="noreferrer">เปิดเมนูเต็มพร้อมราคา</a>`],
      ["เหมาะสำหรับ", "ครอบครัว คู่รัก กลุ่มเพื่อน นักท่องเที่ยว มุมสวน มุมถ่ายรูป และคืนดนตรีสด"]
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
  document.getElementById("signatureGrid").innerHTML = data.signatures.map(([tag, title, text, img]) => `
    <article class="signature-card">
      ${img ? `<div class="signature-img"><img src="${img}" alt="${title}" loading="lazy" decoding="async" onerror="this.parentElement.style.display='none'"></div>` : ""}
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
