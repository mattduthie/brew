var hops = [
["Admiral","UK","13.5 - 16","Bittering"],["Ahtanum","US","5.7 - 6.3","Aroma"],["Amarillo Gold","US","8 - 11","Aroma"],["Apollo","US","15 - 21","Bittering"],["Aquila","US","6.7 - 8.9","Aroma"],["Banner","US","8.4 - 13","Bittering"],["Bramling Cross","UK","5 - 7","Aroma"],["Brewers Gold","UK","8 - 10","Bittering"],["Bullion","UK","6.5 - 9","Bittering"],["Cascade","US","4.5 - 6","Dual"],["Centennial","US","9.5 - 11.5","Bittering"],["Challenger","UK","6.5 - 8.5","Aroma"],["Chinook","US","12 - 14","Bittering"],["Citra","US","11 - 15","Dual"],["Cluster","US","5.5 - 8.5","Bittering"],["Columbia","UK","5 - 6","Bittering"],["Columbus (Tomahawk)","US","14 - 18","Bittering"],["Comet","US","8 - 10.5","Bittering"],["Crystal","US","3.5 - 5.5","Aroma"],["Dr Rudi","N Zealand","10 - 12","Bittering"],["Eroica","US","9 - 12","Bittering"],["Feux-Coeur Francais","Australia","12 - 16","Bittering"],["First Gold","UK","6.5 - 8.5","Dual"],["Fuggles","UK","4 - 5.5","Aroma"],["Galaxy","Australia","11 - 16","Dual"],["Galena","US","13 - 16","Bittering"],["Glacier","US",5.5,"Aroma"],["Goldings / BC","Canada","4 - 6","Aroma"],["Goldings / EK","UK","4.5 - 6.5","Aroma"],["Green Bullet","N Zealand","11 - 14","Bittering"],["Greenburg","US",5.2,"Dual"],["Hallertauer","Germany","3.5 - 5.5","Aroma"],["Hallertauer / Hersbrucker","Germany","2 - 5","Aroma"],["Hallertauer / Mittelfrueh","Germany","3.5 - 5.5","Aroma"],["Hallertauer / N Zealand","N Zealand","7 - 9","Dual"],["Herald","UK","11 - 13","Bittering"],["Herkules","Germany","12 - 17","Dual"],["Hersbrucker","Germany","2 - 5","Aroma"],["Horizon","US","11 - 13","Bittering"],["Liberty","US","3 - 5","Aroma"],["Lublin","Poland","3 - 5","Bittering"],["Magnum","Germany","12 - 15.5","Bittering"],["Merkur","Germany","12 - 15","Bittering"],["Millennium","US","14.5 - 16.5","Bittering"],["Mosaic","US","11.5 - 13.5","Aroma"],["Motueka","N Zealand","6.5 - 7.5","Aroma"],["Mount Hood","US","4 - 6.5","Aroma"],["Mount Rainier","US","5 - 7","Dual"],["Nelson Sauvin","N Zealand","12 - 14","Dual"],["Newport","US","13.5 - 17","Bittering"],["Northdown","UK","7.5 - 9.5","Dual"],["Northern Brewer","Germany","8 - 10","Dual"],["Nugget","US","13.5 - 16","Bittering"],["Opal","Germany","13 - 14","Dual"],["Orion","Germany","8 - 9","Dual"],["Pacific Gem","N Zealand","13 - 16","Bittering"],["Pacifica","N Zealand","5 - 6","Aroma"],["Pacific Jade","N Zealand","12 - 14","Dual"],["Palisade","US","5.5 - 9.5","Aroma"],["Perle","Germany","6 - 9","Bittering"],["Phoenix","UK","9 - 13","Bittering"],["Pilgrim","UK","9 - 13","Bittering"],["Pilot","England","9 - 12","Bittering"],["Pioneer","UK","8 - 10","Dual"],["Polnischer Lublin","Poland","3 - 5","Aroma"],["Pride of Ringwood","Australia","7 - 10","Bittering"],["Progress","UK","5 - 7","Aroma"],["Riwaka","N Zealand","4.5 - 6.5","Aroma"],["Saaz","Czech Rep","3 - 4.5","Aroma"],["Santiam","US","5 - 7","Aroma"],["Saphir","Germany","2 - 4.5","Aroma"],["Satus","US","12.5 - 14","Bittering"],["Simcoe","US","12 - 14","Dual"],["Smaragd","Germany","4 - 6","Aroma"],["Sorachi Ace","Japan","10 - 16","Dual"],["Southern Cross","N Zealand","11 - 14","Dual"],["Spalt","Germany","4 - 5","Aroma"],["Sterling","US","6 - 9","Dual"],["Sticklebract","N Zealand","13 - 14.2","Dual"],["Strisselspalt","France","3 - 5","Aroma"],["Styrian Aurora","Slovenia","7 - 9.5","Dual"],["Styrian Bobek","Slovenia","3.5 - 7","Aroma"],["Styrian Celeia","Slovenia","0 - 0.1","Aroma"],["Styrian Goldings","Slovenia","4.5 - 6","Aroma"],["Summit","US","17 - 19","Bittering"],["Sun","US","12 - 16","Bittering"],["Tardif de Bourgogne","France","3.1 - 5.5","Aroma"],["Target","UK","9.5 - 12.5","Bittering"],["Taurus","Germany","12 - 17","Bittering"],["Tettnang","Germany","3 - 6","Aroma"],["Tradition","Germany","4 - 7","Bittering"],["Tomyski","Poland","2.5 - 4","Aroma"],["Ultra","US","2 - 4.1","Aroma"],["Vanguard","US","4 - 5.7","Aroma"],["Waimea","N Zealand","16 - 19","Dual"],["Warrior","US","15 - 17","Dual"],["Whitbread Golding Var","UK","5 - 7.5","Aroma"],["Willamette","US","4 - 6","Aroma"],["Zeus","US","13 - 17","Bittering"]
];

var yeast = [
    ["WLP001 California Ale","White Labs","73 - 80","Med","68 - 73"],["WLP002 English Ale","White Labs","63 - 70","Very High","65 - 68"],["WLP003 German Ale II","White Labs","73 - 80","Med","65 - 70"],["WLP004 Irish Ale","White Labs","69 - 74","Med - High","65 - 68"],["WLP005 British Ale","White Labs","67 - 74","High","65 - 70"],["WLP006 Bedford British","White Labs","72 - 80","High","65 - 70"],["WLP007 Dry English Ale","White Labs","70 - 80","Med - High","65 - 70"],["WLP008 East Coast Ale","White Labs","70 - 75","Med - Low","68 - 73"],["WLP009 Australian Ale","White Labs","70 - 75","High","65 - 70"],["WLP011 European Ale","White Labs","65 - 70","Med","65 - 70"],["WLP013 London Ale","White Labs","67 - 75","Med","66 - 71"],["WLP017 Whitbread II Ale","White Labs","67 - 73","High","66 - 70"],["WLP022 Essex Ale","White Labs","71 - 76","Med - High","66 - 70"],["WLP023 Burton Ale","White Labs","69 - 75","Med","68 - 73"],["WLP025 Southwold Ale","White Labs","68 - 75","Med","66 - 69"],["WLP026 Premium Bitter Ale","White Labs","70 - 75","Med","67 - 70"],["WLP028 Edinburgh Scottish Ale","White Labs","70 - 75","Med","65 - 70"],["WLP029 German Ale/ Kolsch","White Labs","72 - 78","Med","65 - 69"],["WLP033 Klassic Ale","White Labs","66 - 74","Med","66 - 70"],["WLP036 Dusseldorf Alt","White Labs","65 - 72","Med","65 - 69"],["WLP037 Yorkshire Square Ale","White Labs","68 - 72","High","65 - 70"],["WLP038 Manchester Ale","White Labs","70 - 74","Med - High","65 - 70"],["WLP039 East Midlands Ale","White Labs","73 - 82","Med - High","66 - 70"],["WLP041 Pacific Ale","White Labs","65 - 70","High","65 - 68"],["WLP045 Scotch Whisky","White Labs","75 - 80","Med","72 - 77"],["WLP050 Tennessee Whiskey","White Labs","75 - 80","Med","75 - 79"],["WLP051 California Ale V","White Labs","70 - 75","Med - High","66 - 70"],["WLP060 American Ale Blend","White Labs","72 - 80","Med","68 - 72"],["WLP065 American Whiskey","White Labs","76 - 82","Med","75 - 82"],["WLP070 Bourbon","White Labs","75 - 80","Med","72 - 77"],["WLP072 French Ale","White Labs","68 - 75","Med - High","63 - 73"],["WLP076 Old Sonoma Ale","White Labs","70 - 74","Med","66 - 70"],["WLP078 Neutral Grain","White Labs","77 - 84","Med","76 - 85"],["WLP080 Cream Ale Blend","White Labs","75 - 80","Med","65 - 70"],["WLP085 English Ale Blend","White Labs","69 - 76","Med - High","68 - 72"],["WLP090 San Diego Super ","White Labs","76 - 83","Med - High","65 - 68"],["WLP095 Burlington Ale","White Labs","73 - 78","Med","67 - 70"],["WLP099 Super High Gravity Ale","White Labs","80 - 100","Med","65 - 69"],["WLP300 Hefeweizen Ale ","White Labs","72 - 76","Low","68 - 72"],["WLP320 American Hefeweizen Ale","White Labs","70 - 75","Low","65 - 69"],["WLP351 Bavarian Weizen","White Labs","73 - 77","Low","66 - 70"],["WLP380 Hefeweizen IV Ale","White Labs","73 - 80","Low","66 - 70"],["WLP400 Belgian Wit Ale","White Labs","74 - 78","Med - Low","67 - 74"],["WLP410 Belgian Wit II Ale","White Labs","70 - 75","Med - Low","67 - 74"],["WLP500 Monastery Ale","White Labs","75 - 80","Med - Low","65 - 72"],["WLP510 Bastogne Belgian Ale","White Labs","74 - 80","Med","66 - 72"],["WLP515 Antwerp Ale","White Labs","73 - 80","Med","67 - 70"],["WLP530 Abbey Ale","White Labs","75 - 80","Med - High","66 - 72"],["WLP540 Abbey IV Ale","White Labs","74 - 82","Med","66 - 72"],["WLP545 Belgian Strong Ale","White Labs","78 - 85","Med","66 - 72"],["WLP550 Belgian Ale","White Labs","78 - 85","Med","68 - 78"],["WLP565 Belgian Saison I ","White Labs","65 - 75","Med","68 - 75"],["WLP566 Belgian Saison II ","White Labs","78 - 85","Med","68 - 78"],["WLP568 Belgian Style Saison Ale Blend","White Labs","70 - 80","Med","70 - 80"],["WLP570 Belgian Golden Ale","White Labs","73 - 78","Low","68 - 75"],["WLP575 Belgian Style Ale Blend ","White Labs","74 - 80","Med","68 - 75"],["WLP585 Belgian Saison III","White Labs","70 - 74","Med - Low","68 - 75"],["WLP590 French Saison Ale","White Labs","73 - 80","Med","69 - 75"],["WLP600 Kombucha SCOBY ","White Labs","0 - 0","N/A","0 - 0"],["WLP611 New Nordic Ale","White Labs","65 - 75","Med - Low","0 - 0"],["WLP630 Berliner Weisse Blend","White Labs","73 - 80","Med","68 - 72"],["WLP644 Saccharomyces 'bruxellensis' Trois","White Labs","85 - 85","Low","70 - 85"],["WLP645 Brettanomyces claussenii","White Labs","70 - 85","Low","85 - 85"],["WLP648 Brettanomyces bruxellensis Trois Vrai","White Labs","85 - 85","Low","70 - 85"],["WLP650 Brettanomyces bruxellensis","White Labs","85 - 85","Low","85 - 85"],["WLP653 Brettanomyces lambicus","White Labs","70 - 85","Low","85 - 85"],["WLP655 Belgian Sour Mix 1","White Labs","70 - 80","Med - Low","80 - 85"],["WLP661 Pediococcus damnosus","White Labs","65 - 65","Low","0 - 0"],["WLP665 Flemish Ale Blend","White Labs","80 - 85","Med - Low","68 - 80"],["WLP670 American Farmhouse Blend","White Labs","75 - 82","Med","68 - 72"],["WLP672 Lactobacillus brevis","White Labs","80 - 80","Low","0 - 0"],["WLP675 Malolactic Cultures","White Labs","0 - 0","N/A","0 - 0"],["WLP677 Lactobacillus delbrueckii Bacteria","White Labs","75 - 82","Low","70 - 75"],["WLP700 Flor Sherry","White Labs","80 - 100","N/A","70 - 100"],["WLP705 Sake","White Labs","80 - 100","N/A","70 - 100"],["WLP707 California Pinot Noir","White Labs","80 - 100","N/A","70 - 100"],["WLP709 Sake #9","White Labs","72 - 78","Med - Low","62 - 68"],["WLP715 Champagne","White Labs","75 - 100","Low","70 - 75"],["WLP718 Avize Wine","White Labs","80 - 100","Low","60 - 90"],["WLP720 Sweet Mead/Wine","White Labs","0 - 0","Low","70 - 75"],["WLP727 Steinberg-Geisenheim Wine","White Labs","80 - 100","Low","50 - 90"],["WLP730 Chardonnay White Wine","White Labs","80 - 100","Low","50 - 90"],["WLP735 French White Wine","White Labs","80 - 100","Low","60 - 90"],["WLP740 Merlot Red Wine","White Labs","80 - 100","Low","60 - 90"],["WLP749 Assmanshausen Wine","White Labs","80 - 100","Low","50 - 90"],["WLP750 French Red Wine","White Labs","80 - 100","Low","60 - 90"],["WLP760 Cabernet Red Wine","White Labs","80 - 100","Low","60 - 90"],["WLP770 Suremain Burgundy Wine","White Labs","80 - 100","Low","60 - 90"],["WLP775 English Cider","White Labs","80 - 100","Med","68 - 75"],["WLP800 Pilsner Lager","White Labs","72 - 77","Med - High","50 - 55"],["WLP802 Czech Budejovice Lager ","White Labs","75 - 80","Med","50 - 55"],["WLP810 San Francisco Lager ","White Labs","65 - 70","High","58 - 65"],["WLP815 Belgian Lager","White Labs","72 - 78","Med","50 - 55"],["WLP820 Oktoberfest/Märzen Lager","White Labs","65 - 73","Med","52 - 58"],["WLP830 German Lager","White Labs","74 - 79","Med","50 - 55"],["WLP833 German Bock Lager","White Labs","70 - 76","Med","48 - 55"],["WLP835 German Lager X","White Labs","70 - 76","Med","50 - 54"],["WLP838 Southern German Lager","White Labs","68 - 76","Med - High","50 - 55"],["WLP840 American Lager","White Labs","75 - 80","Med","50 - 55"],["WLP850 Copenhagen Lager","White Labs","72 - 78","Med","50 - 58"],["WLP860 Munich Helles","White Labs","68 - 72","Med","48 - 52"],["WLP862 Cry Havoc","White Labs","66 - 70","Low","55 - 58"],["WLP885 Zurich Lager","White Labs","70 - 80","Med","50 - 55"],["WLP920 Old Bavarian Lager","White Labs","66 - 73","Med","50 - 55"],["WLP925 HP Lager","White Labs","73 - 82","Med","62 - 68"],["WLP940 Mexican Lager","White Labs","70 - 78","Med","50 - 55"],["WLD71B  Lallemand 71B Dried","White Labs","0 - 0","N/A","0 - 0"],["WLDEC1118 Lallemand EC1118 Dried","White Labs","0 - 0","N/A","0 - 0"],["WLDEDV46 Danstil EDV46 Dried","White Labs","0 - 0","N/A","0 - 0"],["WLDK1 Lallemand K1 Dried","White Labs","0 - 0","N/A","0 - 0"],["WLDRUMAG-1KG Rum Turbo AG-1kg","White Labs","0 - 0","N/A","0 - 0"],["WLDSS20KG Superstart Dried Distill","White Labs","0 - 0","N/A","0 - 0"],["WLDSS500GR Superstart Dried Distill","White Labs","0 - 0","N/A","0 - 0"],["WLDTY48-1KG TY48-1kg","White Labs","0 - 0","N/A","0 - 0"],["WLDVODKAAG-1KG Vodka Turbo AG-1kg","White Labs","0 - 0","N/A","0 - 0"],["WLDWHISKEYAG-1KG Whiskey Turbo AG-1kg","White Labs","0 - 0","N/A","0 - 0"],["WLEDV493 Danstil EDV493 Dried","White Labs","0 - 0","N/A","0 - 0"],["1007 German Ale","Wyeast","73 - 77","Varies","55 - 68"],["1010 American Wheat","Wyeast","74 - 78","Low","58 - 74"],["1026-PC British Cask Ale","Wyeast","74 - 77","Med - High","63 - 72"],["1028 London Ale","Wyeast","73 - 77","Low - Med","60 - 72"],["1056 American Ale","Wyeast","73 - 77","Low - Med","60 - 72"],["1084 Irish Ale","Wyeast","71 - 75","Med","62 - 72"],["1087-PC Wyeast Bohemian Ale Blend","Wyeast","71 - 75","Med - High","64 - 72"],["1098 British Ale","Wyeast","73 - 75","Med","64 - 72"],["1099 Whitbread Ale","Wyeast","68 - 72","Med - High","64 - 75"],["1187 Ringwood Ale","Wyeast","68 - 72","High","64 - 74"],["1203-PC Burton IPA Blend","Wyeast","71 - 74","Med - High","64 - 74"],["1214 Belgian Abbey Style Ale","Wyeast","74 - 78","Low - Med","68 - 78"],["1217-PC West Coast IPA","Wyeast","73 - 80","Med - High","62 - 74"],["1272 American Ale II","Wyeast","72 - 76","Med","60 - 72"],["1275 Thames Valley Ale","Wyeast","72 - 76","Low - Med","62 - 72"],["1318 London Ale III","Wyeast","71 - 75","High","64 - 74"],["1332 Northwest Ale","Wyeast","67 - 71","High","65 - 75"],["1335 British Ale II","Wyeast","73 - 76","High","63 - 75"],["1388 Belgian Strong Ale","Wyeast","74 - 78","Low","64 - 80"],["1450 Denny's Favorite 50 Ale","Wyeast","74 - 76","Low","60 - 70"],["1469 West Yorkshire Ale","Wyeast","67 - 71","High","64 - 72"],["1581-PC Belgian Stout","Wyeast","70 - 85","Med","65 - 75"],["1728 Scottish Ale","Wyeast","69 - 73","High","55 - 75"],["1762 Belgian Abbey Style Ale II","Wyeast","73 - 77","Med","65 - 75"],["1768-PC English Special Bitter","Wyeast","68 - 72","High","64 - 72"],["1882-PC Thames Valley Ale II","Wyeast","72 - 78","High","60 - 70"],["1968 London ESB Ale","Wyeast","67 - 71","High","64 - 72"],["2000 Budvar Lager","Wyeast","71 - 75","Med - High","48 - 56"],["2001 Pilsner Urquell H-Strain","Wyeast","72 - 76","Med - High","48 - 56"],["2002-PC Gambrinus Lager","Wyeast","71 - 75","Med - High","46 - 56"],["2007 Pilsen Lager","Wyeast","71 - 75","Med","48 - 56"],["2035 American Lager","Wyeast","73 - 77","Med","48 - 58"],["2042 Danish Lager","Wyeast","73 - 77","Low","46 - 56"],["2105-PC Rocky Mountain Lager","Wyeast","70 - 74","Med - High","48 - 56"],["2112 California Lager","Wyeast","67 - 71","High","58 - 68"],["2124 Bohemian Lager","Wyeast","73 - 77","Low - High","45 - 68"],["2206 Bavarian Lager","Wyeast","73 - 77","Med - High","46 - 58"],["2247-PC European Lager","Wyeast","73 - 77","Low","46 - 56"],["2272-PC North American Lager","Wyeast","70 - 76","High","52 - 58"],["2278 Czech Pils","Wyeast","70 - 74","Med - High","50 - 58"],["2308 Munich Lager","Wyeast","72 - 74","Med","52 - 62"],["2352-PC Munich Lager II","Wyeast","72 - 74","Med","52 - 62"],["2487-PC Hella Bock Lager","Wyeast","70 - 74","Med","48 - 56"],["2565 Kolsch","Wyeast","73 - 77","Low","56 - 70"],["2575-PC Kolsch Yeast II","Wyeast","73 - 77","Low","55 - 70"],["2633 Octoberfest Lager Blend","Wyeast","73 - 77","Low - Med","45 - 58"],["2782-PC Staro Prague Lager","Wyeast","70 - 74","Med","50 - 58"],["3031-PC Saison-Brett Blend","Wyeast","80 - 90","Low","65 - 80"],["3056 Bavarian Wheat Blend","Wyeast","73 - 77","Med","64 - 74"],["3068 Weihenstephan Wheat","Wyeast","73 - 77","Low","64 - 75"],["3191-PC Berliner Weisse Blend","Wyeast","73 - 77","Low","68 - 72"],["3209-PC Oud Bruin Ale Blend","Wyeast","70 - 80","N/A","80 - 85"],["3278 Belgian Lambic Blend","Wyeast","70 - 80","Med","63 - 75"],["3333 German Wheat","Wyeast","70 - 76","High","63 - 75"],["3463 Forbidden Fruit","Wyeast","72 - 76","Low","63 - 76"],["3522 Belgian Ardennes","Wyeast","72 - 76","High","65 - 76"],["3538-PC Leuven Pale Ale","Wyeast","70 - 76","Low","64 - 75"],["3638 Bavarian Wheat","Wyeast","70 - 76","Low","64 - 75"],["3655-PC Belgian Schelde Ale","Wyeast","73 - 77","Med","62 - 74"],["3711 French Saison","Wyeast","77 - 83","Low","65 - 77"],["3724 Belgian Saison","Wyeast","76 - 80","Low","70 - 95"],["3725-PC Biere de Garde","Wyeast","74 - 79","Low","70 - 84"],["3726-PC Farmhouse Ale","Wyeast","74 - 79","Med","70 - 84"],["3739-PC Flanders Golden Ale","Wyeast","74 - 78","Low - Med","64 - 80"],["3763 Roeselare Ale Blend","Wyeast","80 - 80","Med","65 - 85"],["3787 Trappist Style High Gravity","Wyeast","74 - 78","Med","64 - 78"],["3789-PC Trappist Style Blend","Wyeast","75 - 80","Med","68 - 85"],["3822-PC Belgian Dark Ale","Wyeast","74 - 79","Med","65 - 80"],["3864-PC Canadian/Belgian Ale","Wyeast","75 - 79","Med","65 - 80"],["3942 Belgian Wheat","Wyeast","72 - 76","Med","64 - 74"],["3944 Belgian Witbier","Wyeast","72 - 76","Med","62 - 75"]
];
    
var grains = [
["Acid Malt","Germany","Grain","3 ","Yes","1.027","10%"],["Amber Dry Extract","US","Extract","13 ","No","1.044","100%"],["Amber Liquid Extract","US","Extract","13 ","No","1.036","100%"],["Amber Malt","UK","Grain","22 ","Yes","1.035","20%"],["Aromatic Malt","Belgium","Grain","26 ","Yes","1.036","10%"],["Barley, Flaked","US","Grain","2 ","Yes","1.032","20%"],["Barley, Raw","US","Grain","2 ","Yes","1.028","15%"],["Barley, Torrefied","US","Grain","2 ","Yes","1.036","40%"],["Biscuit Malt","Belgium","Grain","23 ","No","1.036","10%"],["Black (Patent) Malt","US","Grain","500 ","No","1.025","10%"],["Black Barley (Stout)","US","Grain","500 ","No","1.025","10%"],["Brown Malt","UK","Grain","65 ","Yes","1.032","10%"],["Brown Sugar, Dark","US","Sugar","50 ","No","1.046","10%"],["Brown Sugar, Light","US","Sugar","8 ","No","1.046","10%"],["BruMalt","Germany","Grain","23 ","Yes","1.033","10%"],["Candi Sugar, Amber","Belgium","Sugar","75 ","No","1.036","20%"],["Candi Sugar, Clear","Belgium","Sugar","1 ","No","1.036","20%"],["Candi Sugar, Dark","Belgium","Sugar","275 ","No","1.036","20%"],["Cane (Beet) Sugar","US","Sugar","0 ","No","1.046","7%"],["Cara-Pils/Dextrine","US","Grain","2 ","No","1.033","20%"],["Caraamber","US","Grain","30 ","No","1.035","20%"],["Carafoam","US","Grain","2 ","No","1.033","20%"],["Caramel/Crystal Malt - 10L","US","Grain","10 ","No","1.035","20%"],["Caramel/Crystal Malt - 20L","US","Grain","20 ","No","1.035","20%"],["Caramel/Crystal Malt - 30L","US","Grain","30 ","No","1.035","20%"],["Caramel/Crystal Malt - 40L","US","Grain","40 ","No","1.034","20%"],["Caramel/Crystal Malt - 60L","US","Grain","60 ","No","1.034","20%"],["Caramel/Crystal Malt - 80L","US","Grain","80 ","No","1.034","20%"],["Caramel/Crystal Malt -120L","US","Grain","120 ","No","1.033","20%"],["Caramunich Malt","Belgium","Grain","56 ","No","1.033","10%"],["Carared","US","Grain","20 ","No","1.035","20%"],["Caravienne Malt","Belgium","Grain","22 ","No","1.034","10%"],["Chocolate Malt","US","Grain","350 ","No","1.028","10%"],["Chocolate Malt","UK","Grain","450 ","No","1.034","10%"],["Corn Sugar (Dextrose)","US","Sugar","0 ","No","1.046","5%"],["Corn Syrup","US","Sugar","1 ","No","1.036","10%"],["Corn, Flaked","US","Grain","1 ","Yes","1.037","40%"],["Dark Dry Extract","US","Extract","18 ","No","1.044","100%"],["Dark Liquid Extract","US","Extract","18 ","No","1.036","100%"],["Dememera Sugar","UK","Sugar","2 ","No","1.046","10%"],["Extra Light Dry Extract","US","Extract","3 ","No","1.044","100%"],["Honey","US","Extract","1 ","No","1.035","100%"],["Invert Sugar","UK","Sugar","0 ","No","1.046","10%"],["Light Dry Extract","US","Extract","8 ","No","1.044","100%"],["Maple Syrup","US","Sugar","35 ","No","1.030","10%"],["Melanoiden Malt","Germany","Grain","20 ","Yes","1.037","15%"],["Mild Malt","UK","Grain","4 ","Yes","1.037","100%"],["Milk Sugar (Lactose)","US","Sugar","0 ","No","1.035","10%"],["Molasses","US","Sugar","80 ","No","1.036","5%"],["Munich Malt","Germany","Grain","9 ","Yes","1.037","80%"],["Munich Malt - 10L","US","Grain","10 ","Yes","1.035","80%"],["Munich Malt - 20L","US","Grain","20 ","Yes","1.035","80%"],["Oats, Flaked","US","Grain","1 ","Yes","1.037","30%"],["Oats, Malted","US","Grain","1 ","Yes","1.037","10%"],["Pale Liquid Extract","US","Extract","8 ","No","1.036","100%"],["Pale Malt (2 Row) Bel","Belgium","Grain","3 ","Yes","1.037","100%"],["Pale Malt (2 Row) UK","UK","Grain","3 ","Yes","1.036","100%"],["Pale Malt (2 Row) US","US","Grain","2 ","Yes","1.036","100%"],["Pale Malt (6 Row) US","US","Grain","2 ","Yes","1.035","100%"],["Peat Smoked Malt","UK","Grain","3 ","Yes","1.034","20%"],["Pilsner (2 Row) Bel","Belgium","Grain","2 ","Yes","1.036","100%"],["Pilsner (2 Row) Ger","Germany","Grain","2 ","Yes","1.037","100%"],["Pilsner (2 Row) UK","UK","Grain","1 ","Yes","1.036","100%"],["Pilsner Liquid Extract","US","Extract","4 ","No","1.036","100%"],["Rice Extract Syrup","US","Extract","7 ","No","1.032","15%"],["Rice, Flaked","US","Grain","1 ","Yes","1.032","25%"],["Roasted Barley","US","Grain","300 ","No","1.025","10%"],["Rye Malt","US","Grain","5 ","Yes","1.029","15%"],["Rye, Flaked","US","Grain","2 ","Yes","1.036","10%"],["Smoked Malt","Germany","Grain","9 ","Yes","1.037","100%"],["Special B Malt","Belgium","Grain","180 ","Yes","1.030","10%"],["Special Roast","US","Grain","50 ","Yes","1.033","10%"],["Sugar, Table (Sucrose)","US","Sugar","1 ","No","1.046","10%"],["Toasted Malt","UK","Grain","27 ","Yes","1.033","10%"],["Turbinado","UK","Sugar","10 ","No","1.044","10%"],["Victory Malt","US","Grain","25 ","Yes","1.034","15%"],["Vienna Malt","Germany","Grain","4 ","Yes","1.036","90%"],["Wheat Dry Extract","US","Extract","8 ","No","1.044","100%"],["Wheat Liquid Extract","US","Extract","8 ","No","1.036","100%"],["Wheat Malt, Bel","Belgium","Grain","2 ","Yes","1.037","60%"],["Wheat Malt, Dark","Germany","Grain","9 ","Yes","1.039","20%"],["Wheat Malt, Ger","Germany","Grain","2 ","Yes","1.039","60%"],["Wheat, Flaked","US","Grain","2 ","Yes","1.035","40%"],["Wheat, Roasted","Germany","Grain","425 ","Yes","1.025","10%"],["Wheat, Torrified","US","Grain","2 ","Yes","1.036","40%"],["White Wheat Malt","US","Grain","2 ","Yes","1.040","60%"]
];

var styles = [
["American Amber / Red Ale","American Ale"],["American Barley Wine Ale","American Ale"],["American Brown Ale","American Ale"],["American Imperial Porter","American Ale"],["American Imperial Stout","American Ale"],["American India Black Ale","American Ale"],["American India Pale Ale","American Ale"],["American Pale Ale","American Ale"],["American Sour Ale","American Ale"],["American Stout","American Ale"],["American Strong Pale Ale","American Ale"],["American Wheat Wine Ale","American Ale"],["Dark American-Belgo Ale","American Ale"],["Fresh Hop Ale","American Ale"],["Golden or Blonde Ale","American Ale"],["Imperial or Double India Pale Ale","American Ale"],["Imperial or Double Red Ale","American Ale"],["Pale American-Belgo Ale","American Ale"],["Porter","American Ale"],["Smoke Porter","American Ale"],["Specialty Stouts","American Ale"],["American Amber Lager","American Lager"],["American Amber Lager","American Lager"],["American Dark Lager","American Lager"],["American Ice Lager","American Lager"],["American Lager","American Lager"],["American Light Lager","American Lager"],["American Low-Carb Light Lager","American Lager"],["American Malt Liquor","American Lager"],["American Marzen / Oktoberfest","American Lager"],["American Pilsner","American Lager"],["American Premium Lager","American Lager"],["Belgian Blonde Ale","Belgian & French Ale"],["Belgian Dark Strong Ale","Belgian & French Ale"],["Belgian Dubbel","Belgian & French Ale"],["Belgian Flanders / Oud Bruin","Belgian & French Ale"],["Belgian Fruit Lambic","Belgian & French Ale"],["Belgian Gueuze Lambic","Belgian & French Ale"],["Belgian Lambic","Belgian & French Ale"],["Belgian Pale Ale","Belgian & French Ale"],["Belgian Pale Strong Ale","Belgian & French Ale"],["Belgian Quadrupel","Belgian & French Ale"],["Belgian Table Beer","Belgian & French Ale"],["Belgian Tripel","Belgian & French Ale"],["Belgian White","Belgian & French Ale"],["French & Belgian Saison","Belgian & French Ale"],["French Biere de Garde","Belgian & French Ale"],["Other Belgian Ales","Belgian & French Ale"],["British Barley Wine Ale","British Ale"],["British Imperial Stout","British Ale"],["Brown Porter","British Ale"],["Classic English Pale Ale","British Ale"],["English Brown Ale","British Ale"],["English Dark Mild Ale","British Ale"],["English India Pale Ale","British Ale"],["English Pale Mild Ale","British Ale"],["English Summer Ale","British Ale"],["Extra Special Bitter","British Ale"],["Oatmeal Stout","British Ale"],["Old Ale","British Ale"],["Ordinary Bitter","British Ale"],["Robust Porter","British Ale"],["Scotch Ale","British Ale"],["Scottish Export Ale","British Ale"],["Scottish Heavy Ale","British Ale"],["Scottish Light Ale","British Ale"],["Special Bitter or Best Bitter","British Ale"],["Strong Ale","British Ale"],["Sweet Stout","British Ale"],["Bamberg Weiss Rauchbier","German Ale"],["Berliner Weisse","German Ale"],["German Brown Ale / Altbier","German Ale"],["German Kolsch","German Ale"],["German Leichtes Weizen","German Ale"],["Kellerbier - Ale","German Ale"],["Leipzig Gose","German Ale"],["S German Bernsteinfarbenes Weizen","German Ale"],["S German Dunkel Weizen","German Ale"],["S German Hefeweizen","German Ale"],["S German Kristal Weizen","German Ale"],["S German Weizenbock","German Ale"],["Bamberg Bock Rauchbier","German Lager"],["Bamberg Helles Rauchbier","German Lager"],["Bamberg Marzen","German Lager"],["Bohemian Pilsner","German Lager"],["Dortmunder / European Export","German Lager"],["European Dark","German Lager"],["European Low-Alcohol Lager","German Lager"],["German Doppelbock","German Lager"],["German Eisbock","German Lager"],["German Heller Bock / Maibock","German Lager"],["German Marzen","German Lager"],["German Oktoberfest","German Lager"],["German Pilsner","German Lager"],["German Schwarzbier","German Lager"],["Kellerbier - Lager","German Lager"],["Munchner Helles","German Lager"],["Traditional German Bock","German Lager"],["Vienna Lager","German Lager"],["Classic Irish Dry Stout","Irish Ale"],["Foreign (Export) Stout","Irish Ale"],["Irish Red Ale","Irish Ale"],["Porter","Irish Ale"]
];

var suppliers = [
    ["Black Sands Brewery","http://www.blacksandsbeer.com","CA / San Francisco","https://goo.gl/maps/t8dawFUw3H92","Haight St","tel:1-415-534-5194","415-534-5194"],["San Francisco Brewcraft","http://www.sanfranciscobrewcraft.com","CA / San Francisco","https://goo.gl/maps/3sEJjWsU88z","Clement St","tel:1-415-751-9338","415-751-9338"],["Schoolhouse Beer & Brewing","https://schoolhousebeer.com","GA / Marietta","https://goo.gl/maps/3kRyHVrDVeR2","Whitlock Ave NW","tel:1-770-361-5247","770-361-5247"],["Great Fermentations","http://shop.greatfermentations.com?a=brwjrnl","IN / Avon","https://goo.gl/maps/AV1iXKZQhKq","E US Hwy 36","tel:1-317-268-6776","317-268-6776"],["Great Fermentations","http://shop.greatfermentations.com?a=brwjrnl","IN / Indianapolis","https://goo.gl/maps/9LihP58LHKK2","E 65th St","tel:1-317-257-9463","317-257-9463"],["Brew Bros Hops & Sprockets","http://www.hopsandsprockets.com","KS / Manhattan","https://goo.gl/maps/om966xNtrrz","Laramie St","tel:1-785-537-3737","785-537-3737"],["The Brew Lab","http://www.brewlabkc.com","KS / Overland Park","https://goo.gl/maps/2TCFGcvKUpn","Foster St","tel:1-913-400-2343","913-400-2343"],["Bacchus and Barleycorn","http://www.bacchus-barleycorn.com/","KS / Shawnee","https://goo.gl/maps/BBL9xNkTpnH2","Nieman Rd","tel:1-913-962-2501","913-962-2501"],["Whats Brewin","http://www.whatsbrewin.org","KS / Wichita","https://goo.gl/maps/kJwiRiKEczu","W Douglas Ave","tel:1-316-263-1342","316-263-1342"],["Kettle to Keg","http://www.kettletokeg.com","NH / Suncook","https://goo.gl/maps/aAyPGXKc6vq","Main St","tel:1-603-485-2054","603-485-2054"],["Maryland Homebrew","http://www.mdhb.com","MD / Columbia","https://goo.gl/maps/MFKR6MszaCz","Oak Hall Ln","tel:1-888-BREW-NOW","888-BREW-NOW"],["love2brew","http://www.love2brew.com","NJ / N Brunswick","https://goo.gl/maps/V7M7DhpkWyu","Livingston Ave","tel:1-7320-658-3550","732-658-3550"],["love2brew","http://www.love2brew.com","NJ / Paterson","https://goo.gl/maps/YJYgRLGfAjp","E 33rd St","tel:1-973-925-4005","973-925-4005"],["Bitter & Esters","https://bitterandesters.com","NY / Brooklyn","https://goo.gl/maps/nP5VZ5c8Ahk","Washington Ave","tel:1-917-453-6616","917-453-6616"],["Grape and Granary","http://www.grapeandgranary.com","OH / Akron","https://goo.gl/maps/ZGm5GjMUPR22","Home Ave","tel:1-800-695-9870","800-695-9870"],["The Vine n Hop Shop","http://vinenhop.nrostores.com","OH / Brunswick","https://goo.gl/maps/RarDAUgQJC12","N Carpenter Rd","tel:1-330-623-6940","330-623-6940"],["Cleveland Brew Shop","http://www.clevelandbrewshop.com","OH / Cleveland","https://goo.gl/maps/iaYz2HdtXAs","Lorain Ave","tel:1-216-574-2271","216-574-2271"],["Gentiles Wine Sellers","http://www.gentiles.com","OH / Columbus","https://goo.gl/maps/yDV3e4DXZvR2","King Ave","tel:1-614-486-3406","614-486-3406"],["The Winemakers Shop","http://www.winemakersshop.com","OH / Columbus","https://goo.gl/maps/Mo44JidRFFC2","N High St","tel:1-614-263-1744","614-263-1744"],["Buckeye BrewCraft","http://www.buckeyebrewcraft.com","OH / Westerville","https://goo.gl/maps/aEWAeEktiY82","N State St","tel:1-614-440-8854","614-440-8854"],["Larrys Brewing Supply","http://www.larrysbrewsupply.com","WA / Tukwila","https://goo.gl/maps/jCq4jYw7Wo92","Andover Park E","tel:1-253-872-6846","253-872-6846"],["Wine and Hop Shop","http://wineandhop.com","WI / Madison","https://goo.gl/maps/qaKrRTAKgdL2","Monroe St","tel:1-608-257-0099","608-257-0099"]
];

$(function () {
    $("table.show-hops").dataTable({
        "responsive": true,
        "scrollY": "100vh",
        "scrollCollapse": true,
        "lengthChange": false,
        "pageLength": 10,
        "pagingType": "simple",
        "dom": '<"top"fpi>rt<"clear">', // filter, info, pagination @ top
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search | Hops...",
            zeroRecords: "I can't find what you're looking for.",
            infoFiltered: "",
            infoEmpty: "",
            info: "_START_ - _END_ of _TOTAL_",
            paginate: {
                previous: '‹',
                next: '›',
                last: '»'
            },
        },
        data: hops,
        columns: [
            { title: "Variety" },
            { title: "Region" },
            { title: "Alpha Acid" },
            { title: "Purpose" }
        ]
    });

    $("table.show-yeast").dataTable({
        "responsive": true,
        "scrollY": "100vh",
        "scrollCollapse": true,
        "lengthChange": false,
        "pageLength": 10,
        "pagingType": "simple",
        "dom": '<"top"fpi>rt<"clear">', // filter, info, pagination @ top
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search | Yeast...",
            zeroRecords: "I can't find what you're looking for.",
            infoFiltered: "",
            infoEmpty: "",
            info: "_START_ - _END_ of _TOTAL_",
            paginate: {
                previous: '‹',
                next: '›',
                last: '»'
            },
        },
        data: yeast,
        columns: [
            { title: "Strain" },
            { title: "Lab" },
            { title: "Attenuation (%)" },
            { title: "Flocculation" },
            { title: "Temperature (&deg;F)" }
        ]
    });

    $("table.show-grains").dataTable({
        "responsive": true,
        "scrollY": "100vh",
        "scrollCollapse": true,
        "lengthChange": false,
        "pageLength": 10,
        "pagingType": "simple",
        "dom": '<"top"fpi>rt<"clear">', // filter, info, pagination @ top
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search | Grains & Extracts...",
            zeroRecords: "I can't find what you're looking for.",
            infoFiltered: "",
            infoEmpty: "",
            info: "_START_ - _END_ of _TOTAL_",
            paginate: {
                previous: '‹',
                next: '›',
                last: '»'
            },
        },
        data: grains,
        columns: [
            { title: "Name" },
            { title: "Region" },
            { title: "Type" },
            { title: "Color (SRM)", visible: false },
            { title: "Must Mash" },
            { title: "Specific Gravity" },
            { title: "Batch Max", visible: false }
        ]
    });

    $("table.show-suppliers").dataTable({
        "responsive": true,
        "scrollY": "100vh",
        "scrollCollapse": true,
        "lengthChange": false,
        "pageLength": 10,
        "pagingType": "simple",
        "dom": '<"top"fpi>rt<"clear">', // filter, info, pagination @ top
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search | Suppliers...",
            zeroRecords: "I can't find what you're looking for.",
            infoFiltered: "",
            infoEmpty: "",
            info: "_START_ - _END_ of _TOTAL_",
            paginate: {
                previous: '‹',
                next: '›',
                last: '»'
            },
        },
        data: suppliers,
        columns: [
            { title: "Shop" },
            { title: "Website", visible: false },
            { title: "Area" },
            { title: "Map", visible: false},
            { title: "Street" },
            { title: "Tele", visible: false },
            { title: "Phone" }
        ]
    });


    $("ul li a").click(function(){
        var CLASS = $(this).attr("class");
        var ID = $(this).attr("id");
        $("section").hide();
        $("ul li a").removeClass("active"); // reset all before activating
        $("." + CLASS).addClass("active"); // matching classes
        $("." + ID).show(); // show table with class that matches ID clicked
        $("table").DataTable().columns.adjust().draw(); // redraw table columns
        return false;
    });

    $(".toggle-footer").click(function(){
        $("ul.footer").slideToggle();
        $("section").toggleClass("blur");
    });

    $("footer ul li a").click(function(){
        $("ul.footer").slideToggle();
        $("section").removeClass("blur");
    });

    function windowSize() { // get window dimensions
      windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
      windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    }

    function showEntry() {
        if (windowWidth < 722) {
            $("table").DataTable().page.len(-1).draw(); // show all entries
            $("table").DataTable().order([0,"asc"]).draw(); // sort 1st column 
        } else {
            $("table").DataTable().page.len(10).draw(); // show 10 entries
        }
    }

    windowSize();
    showEntry();

    $(window).resize(function() {
        windowSize();
        showEntry();
    });
});
