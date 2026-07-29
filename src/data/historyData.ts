import { HistoryItem } from '../types';

export const HISTORY_ITEMS: HistoryItem[] = [
  // --- TANZANIA ---
  {
    id: 'tz_1',
    title: 'Mwalimu Julius Kambarage Nyerere',
    country: 'Tanzania',
    countryFlag: '🇹🇿',
    category: 'person',
    periodOrEra: '1922 – 1999 (Founding Father)',
    location: 'Butiama & Dar es Salaam, Tanzania',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
    summary: 'Affectionately known as "Baba wa Taifa" (Father of the Nation), Mwalimu Nyerere was a visionary Pan-Africanist, philosopher, and the first President of Tanzania.',
    description: [
      'Julius Nyerere led Tanganyika to independence from British rule in 1961 and spearheaded the historic 1964 union with Zanzibar to form the United Republic of Tanzania.',
      'He championed "Ujamaa" (African Socialism), promoted Swahili as the national unifying language across 120+ ethnic groups, and turned Tanzania into a haven for liberation movements across Southern Africa.',
      'His modesty, intellectual legacy, and translation of Shakespeare into Swahili remain legendary across the African continent.'
    ],
    keyHighlights: [
      'Architect of the Tanganyika & Zanzibar Union (1964)',
      'Established Kiswahili as national language',
      'Key leader of the Frontline States for African liberation',
      'Chaired the South Commission after presidency'
    ],
    famousFor: 'Unifying over 120 ethnic groups under Kiswahili without civil conflict.',
    historicalSignificance: 'One of Africa\'s most respected 20th-century statesmen and anti-colonial philosophers.'
  },
  {
    id: 'tz_2',
    title: 'Stone Town & House of Wonders (Zanzibar)',
    country: 'Tanzania',
    countryFlag: '🇹🇿',
    category: 'place',
    periodOrEra: '19th Century Sultanate Era',
    location: 'Stone Town, Zanzibar',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    summary: 'A UNESCO World Heritage site showcasing centuries of Arab, Persian, Indian, and European Swahili spice trade architecture.',
    description: [
      'Stone Town is an ancient Swahili coastal trading hub characterized by narrow winding alleys, carved wooden doors, coral rag buildings, and spice markets.',
      'The House of Wonders (Beit-al-Ajaib), built in 1883 by Sultan Barghash, was the first building in East Africa to have electricity and an electric elevator.',
      'It housed the Sultanate court and stands near the Old Fort (Ngome Kongwe) and the Anglican Cathedral built over the former East African Slave Market.'
    ],
    keyHighlights: [
      'UNESCO World Heritage Site since 2000',
      'Intricately carved Zanzibari brass-studded doors',
      'Birthplace of Taarab music and Swahili coastal cuisine',
      'Historic Old Slave Market memorial and church'
    ],
    famousFor: 'Ancient coral stone architecture, spice trade crossroads, and Zanzibari doors.',
    historicalSignificance: 'The premier symbol of Swahili maritime civilization along the Indian Ocean.'
  },
  {
    id: 'tz_3',
    title: 'Olduvai Gorge – Cradle of Humankind',
    country: 'Tanzania',
    countryFlag: '🇹🇿',
    category: 'heritage',
    periodOrEra: '2 Million Years Ago to Present',
    location: 'Ngorongoro Conservation Area, Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    summary: 'One of the world\'s most vital paleoanthropological sites, where early human fossils and stone tools unlocked the origins of mankind.',
    description: [
      'Located in the Great Rift Valley, Olduvai Gorge is a steep-sided ravine where paleoanthropologists Louis and Mary Leakey discovered crucial hominid fossils.',
      'In 1959, Mary Leakey unearthed the fossil skull of "Zinj" (Paranthropus boisei) dating back 1.8 million years, followed by Homo habilis ("Handy Man").',
      'The site includes an onsite museum overlooking the gorge where visitors can view ancient stone tools and fossil casts.'
    ],
    keyHighlights: [
      'Discovery site of Paranthropus boisei and Homo habilis',
      'Fossil footprints of Laetoli nearby (3.6 million years old)',
      'World-famous Olduvai Gorge Museum and research center'
    ],
    famousFor: 'Proving that human evolution originated on the African continent.',
    historicalSignificance: 'Global benchmark for prehistoric archaeology and human evolutionary studies.'
  },
  {
    id: 'tz_4',
    title: 'Kilwa Kisiwani Sultanate Ruins',
    country: 'Tanzania',
    countryFlag: '🇹🇿',
    category: 'place',
    periodOrEra: '11th – 15th Century Gold Empire',
    location: 'Kilwa District, Lindi Region, Tanzania',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    summary: 'The historic capital of the medieval Swahili Gold Empire described by Ibn Battuta as "one of the finest towns in the world".',
    description: [
      'Kilwa Kisiwani was an island empire controlling the Indian Ocean gold and ivory trade routes between Sofala (Mozambique) and Arabia, Persia, and China.',
      'The Great Mosque of Kilwa, built in the 11th century, was once the largest mosque in Sub-Saharan Africa, constructed from coral blocks without mortar.',
      'The Palace of Husuni Kubwa features octagonal swimming pools, vaulted reception halls, and grand terraces overlooking the ocean.'
    ],
    keyHighlights: [
      'Great Mosque of Kilwa (11th century coral mosque)',
      'Husuni Kubwa Cliffside Sultanate Palace',
      'Minted its own gold and copper coins in the 13th century',
      'UNESCO World Heritage Site'
    ],
    famousFor: 'Control of the East African gold trade and medieval Islamic architecture.',
    historicalSignificance: 'Proves the immense wealth and global trade connections of medieval East Africa.'
  },
  {
    id: 'tz_5',
    title: 'Freddie Mercury (Farrokh Bulsara)',
    country: 'Tanzania',
    countryFlag: '🇹🇿',
    category: 'person',
    periodOrEra: '1946 – 1991 (Global Rock Icon)',
    location: 'Stone Town, Zanzibar',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    summary: 'The legendary lead vocalist of Queen was born Farrokh Bulsara in Stone Town, Zanzibar, where his childhood home is now a celebrated landmark.',
    description: [
      'Born in Zanzibar to Parsi parents working for the British Colonial Service, Farrokh spent his early years attending school on the island before moving to India and England.',
      'He went on to compose world anthems like "Bohemian Rhapsody", "We Are the Champions", and "Don\'t Stop Me Now".',
      'Today, Mercury House on Shangani Street in Stone Town attracts music fans from around the globe celebrating his Zanzibari heritage.'
    ],
    keyHighlights: [
      'Born on September 5, 1946 in Stone Town, Zanzibar',
      'Lead singer and songwriter of Queen',
      'Mercury House Museum on Shangani Street, Zanzibar'
    ],
    famousFor: 'Operatic 4-octave vocal range and iconic stage presence.',
    historicalSignificance: 'Global cultural icon bridging East African roots to rock and roll royalty.'
  },

  // --- KENYA ---
  {
    id: 'ke_1',
    title: 'Mzee Jomo Kenyatta',
    country: 'Kenya',
    countryFlag: '🇰🇪',
    category: 'person',
    periodOrEra: '1897 – 1978 (Founding Father)',
    location: 'Nairobi & Gatundu, Kenya',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
    summary: 'The charismatic founding father and first President of Kenya who led the nation to independence under the national slogan "Harambee" (Let us pull together).',
    description: [
      'Kenyatta was a prominent anti-colonial activist, scholar, and author of "Facing Mount Kenya" (1938), a seminal anthropological study of the Kikuyu people.',
      'He was imprisoned by British authorities as part of the "Kapenguria Six" during the 1950s Mau Mau uprising against colonial land displacement.',
      'Upon release, he rallied Kenya to independence on December 12, 1963, establishing Nairobi as a premier diplomatic and financial capital of East Africa.'
    ],
    keyHighlights: [
      'First Prime Minister (1963) and President of Kenya (1964-1978)',
      'Coined the national motto "Harambee"',
      'Author of "Facing Mount Kenya"',
      'Leader of the Kapenguria Six anti-colonial patriots'
    ],
    famousFor: 'Leading Kenya from colonial rule to independence and establishing the Harambee spirit.',
    historicalSignificance: 'Pivotal figure in 20th-century African statecraft and anti-colonial resistance.'
  },
  {
    id: 'ke_2',
    title: 'Fort Jesus (Mombasa)',
    country: 'Kenya',
    countryFlag: '🇰🇪',
    category: 'place',
    periodOrEra: '1593 – Portuguese Renaissance Fort',
    location: 'Mombasa Island, Kenya',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    summary: 'A massive 16th-century coastal fortress built by the Portuguese overlooking the entrance to Mombasa Old Port.',
    description: [
      'Designed by Italian architect Giovanni Battista Cairati, Fort Jesus was built between 1593 and 1596 on orders of King Philip II of Spain and Portugal.',
      'The fort endured 9 major sieges as control shifted repeatedly between Portuguese garrisons, Omani Sultans, and British colonial administrators.',
      'Its architectural layout reflects Renaissance humanism with military bastions, ancient cannons, underground torture chambers, and Swahili wall frescoes.'
    ],
    keyHighlights: [
      'UNESCO World Heritage Site since 2011',
      'Historic 1696 Great Siege of Fort Jesus by Omani forces',
      'Fort Jesus Museum housing Ming porcelain and shipwreck artifacts'
    ],
    famousFor: 'Centuries of military battles for supremacy over the Indian Ocean trade routes.',
    historicalSignificance: 'Outstanding surviving example of 16th-century Portuguese military fortification in East Africa.'
  },
  {
    id: 'ke_3',
    title: 'Prof. Wangari Muta Maathai',
    country: 'Kenya',
    countryFlag: '🇰🇪',
    category: 'person',
    periodOrEra: '1940 – 2011 (Nobel Peace Laureate)',
    location: 'Nyeri & Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    summary: 'Environmentalist, political activist, and the first African woman to be awarded the Nobel Peace Prize (2004).',
    description: [
      'Wangari Maathai founded the Green Belt Movement in 1977, mobilizing rural Kenyan women to plant over 50 million trees to combat deforestation and soil erosion.',
      'She courageously stood up against state corruption, successfully protecting Nairobi\'s Uhuru Park and Karura Forest from commercial development.',
      'Her holistic vision connected environmental conservation, women\'s rights, democracy, and peacebuilding.'
    ],
    keyHighlights: [
      'First African Woman Nobel Peace Prize Winner (2004)',
      'Founder of the Green Belt Movement (50M+ trees planted)',
      'Saved Uhuru Park and Karura Forest in Nairobi',
      'First woman in East & Central Africa to earn a Ph.D.'
    ],
    famousFor: 'Tree-planting movement for democracy, environmental conservation, and women\'s empowerment.',
    historicalSignificance: 'Global icon for eco-feminism and human rights leadership.'
  },
  {
    id: 'ke_4',
    title: 'Ruins of Gedi (Malindi)',
    country: 'Kenya',
    countryFlag: '🇰🇪',
    category: 'place',
    periodOrEra: '12th – 17th Century Swahili City',
    location: 'Watamu / Malindi, Kilifi County, Kenya',
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80',
    summary: 'An ancient, mysterious stone city hidden deep inside a lush coastal jungle, abandoned without a single written record.',
    description: [
      'Gedi was a thriving Swahili coral-brick city featuring stone houses, a Sultan\'s palace, advanced flush toilets, pillar tombs, and a Great Mosque.',
      'Archaeologists excavated Venetian glass, Ming Dynasty Chinese porcelain, Indian steel scissors, and Spanish coins, proving its vast global commerce.',
      'The city was mysteriously deserted in the 17th century, leaving behind silent moss-covered stone walls surrounded by giant Baobab trees.'
    ],
    keyHighlights: [
      'UNESCO World Heritage Site designated in 2024',
      'Advanced 14th-century coral stone plumbing and sanitation system',
      'Artifacts from Ming Dynasty China and Venice',
      'Enclosed within double protective city walls'
    ],
    famousFor: 'Mysterious abandonment and sophisticated 14th-century Swahili town planning.',
    historicalSignificance: 'Crucial testament to indigenous Swahili urbanism and global maritime trade.'
  },
  {
    id: 'ke_5',
    title: 'Eliud Kipchoge OGH – Marathon Legend',
    country: 'Kenya',
    countryFlag: '🇰🇪',
    category: 'person',
    periodOrEra: 'Modern Era (Athletic GOAT)',
    location: 'Kaptagat & Eldoret, Rift Valley, Kenya',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    summary: 'Widely regarded as the greatest marathon runner in human history, famous for his belief "No Human Is Limited".',
    description: [
      'Eliud Kipchoge made history on October 12, 2019 in Vienna during the INEOS 1:59 Challenge, running 42.195 km in 1 hour, 59 minutes, and 40 seconds.',
      'He is a back-to-back Olympic Gold Medalist (Rio 2016, Tokyo 2020) and a multi-time winner of the Berlin, London, Chicago, and Tokyo marathons.',
      'His disciplined life at the Kaptagat High-Altitude Training Camp in the Great Rift Valley inspires millions worldwide.'
    ],
    keyHighlights: [
      'Sub-2-Hour Marathon Pioneer (1:59:40 in Vienna)',
      'Double Olympic Gold Medalist in Marathon (2016, 2020)',
      'Former World Record Holder (2:01:09 in Berlin)',
      'Ambassador for Rift Valley athletic heritage'
    ],
    famousFor: 'Breaking the 2-hour marathon barrier and philosophical humility.',
    historicalSignificance: 'Redefined human endurance boundaries in global sports history.'
  },

  // --- UGANDA ---
  {
    id: 'ug_1',
    title: 'Kabaka Mutesa I & Buganda Kingdom',
    country: 'Uganda',
    countryFlag: '🇺🇬',
    category: 'heritage',
    periodOrEra: '1837 – 1884 (Royal Dynasty)',
    location: 'Mengoberg & Kampala, Uganda',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
    summary: 'The 30th Kabaka (King) of Buganda who transformed the kingdom into the dominant military and commercial power of the Great Lakes region.',
    description: [
      'Kabaka Mutesa I hosted early European explorers including John Hanning Speke and Henry Morton Stanley at his royal court in Mengo.',
      'Recognizing the power of literacy and diplomacy, he invited Christian missionaries and Muslim scholars to teach his court, fostering a cosmopolitan intellectual renaissance.',
      'The Buganda Kingdom boasts over 700 years of unbroken monarchical lineage with traditional court drums, barkcloth weaving, and parliamentary assemblies (Lukiiko).'
    ],
    keyHighlights: [
      'Expanded Buganda Kingdom naval fleet on Lake Victoria',
      'Invited early European and Arab trade missions',
      'Preserved ancestral royal regalia and barkcloth traditions',
      'Royal palace at Lubiri, Mengo'
    ],
    famousFor: 'Diplomatic statecraft during 19th-century East African encounters.',
    historicalSignificance: 'Foundation of modern Uganda\'s cultural statehood and royal governance.'
  },
  {
    id: 'ug_2',
    title: 'Kasubi Tombs (Muzibu Azaala Mpanga)',
    country: 'Uganda',
    countryFlag: '🇺🇬',
    category: 'place',
    periodOrEra: 'Built 1882 (Royal Burial Grounds)',
    location: 'Kasubi Hill, Kampala, Uganda',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    summary: 'An extraordinary UNESCO World Heritage site featuring the grand thatched dome palace where four historic Kings of Buganda are laid to rest.',
    description: [
      'Built in 1882 as a royal palace for Kabaka Mutesa I, Kasubi Tombs is a masterpiece of organic African architecture using wooden poles, reed walls, and thick thatch.',
      'It serves as a sacred spiritual shrine for the Baganda people, housing ancestral artifacts, royal spears, shields, and sacred drums.',
      'The central building, Muzibu Azaala Mpanga, measures 31 meters in diameter and stands as a symbol of Buganda heritage.'
    ],
    keyHighlights: [
      'UNESCO World Heritage Site since 2001',
      'Burial site of Kabaka Mutesa I, Manga II, Chwa II, and Mutesa II',
      'Masterpiece of traditional thatch and reed craftsmanship'
    ],
    famousFor: 'Largest organic thatched structure in Sub-Saharan Africa.',
    historicalSignificance: 'Sacred spiritual and cultural sanctuary for the Buganda Kingdom.'
  },
  {
    id: 'ug_3',
    title: 'Source of the River Nile (Jinja)',
    country: 'Uganda',
    countryFlag: '🇺🇬',
    category: 'heritage',
    periodOrEra: '1858 Discovery / Prehistoric Geography',
    location: 'Jinja, Lake Victoria, Uganda',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    summary: 'The historic point where Lake Victoria pours northward to form the White Nile, initiating a 6,650 km journey to the Mediterranean Sea.',
    description: [
      'In 1858, British explorer John Hanning Speke reached this point in Jinja and declared it the long-sought source of the Nile River.',
      'The spot features a monument to Speke and Mahatma Gandhi, whose ashes were partially immersed in the Nile waters in 1898 per his wish.',
      'Jinja is celebrated as the "Adventure Capital of East Africa", offering whitewater rafting through historic river rapids.'
    ],
    keyHighlights: [
      'Start of the longest river in the world (6,650 km)',
      'Mahatma Gandhi Memorial and Speke Monument',
      'Ripon Falls site and Lake Victoria outflow'
    ],
    famousFor: 'Origin point of the Nile River that nourished ancient Egyptian civilization.',
    historicalSignificance: 'Geographical landmark of world exploration history.'
  },
  {
    id: 'ug_4',
    title: 'Uganda Martyrs Shrine (Namugongo)',
    country: 'Uganda',
    countryFlag: '🇺🇬',
    category: 'place',
    periodOrEra: '1885 – 1887 Religious History',
    location: 'Namugongo, Wakiso District / Kampala, Uganda',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
    summary: 'A world-famous pilgrimage site commemorating 22 Catholic and 23 Anglican young royal pages executed for their faith.',
    description: [
      'Between 1885 and 1887, Kabaka Mwanga II ordered the execution of royal court converts including Saint Charles Lwanga and Matthias Mulumba.',
      'The iconic African architectural shrine is built in the shape of a traditional Baganda hut supported by 22 exterior steel pillars.',
      'Every year on June 3rd (Uganda Martyrs Day), over 3 million pilgrims walk hundreds of kilometers from across East and Central Africa to worship here.'
    ],
    keyHighlights: [
      'Architectural basilica built over the execution pyre site',
      'Visited by Pope Paul VI (1969), Pope John Paul II (1993), and Pope Francis (2015)',
      'Martyrs Day Pilgrimage drawing 3M+ visitors annually'
    ],
    famousFor: 'Faith, courage, and one of Africa\'s largest annual religious gatherings.',
    historicalSignificance: 'Pivotal moment in the religious transformation of modern East Africa.'
  },
  {
    id: 'ug_5',
    title: 'Dr. Apollo Milton Obote & Sir Edward Mutesa II',
    country: 'Uganda',
    countryFlag: '🇺🇬',
    category: 'person',
    periodOrEra: '1962 Independence Era',
    location: 'Kampala & Entebbe, Uganda',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    summary: 'The co-architects of Uganda\'s independence from British colonial rule on October 9, 1962.',
    description: [
      'Sir Edward Mutesa II (Kabaka Mutesa II of Buganda) served as the first ceremonial President of Uganda, while Dr. Milton Obote served as the first Prime Minister.',
      'Together they oversaw the lowering of the British Union Jack and the raising of the black, yellow, and red Ugandan flag with the Crested Crane at Kololo Ceremonial Grounds.',
      'Their leadership marked the birth of the sovereign Republic of Uganda.'
    ],
    keyHighlights: [
      'October 9, 1962 Independence Day ceremony at Kololo',
      'Union between traditional Buganda leadership and parliamentary statecraft',
      'Creation of Uganda\'s national symbols: Crested Crane, Kob, and Anthem'
    ],
    famousFor: 'Leading Uganda to full national sovereignty in 1962.',
    historicalSignificance: 'Founding statesmen of modern Uganda.'
  },

  // --- TOP TOURIST ATTRACTIONS ---
  {
    id: 'att_tz_1',
    title: 'Serengeti National Park & Great Migration',
    country: 'Tanzania',
    countryFlag: '🇹🇿',
    category: 'attraction',
    periodOrEra: 'Natural Wonder / Established 1951',
    location: 'Mara & Simiyu Regions, Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    summary: 'The world\'s most famous wildlife sanctuary, renowned for the Annual Great Wildebeest Migration across endless golden savannas.',
    description: [
      'Stretching over 14,750 square kilometers, the Serengeti (derived from the Maasai word "Siringet" meaning "Endless Plains") hosts over 1.5 million wildebeest, 250,000 zebras, and 500,000 gazelles.',
      'Visitors witness dramatic Mara River crocodile crossings, pride hunts by over 3,000 lions, cheetah sprints, and balloon safaris over the dawn horizon.',
      'It was declared a UNESCO World Heritage site in 1981 and remains the ultimate African safari destination for AFCON 2027 fans.'
    ],
    keyHighlights: [
      'Annual Great Wildebeest & Zebra Migration',
      'Highest concentration of big cats in Africa',
      'Hot air balloon safaris at sunrise',
      'UNESCO World Heritage Sanctuary'
    ],
    famousFor: 'The Great Migration and vast acacia-dotted African savanna wildlife.',
    historicalSignificance: 'Global flagship for wildlife preservation and eco-tourism.'
  },
  {
    id: 'att_tz_2',
    title: 'Mount Kilimanjaro – Roof of Africa',
    country: 'Tanzania',
    countryFlag: '🇹🇿',
    category: 'attraction',
    periodOrEra: '5,895 Meters High (Highest Peak in Africa)',
    location: 'Moshi, Kilimanjaro Region, Tanzania',
    image: 'https://images.unsplash.com/photo-1589553460732-58ef7a71fbb5?auto=format&fit=crop&w=800&q=80',
    summary: 'The tallest free-standing mountain on Earth and Africa\'s highest peak, crowned with majestic equatorial glaciers.',
    description: [
      'Mount Kilimanjaro is a dormant stratovolcano featuring three volcanic cones: Kibo, Mawenzi, and Shira. Its highest point, Uhuru Peak, stands at 5,895 meters (19,341 ft) above sea level.',
      'Climbers ascend through five distinct climate zones in a single trek: tropical rainforest, heathland, alpine desert, and arctic glacial summit.',
      'No specialized mountaineering gear or ropes are required, making it achievable for adventurous trekkers from all around the world.'
    ],
    keyHighlights: [
      'Uhuru Peak (5,895m) – Highest point in Africa',
      'World\'s tallest free-standing mountain',
      '5 ecological zones from lush rainforest to ice peak',
      'UNESCO World Heritage Park'
    ],
    famousFor: 'Snow-capped equatorial summit and bucket-list trekking expeditions.',
    historicalSignificance: 'Symbol of East African majesty and natural heritage.'
  },
  {
    id: 'att_ke_1',
    title: 'Masai Mara National Reserve',
    country: 'Kenya',
    countryFlag: '🇰🇪',
    category: 'attraction',
    periodOrEra: 'Natural Wonder / Established 1961',
    location: 'Narok County, Kenya',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
    summary: 'Kenya\'s premier game reserve, celebrated for the Big Five, vibrant Maasai warrior culture, and dramatic river crossings.',
    description: [
      'The Masai Mara forms a contiguous ecosystem with the Serengeti, providing front-row seats to the Great Migration between July and October.',
      'Home to the famous "Big Five" (Lion, Leopard, Elephant, Buffalo, and Rhino), the reserve is managed in close partnership with indigenous Maasai communities.',
      'Visitors experience authentic Maasai cultural bomas, traditional warrior dances, and luxury safari glamping along the Mara River.'
    ],
    keyHighlights: [
      'Front-row seats to the Great Mara Migration',
      'Big Five game drives & night safaris',
      'Maasai cultural village tours and bomas',
      'Hot air balloon safaris over the Mara plains'
    ],
    famousFor: 'Big Five wildlife density and cultural heritage of the Maasai people.',
    historicalSignificance: 'Worldwide icon of African safari heritage.'
  },
  {
    id: 'att_ke_2',
    title: 'Diani Beach & Wasini Marine Park',
    country: 'Kenya',
    countryFlag: '🇰🇪',
    category: 'attraction',
    periodOrEra: 'Indian Ocean Coastal Resort',
    location: 'Kwale County, South Coast, Kenya',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    summary: 'A tropical paradise of powder-white coral sands, crystal turquoise waters, coral reef snorkeling, and dolphin spotting.',
    description: [
      'Consistently voted Africa\'s leading beach destination, Diani Beach offers 17 kilometers of pristine white sand fringed by swaying coconut palms.',
      'Nearby Wasini Island and Kisite-Mpunguti Marine National Park offer world-class scuba diving, snorkeling with sea turtles, and wild dolphin cruises on traditional dhow boats.',
      'Colobus monkey sanctuaries and sacred Kaya forests lie just inland from the beach resorts.'
    ],
    keyHighlights: [
      'Voted Africa\'s Leading Beach Destination 6x',
      'Dolphin spotting & dhow cruises at Kisite Marine Park',
      'Kitesurfing, skydiving & deep-sea fishing',
      'Angora Colobus monkey conservation sanctuary'
    ],
    famousFor: 'Powder-white sand beaches and turquoise Indian Ocean dhow safaris.',
    historicalSignificance: 'Premier Swahili coastal resort destination.'
  },
  {
    id: 'att_ug_1',
    title: 'Bwindi Impenetrable Forest Gorilla Sanctuary',
    country: 'Uganda',
    countryFlag: '🇺🇬',
    category: 'attraction',
    periodOrEra: 'UNESCO World Heritage / Primeval Rainforest',
    location: 'Kanungu & Kisoro Districts, Uganda',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    summary: 'A ancient primeval rainforest holding over half of the world\'s remaining endangered Mountain Gorilla population.',
    description: [
      'Bwindi Impenetrable National Park is a 25,000-year-old jungle sanctuary located along the edge of the Albertine Rift Valley.',
      'Trekking through misty bamboo slopes allows visitors to stand just meters away from habituated Silverback Gorilla families in their wild natural habitat.',
      'The park also protects 350 bird species, 200 butterfly species, and the indigenous Batwa forest community heritage.'
    ],
    keyHighlights: [
      'Home to ~500 endangered Mountain Gorillas',
      'Exclusive habituated gorilla family trekking',
      'UNESCO World Heritage rainforest since 1994',
      'Batwa cultural trail and indigenous forest lore'
    ],
    famousFor: 'Life-changing Mountain Gorilla trekking in ancient rainforests.',
    historicalSignificance: 'One of Earth\'s most biologically diverse ecosystems.'
  },
  {
    id: 'att_ug_2',
    title: 'Murchison Falls & River Nile Safari',
    country: 'Uganda',
    countryFlag: '🇺🇬',
    category: 'attraction',
    periodOrEra: 'Natural Waterfall Wonder',
    location: 'Masindi & Nwoya Districts, Uganda',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    summary: 'Where the entire Victoria Nile squeezes violently through a narrow 7-meter gorge before plummeting 43 meters into a misty abyss.',
    description: [
      'Murchison Falls National Park is Uganda\'s largest national park, traversed by the historic River Nile.',
      'Boat cruises sail upstream to the base of the roaring falls past basking Nile crocodiles, pods of hippos, and elephants cooling along the banks.',
      'Game drives across the Northern Savanna reveal Rothschild giraffes, lions, leopards, and shoebill storks.'
    ],
    keyHighlights: [
      'Most powerful natural surge of water on Earth',
      'Nile River boat safaris to the base of the falls',
      'Ziwa Rhino Sanctuary tracking nearby',
      'Largest wildlife population in Uganda'
    ],
    famousFor: 'The thunderous 43-meter drop of the River Nile through a 7-meter gorge.',
    historicalSignificance: 'Historic natural spectacle documented by explorers Samuel & Florence Baker in 1864.'
  }
];
